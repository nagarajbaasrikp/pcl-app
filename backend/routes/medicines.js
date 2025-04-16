var express = require('express');
var router = express.Router();
var medicinesController = require('../controllers/medicine');

router.get('/', medicinesController.listMedicines);

module.exports = router;