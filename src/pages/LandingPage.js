import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import EquipmentWidget from '../../src/pages/equipmentwidget';
import alphaImage from '../assets/services.jpg'; // Import your image here

const LandingPage = () => {
  return (
    <div>
      {/* Widget Section */}
      <Container sx={{ my: 10 }}>
        <Typography
       
          variant="h4"
          sx={{ color: '#3c3c3c', textAlign: 'center', fontWeight: 'bold', mb: 4 ,mt: 22}}
        >
        </Typography>
        
        <EquipmentWidget />
      </Container>

      {/* About Alpha Industries Section */}
      <Container sx={{ marginTop: 10 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Left side - Text */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              sx={{ color: '#3c3c3c', textAlign: 'left', fontWeight: 'bold' }}
            >
              About Alpha Industries
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#3c3c3c', textAlign: 'left', fontWeight: 'normal', mt: 2 }}
            >
              Alpha Industries is a leading provider of high-performance industrial equipment and services. 
              With over 15 years of experience in the industry, we are dedicated to delivering innovative solutions 
              and unmatched reliability to our clients across various sectors.
            
           
              Our team of experts ensures that every project is executed with precision and care, 
              providing top-notch equipment rentals, sales, and services to meet the diverse needs of our customers.
              </Typography>
          </Grid>

          {/* Right side - Image */}
          <Grid item xs={12} sm={6}>
            <img
              src={alphaImage}
              alt="Alpha Industries"
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
