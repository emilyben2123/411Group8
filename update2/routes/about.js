var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { name: 'about', username: req.session.userId, country: req.session.loc});
});

module.exports = router;