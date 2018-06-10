const express = require('express');

const routes = express.Router();

const authMiddleware = require('../middlewares/auth');
const guestMiddleware = require('../middlewares/guest');


const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');

routes.use((req,res,next ) => { //locals allows access to views variables
	res.locals.flashSuccess =  req.flash('success');
	res.locals.flashError = req.flash('error');
	next();
});

routes.get('/', guestMiddleware, authController.signin);
routes.get('/signup', guestMiddleware, authController.signup);
routes.get('/signout', authController.signout);


routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

routes.use('/app/', authMiddleware); //setting the auth middleware for all routes with prefix '/app'
routes.get('/app/dashboard', dashboardController.index);

routes.use((req, res, next) => res.render('errors/404'));

routes.use((err, req, res, _next) => {
	res.status(err.status || 500);

	return res.render('errors/index',{
		message: err.message,
		error: process.env.NODE_ENV == 'production' ? {} : err,//development or production
	});
});

module.exports =  routes;
