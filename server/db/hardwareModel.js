const mongoose = require('mongoose')
module.exports = mongoose.model("hardwareModel", new mongoose.Schema({
    assetName: String,
    assetNumber: Number,
    dutyMan: String,
    depart: String,
    level: Number,
    rangeDescription: String,
    threatenDescription: String,
    remark: String,
    objectId: String,
}))