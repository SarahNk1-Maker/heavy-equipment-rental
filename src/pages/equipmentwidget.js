import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  Box,
} from '@mui/material';
import herotwo from '../assets/herotwo.jpeg';

const sections = [
  {
    title: 'EQUIPMENT RENTALS',
    image: herotwo,
    path: '/equipment',
  },
  {
    title: 'EQUIPMENT SALES',
    image: herotwo,
    path: '/contact',
  },
  {
    title: 'ATTACHMENTS',
    image: herotwo,
    path: '/equipment',
  },
  {
    title: 'SERVICES',
    image: herotwo,
    path: '/about-us',
  },
];

const EquipmentWidget = () => {
  return (
    <Grid container spacing={1} justifyContent="center">
      {sections.map((section, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              maxWidth: 620,
              mx: 'auto',
              borderRadius: 2,
              boxShadow: 5,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <CardActionArea
              component={Link}
              to={section.path}
              sx={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Image wrapper */}
              <Box
                sx={{
                  height: 520,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={section.image}
                  alt={section.title}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease-in-out',
                    '&:hover': {
                      transform: 'scale(2.5)',
                    },
                  }}
                />
              </Box>

              {/* Text Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    px: 1,
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EquipmentWidget;
