const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lockSchema = new Schema({
  user: { type: String, required: true },
  ID: { type: String, required: true },
  email: String,
  date: { type: Date, default: Date.now }
});

const Lock = mongoose.model("Lock", lockSchema);

module.exports = Lock;
