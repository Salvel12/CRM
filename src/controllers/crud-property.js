const pool = require('../../database/db')

let client_id;
let agent_id;

exports.save = (req, res) => {
    console.log(req.body)
    try {
        const { property_type, property_bussines_type, address, price, rooms, bathrooms, green_zone, meters, agent_name } = req.body

        const getAgentID = new Promise((resolve, reject) => {
            const agent = `SELECT \`agent\`.\`agent_id\` FROM \`agent\` WHERE \`agent\`.\`name\` = '${agent_name}'`;
            console.log("Consulta del select: " + agent);

            pool.query(agent, (error, results) => {
                if (error) {
                    console.error("Error on sql sentence of select agent: " + error);
                    reject(error);
                } else {
                    agent_id = results[0].agent_id;
                    resolve();
                }
            });
        })

        getAgentID.then(() => {
            pool.query('INSERT INTO property SET ?', {
                property_type: property_type, property_bussines_type: property_bussines_type, address: address,
                price: price, rooms: rooms, bathrooms: bathrooms, green_zone: green_zone, meters: meters, agent_id: agent_id
            }, (error, results) => {
                if (error) {
                    console.error("Error on sql sentence of insert into property: " + error);
                }
                else {
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

exports.update = (req, res) => {
    console.log(req.body)
    const { property_id, property_type, property_bussines_type, address, price, rooms, bathrooms, green_zone, meters, agent_name } = req.body

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
        pool.query('UPDATE property SET ? WHERE property_id=?', [{ property_type, property_bussines_type, address, price, rooms, bathrooms, green_zone, meters, agent_id }, property_id], (error, results) => {
            if (error) {
                console.error("Error on sql sentence of update property: " + error);
            } else {
                res.redirect('/property-list')
            }
        });
    }).catch(error => {
        console.error("server internal error: " + error);
        res.status(500).send('Some thing went wrong on the server');
    });;
}