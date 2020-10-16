var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query.title);
    console.log(req.query.rating);
    console.log(getSearchQuery(req.query.title, req.query.rating));

    let query = getSearchQuery(req.query.title, req.query.rating);
    // make a db connection and query
    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        res.render('games', {games: result});
    });
});

function getSearchQuery(title, rating) {
    let stmt;
    if (!title && !rating) {
        stmt = `SELECT * FROM game_table;`
    } else if (title && !rating) {
        stmt = `SELECT * FROM game_table WHERE gameTitle LIKE '%${title}%';`;
    } else if (rating && !title) {
        stmt = `SELECT * FROM game_table WHERE rating = '${rating}';`;
    } else {
        stmt = `SELECT * FROM game_table WHERE gameTitle LIKE '%${title}%' AND rating = '${rating}';`
    }
    return stmt;
}
module.exports = router;
