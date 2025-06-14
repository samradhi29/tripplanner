import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'TechCorp / CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Design Studio / Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
  },
  {
    id: 3,
    name: 'Michael Brown',
    company: 'StartupXYZ / Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
  },
  {
    id: 4,
    name: 'Emily Davis',
    company: 'Marketing Pro / Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    text: 'Amazing experience with their services. The team was professional and delivered exactly what we needed.'
  },
  {
    id: 5,
    name: 'David Wilson',
    company: 'Business Solutions / Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    text: 'Outstanding results and exceptional service quality. Their attention to detail really sets them apart.'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    company: 'Global Enterprises / VP',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    text: 'Professional, reliable, and innovative approach to solving complex challenges.'
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    }
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  const canGoNext = currentIndex + testimonialsPerPage < testimonials.length;
  const canGoPrev = currentIndex > 0;

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa', position: 'relative' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#333',
            textAlign: 'left',
          }}
        >
          Testimonials
        </Typography>

        <Box sx={{ overflowX: 'auto' }}>
          <Grid
            container
            spacing={4}
            sx={{
              minWidth: '900px',
              flexWrap: 'nowrap',
            }}
          >
            {currentTestimonials.map((testimonial) => (
              <Grid item xs={4} key={testimonial.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 80, height: 80, mb: 3 }}
                      />
                      <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, mb: 3, fontSize: '0.95rem' }}>
                        {testimonial.text}
                      </Typography>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', fontSize: '1rem', mb: 0.5 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', fontSize: '0.9rem' }}>
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Navigation Arrows */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
          <IconButton
            onClick={handlePrev}
            disabled={!canGoPrev}
            sx={{
              backgroundColor: canGoPrev ? '#e0e0e0' : '#f5f5f5',
              color: canGoPrev ? '#666' : '#ccc',
              width: 50,
              height: 50,
              '&:hover': {
                backgroundColor: canGoPrev ? '#d0d0d0' : '#f5f5f5',
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={!canGoNext}
            sx={{
              backgroundColor: canGoNext ? '#FFA726' : '#f5f5f5',
              color: canGoNext ? 'white' : '#ccc',
              width: 50,
              height: 50,
              '&:hover': {
                backgroundColor: canGoNext ? '#FF9800' : '#f5f5f5',
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === Math.floor(currentIndex / testimonialsPerPage)
                  ? '#FFA726'
                  : '#e0e0e0',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
