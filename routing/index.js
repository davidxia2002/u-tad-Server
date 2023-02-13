const http = require('http'); // Lo busca en "node_modules"
const cursos = require('./cursos'); // Con "./" lo busca en el path relativo a donde se encuentra index.js (puedes o no poner la extensión tal que ./cursos.js)
//const { infoCursos } = require('./cursos); // Con sintaxis de desestructuración, accediendo sin el cursos., es decir, solo con infoCursos.

// 1.Creo el servidor
const servidor = http.createServer((req, res) => {
    // 3.Implemento qué hacer cuando el servidor reciba una solicitud

    switch(req.method) {
        case 'GET':
          return manejarSolicitudGET(req, res); 
          /* Otra opción
          manejarSolicitudGET(req, res);
          break;
          */
        // 4. Peticion POST
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default: 
            res.statusCode = 501; // No implementado
            res.end("El método " + req.method + " no puede ser manejado por el servidor");
    }

});

//const manejarSolicitudGET = (req, res) => { ... }
function manejarSolicitudGET(req, res) {
    const path = req.url;
    //res.statusCode = 200;  // Por defecto
    //res.writeHead(200, {'Content-Type': 'application/json'}); // Si queremos escribir en la cabecera
    if (path === '/') {
        return res.end("Bienvenidos al primer servidor ");
    } else if (path === '/cursos') {
        return res.end(JSON.stringify(cursos.infoCursos)); //Desde un JSON de tipo objeto de JS a un JSON de tipo string.
    } else if (path === '/cursos/programacion') {
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else { // Este "else" no es necesario si hacemos "return" en los res.end
        res.statusCode = 404;
        return res.end("El recurso solicitado no existe");
    }
    /* NOTAS:
        - Normalmente, todos los PATH comienzan por /api/...
        - Podemos hacerlo con switch
        - TODO: añade /cursos/matematicas
        - Como comienza a complicarse, normalmente usaremos express que lo veremos a continuación
    */
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    //res.statusCode = 200;
    if (path === '/cursos/programacion') {
        let body = '';
        
        req.on('data', (content) => { // El evento 'data' ya viene predefinido, y se emite cuando llegan los datos
            body += content.toString();
        }) 

        req.on('end', () => { // El evento 'end' ya viene predefinido y se emite cuando se termina de recibir la información
            console.log(typeof body, body);
            body = JSON.parse(body); // Desde un JSON de tipo string a un JSON de tipo objeto de JS.
            console.log(typeof body, body.titulo); 
            return res.end('El servidor recibió una solicitud POST para ' + path);
        })     
    } else {
        res.statusCode = 404;
        return res.end("No existe el curso indicado " + path)
    }
}

// 2. Hago que el servidor escuche en el puerto 3000
const port = 3000;
servidor.listen(port, () => {
    console.log('Servidor escuchando en el puerto', port);
})

