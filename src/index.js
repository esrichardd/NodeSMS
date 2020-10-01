const app = require('./server');
require('./database');

// Inicializo en puerto
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});



