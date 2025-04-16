const mongoose = require('mongoose');

const LaboratorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pincode: {type: String, required: true}
    }
});

module.exports = mongoose.model('Laboratory', LaboratorySchema);