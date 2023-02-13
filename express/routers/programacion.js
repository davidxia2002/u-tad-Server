const express = require('express');

const { programacion } = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const data = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (data.length === 0) {
        return res.status(404).send("No se encontró el curso " + lenguaje);
    }


    if (req.query.ordenar === 'vistas') {
        console.log("ordenando");
        res.send(JSON.stringify(data.sort((a, b) => b.vistas - a.vistas))); //Orden DESC, si lo queremos ASC, sería (a.vistas, b.vistas)
    } else {
        res.send(JSON.stringify(data));
    }
});


routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const data = programacion.filter(curso =>
        curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (data.length === 0) {
        return res.status(404).send("No se encontró el lenguaje ", + lenguaje + " de nivel " + nivel);
    }
    res.send(JSON.stringify(data));
});

module.exports = routerProgramacion;