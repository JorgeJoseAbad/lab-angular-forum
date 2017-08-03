const express = require('express');
const router  = express.Router();

const apiRoutes = require('./api/index.controller');

console.log("in index");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', apiRoutes);

module.exports = router;
