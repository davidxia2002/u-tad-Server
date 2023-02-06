// Async / Await: Trabajo de manera síncrona con peticiones asíncronas, es decir, espero por el resultado antes de seguir ejecutando el resto del código

//Crear array de objetos de productos
let products = [
    {
        nombre: "PC-Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Cámara-Reflex",
        marca: "Canon",
        precio: 650
    }
]

//Crear una función para obtener los productos que debe ser asíncrona (simúlalo con setTimeout)
function getProducts() {
    return new Promise((resolve) => { //Si no devuelvo el Promise no funcionaría porque setTimeout es asíncrona
        console.log("Cargando productos...");
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
}

//Con .then
getProducts().then(data => {
    console.log("Opc1:", data);
})

//Con async/await
//let misProductos = await getProducts(); //Falla porque solo se puede utilizar dentro de funciones asíncronas. 
//Así que lo tengo que meter dentro de una función async
async function getMyProducts() {
    let misProductos = await getProducts(); 
    console.log("Opc2:", misProductos);
}

getMyProducts();

