module.exports = (req,res,next) => {
	if (!req.session.user) { //verifying user in session
		return next();
	} 

	return res.redirect('/app/dashboard');
};