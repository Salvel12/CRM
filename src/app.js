const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const path = require('path');
const app = express();
const port = 3000;

//config
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
  host:localhost,
  user: root,
  password: 'contraseña',
  port: 3306,
  database:crm
}, 'single'));



// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


//routes

