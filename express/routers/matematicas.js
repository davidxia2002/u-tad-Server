const express = require('express');

const { matematicas } = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const data = matematicas.filter(curso => curso.tema === tema);

  if (data.length === 0) {
    return res.status(404).send("No se encontró el tema " + tema);
  }
  res.send(JSON.stringify(data));
});

module.exports = routerMatematicas;