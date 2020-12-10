const mongoose = require('mongoose')
module.exports = mongoose.model("appliedModel", new mongoose.Schema({
    assetName: String,
    depart: String,
    level: Number,
    secretLevel: Number,
    usefulLevel: Number,
    fragileLevel: Number,
    rangeDescription: String,
    threatenDescription: String,
    remark: String,
    objectId: String,
}))