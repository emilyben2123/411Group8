var express = require('express');
var router = express.Router();

/* GET playlist page. */
router.get('/', function(req, res, next) {
    res.render('playlist', { name: 'playlist', username: req.session.userId, country: req.session.loc});
});


module.exports = router;
