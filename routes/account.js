var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let uName = req.session.username;
    // let fName = `SELECT firstName FROM user_table WHERE username = '${uName}';`;
    // let lName = "SELECT lastName FROM user_table WHERE username=" + "\'" + uName + "\';";
    let userQ = `SELECT * FROM user_table WHERE username = '${uName}';`;
    db.query(userQ, (err, result) => {
        if (err) {
            res.render('account');
        }
        else {
            console.log(result);
            res.render('account', {user: result});
        }
    });
});




module.exports = router;
