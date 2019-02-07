const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const jsonParser = bodyParser.json();

const URL = 'mongodb://localhost:27017/customers';

let customers = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Brad', lastName: 'Traversy' },
  { id: 3, firstName: 'Mary', lastName: 'Swanson' },
];

/// mongoose
mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true });

const customersSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Customer = mongoose.model('Customer', customersSchema);

const addCustomer = new Customer({
  firstName: 'Elon',
  lastName: 'Musk'
})

/*
addCustomer.save((err, doc) => {
  if (err) return console.log(err)
  console.log(doc);
})
*/



Customer.find({ firstName: /^Elon/ }, (err, data) => {
  if (err) return console.log(err);
  customers = data
});

//////////////
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post('/api/enteruser', jsonParser, (req, res) => {
  customers = [...customers, req.body];
  res.sendStatus(200);

});

const port = 3001;

app.listen(port, () => `Server running on port ${port}`);