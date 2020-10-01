const { Router } = require('express');
const router = Router();
const { indexController, postMessage, receivedMessage } = require('../controllers/index.controller');

// Declaro las rutas y renderizo HTML
// Route para home
router.get('/', indexController);

// Route para enviar sms
router.post('/send-sms', postMessage);

// Route pra Recibir SMS
router.post('/sms', receivedMessage);

module.exports = router;