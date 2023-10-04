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

//Invoke methods for the history CRUD (Update)
router.post('/updatehistory', crud_history.update);

router.get('/history-delete/:id/:property', (req, res) => {
    const id = req.params.id;
    const property = req.params.property
    const url = `/history-list/${property}`;
    conexion.query('DELETE FROM history WHERE history_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {

            res.redirect(url);
        }
    });
});

<<<<<<< HEAD
//Methods customers

//Invoke methods for the customer CRUD (Create)
const crudcustomer = require('./controllers/crud-client');
router.post('/savecustomer', crudcustomer.save);


//Invoke methods for the customer CRUD (Edit)
router.post('/updatecustomer', crudcustomer.update);

//Invoke methods for the customer CRUD (Delete)
router.get('/customer-delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM customer WHERE customer_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect("/customer");
        }
    });
});

=======
>>>>>>> 53652ea55f9a719ccfdd0bc9e18d301190eeb238



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
<<<<<<< HEAD
    }); 
=======
    });
>>>>>>> 53652ea55f9a719ccfdd0bc9e18d301190eeb238
});

//Route to a history item of a property with sql 
router.get('/history-list/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM history WHERE property_id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'history-list.ejs'), { results: results, property_id: id});
        }
    });
});

//Route to CREATE a history item
router.get('/new-history/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT name FROM customer', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'new-history.ejs'), { results: results, property_id: id });
        }
    });
});

//Route to UPDATE a history item
router.get('/history-edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM history WHERE history_id = ?', [id] , (error, results) => {
        if (error) {
            throw error;
        } else {
            conexion.query('SELECT * FROM customer', (error, customers) =>{
                if (error){
                    throw error;
                } else {
                    res.render(path.join(__dirname, 'views', 'history-edit.ejs'), { results: results[0], customers: customers});
                }
            });
        }
    });
});

//Route to the property Assignmet page
router.get('/property-assignment', (req, res) => {
    res.render(path.join(__dirname, 'views', 'property-assignment.ejs'));
});

//Route to the current customers page
router.get('/currentcustomers', (req, res) => {
    res.render(path.join(__dirname, 'views', 'currentcustomers.ejs'));
});

//Route to the edit customer page
router.get('/editcustomer', (req, res) => {
    res.render(path.join(__dirname, 'views', 'customer-edit.ejs'));
});

//Route to the new customer page
router.get('/newcustomer', (req, res) => {
    res.render(path.join(__dirname, 'views', 'new-customer.ejs'));
});

//Route to the agent list page with sql search sentence
router.get('/customer', (req, res) => {
    conexion.query('SELECT * FROM customer', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render(path.join(__dirname, 'views', 'currentcustomers.ejs'), { results: results });
        }
    });

});



module.exports = router