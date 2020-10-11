var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // TODO: needs to get the user name from login somehow
    let username = 'Dagger1';
    let query = "SELECT * FROM cart_table WHERE username=" + "\'" + username + "\';"

    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        res.render('cart', {
            title: 'Cart Stuff',
            result: result
        });
    });

});

module.exports = router;
