"use strict";

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeAppointmentsRepository = _interopRequireDefault(require("../repositories/fakes/FakeAppointmentsRepository"));

var _ListProviderAppointmentsService = _interopRequireDefault(require("./ListProviderAppointmentsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeAppointmentsRepository;
let fakeCacheProvider;
let listProviderAppointments;
describe('ListProviderAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new _FakeAppointmentsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    listProviderAppointments = new _ListProviderAppointmentsService.default(fakeAppointmentsRepository, fakeCacheProvider);
  });
  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      date: new Date(2020, 4, 20, 14, 0, 0),
      user_id: 'user',
      provider_id: 'provider'
    });
    const appointment2 = await fakeAppointmentsRepository.create({
      user_id: 'user',
      date: new Date(2020, 4, 20, 15, 0, 0),
      provider_id: 'provider'
    });
    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      month: 5,
      year: 2020,
      day: 20
    });
    expect(appointments).toEqual([appointment1, appointment2]);
  });
});