const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try{
        const data = await tracksModel.find({})
        res.send(data)
    }catch(err){
        //console.log(err)
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, 'ERROR_GET_ITEMS') //Si nos sirve el de por defecto que hemos establecido, no es necesario pasar el 403
    }
}

/**
 * Obtener un detalle
 * @param {} req 
 * @param {*} res 
 */
const getItem = (req, res) => {
}

/**
 * Inserta un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        //const { body } = req
        //const data = await tracksModel.create(body)
        //res.send(data)

        //express-validator nos provee de la función matchedData
        const body = req.body
        const bodyClean = matchedData(req)
        res.send({ body, bodyClean })
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}

/**
 * Actualizar un resitro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {

}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {

}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };