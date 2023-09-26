const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const path = require('path');
const app = express();
const port = 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs');

//config
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  port: 3306,
  database: 'crm'
}, 'single'));

// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'login'));
});

app.get('/home', (req, res) => {
  res.render(path.join(__dirname, 'views', 'home'));
});

app.get('/agent', (req, res) => {
  res.render(path.join(__dirname, 'views', 'agent_list.ejs'));
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