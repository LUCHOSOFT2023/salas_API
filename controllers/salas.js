const {response} = require('express')


//Importación de los modelos
const Sala = require('../models/salas')

//Método GET de la API
const salaGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {_id} = req.body;
    //Consultar todos los usuarios
    try {
        let sala;

        if (_id) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            sala = await sala.find({ _id: _id });
        } else {
            sala = await sala.find();
        }

        res.json({ sala });
    } catch (error) {
        console.error('Error al buscar sala:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const salaPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const sala= new Sala(body)
        await sala.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const salaPut = async(req, res) => {

    const {codigo_sala, descripcion, numero_equipos, numero_sillas} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Sala.updateMany({codigo_sala:codigo_sala}, {$set: {
            descripcion:descripcion,
            numero_equipos:numero_equipos,
            numero_sillas:numero_sillas
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const salaDelete = async (req, res) => {
    const {codigo_sala} = req.body
    let mensaje = ''

    try{
        const sala = await Sala.deleteOne({codigo_sala:codigo_sala})
        mensaje = 'La eliminación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    salaGet,
    salaPost,
    salaPut,
    salaDelete
}