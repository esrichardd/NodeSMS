const mongoose = require('mongoose');

// Me conecto a la BBDD con Mongoose
mongoose.connect('mongodb://localhost/nodeSMS', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is Connected'))
    .catch(err => console.log(err))