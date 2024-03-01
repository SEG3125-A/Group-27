const bodyParser = require('body-parser')
const fs = require("fs")

var urlencodedParser = bodyParser.urlencoded({extended: false})

// code for readData inspired from https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module6-SurveyAnalysis/surveyController.js
function readData(){
    let dataRead = fs.readFileSync('./data/answers.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// Code for writeData inspired from https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module6-SurveyAnalysis/surveyController.js
function writeData(obj, answer){
    obj.answers.push(answer)
    data = JSON.stringify(obj);
    fs.writeFileSync('./data/answers.json', data);
}

function calcAverage(answers) {
    var avgRating = 0, avgNumofColour = 0
    var ratingsArr = []
    var numColorsArr = []

    for (let answer of answers) {
        ratingsArr.push(parseInt(answer.ratings, 10))
        numColorsArr.push(parseInt(answer.numOfColors, 10))
    }

    ratingsArr.forEach(num => {
        avgRating += num
    }); 

    numColorsArr.forEach(num => {
        avgNumofColour += num
    })

    avgRating = avgRating / ratingsArr.length
    avgNumofColour = avgNumofColour / numColorsArr.length

    return [avgRating.toFixed(1), avgNumofColour.toFixed(1)]
}

function getlistItems(answers) {
    var description = []
    var improvements = []

    for (let answer of answers) {
        description.push(answer.description)
        improvements.push(answer.improvements)
    }
    
    return [description, improvements]
}

function countIssues(answers) {
    var issuesList = []
    var issueObj = {}

    for (let answer of answers) {
        if (answer.issues instanceof Array) {
            issuesList = issuesList.concat(answer.issues)
        }
        else{
            temp = answer.issues.split()
            issuesList = issuesList.concat(temp)
        }
    }

    for (let issue of issuesList) {
        if (issue in issueObj) {
            issueObj[issue] += 1
        }
        else {
            issueObj[issue] = 1
        }
    }
    
    return issueObj
}


module.exports = function(app){
    app.get('/', (req, res) => {
        res.sendFile(__dirname+'/views/index.html')
    });

    app.get('/results', (req, res) => {
        obj = readData()
        answers = obj.answers
        var [avgRating, avgNumOfColours] = calcAverage(answers)
        var [description, improvements] = getlistItems(answers)
        var issueObj = countIssues(answers)
        res.render('results', {data: [avgRating, avgNumOfColours, description, improvements, issueObj]})
    });

    app.post('/', urlencodedParser, (req, res) => {
        obj = readData()
        writeData(obj, {...req.body})
        res.sendFile(__dirname+'/views/index.html')
    });
}
