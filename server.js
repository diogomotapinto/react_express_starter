const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

let customers = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Brad', lastName: 'Traversy' },
  { id: 3, firstName: 'Mary', lastName: 'Swanson' },
];

app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post('/api/enteruser', jsonParser, (req, res) => {
  customers = [...customers, req.body];
  res.sendStatus(200);
  console.log(customers);
});

const port = 3001;

app.listen(port, () => `Server running on port ${port}`);