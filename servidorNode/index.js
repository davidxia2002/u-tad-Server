/* 1 Import http*/
const http = require('http');

/* 2 Servidor básico pero funcional */
const servidor = http.createServer((req, res) => {
    /* 5 Lógica con request, mostrando sus propiedades más importantes*/
    console.log('req url:', req.url); //Se solicita a "/" y dependiendo del navegador, puede hacer una petición automática a /favicon.ico. Es decir, se obtiene el PATH.
    console.log('req método:', req.method); // Se obtiene el método (GET, POST, PUT, DELETE, ...)
    console.log('req cabeceras:', req.headers);
    /* 6 mostramos o modificamos las propiedad Status de la respuesta */
    console.log("res código de estado", res.statusCode);
    //También podemos cambiar el código de estado antes de enviar la respuesta con .end:
    //res.statusCode = 404;
    console.log("res código de estado modificado", res.statusCode); //También lo podemos ver en el navegador y en POST Client
    /*  7 modificamos las cabecera */
    res.setHeader('content-type', 'application/json');
    console.log("res cabeceras:", res.getHeaders());
    /* 3 Response */
    res.end('Hola mundo!'); //Permite enviar la respuesta al cliente cuando termina el proceso.
});

/* 4 Activamos el servidor para que escuche en un puerto concreto */
const port = 3000;
servidor.listen(port, () => { //Puerto y qué queremos hacer al inicializarse
    console.log("Servidor iniciado y escuchando en el puerto", port);
});