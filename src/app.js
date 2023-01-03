const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(port, () => {
  console.log(
    `El servidor esta escuchando en el puerto http://localhost:${port} ...`
  );
});

module.exports = app;
