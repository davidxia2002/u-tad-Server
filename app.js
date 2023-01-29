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

//2.4 Timers
//setTimeout(funcion, retraso, arg1DeLaFuncion, arg2DeLaFuncion, ...)
//1:24:05
