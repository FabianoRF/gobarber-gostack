import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );
  });
  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      date: new Date(2020, 4, 20, 14, 0, 0),
      user_id: 'user',
      provider_id: 'provider',
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      user_id: 'user',
      date: new Date(2020, 4, 20, 15, 0, 0),
      provider_id: 'provider',
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      month: 5,
      year: 2020,
      day: 20,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
