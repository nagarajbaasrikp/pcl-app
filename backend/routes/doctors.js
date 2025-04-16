var express = require('express');
var router = express.Router();
var doctorController = require('../controllers/doctor');

router.get('/', doctorController.listDoctors);

module.exports = router;