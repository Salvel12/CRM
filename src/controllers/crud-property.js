const pool = require('../../database/db')

let client_id;
let agent_id;

exports.save = (req, res) => {
    console.log(req.body)
    const property_type = req.body.property_type;
    const property_bussines_type = req.body.property_bussines_type;
    const address = req.body.address;
    const price = req.body.price;
    const agent_name = req.body.agent_name;
    const rol = req.body.rol;
    const cost = req.body.cost;
    const date = req.body.date;

    const getAgentID = new Promise((resolve, reject) => {
        const agent = `SELECT \`agent\`.\`agent_id\` FROM \`agent\` WHERE \`agent\`.\`name\` = '${agent_name}'`;
        console.log("Consulta del select: " + agent);

        pool.query(agent, (error, results) => {
            if (error) {
                reject(error);
            } else {
                agent_id = results[0].agent_id;
                console.log("id del agente " + agent_id)
                resolve();
            }
        });
    })

    getAgentID.then(() => {
        console.log("promise all: in")
        pool.query('INSERT INTO property SET ?', { property_type: property_type, property_bussines_type: property_bussines_type, address: address, price: price, agent_id: agent_id }, (error, results) => {
            if (error)
                throw error;
            else{
                res.redirect('/property-list');
                console.log("Datos del historial: " + rol + cost + date);
            }
        });
    }).catch(error => {
        throw error;
    });
}