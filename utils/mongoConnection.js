const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://axmialmeidamo:30yQFjIN9qeHQ9zp@cluster0.snzkaws.mongodb.net/PelisPlus?retryWrites=true&w=majority`
).then(() => console.log('Conexion exitosa a MongoDB'))
.catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;