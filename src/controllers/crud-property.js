const pool = require('../../database/db')

let client_id;
let agent_id;

exports.save = (req, res) => {
    console.log(req.body)
    const Property_ID = req.body.Property_ID;
    const address = req.body.address;
    const category_ID = req.body.category_ID;
    const Customer_name = req.body.Customer_name;
    const time = req.body.time;
    const Name_agent = req.body.Name_agent;

    const getCustomerID = new Promise((resolve, reject) => {
        const customer = `SELECT \`customer\`.\`Csutomer_ID\` FROM \`customer\` WHERE \`customer\`.\`name\` = '${Customer_name}'`;

        pool.query(customer, (error, results) => {
            if (error) {
                reject(error);
            } else {
                client_id = results[0].Csutomer_ID;
                resolve();
            }
        });

    })

    const getAgentID = new Promise((resolve, reject) => {
        const agent = `SELECT \`agent\`.\`Agent_ID\` FROM \`agent\` WHERE \`agent\`.\`Name_agent\` = '${Name_agent}'`;

        pool.query(agent, (error, results) => {
            if (error) {
                reject(error);
            } else {
                agent_id = results[0].Agent_ID;
                resolve();
            }
        });
    })

    Promise.all([getCustomerID, getAgentID]).then(() => {
        console.log("Id del cliente " + client_id);
        
        pool.query('INSERT INTO property SET ?', { address: address, category_ID: category_ID, Customer_ID: client_id, time: time, Agent_ID: agent_id }, (error, results) => {
            if (error)
                throw error;
            else
                res.redirect('/property-list')
        });
    }).catch(error => {
        throw error;
    });
}