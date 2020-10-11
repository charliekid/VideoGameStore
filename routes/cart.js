var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // TODO: needs to get the user name from login somehow
    let username = 'Dagger1';
    let query = "SELECT * FROM cart_table WHERE username=" + "\'" + username + "\';"
    let sumQuery = "SELECT SUM(amount) AS cartSum from cart_table WHERE username=" + "\'" + username + "\';"

    // I know this is confusing.. This queries for the user name
    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        // This queries for a cart sum
        db.query(sumQuery, (err, sumResult) => {
            if (err) {
                console.log('error with the query');
                res.render('views/error');
            }
            console.log(sumResult);
            console.log(result);
            res.render('cart', {
                title: 'Cart Stuff',
                result: result,
                sumResult: sumResult
            });
        }); // end of sum Query
    }); // end of result query

});

router.post('/total', function(req, res, next) {
    let username = 'Dagger1';
    let sumQuery = "SELECT SUM(amount) from cart_table WHERE username=" + "\'" + username + "\';"
    db.query(sumQuery, function(error, results, fields) {
        if (error) {
            console.log('error with the query');
            res.render('views/error');
        }

        console.log(results);
        res.json({
            sumResult: results
        });
    }); // end of sum Query
});

module.exports = router;
