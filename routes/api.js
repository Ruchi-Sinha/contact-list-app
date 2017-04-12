const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

router.get('/contactlist',function(req, res, next){
  Contact.find().then(function(contacts){
    res.json(contacts)
  }).catch(next);
});
router.post('/contactlist',function(req, res, next){
  Contact.create(req.body).then(function(contacts){
    res.json(contacts);
  }).catch(next);
  //res.json(contactlist);
});
router.get('/contactlist/:id',function(req, res, next){
  console.log("I recieved a get by id request"+req.params.id);
  Contact.findOne({_id: req.params.id}).then(function(contacts){
    res.json(contacts);
  }).catch(next);
});
router.put('/contactlist/:id',function(req, res, next){
  console.log("I recieved a put request"+req.params.id);
  Contact.findOneAndUpdate({_id: req.params.id}, req.body).then(function(contacts){
    res.json(contacts);
  }).catch(next);
});
router.delete('/contactlist/:id',function(req, res, next){
  console.log("I recieved a delete request");
  Contact.findOneAndRemove({_id: req.params.id}).then(function(contacts){
    res.json(contacts);
  }).catch(next);
});

router.get('*',function(req, res){
  res.sendfile('../public/index.html');
});

module.exports = router;
