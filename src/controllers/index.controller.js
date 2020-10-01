const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { sendMessage } = require('../twilio/send-sms');
const SMS = require('../models/sms');

const { getSocket } = require('../sockets')

// Route Principal para Home
const indexController = async (req, res) => {
    const messages = await SMS.find().sort('-createdAt').lean();
    res.render('index', { messages });
}
// Route para Enviar SMS
const postMessage = async (req, res) => {
    const { message, phone } = req.body;

    // Valido si el message y phone son validos
    if (!message || !phone) return res.json({ message: 'Message Invalid' });

    // Ejecuto la funcion para enviar SMS y almaceno el message y el phone en BBDD
    const result = await sendMessage(message, phone);
    console.log(result.sid);
    await SMS.create({ Body: message, To: phone })
    res.redirect('/');
    res.send('received');
}


// Route para recibir SMS

const receivedMessage = async (req, res) => {

    const savedSMS = await SMS.create({
        Body: req.body.Body,
        From: req.body.From,
    })

    getSocket().emit('new message', savedSMS);

    const twiml = new MessagingResponse();

    twiml.message('This is my response');

    res.send(twiml.toString());
}



module.exports = {
    indexController, postMessage, receivedMessage
}