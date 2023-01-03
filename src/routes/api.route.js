const { Router } = require("express");
const router = Router();

const ApiService = require("./../controllers/api.controller");
const apiService = new ApiService();

router.post("/", function (req, res) {
  try {
    const { date, period } = req.body;
    if (date && period) {
      if (period === "daily") {
        const result = apiService.daily(date);
        return res.status(202).json(result);
      } else if (period === "weekly") {
        const result = apiService.weekly(date);
        return res.status(202).json(result);
      } else if (period === "monthly") {
        const result = apiService.monthly(date);
        return res.status(202).json(result);
      } else {
        return res.status(400).json({ message: "Invalid period" });
      }
    } else {
      return res.status(400).json({ message: "Invalid data" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:date/:period", function (req, res) {
  try {
    const date = req.params.date;
    const period = req.params.period;
    if (date && period) {
      if (period === "daily") {
        const result = apiService.daily(date);
        return res.status(200).json(result);
      } else if (period === "weekly") {
        const result = apiService.weekly(date);
        return res.status(200).json(result);
      } else if (period === "monthly") {
        const result = apiService.monthly(date);
        return res.status(200).json(result);
      } else {
        return res.status(400).json({ message: "Invalid period" });
      }
    } else {
      return res.status(400).json({ message: "Invalid data" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
