const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 100 },
    specialization: { type: String, required: true, max: 100 },
    hospital: {
        name: { type: String, required: true, max: 100 },
        address: { type: String, required: true, max: 250 },
        google_maps_link: { type: String, required: true, max: 250 }
    },
    experience: { type: Number, required: true },
    graduated: { type: Boolean, required: true }
});

module.exports = mongoose.model('Doctor', DoctorSchema);