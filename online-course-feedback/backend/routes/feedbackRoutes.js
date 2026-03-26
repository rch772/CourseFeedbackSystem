const express = require("express");
const router = express.Router();
const controller = require("../controllers/feedbackController");

router.post("/", controller.addFeedback);
router.get("/", controller.getFeedback);
router.delete("/:id", controller.deleteFeedback);
router.get("/analytics", controller.getAnalytics);

module.exports = router;