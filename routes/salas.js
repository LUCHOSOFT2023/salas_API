const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {salaGet, salaPost, salaPut, salaDelete} = require('../controllers/salas')

route.get('/',salaGet) //Listar los datos

route.post('/', salaPost) //Insertar Datos

route.put('/', salaPut) //Modificar los datos

route.delete('/', salaDelete) //Eliminar los datos

module.exports = route