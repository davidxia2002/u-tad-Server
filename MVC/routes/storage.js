const express = require("express")
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const { createItem } = require("../controllers/storage")

/*Lo moveremos a otro archivo
const multer = require("multer")

const storage = multer.diskStorage({
    destination:function(req, file, callback){ //Pasan argumentos automáticamente
        const pathStorage = __dirname+"/../storage" 
        callback(null, pathStorage) //error y destination
    },
    filename:function(req, file, callback){ //Sobreescribimos o renombramos
        //Tienen extensión jpg, pdf, mp4
        const ext = file.originalname.split(".").pop() //el último valor
        const filename = "file-"+Date.now()+"."+ext
        callback(null, filename)
    }
})
//Middleware en la ruta y el controlador
const uploadMiddleware = multer({storage})
//hasta aquí*/

// Ya estmos en "/api/storage", solo enviamos uno con .single, sino .multi
/*
router.post("/", uploadMiddleware.single("image"), (req, res) => {
    res.send("test upload")
})
*/

router.post("/", uploadMiddleware.single("image"), createItem)

module.exports = router;