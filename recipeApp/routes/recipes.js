var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/recipes');
var Recipes = db.get('recipes');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('recipes/show', { title: 'Recipes' });
// });

// router.get('/show', function(req, res, next) {
//   Recipes.find({}).then(function(response) {
//     res.json(response)
//   })
// });

router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  res.render('recipes/' + name)
});

module.exports = router;