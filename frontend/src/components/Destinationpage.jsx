import { useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  Grid,
  IconButton,
} from '@mui/material';
import { FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDestinations = async () => {
  const response = await axios.get('https://tripplanner1-tqlc.onrender.com/api/destinations');
  return response.data;
};

export default function Destinationpage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations,
  });

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const currentDestinations = data 
    ? data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
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
      <Typography
        variant="h4"
        sx={{
          color: '#008080',
          fontWeight: 'bold',
          mb: 2,
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Explore Most Popular Destinations
      </Typography>

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
        Plan your perfect trip with our most loved and best-selling
        <br />
        tour packages.
      </Typography>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress sx={{ color: '#008080' }} />
        </Box>
      )}

      {isError && (
        <Typography color="error" mt={2} sx={{ fontSize: '1.1rem' }}>
          Failed to load destinations.
        </Typography>
      )}

      {data && data.length > 0 && (
        <Box sx={{ position: 'relative', maxWidth: 1200, mx: 'auto' }}>
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: -50,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: 50,
              height: 50,
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowBackIos sx={{ color: '#008080', fontSize: 20 }} />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -50,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: 50,
              height: 50,
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowForwardIos sx={{ color: '#008080', fontSize: 20 }} />
          </IconButton>

          {/* Destinations Grid */}
          <Grid container spacing={3} justifyContent="center">
            {currentDestinations.map((destination) => (
              <Grid item key={destination.id} xs={12} sm={6} md={4} lg={4}>
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
                  <CardMedia
                    component="img"
                    height="240"
                    image={
                      destination.image ||
                      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center'
                    }
                    alt={destination.name}
                    sx={{ objectFit: 'cover' }}
                  />

                  <Box
                    sx={{
                      backgroundColor: 'white',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      px: 2,
                      py: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FaMapMarkerAlt size={16} color="#008080" />
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#008080',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          textAlign: 'left',
                        }}
                      >
                        {destination.placeName}
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'right' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          fontSize: '0.8rem',
                          mb: 0.5,
                        }}
                      >
                        Starting From
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#008080',
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          gap: 0.5,
                        }}
                      >
                        <FaRupeeSign size={14} />
                        {destination.price}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: currentPage === index ? '#008080' : '#ccc',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: currentPage === index ? '#006666' : '#999',
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
