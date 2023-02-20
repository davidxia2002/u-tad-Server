const express = require("express")
const router = express.Router()
const { validatorCreateItem } = require("../validators/tracks")
const { getItems, getItem, createItem } = require("../controllers/tracks")
//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

//El nombre del fichero se llama igual que la ruta, entonces
//router.get("/tracks", (req, res) => {
router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", validatorCreateItem, createItem)

module.exports = router