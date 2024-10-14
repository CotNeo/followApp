const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    userId: { type: String, required: true },            // Kullanıcı kimliği
    latitude: { type: Number, required: true },          // Enlem bilgisi
    longitude: { type: Number, required: true },         // Boylam bilgisi
    timestamp: { type: Date, default: Date.now },        // Konum kaydedilme zamanı
});

module.exports = mongoose.model('Location', locationSchema);
