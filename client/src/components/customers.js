import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);


  useEffect(() => {

    axios.get('/api/customers').then((response) => setCustomers(response.data)).catch((error) => console.log(error));

  }, [customers])


  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer =>
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
      </ul>
    </div>
  );
};

export default Customers;