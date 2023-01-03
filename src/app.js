const express = require("express");
const app = express();
const port = 3000;

//middlewares
app.use(express.json());

// routes
app.use("/api", require("./routes/api.route"));

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} ...`);
});

module.exports = app;
