import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
  {
    name: 'Fluoride Treatment',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed expedita aut dolorum. Possimus praesentium quam aperiam autem voluptatem rerum laborum.",
    img: fluoride
  },
  {
    name: 'Cavity Falling',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed expedita aut dolorum. Possimus praesentium quam aperiam autem voluptatem rerum laborum.",
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed expedita aut dolorum. Possimus praesentium quam aperiam autem voluptatem rerum laborum.",
    img: whitening
  },
]

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography sx={{ fontWeight: 500, color: 'info.main', m:2  }} variant="h6" component="div">
          OUR SERVICES
        </Typography>
          <Typography sx={{ fontWeight: 600 , mb:8}} variant="h4" component="div">
          Services We Provide
        </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              services.map(service => <Service
                key = {service.name}
                service= {service}
              ></Service>)
            }
      </Grid>
        </Container>
    </Box>
    </div>
  );
};

export default Services;