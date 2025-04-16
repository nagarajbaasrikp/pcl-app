const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    uses: {type: Array, required: true},
    importance: {type: String, required: true},
    sideEffects: {type: Array, required: true},
    dosage: {type: String, required: true},
    image_url: {type: String, required: true}
});

module.exports = mongoose.model('Medicine', MedicineSchema);