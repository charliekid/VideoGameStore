var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    // the query we need to ask our database
    let query = 'SELECT * FROM user_table'
    // make a db connection and query
    let loggedIn = false;

    console.log("Session username in database ", req.session.username);
    if(req.session.username) {// checks if this is null
        let loggedIn = true;
    }
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
