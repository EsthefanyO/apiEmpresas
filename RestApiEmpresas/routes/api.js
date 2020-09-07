const express = require('express');
const router = express.Router();

//Aqui requiero las rutas de la api empleados y departamento//
const apiEmpleadosRouter = require('./api/empleados');
const apiDepartamentoRouter = require('./api/departamento');


router.use('./api/empleados', apiEmpleadosRouter);
router.use('./api/departamento', apiDepartamentoRouter);


module.exports = router