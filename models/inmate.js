const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    message: { type: String }
});

const inmateSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String },
    contacts: [contactSchema],
    createdOn: { type: Date, default: Date.now }
});

const Inmate = mongoose.model("Inmate", inmateSchema);

module.exports = Inmate;