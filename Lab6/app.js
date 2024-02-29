const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

function init() {
  app.use(express.static('static'))
  app.set('view engine', 'ejs');
  app.listen(port, () => {
    console.log(`server started`)
  })

  require("./routes")(app)
}

init()
module.exports = app