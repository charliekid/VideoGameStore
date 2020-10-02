var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup');
});

router.post('/', function(req, res, next) {
    let usernameValid = true;
    let passwordValid = isPasswordValid(req.body.password);
    console.log("isPasswordValid = " + passwordValid);
    let stmt = 'INSERT INTO user_table (username, firstName, lastName, password) VALUES (?, ?, ?, ?)';
    let data = [req.body.username, req.body.firstName, req.body.lastName, req.body.password];
    db.query(stmt, data, function(error, result){
        // Check if username is already in the database
        if(error && error.errno == 1062) {
            usernameValid = false;
        }
        if (!passwordValid && !usernameValid) {
            res.render('signup', {isUsernameDuplicate: true, isPasswordTooSimple: true});
        } else if (!passwordValid) {
            res.render('signup', {isPasswordTooSimple: true});
        } else if (!usernameValid) {
            res.render('signup', {isUsernameDuplicate: true});
        } else {
            console.log(result);
            res.render('index', { title: 'Game Stuff' });
        }
    });
    // make a db connection and query

});

function isPasswordValid(password) {
    return password.length >= 6;
}
module.exports = router;
