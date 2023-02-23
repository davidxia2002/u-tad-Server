const express = require("express")
const router = express.Router()
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

//El nombre del fichero se llama igual que la ruta, entonces
/**
 * Lista los items
 */
//router.get("/tracks", (req, res) => {
router.get("/", getItems)

/**
 * Obtiene detelle de un item (por id)
 */
router.get("/:id", validatorGetItem, getItem)

/**
 * Crea un nuevo item
 */
router.post("/", validatorCreateItem, createItem)
//router.post("/", validatorCreateItem, customHeader, createItem) // Podemos añadir tantos middleware como queramos

/**
 * Actualiza un item
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)

/**
 * Elimina un registro
 */
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router