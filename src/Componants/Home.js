import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent } from '@mui/material';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Home Services</Typography>
      {services.map(service => (
        <Card key={service.id}>
          <CardContent>
            <Typography variant="h6">{service.category}</Typography>
            <Typography>₹{service.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Home;