var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var http = require('http');
var server = http.createServer(app);
// const io = require('socket.io')(server);
// const nodemailer = require('nodemailer');



const config = require('./server/config/mongoose.js');
mongoose.connect(config.mongoose,  { useNewUrlParser: true });
mongoose.connection.on('connected', ()=>{

})
const flash = require('express-flash');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(cors());
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));


require('./server/config/routes.js')(app)

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport)

// io.on('connection', function (socket) {
//     socket.emit('msg', { msg: 'Welcome bro!' });
//     socket.on('msg',function(msg){
//     	socket.emit('msg', { msg: "you sent : "+msg });
//     })
// })
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("static/index.html"))
  })
  var port_number = server.listen(process.env.PORT || 3000);
  app.listen(port_number);
