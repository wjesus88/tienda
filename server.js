const path = require('path');
const env = require('dotenv').config();
const express = require('express');
var server = express();

var port = process.env.PORT || 8080;

server.set('view engine', 'ejs');
server.set('views', 'views');

// if (process.env.NODE_ENV === 'development') {
//     if (process.env.MODE === 'no-build') {
//         server.use(express.static(path.join(__dirname, 'apps/shop')));
//     }
//     else if (process.env.MODE === 'build') {
//         server.use(express.static(path.join(__dirname, 'apps/shop')));
//     }
   // server.use(express.static(path.join(__dirname, 'static')));
//}


//server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    // if (process.env.NODE_ENV === 'developemnt') {
    //     res.render('index', {mode: process.env.MODE});
    // }
    //  else {
        res.render('index');
    //}
});


server.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
})