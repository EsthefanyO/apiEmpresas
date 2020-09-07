const express = require('express');
const router = express.Router();

const { getAllEmpleados, nuevoEmpleado, updateEmpleado, deleteEmpleado } = require('../../models/empleados');

//Peticion para obtener todos los empleados

router.get('/', async (req, res) => {
    try {
        const empleados = await getAllEmpleados();
        res.json(empleados);
    } catch (error) {
        res.json({ error: error.message })
    }
})

//Peticion para crear un nuevo empleado
router.post('/', async (req, res) => {
    try {
        req.body.fecha_inc = new Date();
        const result = await nuevoEmpleado(req.body);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message })
    }
});

//Peticion para actualizar nuevo empleado
router.put('/', async (req, res) => {
    try {
        const result = await updateEmpleado(req.body);
        res.json({ succes: 'Empleado actualizado' })
    } catch (error) {
        res.json({ error: error.message })
    }
});

//Peticion para eliminar un empleado de la BD
router.delete('/', async (req, res) => {
    try {
        const result = await deleteEmpleado(req.body.id);
        res.json({ sucess: 'Empleado Eliminado' })
    } catch (error) {
        res.json({ error: error.message })
    }
});


module.exports = router;