const { matchedData } = require("express-validator")
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const {usersModel} = require("../models")

const loginController = async (req, res) => {
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = {...req, password} // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
    const dataUser = await usersModel.create(body)
    //Si no queremos que se devuelva el hash con "findOne", en el modelo de users ponemos select: false en el campo password
    //Además, en este caso con "create", debemos setear la propiedad tal que:  
    dataUser.set('password', undefined, { strict: false })

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }
    res.send(data)  
}

module.exports = { loginController }