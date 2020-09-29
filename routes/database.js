var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    // the query we need to ask our database
    let query = 'SELECT * FROM user_table WHERE username=\'Dagger1\''
    // make a db connection and query
    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        res.render('database', {
            title: 'Testing Database',
            information: result
        });
    });

});

module.exports = router;
