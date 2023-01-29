/* 2.- Módulos */
function holaMundo(nombre) {
    return "Hola " + nombre;
}

function adiosMundo() {
    return "bye";
}

module.exports.holaMundo = holaMundo;
module.exports.adiosMundo = adiosMundo;