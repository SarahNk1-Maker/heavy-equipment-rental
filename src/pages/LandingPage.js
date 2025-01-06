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

import excavatorImage from '../assets/herotwo.jpeg';

const LandingPage = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          height: '80vh',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '64px', // Adjust for AppBar height
        }}
      >
        <Grid container spacing={0}>
          {/* Orange background on the left */}
          <Grid item xs={12} md={6} sx={{ backgroundColor: '#eeab02', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          
            <Typography variant="h2" sx={{ color: '#3c3c3c', textAlign: 'center' }}>
              Heavy Duty. No Compromise.
            </Typography>
            <Typography variant="h5" sx={{ color: '#3c3c3c', marginTop: '20px', textAlign: 'center' }}>
              Unmatched Reliability for Every Project.
            </Typography>
            <List sx={{ marginTop: '24px' }}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Rent & Manage Equipment" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="View Accurate Rates" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Full Satisfaction Guaranteed" />
              </ListItem>
            </List>
            <Button variant="contained" sx={{ backgroundColor: '#3c3c3c', marginTop: '24px' }}>
              LEARN MORE
            </Button>
          </Grid>

          {/* Excavator image on the right */}
          <Grid item xs={12} md={6}>
            <img src={excavatorImage} alt="Excavator" style={{ width: '100%', animation: 'moveIn 2s ease-out' }} />
          </Grid>
        </Grid>
      </Box>

      <Container sx={{ marginTop: 20 }}>
        <Typography variant="h4" sx={{ color: '#eeab02', marginTop: '16px', textAlign: 'center', fontWeight: 'bold' }}>
          Rent or Buy
        </Typography>
        <Typography variant="h4" sx={{ color: '#3c3c3c', marginTop: '16px', textAlign: 'center', fontWeight: 'bold' }}>
          Flexible Options, Maximum Power
        </Typography>
        <p>
          We are a leading provider of heavy equipment rental services. Our commitment to quality and customer satisfaction has made us the preferred choice for businesses of all sizes.
        </p>
      </Container>
    </div>
  );
};

// Keyframe animation for moving the image in from the right
const styles = {
  '@keyframes moveIn': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
};

export default LandingPage;
