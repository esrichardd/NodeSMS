const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

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
    extname: '.hbs',
    helpers: require('./libs/helpers')
}));
app.set('view engine', '.hbs');

// middlewares: parametros que se ejecutan entre la peticion del cliente y la respuesta del servidor
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes: Declaro las rutas de la aplicacion
app.use(require('./routes/index.routes'));

// static files: Declaro en Express donde estan los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))



// app.get('/', (req, res) => {
//     res.send('hello word');
// })

// Exporto app
module.exports = app;