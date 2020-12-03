"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _dateFns = require("date-fns");

var _IAppointmentsRepository = _interopRequireDefault(require("../repositories/IAppointmentsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListProviderDayAvailability = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AppointmentRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAppointmentsRepository.default === "undefined" ? Object : _IAppointmentsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListProviderDayAvailability {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute({
    month,
    provider_id,
    year,
    day
  }) {
    const appointments = await this.appointmentRepository.findAllInDayFromProvider({
      day,
      month,
      provider_id,
      year
    });
    const hourStart = 8;
    const eachHourArray = Array.from({
      length: 10
    }, (_, index) => index + hourStart);
    const currentDate = new Date(Date.now());
    const availability = eachHourArray.map(hour => {
      const hasAppointmentsInHour = appointments.find(appointment => (0, _dateFns.getHours)(appointment.date) === hour);
      const compareDate = new Date(year, month - 1, day, hour);
      return {
        hour,
        available: !hasAppointmentsInHour && (0, _dateFns.isAfter)(compareDate, currentDate)
      };
    });
    return availability;
  }

}) || _class) || _class) || _class) || _class);
var _default = ListProviderDayAvailability;
exports.default = _default;