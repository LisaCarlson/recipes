var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/recipes');
var Recipes = db.get('recipes');
var Users = db.get('users');

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

router.get('/detail/:id', function(req, res, next) {
  Recipes.findOne({_id: req.params.id}).then(function(recipe) {
    res.json(recipe)
  });
});

router.post('/', function(req, res, next) {
  Recipes.insert(req.body).then(function(doc) {
    return doc;
  }).then(function(data) {
    var recipeId = data._id;
    Users.update({_id: data.userId}, {$push: {recipes: recipeId}}).then(function(result) {
      return result;
    }).then(function() {
      Recipes.find({}).then(function(recipes) {
        res.json(recipes)
      });
    })
  });
});

router.delete('/:id', function(req, res, next) {
  Recipes.remove({_id: req.params.id}).then(function(result) {
    Recipes.find({}).then(function(recipes) {
      res.json(recipes);
    })
  })
})

module.exports = router;
