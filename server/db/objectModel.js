const mongoose = require('mongoose')
module.exports = mongoose.model("objectModel", new mongoose.Schema({
    objectName: String,
    objectDescription: String,
}))