const express = require('express')
const app = express()
const port = 3000

function init() {
  app.use(express.static('static')) // Set Static Files
  app.set('view engine', 'ejs'); // Set Template Engine
  app.listen(port, () => {
    console.log(`server started`)
  })

  require("./routes")(app)
}

init()
module.exports = app