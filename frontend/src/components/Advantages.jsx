// Advantages Section Component


import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
} from '@mui/material';

import {
  AccessTime,
  AccountBalanceWallet,
  Shield,
  MenuBook,
} from '@mui/icons-material';

// Data for each advantage box — icons, titles, and descriptions
const advantages = [
  {
    id: 1,
    icon: <AccessTime sx={{ fontSize: 30, color: '#4FC3F7' }} />,
    title: 'Save Time',
    description: 'No More Switching For Packages Or Plans.',
  },
  {
    id: 2,
    icon: <AccountBalanceWallet sx={{ fontSize: 30, color: '#4FC3F7' }} />,
    title: 'Save Money',
    description: 'Compare, Negotiate, And Choose The Best.',
  },
  {
    id: 3,
    icon: <Shield sx={{ fontSize: 30, color: '#FFB74D' }} />,
    title: 'Trusted Network',
    description: 'A Trusted Network Of 7000+ Travel Agents',
  },
  {
    id: 4,
    icon: <MenuBook sx={{ fontSize: 30, color: '#4FC3F7' }} />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips From Trusted Agents',
  },
];

// Exported functional component for Advantages
export default function Advantages() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #4DD0E1 0%, #26C6DA 100%)',
        py: 6,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          Our Advantages
        </Typography>

        {/* Subheading & Description */}
        <Typography variant="subtitle1" sx={{ mb: 1, opacity: 0.9 }}>
          You can rely on our experience and the quality of services we provide.
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, opacity: 0.9 }}>
          Here are other reasons to book tours at Treat Holidays
        </Typography>

        {/* Grid layout for advantage cards */}
        <Grid container spacing={2} justifyContent="center">
          {advantages.map((adv) => (
            <Grid item key={adv.id} xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  py: 2,
                  px: 1.5,
                  minHeight: 220,
                }}
              >
                {/* Icon with circular Avatar */}
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    mb: 1.5,
                  }}
                >
                  {adv.icon}
                </Avatar>

                {/* Advantage Title */}
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  {adv.title}
                </Typography>

                {/* Description Text */}
                <Typography variant="body2" sx={{ maxWidth: 200, opacity: 0.85 }}>
                  {adv.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


