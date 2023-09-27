const pool = require('../database')

exports.save = (req, res) => {
    console.log(req.body)
    const Property_ID = req.body.Property_ID
    const address = req.body.address
    const category_ID = req.body.category_ID
    const Customer_ID = req.body.Customer_ID
    const Time = req.body.Time
    const agent_ID = req.body.agent_ID

    console.log(Property_ID + ' - ' + address + ' - ' + category_ID + ' - ' + Customer_ID + ' - ' + Time + ' - ' + agent_ID)
}