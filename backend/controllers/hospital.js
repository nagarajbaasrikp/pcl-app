const Hospital = require('../models/hospital');

exports.listHospitals = function(req, res) {
    Hospital.find().then(hospitals_list => {
        console.log(hospitals_list);
        res.json(hospitals_list);
    }).catch(err => console.log(err));
}