import { injectable, inject } from 'tsyringe';
import { getDaysInMonth, getDate, isAfter } from 'date-fns';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAvailability {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    month,
    provider_id,
    year,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInMonthFromProvider(
      {
        month,
        provider_id,
        year,
      },
    );

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDayArray = Array.from(
      {
        length: numberOfDaysInMonth,
      },
      (_, index) => index + 1,
    );

    const availability = eachDayArray.map(day => {
      const compareDate = new Date(year, month - 1, day, 23, 59, 59);

      const appointmentsInDay = appointments.filter(appointment => {
        return getDate(appointment.date) === day;
      });

      return {
        day,
        available:
          isAfter(compareDate, new Date()) && appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}

export default ListProviderMonthAvailability;
