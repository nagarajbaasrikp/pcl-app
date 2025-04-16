const Laboratory = require('../models/laboratory');

exports.listLaboratories = function(req, res) {
    Laboratory.find().then(laboratories_list => {
        console.log(laboratories_list);
        res.json(laboratories_list);
    }).catch(err => console.log(err));
}