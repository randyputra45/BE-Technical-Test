const express = require("express");
const cors = require("cors");
const router = express.Router();
const WeightController = require("../controllers/weightController");

router.get("/weight/data", cors(), WeightController.getAllWeight);
router.get("/weight/data/:id", cors(), WeightController.getAllWeightByID);
router.patch("/weight/update/:id", cors(), WeightController.updateWeightById);
router.delete("/weight/delete/:id", cors(), WeightController.deleteWeightById);
router.post("/weight/create", cors(), WeightController.createNewWeight);

module.exports = router;