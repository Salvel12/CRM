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



// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/agent', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'agent_list.html'));
});

app.get('/newagent', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new_agent.html'));
});

app.get('/editagent', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'agent_edit.html'));
});

app.get('/agents-properties', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'agents-properties.html'));
});

app.get('/view-property', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'view-property.html'));
});

app.get('/property-details', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'property-details.html'));
});

app.get('/property-list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'property-list.html'));
});

app.get('/property-assignment', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'property-assignment.html'));
});

app.get('/customers', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'currentcustomers.html'));
});