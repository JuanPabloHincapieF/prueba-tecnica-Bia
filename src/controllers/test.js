const data = require("./../../data.json");
let date = data[0].meter_date;
date = date.slice(0, 10);
newDate = new Date("2022-10-17");
console.log(17 - newDate.getDay());
