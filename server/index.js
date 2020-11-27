const Koa = require("koa")
const app = new Koa()
const cors = require("koa2-cors")
app.use(cors())
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/koa_practice",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
require("./router/object.js")(app)
require("./router/hardware.js")(app)
require("./router/applied.js")(app)
console.log("http://localhost:3000")
app.listen(3000)
