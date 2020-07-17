// Ti Hall - IT222 Summer 2020

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data =  require('./data');

let exphbs = require('express-handlebars'); // should be at top of module 

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

app.engine('handlebars', exphbs({defaultLayout : false}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.type('text/html');
  res.render('home', {doctor: data.getAll()});
});

app.get('/details', (req, res) => {
  res.render('details', {doctorDetail: data.getDetail(req.query.doc)});
});



 app.listen(app.get('port'), () => {
  console.log('Express started'); 
 });

