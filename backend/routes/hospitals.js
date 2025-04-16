var express = require('express');
var router = express.Router();
var hospitalController = require('../controllers/hospital');

router.get('/', hospitalController.listHospitals);

module.exports = router;