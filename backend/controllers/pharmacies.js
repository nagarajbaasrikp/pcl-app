const Pharmacy = require('../models/pharmacy');

exports.listPharmacies = function(req, res) {
    Pharmacy.find().then(pharmacies_list => {
        console.log(pharmacies_list);
        res.json(pharmacies_list);
    }).catch(err => console.log(err));
}