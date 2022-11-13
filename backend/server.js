import express from 'express';
import data from './data.js';
//creating local node server
// create express app object
const app = express();
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// define a port number from free ports
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server active on http://localhost:${port}`);
});
