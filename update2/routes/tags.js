var express = require('express');
var router = express.Router();

/* GET tags page. */
router.get('/', function(req, res, next) {
    res.render('tags', { name: 'tags', username: req.session.userId, country: req.session.loc});
});

module.exports = router;
