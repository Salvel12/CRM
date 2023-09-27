const express = require('express');
const router = express.Router();
const path = require('path');


// Configuración de ruta estática para los archivos CSS, JS y otros recursos en la carpeta "public"
router.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views', 'login'));
});


router.get('/home', (req, res) => {
    res.render(path.join(__dirname, 'views', 'home'));
});

router.get('/agent', (req, res) => {
    conexion.query('SELECT* FROM agent', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'agent_list.ejs'), { results: results });
        }
    })

});

router.get('/newagent', (req, res) => {
    res.render(path.join(__dirname, 'views', 'new_agent.ejs'));
});

router.get('/editagent', (req, res) => {
    res.render(path.join(__dirname, 'views', 'agent_edit.ejs'));
});

router.get('/agents-properties', (req, res) => {
    res.render(path.join(__dirname, 'views', 'agents-properties.ejs'));
});

router.get('/view-property', (req, res) => {
    res.render(path.join(__dirname, 'views', 'view-property.ejs'));
});

router.get('/property-details', (req, res) => {
    res.render(path.join(__dirname, 'views', 'property-details.ejs'));
});

router.get('/property-list', (req, res) => {
    conexion.query('SELECT * FROM property', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'property-list.ejs'), { results: results });
        }
    })
});

router.get('/new-property', (req, res) => {
    res.render(path.join(__dirname, 'views', 'new-property.ejs'))
})

router.get('/property-assignment', (req, res) => {
    res.render(path.join(__dirname, 'views', 'property-assignment.ejs'));
});

router.get('/customers', (req, res) => {
    res.render(path.join(__dirname, 'views', 'currentcustomers.ejs'));
});



module.exports = router