const config = require('../config');
const client = require('twilio')(config.accountId, config.authToken);

/**
 * Send an SMS message
 * @param {string} body - The message body
 * @param {string} phone - the phone number
 */

 // Añado funcion que Envía los SMS con Twilio 
async function sendMessage(body, phone) {
    try {
        const message = await client.messages.create({
            to: phone,
            from: config.twilioPhone,
            body
        })
        return message;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { sendMessage };