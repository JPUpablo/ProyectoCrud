const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user:'Juan',
    password:'',
    database:'consultas'

}
)

conexion.connect((error)=>{
    if (error) {
        console.error('Error en la conexion: '+error)
        return
        
    }
    console.log("Conectado a la base de datos");  
})

module.exports = conexion;
