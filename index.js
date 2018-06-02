const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./app/routes/routes');
const session = require('express-session');
const flash = require('connect-flash');

const sessionConfig = require('./config/session');

const app = express();

app.use(express.static(path.resolve('app','public')));

nunjucks.configure(path.resolve('app','views'),{
  autoescape: true,
  express: app,
});


app.set('view engine','njk'); // This way it is not necessary to inform the extension of the file in res.send
app.use(bodyParser.urlencoded({ extended: false }));
//repassing session config
app.use(session(sessionConfig));
app.use(flash());

app.use('/', routes);

app.listen(3000);
