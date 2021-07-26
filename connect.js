const mysql = require('mysql2');
require('dotenv').config();

   const host = process.env.host
   const user = process.env.user 
   const password = process.env.password
   const databases = process.env.database

// Agregamos los parametros de conexión 

  const connection = mysql.createConnection({             
        host: host,
        user: user,
        password: password,
        database : databases                                
    });
     
    connection.connect(function (err) {
        if (err) {
            console.log('error');
            console.log(err.code);
            console.log(err.fatal); 
           /*  document.getElementById('txtData').value = "conexion erronea";*/
        } else {            
           /* document.getElementById('txtData').value = "conexion exitosa";*/
        }
    });     

module.exports = connection //Exportamos la conexón para que cualquier clase la pueda requerir


