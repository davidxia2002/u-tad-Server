/* 1.- Introducción

function holaMundo(nombre) {
    return "Hola " + nombre;
}
console.log(holaMundo("mundo"));
*/

/* 2.- Módulos */
const saludo =  require("./saludo.js");
//console.log(saludo);
console.log(saludo.holaMundo("mundo"));
console.log(saludo.adiosMundo());