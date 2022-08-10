const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
  min: {
    type: Number,
    required: [true, "Minimum weight is required"],
  },
  max: {
    type: Number,
    required: [true, "Maximum weight is required"],
  },
  perbedaan: {
    type: Number,
    required: [true, "Weight difference is required"],
  },
  tanggal: {
    type: String,
    required: [true, "Date is required"],
  },
});

const WeightSchema = mongoose.model("Weight", weightSchema);
module.exports = WeightSchema;
