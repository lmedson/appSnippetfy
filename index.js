const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./app/routes/routes')

const app = express();

const {User} = require('.app/models/')
User.create({name:'medson',email:'medson@gmail.com', password:'123456'})

nunjucks.configure(path.resolve('app','views'),{
  autoescape: true,
  express: app
});

app.use(express.static(path.resolve('app','public')));

app.set('view engine','njk'); // dessa forma não é necessário informar a extensão do arquivo no res.send
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000);
