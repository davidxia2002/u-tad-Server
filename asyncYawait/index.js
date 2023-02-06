//Tenemos una tienda y queremos vender un producto (esta operación será asíncrona)
function venderProducto(producto) {
    return new Promise((resolve, reject) => { //resolve y reject son dos funciones que se asignan automáticamente
        console.log("Venta:", producto, "de U-tad");
        //simulamos proceso asíncrono con setTimeout
        setTimeout(() => {
            if (producto === "MASTER") {
                //Aquí se ejecutaría la lógica de la venta, y al final la confirmación con resolve()
                resolve("Venta de MASTER realizada!");
            } else {
                reject('Este producto no está disponible actualmente');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    //return new Promise((resolve, reject) => { //No estamos usando reject, así que se podría omitir
    return new Promise(resolve => { //Si es solo un parámetro, no son necesarios los paréntesis
        console.log("Procesando respuesta...");
        console.log("La respuesta fue:", respuesta);
        setTimeout(() => {
            resolve("Gracias por tu compra. Disfruta de tu master de U-tad");
        }, 4000);
    });
} 

/* 
   Primero hacemos la venta del producto y después procesamos el pedido de ese producto.
   Al ser dos procesos asíncronos tenemos que garantizar que primero se ejecute venderProducto y luego procesarPedido.
   Para que se haga en un orden específico podemos hacerlo encadenando Promesas
*/

venderProducto("MASTER")
    .then(respuesta => { //Primero se ejecuta el proceso venderProducto de manera asíncrona, y cuando se completa, se llama a procesarPedido dentro del .then().
                         //como es asíncrono, devuelve una promesa, por lo que con return estamos devolviendo esa promesa. Y, de este modo, encadenamos promesas.
        console.log("Respuesta recibida:", respuesta);
        return procesarPedido(respuesta); //Chaining Promises
    })
    .then(respuestaProcesada => { //Sería el valor en resolve de procesarPedido: "Garacias por tu compra..."
        console.log(respuestaProcesada);
    })
    .catch(err => {
        console.log(err);
    });



