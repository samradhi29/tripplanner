import React, { useState } from 'react';
import { Box, Typography, Container, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
  borderRadius: '25px',
  padding: '12px 30px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#000',
  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
  '&:hover': {
    background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.6)',
  },
  transition: 'all 0.3s ease',
}));

export default function Herosection() {
  const [bgImage, setBgImage] = useState('https://your-default-image.jpg');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%), url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Discover Your Next
            <br />
            Adventure
          </Typography>
          
          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              opacity: 0.95,
              maxWidth: '600px',
              lineHeight: 1.6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Choose from our curated experiences, customized for every kind of traveler.
          </Typography>
          
          {/* Call to Action Button */}
          <Box>
            <GradientButton size="large">
              BOOK NOW
            </GradientButton>
            
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}