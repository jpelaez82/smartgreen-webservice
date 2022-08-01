const mongoose = require('mongoose');

const KakaoSchema = mongoose.Schema({
    temperatura: {
        type: String,
        required: true
    },
    humedad: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Kakao', KakaoSchema);