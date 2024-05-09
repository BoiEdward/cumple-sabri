// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); // Configurar el motor de plantillas EJS

// Servir archivos estáticos desde el directorio 'views'
app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Ruta para la página principal
app.get('/', (req, res) => {

    res.render('index');
});