import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/logo.png'; // Adjust the path to where your logo is located

const Footer = () => {
  const primaryColor = '#eeab02';
  const secondaryColor = '#3c3c3c';
  const whiteText = '#fff'; // Consistent white color variable

  return (
    <>
      <Box
        sx={{
          backgroundColor: secondaryColor,
          color: whiteText,
          padding: '24px', // Increased padding for a larger box
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `0.5px solid ${primaryColor}`,
          marginTop: '24px', // Adjusted marginTop for separation
          minHeight: '120px', // Increased minimum height for better appearance
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Alpha Industries Logo" style={{ height: 60, marginRight: 12 }} /> {/* Increased height and margin */}
          <Typography variant="h6" sx={{ margin: 0 }}>
            Alpha Industries
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}> {/* Adjusted fontSize for better proportion */}
              Heavy Equipment Rental
            </Typography>
          </Typography>
        </Box>
        <Typography variant="h4" fontWeight={'bold'} sx={{ margin: 0 }}>
          Schedule Your Rental Today!
        </Typography>
        <Button variant="contained" color="primary" sx={{ backgroundColor: primaryColor }}>
          Make Appointment →
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: secondaryColor,
          color: whiteText,
          padding: '24px', // Increased padding for consistency
          marginTop: '24px', // Adjusted marginTop for separation
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={4}> {/* Increased spacing for better separation */}
            <Grid item xs={12} md={3}> {/* "About Us" section on the left */}
              <Typography variant="h6" sx={{ color: primaryColor, marginBottom: '8px' }}>
                About Us
              </Typography>
              <Typography variant="body2">
                Choose us for our tough equipment and top-tier service, delivering exceptional results every time.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}> {/* "Extra Links" section */}
              <Typography variant="h6" sx={{ color: primaryColor, marginBottom: '8px' }}>
                Extra Links
              </Typography>
              <Typography variant="body2">
                <Link href="/about-us" sx={{ color: whiteText, display: 'block', marginBottom: '4px' }}>
                  About Us
                </Link>
                <Link href="/services" sx={{ color: whiteText, display: 'block', marginBottom: '4px' }}>
                  Services
                </Link>
                <Link href="/team" sx={{ color: whiteText, display: 'block', marginBottom: '4px' }}>
                  Team
                </Link>
                <Link href="/career" sx={{ color: whiteText, display: 'block' }}>
                  Career
                </Link>
                <Link href="/contact" sx={{ color: whiteText, display: 'block', marginTop: '4px' }}>
                  Contact
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}> {/* "Equipment" section */}
              <Typography variant="h6" sx={{ color: primaryColor, marginBottom: '8px' }}>
                Equipment
              </Typography>
              <Typography variant="body2">
                <Link href="/equipment/dx-t830-wheel-loader" sx={{ color: whiteText, display: 'block', marginBottom: '4px' }}>
                  DX-T830 Wheel Loader
                </Link>
                <Link href="/equipment/dx-pc400-excavator" sx={{ color: whiteText, display: 'block', marginBottom: '4px' }}>
                  DX-PC400 Excavator
                </Link>
                <Link href="/equipment/dx-g705-power-grader" sx={{ color: whiteText, display: 'block' }}>
                  DX-G705 Power Grader
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}> {/* "Follow Us" section on the right */}
              <Typography variant="h6" sx={{ color: primaryColor, marginBottom: '8px' }}>
                Follow Us
              </Typography>
              <Box>
                <IconButton href="https://facebook.com" sx={{ color: whiteText, marginRight: '8px' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://instagram.com" sx={{ color: whiteText, marginRight: '8px' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton href="https://twitter.com" sx={{ color: whiteText }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: secondaryColor,
          color: whiteText,
          padding: '16px',
          textAlign: 'center', // Center the copyright text
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Alpha Industries. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

