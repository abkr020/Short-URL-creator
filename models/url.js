const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/short-url-creater")

const urlSchema = mongoose.Schema({

    original_url: String,
    short_url: String


})

const UrlModel = mongoose.model('url',urlSchema)

module.exports = UrlModel;