const EventEmitter = require('events'); //'events' devuelve la clase EventEmitter.

//console.log(EventEmitter); // Es una función (que actúa como una clase) que tiene el "on: [Function: on]"
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () => { //Cuando occurra el evento 'compra', definimos una acción en una función flecha
    console.log("Se realizó una compra!"); //Aquí implementaríamos la lógico a ejecutar
}); 

emisorProductos.emit('compra');
emisorProductos.emit('compra');


