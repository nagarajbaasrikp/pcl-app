const Doctor = require('../models/doctor');

exports.listDoctors = function(req, res) {
    Doctor.find().then(doctors_list => {
        console.log(doctors_list);
        res.json(doctors_list);
    }).catch(err => console.log(err));
}