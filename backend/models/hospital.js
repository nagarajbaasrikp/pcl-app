const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    address: {
        street: {required: true, type: String},
        city: {required: true, type: String},
        state: {required: true, type: String},
        pincode: {type: String, required: true}
    },
    services: {type: Array, required: true},
    open: {type: Boolean, required: true},
    wesbite: {type: String, required: true}
});

module.exports = mongoose.model('Hospital', HospitalSchema);