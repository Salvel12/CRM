const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const ejs = require('ejs');

const path = require('path');

//Route for save registers
const crudagent = require('./controllers/CRUD_agent');
app.post('/save', crudagent.save);

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//config
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.use('/', require('./router'));

// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"