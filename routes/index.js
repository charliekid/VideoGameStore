var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let r;
  let result = await getRatings();
  let ratings = []
  for (r of result) {
    ratings.push(r.rating);
  }
  res.render('index', { title: 'Game Stuff' , ratings: ratings});
});

function getRatings() {
  let stmt = "SELECT DISTINCT rating FROM game_table ORDER BY rating";
  return new Promise(function(resolve, reject) {
    db.query(stmt, function(error, result) {
      if (error) throw error;
      // console.log(result);
      resolve(result);
      reject("Error");
    });
  });
}
module.exports = router;
