const { Router } = require("express");
const router = Router();
const data = require("./../../data.json");

router.post("/", function (req, res) {
  const { date, period } = req.body;
  if (date && period) {
    if (period === "daily") {
      const result = [];
      let hours = [];
      let daily = [];
      for (let i = 0; i < data.length; i++) {
        let day = data[i].meter_date;
        day = day.slice(0, 10);
        if (day === date) {
          daily.push(data[i]);
        }
      }
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
        for (let j = 0; j < daily.length; j++) {
          let elementHour = daily[j].meter_date.slice(11, 13);
          let elementEnergy = daily[j].active_energy;
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
      res.json(result);
    }
  }
});

module.exports = router;
