const { Router } = require("express");
const router = Router();

const ApiService = require("./../controllers/api.controller");
const apiService = new ApiService();

router.post("/", function (req, res) {
  const { date, period } = req.body;
  if (date && period) {
    if (period === "daily") {
      const result = apiService.daily(date);
      return res.status(200).json(result);
    } else if (period === "weekly") {
      const result = apiService.weekly(date);
      return res.status(200).json(result);
    } else if (period === "test") {
      const result = apiService.getDay(date);
      return res.status(200).json(result);
    }
  }
});

module.exports = router;
