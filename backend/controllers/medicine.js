const Medicine = require('../models/medicine');

exports.listMedicines = function(req, res) {
    Medicine.find().then(medicines_list => {
        console.log(medicines_list);
        res.json(medicines_list);
    }).catch(err => console.log(err));
}