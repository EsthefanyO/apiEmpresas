const express = require('express');
const router = express.Router();

const { getAllDepartamento, nuevoDepartamento, updateDepartamento, eliminarDepartamento } = require('../../models/departamento');

//Peticion para obtener todos los departamentos
router.get('/', async (req, res) => {
    try {
        const departamento = await getAllDepartamento();
        res.json(departamento);
    } catch (error) {
        res.json({ error: error.message })
    }
});

//Peticion para crear un nuevo departamento
router.post('/', async (req, res) => {
    try {
        const result = await nuevoDepartamento(req.body);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message })

    }
});

//Actualizar un departamento
router.put('/', async (req, res) => {
    try {
        const result = await updateDepartamento(req.body);
        res.json({ succes: 'Departamento actualizado' })
    } catch (error) {
        res.json({ error: error.message })
    }
});

//Eliminar un departamento de la BD
router.delete('/', async (req, res) => {
    try {
        const result = await eliminarDepartamento(req.body.id);
        res.json({ sucess: 'Departamento Eliminado' })
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;