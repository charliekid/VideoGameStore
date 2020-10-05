var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', async function(req, res, next) {
    let loggedInUser = await verifyLogin(req.body.username, req.body.password);
    if (loggedInUser.length) {
        res.render('login');
    }
    res.render('login', { invalidLogin: true });
});

// authenticate user credentials when logging in
function verifyLogin(username, password) {
    let stmt = 'SELECT * FROM user_table WHERE username=? and password=?'
    let data = [username, password];
    return new Promise(function(resolve, reject) {
        db.query(stmt, data, function(error, results) {
            if (error) throw error;
            resolve(results);
        })
    });
};

module.exports = router;
