const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=> {
    res.send('¡Hola Mundo!');
});

app.listen(port,()=> {
    console.log('Servidor Corriendo en http://Localhost:{port}');
});

//rutas y middlewares

//rutas
app.get('usuarios',(req, res) =>{
    res.send('Usuario Creado');
})

//Middlewares
app.get((req, res, next) =>{
    console.log('Solicitud recibida: ${req.url}');
    next(); //pasa el control al siguiente middleware o rutas
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

npm install dotenv 

require('dotenv'.config());
cont port = process.env.PORT || 3000

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salio Mal!');
});