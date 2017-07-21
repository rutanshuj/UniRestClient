var express = require("express");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var app = express();
var port = 8082;

var url = "https://www.indeed.co.in/jobs?q=computer+science+engineering&l=Mumbai%2C+Maharashtra";
request(url, function (err,resp, body) {
    var $ = cheerio.load(body);
    var companyName = $('.turnstileLink a');
    var companyNameText = companyName.text();

    var jobTitle = $('.jobtitle');
    var jobtTilteText = jobTitle.text();

    var location = $('.location');
    var locationText = location.text();

    var summary = $('.summary');
    var summaryText = summary.text();

    var job{
    companyName: companyNameText,
    jobTitle: jobtTilteText,
    location: locationText,
    summary: summaryText
    };
    console.log(job);
});
    // var companyName = $('.company');
    // var companyNameText = companyName.text();

//     $('.company').filter(function () {
//         var companyName = $('.this');
//         companyNameText = companyName.text();
//     });
//     console.log(companyNameText);
// });   Did not work
app.listen(port);
console.log('server running on ' + port);
