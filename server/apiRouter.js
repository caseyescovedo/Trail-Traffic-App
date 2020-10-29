const express = require('express');
const router = express.Router();
const mapController = require('./controllers/mapController');

router.get('/getData', mapController.getHeat, (req, res, next) => {
  return next();
})

module.exports = router;