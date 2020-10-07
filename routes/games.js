var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = 'SELECT * FROM game_table'
    // make a db connection and query
    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        console.log(result);

        // result.forEach(r => r.description = r.description.slice(0,100));


        res.render('games', {games: result});
    });
    // res.render('games',);
});

module.exports = router;
