const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;
const ejs = require('ejs');


const crudagent = require('./controllers/CRUD_agent');
app.post('/save', crudagent.save);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//config
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



const conexion = require('./database');

// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


//routes
app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'login'));
});


app.get('/home', (req, res) => {
  res.render(path.join(__dirname, 'views', 'home'));
});

app.get('/agent', (req, res) => {
  conexion.query('SELECT* FROM agent', (error, results)=>{
    if(error){
      throw error;
    }else{
      res.render(path.join(__dirname, 'views', 'agent_list.ejs'),{results:results});
    }
  })
  
});

app.get('/newagent', (req, res) => {
  res.render(path.join(__dirname, 'views', 'new_agent.ejs'));
});

app.get('/editagent', (req, res) => {
  res.render(path.join(__dirname, 'views', 'agent_edit.ejs'));
});

app.get('/agents-properties', (req, res) => {
  res.render(path.join(__dirname, 'views', 'agents-properties.ejs'));
});

app.get('/view-property', (req, res) => {
  res.render(path.join(__dirname, 'views', 'view-property.ejs'));
});

app.get('/property-details', (req, res) => {
  res.render(path.join(__dirname, 'views', 'property-details.ejs'));
});

app.get('/property-list', (req, res) => {
  res.render(path.join(__dirname, 'views', 'property-list.ejs'));
});

app.get('/property-assignment', (req, res) => {
  res.render(path.join(__dirname, 'views', 'property-assignment.ejs'));
});

app.get('/customers', (req, res) => {
  res.render(path.join(__dirname, 'views', 'currentcustomers.ejs'));
});

