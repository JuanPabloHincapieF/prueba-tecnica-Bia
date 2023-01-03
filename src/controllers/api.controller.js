const data = require("../../data.json");
const isLeapYear = require("./../utilities/isLeapYear");

class ApiService {
  //Get an array with the data of a specific date
  getDay(date) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      let day = data[i].meter_date;
      day = day.slice(0, 10);
      if (day === date) {
        result.push(data[i]);
      }
    }
    return result;
  }
  // Get daily 24 hours consumption
  daily(date) {
    const result = [];
    const hours = [];
    const dailyList = this.getDay(date);
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        let hour = `0${i}`;
        hours.push(hour);
      } else {
        let hour = `${i}`;
        hours.push(hour);
      }
    }
    for (let i = 0; i < hours.length; i++) {
      let first = 999999999;
      let last = 0;
      for (let j = 0; j < dailyList.length; j++) {
        let elementHour = dailyList[j].meter_date.slice(11, 13);
        let elementEnergy = dailyList[j].active_energy;
        if (elementHour == hours[i]) {
          if (first > elementEnergy) {
            first = elementEnergy;
          } else {
            last = elementEnergy;
          }
        }
      }
      result.push({
        meter_date: `${date} ${hours[i]}:00:00`,
        value: `${last - (first === 999999999 ? 0 : first)}`,
      });
    }
    return result;
  }
  // Get weekly consumption
  weekly(date) {
    const newDate = new Date(date);
    const day = Number(date.slice(8, 10));
    const firstDayOfWeek = day - newDate.getDay();
    const lastDayOfWeek = firstDayOfWeek + 6;
    const result = [];
    for (let i = firstDayOfWeek; i <= lastDayOfWeek; i++) {
      let dayOfTheWeek = date.slice(0, 8) + i;
      let dayList = this.getDay(dayOfTheWeek);
      if (dayList.length != 0) {
        let operation =
          dayList[dayList.length - 1].active_energy - dayList[0].active_energy;
        result.push({
          meter_date: `${dayOfTheWeek} 00:00:00`,
          value: operation,
        });
      } else {
        result.push({
          meter_date: `${dayOfTheWeek} 00:00:00`,
          value: 0,
        });
      }
    }
    return result;
  }
  // Get monthly consumption
  monthly(date) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = Number(date.slice(0, 4));
    if (isLeapYear(year)) {
      months[1] = 29;
    }
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const result = [];

    for (let i = 1; i <= months[month]; i++) {
      let dayOfTheMonth = "";
      if (i < 10) {
        dayOfTheMonth = date.slice(0, 8) + `0${i}`;
      } else {
        dayOfTheMonth = date.slice(0, 8) + i;
      }
      let dayList = this.getDay(dayOfTheMonth);
      if (dayList.length != 0) {
        let operation =
          dayList[dayList.length - 1].active_energy - dayList[0].active_energy;
        result.push({
          meter_date: `${dayOfTheMonth} 00:00:00`,
          value: operation,
        });
      } else {
        result.push({
          meter_date: `${dayOfTheMonth} 00:00:00`,
          value: 0,
        });
      }
    }
    return result;
  }
}

module.exports = ApiService;
