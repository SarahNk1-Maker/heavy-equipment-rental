import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const primaryColor = '#eeab02';


  return (
    <Box sx={{ padding: '140px', backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" sx={{ marginBottom: '16px', color: primaryColor }}>
        Contact Us
      </Typography>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>
          If you have any questions, please feel free to reach out to us using the form below.
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: primaryColor, marginTop: '16px' }}
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
