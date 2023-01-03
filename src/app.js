const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", require("./routes/api.route"));

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} ...`);
});

module.exports = app;
