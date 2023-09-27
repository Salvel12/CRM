const express = require('express');
const router = express.Router();
const path = require('path');
const conexion = require('../database/db');

//Invoke methods for the agent CRUD (Create)
const crudagent = require('./controllers/CRUD_agent');
router.post('/save', crudagent.save);

//Invoke methods for the property CRUD (Create)
const crud_property = require('./controllers/crud-property');
router.post('/saveproperty', crud_property.save)


// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"
router.use(express.static(path.join(__dirname, 'public')));

//Configuration of the routes and conexion to db with search sentences
router.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views', 'login'));
});

// Route to home page
router.get('/home', (req, res) => {
    res.render(path.join(__dirname, 'views', 'home'));
});

//Route to the agent list page with sql search sentence
router.get('/agent', (req, res) => {
    conexion.query('SELECT * FROM agent', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'agent_list.ejs'), { results: results });
        }
    })

});

//Route to the new agent page
router.get('/newagent', (req, res) => {
    res.render(path.join(__dirname, 'views', 'new_agent.ejs'));
});

//Route to the edit agent page
router.get('/editagent', (req, res) => {
    res.render(path.join(__dirname, 'views', 'agent_edit.ejs'));
});

//Route to the agent properties page
router.get('/agents-properties', (req, res) => {
    res.render(path.join(__dirname, 'views', 'agents-properties.ejs'));
});

//Route to the view property page
router.get('/view-property', (req, res) => {
    res.render(path.join(__dirname, 'views', 'view-property.ejs'));
});

//Route to the porperty details page
router.get('/property-details', (req, res) => {
    res.render(path.join(__dirname, 'views', 'property-details.ejs'));
});

//Route to the property list page with sql search sentence
router.get('/property-list', (req, res) => {
    conexion.query('SELECT * FROM property', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'property-list.ejs'), { results: results });
        }
    })
});

//Route to the create property page
router.get('/new-property', (req, res) => {
    res.render(path.join(__dirname, 'views', 'new-property.ejs'))
})

//Route to the property Assignmet page
router.get('/property-assignment', (req, res) => {
    res.render(path.join(__dirname, 'views', 'property-assignment.ejs'));
});

router.get('/customers', (req, res) => {
    res.render(path.join(__dirname, 'views', 'currentcustomers.ejs'));
});



module.exports = router