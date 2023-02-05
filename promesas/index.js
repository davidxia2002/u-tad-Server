/* Solo para fines pedagógicos */
const promesaCumplida = true;
/* Qué pasa si es rechazada? */
//const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => { //Las dos funciones resolve y reject nos permiten saber si fue exitosa o falló
    setTimeout(() => { //Con setTiemout, simplemente, simulamos un evento asíncrono
        if (promesaCumplida) {
            resolve('Promesa cumplida!');
        } else {
           reject('Promesa rechazada...');
        }
    }, 3000);
});

/*
miPromesa.then((valor) => {
    //Valor será lo que le hemos pasado a resolve, es decir, 'Promesa cumplida!'
    console.log(valor);
});
*/

//Ahora manejamos el error también
const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);