const {Router} = require('express');
const router = Router();

// Declaro las rutas y renderizo HTML
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;