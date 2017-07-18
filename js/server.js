var http = require('http'); //Imports the http module

http.get("https://vtop.vit.ac.in/student/captcha.asp", function (res) {
    var body = ''; // Will contain the final response
    // Received data is a buffer.
    // Adding it to our body

    res.on('data', function (data) {
        body+=data;
    });  // After the response is completed, parse it and log it to the console
    res.on('end', function () {
        var parsed = JOSN.parse(body);
        console.log(parsed);
    })
});