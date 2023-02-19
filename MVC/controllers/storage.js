const { storageModel } = require('../models')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send(data)
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
    const { body, file } = req
    const fileData = { 
        filename: file.filename,
        url: process.env.PUBLIC_URL+"/"+file.filename
    }
    const data = await storageModel.create(fileData)
    res.send(data)
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