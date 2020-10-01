const timeago = require('timeago.js')

// Funcion para ocultar el numero de telefono
module.exports = {
    hideNumber: (phoneNumber = '') => {
        return phoneNumber.replace(/[0-9]/g, 'x');
    },

    timeago: (date) => {
        return timeago.format(date)
    }
}