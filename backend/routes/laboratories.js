var express = require('express');
var router = express.Router();
var laboratoryController = require('../controllers/laboratory');

router.get('/', laboratoryController.listLaboratories);

module.exports = router;