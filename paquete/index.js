//console.log("Hola mundo");
/*
const curso = require("./curso.json");
console.log(curso); //Es un objeto
console.log(curso.titulo);
*/

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVisitas": 45642,
    "numLikes": 21123,
    "temas": [
        "Javascript", 
        "Node.js"
    ],
    "esPublico": true
}
//console.log(typeof infoCurso, infoCurso); 

// Objeto -> String 
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(typeof infoCursoJSON, infoCursoJSON);

// String -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(typeof infoCursoObjeto, infoCursoObjeto);
console.log(infoCursoObjeto.titulo);