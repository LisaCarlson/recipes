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
  return Users.findOne({email: req.body.email, password: req.body.password}).then(function(user) {
    req.session.id = user._id;
    req.session.recipes = user.recipes;
    res.json(user);
  });
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
