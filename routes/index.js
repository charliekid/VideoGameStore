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
  let logged;
  let name = req.session.username;
  logged = loggedIn(name);
  res.render('index', { title: 'Game Stuff' , ratings: ratings, loggedIn: logged});
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

function loggedIn(name) {
  console.log(name);
  if (name == null) {
    return false;
  } else {
    return true;
  }
}
module.exports = router;
