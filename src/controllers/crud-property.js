const pool = require('../../database/db')

exports.save = (req, res) => {
    console.log(req.body)
    const Property_ID = req.body.Property_ID;
    const address = req.body.address;
    const category_ID = req.body.category_ID;
    const Customer_name = req.body.Customer_name;
    const time = req.body.time;
    const Name_agent = req.body.Name_agent;

    pool.query('SELECT `customer`.`Csutomer_ID` FROM `customer` WHERE `customer`.`name` = ?',{name: Customer_name}, (error, results) =>{
        if (error) {
            throw error;
        } else {
            console.log('Resultados 2: ' + results);
        }
    })
    //pool.query('INSERT INTO property SET ?', { address: address, category_ID: category_ID, Customer_ID: })
}