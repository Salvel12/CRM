const pool = require('../../database/db'); 

exports.save = (req, res)=>{ 
    console.log('Received POST request');
    console.log(req.body); // Verifica qué datos se reciben en req.body
    const NAME = req.body.NAME;
    const EMAIL = req.body.EMAIL;
    const ROL = req.body.ROL;
    const DNI = req.body.DNI;
    const DATE = req.body.DATE;

    pool.query('INSERT INTO agent SET ?',{name:NAME, rol:ROL, time:DATE, email:EMAIL, agent_id:DNI}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('../newagent');         
        }
    
    });
}
