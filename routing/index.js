const http = require('http'); // Lo busca en "node_modules"
const cursos = require('./cursos'); // Con "./" lo busca en el path relativo a donde se encuentra index.js (puedes o no poner la extensión tal que ./cursos.js)

// 1.Creo el servidor
const servidor = http.createServer((req, res) => {
    // 3.Implemento qué hacer cuando el servidor reciba una solicitud
    
});

// 2. Hago que el servidor escuche en el puerto 3000
const port = 3000;
servidor.listen(port, () => {
    console.log('Servidor escuchando en el puerto', port);
})

