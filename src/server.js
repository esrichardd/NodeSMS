const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializo el servidor con Express
const app = express();

// Settings: Realizo las configuraciones del Servidor 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// middlewares

// routes
app.use(require('./routes/index.routes'))
// static files




// app.get('/', (req, res) => {
//     res.send('hello word');
// })

// Exporto app
module.exports = app;