var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let query = getSearchQuery(req.query.title, req.query.rating);
    // make a db connection and query
    db.query(query, (err, result) => {
        if (err) {
            console.log('error with the query');
            res.render('views/error');
        }
        if (result.length != 0) {
            res.render('games', {games: result});
        }
        else {
            res.render('games', {noGames: true})
        }
    });
});

function getSearchQuery(title, rating) {
    let stmt;
    if (!title && rating === "All") {
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
