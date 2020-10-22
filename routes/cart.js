var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    // TODO: needs to get the user name from login somehow
    let username = req.session.username;
    if (req.query.productID != null) {
        let videoGameID = req.query.productID;
        let querriedGame = await getVideoGameFromDB(videoGameID);
        let videoGameTitle = querriedGame[0].gameTitle;
        let videoGameAmount = querriedGame[0].amount;
        let insertStmt = 'INSERT INTO cart_table (username, gameId, gameTitle, amount) VALUES (?, ?, ?, ?)'
        let data = [username, videoGameID, videoGameTitle, videoGameAmount]

        // inserts selected game into user's cart
        db.query(insertStmt, data, function(error, result) {
            if (error) {
                console.log(error);
            }
        });
    }


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
            // console.log(sumResult);
            // console.log(result);
            res.render('cart', {
                title: 'Cart Stuff',
                result: result,
                sumResult: sumResult
            });
        }); // end of sum Query
    }); // end of result query

});

router.get('/delete/:id', function(req, res, next) {
    let cartId = req.params.id;
    console.log("cartid " + cartId);
    let query = "DELETE FROM `cart_table` WHERE cartId=" + "\'" + cartId + "\'";
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.redirect('/cart');
    });
});

router.get('/receipt', function(req, res, next) {
    let username = req.session.username;
    let sumQuery = "SELECT SUM(amount) AS cartSum from cart_table WHERE username=" + "\'" + username + "\';"
    let query = `SELECT * FROM cart_table where username = '${username}'`
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        // This queries for a cart sum
        db.query(sumQuery, (err, sumResult) => {
            if (err) {
                console.log('error with the query');
                res.render('views/error');
            }
            // console.log(sumResult);
            console.log("result");
            //console.log(result);
            res.send({
                items: result,
                totalSum: sumResult
            });
        }); // end of sum Query

    });
});

router.get('/decreaseQuantity', function(req, res, next) {
    // Charlie's code: This function will allow us to decrease the qty.
    let username = req.session.username;
    let query = "SELECT * FROM cart_table WHERE username=" + "\'" + username + "\';";
    let i = 0;
    db.query(query, (err, cartGames) => {
        if(err) {
            console.log("Error in testing qty get function");
            return res.status(500).send(err);
        }
        console.log("printing from result (testingQty) (gameId)");
        //console.log(cartGames[1].gameId);
        for(i = 0; i < cartGames.length; i++) {
            let currentGameId = cartGames[i].gameId;
            let qtyQuery = `UPDATE game_table SET qty = qty - 1 WHERE gameId = ${currentGameId}`;
            // here we query to decrease the qty
            db.query(qtyQuery, (err, qtyResult) => {
                if(err) {
                    console.log("Error in the testingQty/qtyQuery get function");
                }
                //console.log(currentGameId + " qty is decreased");
            }); // end of qty query
        }
    });
});

// This will clear the cart and add stuff to the purchased_table
router.get('/clear', function (req, res, next) {
    let username = req.session.username;
    let query = "SELECT * FROM cart_table WHERE username=" + "\'" + username + "\';";

    let i = 0;
    db.query(query, (err, cartGames) => {
        if (err) {
            console.log("Error in /clear get function");
            return res.status(500).send(err);
        }
        // This will loop through the cart and add it to the purchased item table
        for(i = 0; i < cartGames.length; i++) {
             let currentGameId = cartGames[i].gameId;
             let currentGameTitle = cartGames[i].gameTitle;
             let purchasedQuery = `INSERT INTO purchased_table VALUES ('${username}','${currentGameId}','${currentGameTitle}')`;
             db.query(purchasedQuery, (err, qtyResult) => {
                if(err) {
                    console.log("Error in the cart/clear/purchasedQuery get function");
                }
                console.log("We have added " + currentGameTitle + " to purchased items");
             }); // end of purchasedQuery
        }
        // We will clear the cart here
        let deleteCartQuery = `DELETE FROM cart_table WHERE username = '${username}'`;
        db.query(deleteCartQuery, (err, deletedCart) => {
            if(err) {
                console.log("Error in the cart/clear/deleteQuery get function");
                return res.status(500).send(err);
            }
        }); // end of deleteCartQuery
        res.redirect('/');
    });
});

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
