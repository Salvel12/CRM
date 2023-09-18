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

