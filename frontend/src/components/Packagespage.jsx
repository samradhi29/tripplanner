import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchPackages = async () => {
  const response = await axios.get('http://localhost:5000/api/packages/top-selling');
  return response.data;
};

export default function Packagespage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchPackages,
  });

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (pkg) => {
    setSelectedPackage(pkg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPackage(null);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 10,
        px: 2,
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        paddingBottom: 6,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: '#008080',
          fontWeight: 'bold',
          mb: 2,
          fontSize: { xs: '2rem', md: '3rem' }, // increased size
        }}
      >
        Top Selling Tour Packages of India
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          maxWidth: 700, // slightly wider for bigger screen
          mx: 'auto',
          mb: 6,
          lineHeight: 1.8,
          fontSize: { xs: '1rem', md: '1.2rem' }, // bigger font
        }}
      >
        Stay updated with our latest news and happenings through
        <br />
        Informe.
      </Typography>

      {/* Loading spinner */}
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress sx={{ color: '#008080', width: 50, height: 50 }} /> {/* larger spinner */}
        </Box>
      )}

      {/* Error message */}
      {isError && (
        <Typography color="error" mt={2} sx={{ fontSize: '1.2rem' }}>
          Failed to load packages.
        </Typography>
      )}

      {/* Package cards */}
      {data && (
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
          {data.map((pkg) => (
            <Grid item key={pkg.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: 380, // increased width
                  margin: 'auto',
                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.12)', // stronger shadow
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="260" // taller image
                  image={
                    pkg.image ||
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center'
                  }
                  alt={pkg.name}
                  sx={{ objectFit: 'cover' }}
                />

                <Box
                  sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3, // more padding
                    py: 3,
                    gap: 1.5,
                    flexGrow: 1,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <FaMapMarkerAlt size={18} color="#008080" /> {/* bigger icon */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#008080',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        textAlign: 'center',
                      }}
                    >
                      {pkg.name}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => handleOpen(pkg)}
                    sx={{
                      backgroundColor: '#008080',
                      color: '#fff',
                      borderRadius: 6,
                      py: 1.2,
                      mt: 1,
                      width: '200px', // wider button
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: '#006666',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth> {/* increased maxWidth */}
        <DialogTitle sx={{ color: '#008080', fontWeight: 'bold', fontSize: '1.8rem' }}>
          {selectedPackage?.name}
        </DialogTitle>

        <DialogContent dividers>
          <img
            src={selectedPackage?.image}
            alt={selectedPackage?.name}
            style={{
              width: '100%',
              maxHeight: 450, // taller modal image
              objectFit: 'cover',
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

          <DialogContentText sx={{ mb: 3, fontSize: '1.1rem' }}>
            <strong>Description:</strong> {selectedPackage?.description}
          </DialogContentText>

          <Typography sx={{ mb: 2, fontSize: '1.1rem' }}>
            <strong>Location:</strong> {selectedPackage?.location}
          </Typography>
          <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
            <strong>Duration:</strong> {selectedPackage?.duration}
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>
            Highlights:
          </Typography>
          <List dense>
            {selectedPackage?.highlights?.map((item, idx) => (
              <ListItem key={idx} sx={{ fontSize: '1.1rem' }}>
                <ListItemText primary={`• ${item}`} />
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#008080', fontSize: '1rem' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


