const express = require('express');
const router = express.Router();
const conexion = require('./dataBase/db')


// Mostrar
router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM pacientes', (error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.render('index',{results:results});
        }
    })
})

router.get('/doctores',(req,res)=>{
    conexion.query('SELECT * FROM doctores', (error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.render('doctores',{results:results});
        }
    })
})

router.get('/citas',(req,res)=>{
    conexion.query('SELECT * FROM citas', (error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.render('citas',{results:results});
        }
    })
})


// Crear
router.get('/crear',(req,res)=>{

    res.render('crear');
    
})

// Editar

router.get('/editar/:id',(req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM pacientes WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.render('editar',{paciente:results[0]});
        }

    });
})

router.get('/editarDoctores/:id',(req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM doctores WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.render('editarDoctores',{doctor:results[0]});
        }

    });
})

// Borrar

router.get('/borrar/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM pacientes WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.redirect('/');
        }

    });


})

router.get('/borrarDoctores/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM doctores WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.redirect('/doctores');
        }

    });


})
router.get('/borrarCitas/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM citas WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
            
        } else {
            res.redirect('/citas');
        }

    });


})




const crud = require("./controller/crud")

router.post('/guardar',crud.guardar)
router.post('/guardarDoctor',crud.guardarDoctor)
router.post('/guardarCitas',crud.guardarCitas)

router.post('/actualizar',crud.actualizar)
router.post('/actualizarDoctores',crud.actualizarDoctores)

module.exports = router;