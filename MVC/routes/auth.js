const express = require("express")
const { loginController } = require("../controllers/auth")
const {validatorRegister, validatorLogin} = require("../validators/auth")
const router = express.Router()


//TODO Crear petición en index.http: http://localhost:3000/api/auth/register
router.post("/register", validatorRegister, loginController)

//TODO Crear petición en index.http: http://localhost:3000/api/auth/login
router.post("/login", (req, res) => {

}) 

module.exports = router
