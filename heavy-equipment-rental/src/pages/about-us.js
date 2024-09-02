import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';

const primaryColor = '#eeab02';

// Services data
const services = [
  {
    title: 'Heavy Equipment Rental',
    description: 'Rent top-of-the-line heavy equipment for all your construction needs.',
    icon: <ConstructionIcon sx={{ fontSize: 50, color: '#3c3c3c' }} />,
  },
  {
    title: 'On-Site Support',
    description: 'Get 24/7 on-site support from our experienced technicians.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#3c3c3c' }} />,
  },
  {
    title: 'Fleet Management',
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
    <div>
      {/* About Us Section */}
      <Box sx={{ marginTop: '140px',marginBottom:'40', backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ marginBottom: '24px', color: primaryColor }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px' }}>
            Welcome to Alpha Industries! We are a leading provider of heavy equipment rental services,
            dedicated to delivering high-quality equipment and exceptional customer service.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px' }}>
            Our mission is to provide reliable, state-of-the-art equipment to help our clients achieve
            their construction and industrial goals efficiently and effectively. With years of experience
            in the industry, we pride ourselves on our commitment to excellence and our ability to meet
            the diverse needs of our customers.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px' }}>
            At Alpha Industries, we believe in building strong relationships with our clients, based on
            trust, transparency, and mutual respect. Our team of experts is here to assist you every step
            of the way, ensuring that you have the right equipment for your project and that it performs
            at its best.
          </Typography>
          <Typography variant="body1">
            Thank you for considering Alpha Industries for your equipment rental needs. We look forward to
            working with you and helping you achieve your project goals.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ marginTop: '70px', marginBottom: '70px' }}>
        <Typography variant="h3" sx={{ color: '#3c3c3c', textAlign: 'center', fontWeight: 'bold', marginBottom: '40px' }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
    </div>
  );
};

export default AboutUsAndServices;
