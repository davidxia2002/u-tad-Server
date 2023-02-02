/* 1.- Introducción

function holaMundo(nombre) {
    return "Hola " + nombre;
}
console.log(holaMundo("mundo"));
*/

/* 2.- Módulos */
//const saludo =  require("./saludo.js");
const { holaMundo, adiosMundo } = require("./saludo.js");
//console.log(saludo.holaMundo("mundo"));
//console.log(saludo.adiosMundo());
console.log(holaMundo("mundo"));
console.log(adiosMundo());
//2.1 Module Console
console.error(new Error("Houston, tenemos un problema!"));
//2.2 Module Process
//console.log(process);
//console.log(process.env);
console.log(process.argv);  // [ node, app.js, arg1, arg2 ]
console.log(process.argv[2], process.argv[3]);

for (let i=2; i<process.argv.length; i++) {
    console.log(process.argv[i]);
}
console.log(process.memoryUsage());

//2.3 Module OS
const os = require("os");
console.log("SO:", os.type());
console.log("DIR:", os.homedir());
console.log("UP:", os.uptime());
console.log("USER:", os.userInfo());

/*2.4 Timers
//setTimeout(funcion, retraso, arg1DeLaFuncion, arg2DeLaFuncion, ...)
function mostrarTema(tema) {
    console.log("Estoy estudando " + tema);
}

function sumar(x, y) {
    console.log(x + y);
}

setTimeout(mostrarTema, 3000, "NodeJS");
setTimeout(sumar, 5000, 5, 6);

console.log("Antes");
setImmediate(mostrarTema, "Node.js");
console.log("Despues");

setInterval(mostrarTema, 2000, 'nodeJs');
setInterval(sumar, 3000, 3, 4);
*/

//2.5 FS (trabajar con una copia de index.html)
const fs = require("fs");
//Método asíncrono, tal que se llama a la tercera función (anónima) cuando se haya completado
fs.readFile("index.html", "utf-8", (err, content) => {
    if(err) {
        //console.log(err);
        throw err; //detiene la ejecución del programa y da más información
    } else{
        console.log(content);
    }
    console.log("Mensaje...") //Ver si se muestra si console.log y si throw err
});

//Async
/* Renombrar fichero
fs.rename("index.html", "main.html", (err) => {
    if (err) {
        throw err;
    }
    console.log("Nombre cambiado con éxito");
});
*/

/*Agregar contenida al final de un archivo (append)
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log("Archivo actualizado");
});
*/

/*Reemplazar todo el contenido del archivo
fs.writeFile("index.html", "Contenido Nuevo", (err)=>{
    if (err) {
        throw err;
    }
    console.log('Contenido reemplazado exitosamente');
});
*/

/*Eliminar un archivo
fs.unlink("index_copy.html", (err)=> {
    if (err) {
        throw err;
    }
    console.log("Archivo elmiminado");
});
*/
/*Método síncrono ejemplo, con el resto es igual.*/
const content = fs.readFileSync("index.html", "utf-8");
console.log(content);

console.log("Mensaje final"); //Ver cuando es asíncrono y cuando es síncrono (añadiendo al nombre de las funciones Sync)

