const { Category, Snippet } = require('../models');

module.exports = {
	async index(req,res,next) {
    try {
      const categories = await Category.findAll({
        include: [Snippet], //if category is related to snippet, call all snippets by category
        where: {
          UserId: req.session.user.id,
      },
    });
      return res.render('dashboard/index', { categories });
    } catch(err) {
      return next(err);
    }
  },
};
