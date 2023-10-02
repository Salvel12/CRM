const express = require('express');
const router = express.Router();
const path = require('path');
const conexion = require('../database/db');

//Methods agent

//Invoke methods for the agent CRUD (Create)
const crudagent = require('./controllers/CRUD_agent');
router.post('/save', crudagent.save);


//Invoke methods for the agent CRUD (Edit)
router.post('/update', crudagent.update);

//Invoke methods for the agent CRUD (Delete)
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM agent WHERE agent_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect("/agent");
        }
    });
})

//Methods for the property

//Invoke methods for the property CRUD (Create)
const crud_property = require('./controllers/crud-property');
router.post('/saveproperty', crud_property.save);

//Invoke methods for the property CRUD (Update)
router.post('/updateproperty', crud_property.update);

//Route to DELETE a property
router.get('/property-delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM property WHERE property_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/property-list');
        }
    });
});

//Methods for the history

//Invoke methods for the history CRUD (Create)
const crud_history = require('./controllers/crud-history');
router.post('/savehistory', crud_history.save);



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
    });

});

//Route to the new agent page
router.get('/newagent', (req, res) => {
    res.render(path.join(__dirname, 'views', 'new_agent.ejs'));
});



//Route to the edit agent page
router.get('/editagent/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    conexion.query('SELECT * FROM agent WHERE agent_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'agent_edit.ejs'), { agent: results[0] });
        }
    });
});


//Route to the agent properties page
router.get('/agents-properties/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM agent WHERE agent_id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            conexion.query('SELECT * FROM property WHERE agent_id = ?', [results[0].agent_id], (error, properties) => {
                res.render(path.join(__dirname, 'views', 'agents-properties.ejs'), { agent: results[0], properties: properties });
            });
        }
    });
});

//Route to the view property page
router.get('/view-property', (req, res) => {
    res.render(path.join(__dirname, 'views', 'view-property.ejs'));
});

//Route to the porperty details page
router.get('/property-details/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM property WHERE property_id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            conexion.query('SELECT name FROM agent WHERE agent_id = ?', [results[0].agent_id], (error, agent) => {
                if (error) {
                    throw error;
                } else {
                    res.render(path.join(__dirname, 'views', 'property-details.ejs'), { results: results[0], agent: agent[0] });
                }
            });
        }
    });
});

//Route to the property list page with sql search sentence
router.get('/property-list', (req, res) => {
    conexion.query('SELECT * FROM property', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'property-list.ejs'), { results: results });
        }
    });
});

//Route to CREATE a property
router.get('/new-property', (req, res) => {
    conexion.query('SELECT name FROM agent', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'new-property.ejs'), { results: results });
        }
    });
});

//Route to EDIT a property
router.get('/property-edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM property WHERE property_id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            conexion.query('SELECT * FROM agent', (error, agents) => {
                if (error) {
                    throw error;
                } else {
                    res.render(path.join(__dirname, 'views', 'property-edit.ejs'), { property: results[0], agents: agents });
                }
            });
        }
    });
});

//Route to a history item of a property with sql 
router.get('/history-list/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM history WHERE property_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'history-list.ejs'), { results: results });
        }
    });
});

//Route to CREATE a history item
router.get('/new-history', (req, res) => {
    conexion.query('SELECT name FROM customer', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'new-history.ejs'), { results: results });
        }
    });
});

//Route to the property Assignmet page
router.get('/property-assignment', (req, res) => {
    res.render(path.join(__dirname, 'views', 'property-assignment.ejs'));
});

router.get('/customers', (req, res) => {
    res.render(path.join(__dirname, 'views', 'currentcustomers.ejs'));
});



module.exports = router