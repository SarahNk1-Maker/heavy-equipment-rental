import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from '@mui/material';

const equipmentData = [
  {
    name: 'HX160A L',
    image: './hero.jpeg', // Replace with actual image URL
    netPower: '152 hp (113 kW) at: 2,200 rpm',
    operatingWeight: '17,695 kg (39,010 lb)',
    standardBucket: '360.72 m3 (.80 yd3)',
  },
  {
    name: 'HX180A L',
    image: './hero.jpeg', // Replace with actual image URL
    netPower: '152 hp (113 kW) at 2,200 rpm',
    operatingWeight: '40,570 lbs (18,400 kg)',
    standardBucket: '360.73 m3 (.95 yd3)',
  },
  {
    name: 'HX210A L',
    image: './hero.jpeg', // Replace with actual image URL
    netPower: '170 hp (127 kW) at 2,200 rpm',
    operatingWeight: '22,890 kg (50,460 lbs)',
    standardBucket: '42" 1.0 m3 (1.2 yd3)',
  },
  {
    name: 'HX250A L',
    image: './hero.jpeg', // Replace with actual image URL
    netPower: '200 hp (149 kW) at 2,200 rpm',
    operatingWeight: '26,500 kg (58,422 lbs)',
    standardBucket: '48" 1.2 m3 (1.6 yd3)',
  },
  {
    name: 'HX300A L',
    image: './hero.jpeg', // Replace with actual image URL
    netPower: '220 hp (164 kW) at 2,200 rpm',
    operatingWeight: '35,000 kg (77,162 lbs)',
    standardBucket: '54" 1.5 m3 (2.0 yd3)',
  },
  {
    name: 'HX350A L',
    image: './hero.jpeg', // Replace with actual image URL
    netPower: '250 hp (186 kW) at 2,200 rpm',
    operatingWeight: '42,000 kg (92,594 lbs)',
    standardBucket: '60" 1.8 m3 (2.4 yd3)',
  },
];

const EquipmentSection = () => {
  return (
    <Box sx={{ marginTop: 20 }}>
      <Grid container spacing={2}>
        {equipmentData.map((equipment) => (
          <Grid item xs={12} md={4} key={equipment.name}>
            <Card sx={{ backgroundColor: 'white',boxShadow:'none' }}>
              <CardMedia
                component="img"
                alt={equipment.name}
                height="140" // Adjusted height for smaller images
                image={equipment.image}
                sx={{ objectFit: 'contain' }} // Ensures the image scales while maintaining aspect ratio
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {equipment.name}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <span style={{ fontWeight: 'bold' }}>Net Power:</span> {equipment.netPower}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <span style={{ fontWeight: 'bold' }}>Operating Weight:</span> {equipment.operatingWeight}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <span style={{ fontWeight: 'bold' }}>Standard Bucket:</span> {equipment.standardBucket}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#3c3c3c', // Secondary color for button background
                    color: '#eeab02', // Primary color for button text
                    marginTop: '16px',
                  }}
                >
                    Rent Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EquipmentSection;



