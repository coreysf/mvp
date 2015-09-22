var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.render('index');
// });

app.post('/data', function(req, res) {
    console.log(req.body.type);
    console.log(req.body.issuingCountry);
    console.log(req.body.passportNo);
    console.log(req.body.type);
    console.log(req.body.issuingCountry);
    console.log(req.body.surnames);
    console.log(req.body.givenNames);
    console.log(req.body.nationality);
    console.log(req.body.curp);
    console.log(req.body.dateOfBirth);
    console.log(req.body.gender);
    console.log(req.body.placeOfBirth);
    console.log(req.body.issueDate);
    console.log(req.body.expirationDate);
    console.log(req.body.authority);
    console.log(req.body.remarks);
    console.log(req.body.footer1);
    console.log(req.body.footer2);
    console.log(req.body.userId);
    // Add these values to your MySQL database here
});

app.get('/it_passport', 
function(req, res) {
  res.render('it_passport');
});

app.get('/mx_passport',
function(req, res) {
  res.redirect('mx_passport');
});

app.listen(4568);