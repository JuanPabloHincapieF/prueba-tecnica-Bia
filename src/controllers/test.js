const data = require("./../../data.json");
let date = data[0].meter_date;
console.log(date);
console.log(date.slice(0, 10));
console.log(date.slice(11, 13));
