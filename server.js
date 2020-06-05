var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/BDayModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
const options = {
    dbname: 'teste',
    useNewUrlParser: true,
  };
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://admin:admin@cluster0-xxxud.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, options);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/BDayRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('BDay Gih API server started on: ' + port);