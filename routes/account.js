var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('account', { title: 'Express' });
});


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
    return containsSpecialCharacter & containsNumber & containsLetter;
}

module.exports = router;
