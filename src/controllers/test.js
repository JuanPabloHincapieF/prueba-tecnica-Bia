const data = require("./../../data.json");
let date = data[0].meter_date;
date = date.slice(0, 4);
console.log(date);
