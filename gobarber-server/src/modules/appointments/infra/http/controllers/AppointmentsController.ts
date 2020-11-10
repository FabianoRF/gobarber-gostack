import { Response, Request } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createApointment = container.resolve(CreateAppointmentService);

    const appointment = await createApointment.execute({
      provider_id,
      user_id,
      date,
    });

    return response.json(appointment);
  }
}
