const express = require('express');
const endpoints = require('./endpoints');
const swaggerDoc = require('./swaggerDoc');

const app = express(express);

endpoints(app);
swaggerDoc(app);

app.use((err, req, res, next) => console.error(`there was an error: ${err}`));


const port = process.env.NODE_PORT || 3000;
app.listen(port, () => console.log(`App started on port ${port}`))
