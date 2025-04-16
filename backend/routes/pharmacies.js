var express = require('express');
var router = express.Router();
var pharmacyController = require('../controllers/pharmacies');

router.get('/', pharmacyController.listPharmacies);

module.exports = router;