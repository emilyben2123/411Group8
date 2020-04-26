var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { name: 'home', username: req.session.userId, country: req.session.loc});
});

module.exports = router;
