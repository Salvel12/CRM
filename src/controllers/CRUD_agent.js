const pool = require('../../database/db'); 

exports.save = (req, res)=>{ 
    console.log('Received POST request');
    console.log(req.body); // Verifica qué datos se reciben en req.body
    const NAME = req.body.NAME;
    const EMAIL = req.body.EMAIL;
    const ROL = req.body.ROL;
    const DNI = req.body.DNI;

    console.log(NAME + "-" + EMAIL + "-" + ROL + "-" + + "-" + DNI + "-" );
}
