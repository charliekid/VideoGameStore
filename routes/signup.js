var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup');
});

router.post('/', function(req, res, next) {

    let passwordValid = isPasswordValid(req.body.password);
    let usernameStmt = `SELECT * FROM user_table where username = '${req.body.username}'`;
    db.query(usernameStmt, function(error, result) {
        if (result.length != 0 && !passwordValid) {
            res.render('signup', {isUsernameDuplicate: true, isPasswordTooSimple: true});
        }
        else if (result.length != 0) {
            res.render('signup', {isUsernameDuplicate: true})
        }
        else if (!passwordValid) {
            res.render('signup', {isPasswordTooSimple: true})
        }
        else {
            let stmt = 'INSERT INTO user_table (username, firstName, lastName, password) VALUES (?, ?, ?, ?)';
            let data = [req.body.username, req.body.firstName, req.body.lastName, req.body.password];
            db.query(stmt, data, function(error, result) {
                if (error) {
                    console.log(error);
                }
                res.render('index', {title: 'Game Stuff'});
            });
        }
    });
});


function isUsernameValid(username) {
    let usernameStmt = `SELECT * FROM user_table where username = '${username}'`;
    let validUsername = true;
    console.log(usernameStmt);
    db.query(usernameStmt, function(error, result) {
        if (error) {
            console.log(error);
        }
        console.log(result);
        validUsername = result;
    });
    console.log("valid = " + validUsername);
    return validUsername;
}


// Password must be at least 6 characters long and contain
// only numbers, letters, and special characters (at least 1 each).
function isPasswordValid(password) {
    const specialCharacters = '!@#$%^&*()_-+={}[]|\\:;"\'<>,.?/~`';
    const numberRegex = /[0-9]/
    const letterRegex = /[a-zA-Z]/
    let character;
    let containsSpecialCharacter = false;
    let containsNumber = false;
    let containsLetter = false;

    if (password.length < 6) {
        return false;
    }
    for (character of password) {
        if (specialCharacters.includes(character)) {
           containsSpecialCharacter = true;
        }
        else if (character.match(numberRegex)) {
            containsNumber = true;
        }
        else if (character.match(letterRegex)) {
            containsLetter = true;
        }
        else {
            return false;
        }

    }
    return containsSpecialCharacter && containsNumber && containsLetter;
}
module.exports = router;
