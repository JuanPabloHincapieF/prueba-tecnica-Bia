const XLSX = require("xlsx");
const fs = require("fs");

const excelToJson = () => {
  const excel = XLSX.readFile(
    "C:\\Users\\nauj0\\OneDrive\\Escritorio\\prueba tecnica Bia\\data.xlsx"
  );
  const sheetName = excel.SheetNames;
  let data = XLSX.utils.sheet_to_json(excel.Sheets[sheetName[0]]);
  const jsonData = [];

  for (let i = 0; i < data.length; i++) {
    const dato = data[i];
    jsonData.push({
      ...dato,
      meter_date: new Date((dato.meter_date - (25567 + 2)) * 86400 * 1000),
    });
    if (i === 0) {
      fs.appendFileSync(
        "data.json",
        `[${JSON.stringify(jsonData[i])},\n`,
        (err) => {
          if (err) throw err;
          console.log("File is created successfully.");
        }
      );
    } else if (i === data.length - 1) {
      fs.appendFileSync(
        "data.json",
        `[${JSON.stringify(jsonData[i])}]`,
        (err) => {
          if (err) throw err;
          console.log("File is created successfully.");
        }
      );
    } else {
      fs.appendFileSync(
        "data.json",
        `${JSON.stringify(jsonData[i])},\n`,
        (err) => {
          if (err) throw err;
          console.log("File is created successfully.");
        }
      );
    }
  }
  console.log(data.length);
};

excelToJson();
