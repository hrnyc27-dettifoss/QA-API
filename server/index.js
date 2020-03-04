const express = require('express');
const bodyParser = require('body-parser');
const qaRoutes = require('./routes/qaRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/loaderio-2d551add23c3abcd37412f379be5537f/', (req, res) => {
  res.send('loaderio-2d551add23c3abcd37412f379be5537f');
});

app.use('/qa', qaRoutes);

const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
})