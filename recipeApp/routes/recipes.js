var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/recipes');
var Recipes = db.get('recipes');
var Users = db.get('users');

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

router.get('/id/:id', function(req, res, next) {
  Users.findOne({_id: req.params.id}).then(function(user) {
    return user.recipes;
  }).then(function(recipeIds) {
    return Recipes.find({_id: {$in: recipeIds}})
  }).then(function(recipes) {
    res.json(recipes)
  });
});

module.exports = router;
