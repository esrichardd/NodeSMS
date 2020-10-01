const { Router } = require('express');
const router = Router();
const { sendMessage } = require('../twilio/send-sms');
const SMS = require('../models/sms');

// Declaro las rutas y renderizo HTML

// Route para home
router.get('/', async (req, res) => {
    const messages = await SMS.find().lean();
    res.render('index', { messages });
});

// Route para enviar sms
router.post('/send-sms', async (req, res) => {
    const { message, phone } = req.body;

    // Valido si el message y phone son validos
    if (!message || !phone) return res.json({ message: 'Message Invalid' });

    // Ejecuto la funcion para enviar SMS y almaceno el message y el phone en BBDD
    const result = await sendMessage(message, phone);
    console.log(result.sid);
    await SMS.create({ Body: message, To: phone })
    res.redirect('/');
    res.send('received');
});

module.exports = router;