const express = require('express');
const bodyParser = require('body-parser');
const qaRoutes = require('./routes/qaRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/qa', qaRoutes);

const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
})