const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./app/routes/routes')

const app = express();

app.use(express.static(path.resolve('app','public')));

nunjucks.configure(path.resolve('app','views'),{
  autoescape: true,
  express: app
});


app.set('view engine','njk'); // dessa forma não é necessário informar a extensão do arquivo no res.send
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000);
