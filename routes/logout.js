var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session && req.session.username) {
        delete req.session.username;
    }
    res.redirect('/');
});


module.exports = router;
