var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const port = process.env.PORT || 3000;

var index = require("./routes/index");
var users = require("./routes/users");
var chat = require("./routes/chat");
var project = require("./routes/project");
var task = require("./routes/task");
var message = require("./routes/message");
var role = require("./routes/role");
var team = require("./routes/team");
var report = require("./routes/report");

var app = express();

var io = require('./sockets/io');

connections = [];
/*
 *VIEW ENGINE CONFIGURATION
 */

app.set("views", path.join(__dirname, "view"));
app.set('view engine', "ejs");
app.engine('html', require('ejs').renderFile);

/*
 *STATIC ANGULAR FOLDER CONFIGURATION
 */

app.use(express.static(path.join(__dirname, "../client")));

/*
 *BODY PARSER MIDDLEWARE CONFIGURATION
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use('/view/src/', index);
app.use('/api', users);
app.use('/api', chat);
app.use('/api', project);
app.use('/api', task);
app.use('/api', message);
app.use('/api', role);
app.use('/api', team);
app.use('/api', report);
/*
 *STARTING SERVER
 */
//var http = require('http').Server(app);


var server = app.listen(port, () => {
    console.log("MACROP SERVER STARTED ON PORT " + port);
});

//Socket setup
io.attach(server);