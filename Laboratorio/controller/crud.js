const conexion= require("../dataBase/db");

module.exports.guardar = (req,res)=>{

    const nombre= req.body.nombre;
    const apellido= req.body.apellido;
    var cedula= req.body.cedula;
    var edad= req.body.edad;
    var tel= req.body.tel;
    
    cedula = cedula.toString();
    edad = edad.toString();
    tel = tel.toString();
    edad = (new Date().getFullYear()- new Date(edad).getFullYear()).toString(); 
    
    
    conexion.query('INSERT INTO pacientes SET ? ',{nombre:nombre,apellido:apellido,cedula:cedula,edad:edad,telefono:tel},(error,results)=>{
        if(error){
            console.log("Error al guardar los datos"+error)
        }else{
            res.redirect('/')
        }

    })
    
}
module.exports.guardarDoctor = (req,res)=>{

    const nombre= req.body.nombreDoctor;
    const apellido= req.body.apellidoDoctor;
    var cedula= req.body.cedulaDoctor;
    const especialidad = req.body.especialidadDoctor;
    const consultorio= req.body.consultorioDoctor;
    const email= req.body.emailDoctor;
    
    
    
    
    
    
    
    conexion.query('INSERT INTO doctores SET ? ',{nombre:nombre,apellido:apellido,cedula:cedula,especialidad:especialidad,consultorio:consultorio,email:email},(error,results)=>{
        if(error){
            console.log("Error al guardar los datos: "+error)
        }else{
            res.redirect('/doctores')
        }

    })
    
}
module.exports.guardarCitas = (req,res)=>{

    var cedula = req.body.cedulaCita
    
    const especialidad = req.body.especialidadCita;
    var doctor; 

    cedula = cedula.toString();
    
    conexion.query('SELECT nombre FROM doctores WHERE especialidad = ? ',[especialidad], (error,results) =>{
        if(error){
            console.log("Error al guardar los datos: "+error)}
            else{
                doctor = results[0].nombre;
                
                conexion.query('INSERT INTO citas SET ? ',{ cedula:cedula,especialidad:especialidad,doctor:doctor},(error,results)=>{
                    if(error){
                        console.log("Error al guardar los datos: "+error)
                    }else{
                        res.redirect('/citas')
                    }
            
                })
            }
    })
    
    
    
}

// Actualizar Pacientes
module.exports.actualizar = (req, res)=>{

    const id= req.body.id;
    const nombre= req.body.nombre;
    const apellido= req.body.apellido;
    var cedula= req.body.cedula;
    var edad= req.body.edad;
    var tel= req.body.tel;
    
    cedula = cedula.toString();
    edad = edad.toString();
    tel = tel.toString();
    edad = (new Date().getFullYear()- new Date(edad).getFullYear()).toString(); 
    
    
    conexion.query('UPDATE pacientes SET ? WHERE id= ? ', [{nombre:nombre,apellido:apellido,cedula:cedula,edad:edad,telefono:tel}, id ],(error,results)=>{
        if(error){
            console.log("Error al guardar los datos"+error)
        }else{
            res.redirect('/')
        }

    })

}

// Actualizar Doctores

module.exports.actualizarDoctores = (req, res)=>{

    const id= req.body.id;
    const nombre= req.body.nombreDoctor;
    const apellido= req.body.apellidoDoctor;
    var cedula= req.body.cedulaDoctor;
    const especialidad = req.body.especialidadDoctor;
    const consultorio= req.body.consultorioDoctor;
    const email= req.body.emailDoctor;
    
    cedula = cedula.toString();
    
    conexion.query('UPDATE doctores SET ? WHERE id= ? ', [{nombre:nombre,apellido:apellido,cedula:cedula,especialidad:especialidad,consultorio:consultorio,email:email}, id ],(error,results)=>{
        if(error){
            console.log("Error al guardar los datos"+error)
        }else{
            res.redirect('/doctores')
        }

    })

}