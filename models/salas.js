const {Schema, model} = require('mongoose')

const SalaSchema = Schema({

    codigo_sala: {
        type: String,
        required: [true, 'El codigo de la sala es necesaria']
    },

    descripcion: {
        type: String,
        required: [true, 'La descripción de la sala es necesaria']
    },

    numero_equipos: {
        type: Number,
        required: [true, 'El numero de equipo es necesario']
    },

    numero_sillas:{
        type: Number,
        required: [true, 'Es necesario ingresar el numero de sillas']
    }

})

//Exportar la función SalaSchema
module.exports = model('salas',SalaSchema)