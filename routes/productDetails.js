var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/:productID', async function(req, res, next) {
    let gameID = req.query.productId;
    let querriedGame = await getVideoGameFromDB(gameID);
    res.render('productDetails', { productDetails : querriedGame[0] });
});

// router.post('/', async function(req, res, next) {
//     res.render('productDetails', { invalidLogin: true });
// });

function getVideoGameFromDB(gameID) {
    let stmt = "SELECT * FROM game_table where gameId=?"
    let data = [gameID]
    return new Promise(function(resolve, reject) {
        db.query(stmt, data, function(error, results) {
            if (error) throw error;
            resolve(results);
        })
    })
}

module.exports = router;
