const express = require('express');
const app = express();

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',require('./router'))

app.use(express.static('public'));


app.listen(5000,()=>{
    console.log('Servidor corriendo en http://localhost:5000')
})

