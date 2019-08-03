const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estateSchema = new Schema({
    title: {type: String, required: true},
    address: {type: String, required: true}
});

const Estate = mongoose.model("Estate", estateSchema);

module.exports = Estate;