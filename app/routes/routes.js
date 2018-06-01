const express = require('express');
const routes = express.Router();

const authController = require('../controllers/authController.js'); 	  	

routes.use((req,res,next ) => {
	//locals allows access to views variables
	res.locals.flashSuccess =  req.flash('success');
	res.locals.flashError = req.flash('error');
	next();
});
routes.get('/', authController.signin);
routes.get('/signup', authController.signup);

routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);	

module.exports =  routes;