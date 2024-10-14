const mongoose = require('mongoose');

const deviceHealthSchema = new mongoose.Schema({
    userId: { type: String, required: true },           // Kullanıcı kimliği
    batteryLevel: { type: Number, required: true },      // Pil seviyesi (%)
    storage: { type: Number, required: true },           // Cihazın mevcut depolama alanı (MB veya GB)
    isOnline: { type: Boolean, default: true },          // Cihazın çevrimiçi durumu
    timestamp: { type: Date, default: Date.now },        // Kayıt zamanı
});

module.exports = mongoose.model('DeviceHealth', deviceHealthSchema);
