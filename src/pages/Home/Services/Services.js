import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/whitening.png';

const services = [

        {
          
          name: 'Fluoride Treatment',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: fluoride
      },

      {
          
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: cavity
    },

    {
          
      name: 'Teeth Whitening',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: teeth
  },

];



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
              <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }}   variant="h5" component="div">
                 OUR SERVICES
              </Typography>
              <Typography sx={{ fontWeight: 600, m: 5 }}  variant="h4" component="div">
                 Services We Provide
              </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                     <Service
                        service = { service }
                     ></Service>
                </Grid>
          ))}
        </Grid>
            </Container>
      </Box>
    );
};

export default Services;