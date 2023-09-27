const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', require('./router'));

//config
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});