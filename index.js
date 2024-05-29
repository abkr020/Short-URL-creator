const express = require('express')
const app = express()
const port = 3000
const UrlModel = require("./models/url")
const shortid = require("shortid")



app.set("view engine", "ejs")
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/',async (req, res) => {
    urldatabase = await UrlModel.find({})
    res.render('index',{urldatabase})
})
app.post('/',async (req, res) => {
    const short_url = shortid();
    const createdUrl = await UrlModel.create({
        original_url: req.body.original_url,
        short_url: short_url
    })
    console.log(createdUrl)
    res.redirect("/")
})

app.get('/:short',async (req, res) => {
let shortid = req.params.short;
const result =await UrlModel.findOne({short_url:shortid})
res.redirect(result.original_url)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})