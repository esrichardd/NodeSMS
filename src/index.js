// requiero las variables de entorno
require('dotenv').config();

const app = require('./server');
const http = require('http');

const server = http.createServer(app);


require('./database');
require('./sockets').connection(server);

// Inicializo en puerto
server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});



