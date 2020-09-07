//Metodo para recuperar todos los departamentos

function getAllDepartamento() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresas.departamento', (error, rows) => {
            if (error) return reject(error)
            resolve(rows);
        });
    })
};

//Metodo para crear un nuevo departamento
function nuevoDepartamento({ nombre, ciudad }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO empresas.departamento (nombre,ciudad) VALUES (?,?)',
            [nombre, ciudad],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            })
    })
};

//Metodo que actualiza todos los departamentos
function updateDepartamento({ nombre, ciudad, id }) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE empresas.departamento SET nombre=?, ciudad=? WHERE id=?',
            [nombre, ciudad, id],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
                console.log(result);
            })
    })
};

//Metodo para eliminar un departamento
function eliminarDepartamento(pId) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM empresas.departamento WHERE id=?',
            [pId],
            (error, result) => {
                if (error) return reject(error);
                resolve(result)
            })
    })
};

module.exports = { getAllDepartamento, nuevoDepartamento, updateDepartamento, eliminarDepartamento }