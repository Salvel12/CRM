const pool = require('../../database/db'); 

exports.save = (req, res)=>{ 
    console.log(req.body); // Verifica qué datos se reciben en req.body
    const name = req.body.NAME;
    const surname = req.body.SURNAME;
    const address = req.body.ADDRESS;
    const phone = req.body.phone;
    const dni = req.body.DNI;
    const card = req.body.CARD;

    console.log(name + "-" + surname + "-" + address + "-" + phone + "-" + dni + "-" + card);
}
