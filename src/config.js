// Configuro en un objeto las variables de entorno
module.exports = {
    accountId: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phone: process.env.PHONE,
    twilioPhone: process.env.TWILIO_PHONE
}