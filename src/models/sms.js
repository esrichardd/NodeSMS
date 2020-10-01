const { Schema, model } = require('mongoose');

// Definimos el Schema de los datos
const newSchema = new Schema({
    Body: {
        type: String,
        required: true
    },
    From: {
        type: String
    },
    To: {
        type: String
    }
}, {
    timestamps: true
})

// Exportamos el modelo
module.exports = model('sms', newSchema);