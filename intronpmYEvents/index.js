const EventEmitter = require('events'); //'events' devuelve la clase EventEmitter.

//console.log(EventEmitter); // Es una función (que actúa como una clase) que tiene el "on: [Function: on]"
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () => { //Cuando occurra el evento 'compra', definimos una acción en una función flecha
    console.log("Se realizó una compra!"); //Aquí implementaríamos la lógico a ejecutar
}); 

emisorProductos.emit('compra');

//Si necesitáramos parámetros:

emisorProductos.on('compra2', (total, numProductos) => {
    console.log("Se realizó la compra 2 del producto", numProductos, "por un total de", "$"+total);
})

emisorProductos.emit('compra2', 100, 10);



