import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';

export default class ProviderAppointmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const listProviderApointments = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderApointments.execute({
      day,
      month,
      year,
      provider_id,
    });

    return response.json(appointments);
  }
}