var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let query = 'SELECT * FROM game_table'
    // make a db connection and query
    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        res.render('games', {games: result});
    });
});

module.exports = router;
