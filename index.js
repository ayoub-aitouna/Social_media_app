var express = require("express");
//App setup
var app = express();
var server = app.listen(3070, () => {
    console.log('lisetining on request at port 3000');
});

//statice file
app.use(express.static('public'));