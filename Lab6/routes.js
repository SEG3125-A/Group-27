const bodyParser = require('body-parser')
const fs = require("fs")

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){
    app.get('/', (req, res) => {
        res.sendFile(__dirname+'/views/index.html')
    });

    app.get('/results', (req, res) => {
        res.render('results')
    });

    app.post('/', urlencodedParser, (req, res) => {
        console.log({...req.body})
        res.sendFile(__dirname+'/views/index.html')
    });
}
