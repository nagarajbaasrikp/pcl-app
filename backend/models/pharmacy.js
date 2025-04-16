const mongoose = require('mongoose');

const PharmaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pincode: {type: String, required: true}
    },
    services: {type: Array, required: true},
    owner: {type: String, required: true},
    established: {type: Date, required: true}
});

module.exports = mongoose.model('Pharmacy', PharmaSchema);