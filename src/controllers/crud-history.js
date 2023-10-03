const pool = require('../../database/db')

let client_id;

exports.save = (req, res) => {
    console.log(req.body);

    const {property_id, customer_name, rol, cost, date } = req.body

    const getCustomerID = new Promise((resolve, reject) => {
        console.log(customer_name);
        pool.query('SELECT customer_id FROM customer WHERE name = ?', [customer_name], (error, results) => {
            if (error) {
                console.error("Error on sql sentence of select customer: " + error);
                reject(error);
            } else {
                client_id = results[0].customer_id;
                resolve();
            }
        });
    });

    getCustomerID.then(() => {
        const url = `/history-list/${property_id}`;
        pool.query('INSERT INTO history SET ?', { rol: rol, cost: cost, date: date, customer_id: client_id, property_id: property_id}, (error, results) => {
            if (error)
                throw error;
            else
                res.redirect(url);
        });
    }).catch(error => {
        throw error;
    });
}

exports.update = (req, res) => {
    console.log(req.body);

    const {history_id, property_id, customer_name, rol, cost, date } = req.body

    const getCustomerID = new Promise((resolve, reject) => {
        console.log(customer_name);
        pool.query('SELECT customer_id FROM customer WHERE name = ?', [customer_name], (error, results) => {
            if (error) {
                console.error("Error on sql sentence of select customer: " + error);
                reject(error);
            } else {
                client_id = results[0].customer_id;
                resolve();
            }
        });
    });

    getCustomerID.then(() => {
        const url = `/history-list/${property_id}`;
        pool.query('UPDATE history SET ? WHERE history_id = ?', [{ rol: rol, cost: cost, date: date, customer_id: client_id, property_id: property_id}, history_id], (error, results) => {
            if (error)
                throw error;
            else
                res.redirect(url);
        });
    }).catch(error => {
        throw error;
    });
}
