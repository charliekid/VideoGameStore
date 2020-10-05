var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    let stmt = 'SELECT * FROM user_table WHERE username=? and password=?'
    let data = [req.body.username, req.body.password]
    db.query(stmt, data, function(error, result) {
        if (error) throw error;
        res.render('login', { title: 'Express' });
    });
});
module.exports = router;
