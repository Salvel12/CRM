const pool = require('../../database/db'); 

let customer_id;
let agent_id;

exports.save = (req,res) => {
    console.log('Received POST request');
    console.log(req,body);
    const NAME = req.body.NAME;
    const SALES = req.body.SALES;
    const AGENT_ID = req.body.AGENTID;
    const CELLPHONE = req.body.CELLPHONE;
    const EMAIL = req.body.EMAIL;
    const DNI = req.body.DNI;

    pool.query('INSERT INTO customer SET ?',{name:NAME, sales:SALES, cell_number:CELLPHONE, email:EMAIL,agent_id:AGENT_ID, customer_id:DNI }, (error, results)=>{
        if (error){
            console.log(error);
        }else{
            res.redirect('../customer');
        }

    });
}

exports.update = (req, res)=>{ 
    console.log(req,body);
    const NAME = req.body.NAME;
    const SALES = req.body.SALES;
    const AGENT_ID = req.body.AGENTID;
    const CELLPHONE = req.body.CELLPHONE;
    const EMAIL = req.body.EMAIL;
    const DNI = req.body.DNI;

    pool.query('UPDATE customer SET ? WHERE customer_id=?', [{name:NAME, sales:SALES, cell_number:CELLPHONE, email:EMAIL, agent_id:AGENT_ID}, DNI], (error, results)=>{
        if(error){
            console.log(error);
        }else{   
            res.redirect('../customer');         
        }
    })
}

