const pool = require('../../database/db')

let client_id;
let agent_id;

exports.save = (req, res) => {
    console.log(req.body)
    try {
        const { property_type, property_bussines_type, address, price, agent_name, rol, cost, date } = req.body


        // const getCustomerID = new Promise((resolve, reject) => {
        //     const customer = `SELECT \`customer\`.\`Csutomer_ID\` FROM \`customer\` WHERE \`customer\`.\`name\` = '${Customer_name}'`;

        //     pool.query(customer, (error, results) => {
        //         if (error) {
        //             reject(error);
        //         } else {
        //             client_id = results[0].Csutomer_ID;
        //             resolve();
        //         }
        //     });

        // })

        const getAgentID = new Promise((resolve, reject) => {
            const agent = `SELECT \`agent\`.\`agent_id\` FROM \`agent\` WHERE \`agent\`.\`name\` = '${agent_name}'`;
            console.log("Consulta del select: " + agent);

            pool.query(agent, (error, results) => {
                if (error) {
                    console.error("Error on sql sentence of select agent: " + error);
                } else {
                    try {
                        agent_id = results[0].agent_id;
                        resolve();
                    } catch (error) {
                        console.error("Error agent doesn\'t found: " + error);
                        reject(error);
                        res.status(404).send('The spelled agent does\'t found in the database');
                    }
                }
            });
        })

        getAgentID.then(() => {
            console.log("promise all: in")
            pool.query('INSERT INTO property SET ?', { property_type: property_type, property_bussines_type: property_bussines_type, address: address, price: price, agent_id: agent_id }, (error, results) => {
                if (error) {
                    console.error("Error on sql sentence of insert into property: " + error);
                }
                else {
                    console.log("Datos del historial: " + rol + cost + date);
                    res.redirect('/property-list');
                }

            });
        }).catch(error => {
            console.error("server internal error: " + error);
            res.status(500).send('Some thing went wrong on the server');
        });
    } catch (error) {
        console.error("server internal error: " + error);
        res.status(500).send('Some thing went wrong on the server');
    }
}