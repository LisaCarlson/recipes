var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/recipes');
var Users = db.get('users');
var Recipes = db.get('recipes');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var data = {};
  return Users.findOne({email: req.body.email, password: req.body.password}).then(function(user) {
    data.username = user.username;
    return user.recipes;
  }).then(function(recipeIds) {
    return Recipes.find({_id: {$in: recipeIds}})
  }).then(function(recipes) {
    data.recipes = recipes;
    res.json(data);
  })
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
