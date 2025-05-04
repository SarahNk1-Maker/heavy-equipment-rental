import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import servicesImage from '../assets/services.jpg'; // Adjust the path to your image

const primaryColor = '#b0bec5';

// Services data
const services = [
  {
    title: 'Site Preparation',
    description: 'Rent top-of-the-line heavy equipment for all your construction needs.',
    icon: <ConstructionIcon sx={{ fontSize: 50, color: '#3c3c3c' }} />,
  },
  {
    title: 'Excavation Services',
    description: 'Get 24/7 on-site support from our experienced technicians.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#3c3c3c' }} />,
  },
  {
    title: 'Demolition Services',
    description: 'Comprehensive fleet management services to keep your projects running smoothly.',
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: '#3c3c3c' }} />,
  },
  {
    title: 'Equipment Maintenance',
    description: 'Regular maintenance services to ensure your equipment is always in peak condition.',
    icon: <BuildIcon sx={{ fontSize: 50, color: '#3c3c3c' }} />,
  },
];

const AboutUsAndServices = () => {
  return (
    <Box
       style={{ 
        backgroundImage: `url(${servicesImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '80vh',
        filter: 'blur(0.5px)' // Apply blur only to the background
      }} >
      {/* About Us Section */}
      <Box sx={{ marginTop: '140px',marginBottom:'40' }}>
        <Container maxWidth="md">
       
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ marginTop: '70px', marginBottom: '70px', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          p: 4 
         }}>
        <Typography variant="h3" sx={{ color: '#3c3c3c', textAlign: 'center', fontWeight: 'bold', marginBottom: '40px' }}>
          Our Services
        </Typography>
        <Grid container spacing={5}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={3} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: '20px',
                  backgroundColor: primaryColor,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '250px', // Fixed height for all boxes
                }}
              >
                {service.icon}
                <Typography
                  variant="h6"
                  sx={{ color: '#3c3c3c', fontWeight: 'bold', marginTop: '10px', textAlign: 'center' }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#3c3c3c', textAlign: 'center', marginTop: '10px' }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsAndServices;
