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
  var data = {'errors':[]};
  if(!req.body.email) {
    data.errors.push('Email is required');
  }
  if(!req.body.password) {
    data.errors.push('Password is required');
  }
  if(!req.body.username) {
    data.errors.push('User name is required');
  }
  if(data.errors.length) {
    res.json(data);
  }

  else {
    return Users.findOne({email: req.body.email, password: req.body.password}).then(function(user) {
      if (!user) {
        data.errors.push('Email or password is incorrect');
        res.json(data);
      }
      else {
        req.session.id = user._id;
        req.session.recipes = user.recipes;
        res.json(user);
      }
      
    });
  }
  
});

router.post('/signup', function(req, res, next) {
  req.body.recipes = [];
  var data = {'errors':[]};
  if(!req.body.email) {
    data.errors.push('Email is required');
  }
  if(!req.body.password) {
    data.errors.push('Password is required');
  }
  if(!req.body.username) {
    data.errors.push('User name is required');
  }
  if(data.errors.length) {
    res.json(data);
  }
  else {
    Users.findOne({email: req.body.email}).then(function(doc) {
      if (!doc) {
        Users.insert(req.body).then(function(response) {
          res.json(response);
        });
      }
      else {
        data.errors.push('User is already signed up');
        res.json(data);
      }
    })
  }
})

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
