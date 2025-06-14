
//  Displays top-selling Indian tour packages with interactive UI, modals for details, and dynamic data fetching using React Query.

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
import { useState } from 'react'; // Needed for modal handling

// Fetch function to get top-selling packages from backend API
const fetchPackages = async () => {
  const response = await axios.get('http://localhost:5000/api/packages/top-selling');
  return response.data;
};

export default function Packagespage() {
  // Fetching tour package data using React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchPackages,
  });

  // Modal state for showing detailed package info
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [open, setOpen] = useState(false);

  // Open dialog with selected package
  const handleOpen = (pkg) => {
    setSelectedPackage(pkg);
    setOpen(true);
  };

  // Close dialog
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
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Top Selling Tour Packages of India
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          maxWidth: 600,
          mx: 'auto',
          mb: 6,
          lineHeight: 1.6,
        }}
      >
        Stay updated with our latest news and happenings through
        <br />
        Informe.
      </Typography>

      {/* Show loading spinner while data is fetching */}
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress sx={{ color: '#008080' }} />
        </Box>
      )}

      {/* Show error message if data fetch fails */}
      {isError && (
        <Typography color="error" mt={2} sx={{ fontSize: '1.1rem' }}>
          Failed to load packages.
        </Typography>
      )}

      {/* Render package cards once data is fetched */}
      {data && (
        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
          {data.map((pkg) => (
            <Grid item key={pkg.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 300,
                  margin: 'auto',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {/* Package image */}
                <CardMedia
                  component="img"
                  height="240"
                  image={
                    pkg.image ||
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center'
                  }
                  alt={pkg.name}
                  sx={{ objectFit: 'cover' }}
                />

                {/* Card content with name & button */}
                <Box
                  sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                    py: 2,
                    gap: 1,
                    flexGrow: 1,
                  }}
                >
                  {/* Package name with icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaMapMarkerAlt size={16} color="#008080" />
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#008080',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        textAlign: 'center',
                      }}
                    >
                      {pkg.name}
                    </Typography>
                  </Box>

                  {/* Button to open dialog */}
                  <Button
                    onClick={() => handleOpen(pkg)}
                    sx={{
                      backgroundColor: '#008080',
                      color: '#fff',
                      borderRadius: 5,
                      py: 1,
                      mt: 1,
                      width: '180px',
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

      {/* Dialog/Modal to show full package details */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: '#008080', fontWeight: 'bold' }}>
          {selectedPackage?.name}
        </DialogTitle>

        <DialogContent dividers>
          {/* Modal Image */}
          <img
            src={selectedPackage?.image}
            alt={selectedPackage?.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 8,
              marginBottom: 16,
            }}
          />

          {/* Package Description */}
          <DialogContentText sx={{ mb: 2 }}>
            <strong>Description:</strong> {selectedPackage?.description}
          </DialogContentText>

          {/* Other Info */}
          <Typography sx={{ mb: 1 }}>
            <strong>Location:</strong> {selectedPackage?.location}
          </Typography>
          <Typography sx={{ mb: 2 }}>
            <strong>Duration:</strong> {selectedPackage?.duration}
          </Typography>

          {/* Highlights List */}
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            <strong>Highlights:</strong>
          </Typography>
          <List dense>
            {selectedPackage?.highlights?.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={`• ${item}`} />
              </ListItem>
            ))}
          </List>
        </DialogContent>

        {/* Dialog Close Button */}
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#008080' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


