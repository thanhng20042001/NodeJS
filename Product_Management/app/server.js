const express = require('express');
const app = express();
const router = require('../app/routers/root.router');
const port = 3000;

app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Set up sequelize
const {sequelize} = require('../app/models/index');

// Dong bo mysql
// Nen xai force se hay hon
sequelize.sync({alter: true});