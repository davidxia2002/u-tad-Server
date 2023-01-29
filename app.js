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

for (let i=2; i<process.argv.length;i++) {
    console.log(process.argv[i]);
}