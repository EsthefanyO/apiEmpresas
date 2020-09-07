//Metodo para recuperar todos los empleados de la BD

function getAllEmpleados() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresas.empleados', (error, rows) => {
            if (error) return reject(error);
            resolve(rows);
        })
    })
}

//Metodo para crear nuevos empleados 
function nuevoEmpleado({ nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO empresas.empleados (nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id) VALUES (?,?,?,?,?,?,?,?,?)',
            [nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            })
    })
};

//Metodo para actualizar empleados
function updateEmpleado({ nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id, id }) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE empresas.empleados SET nombre=?, dni=?, sexo=?, fecha_nac=?, salario=?, cargo=?, fk_departamento=?, jefe_id=? WHERE id=?',
            [nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento, jefe_id, id],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
                console.log(result);
            })
    })
};

//Metodo para eliminar un empleado

function deleteEmpleado(pId) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM empresas.empleados WHERE id=?',
            [pId],
            (error, result) => {
                if (error) return reject(error);
                resolve(result)
            })
    })
};



module.exports = { getAllEmpleados, nuevoEmpleado, updateEmpleado, deleteEmpleado }