'use client'

import React from 'react';
import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const primaryColor = '#00BFA5';
  const secondaryColor = '#00ACC1';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4f8', // Light greyish-blue background
        padding: 2,
        flexDirection: 'column',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          borderRadius: '16px',
          maxWidth: 800,
          width: '100%',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          backgroundColor: '#ffffff', // White background for the card
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            fontSize: '2.5rem',
            letterSpacing: '0.05em',
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          RateMyProf AI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'grey', 
            marginBottom: 4,
          }}
        >
          Welcome to RateMyProf AI! Leverage the power of AI to explore professor reviews, make informed decisions about your courses, and contribute to our growing database of educator insights.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Button
            variant="contained"
            onClick={() => router.push('/chatbot')}
            sx={{
              backgroundColor: primaryColor,
              color: '#FFFFFF',
              fontWeight: 'bold',
              padding: '10px 16px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                backgroundColor: secondaryColor,
              },
              marginBottom: 2,
              width: '100%',
            }}
          >
            Chat with AI
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push('/addProfessor')}
            sx={{
              borderColor: primaryColor,
              color: primaryColor,
              fontWeight: 'bold',
              padding: '10px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#E3F2FD',
                borderColor: secondaryColor,
                color: secondaryColor,
              },
              width: '100%',
            }}
          >
            Add Professors
          </Button>
        </Box>
      </Paper>

      {/* Grid Section */}
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={5}
              sx={{
                padding: 3,
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: primaryColor,
                }}
              >
                AI-Driven Professor Insights
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: 'grey' }}>
                Discover top-rated professors through intelligent, AI-powered recommendations based on comprehensive review analysis.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={5}
              sx={{
                padding: 3,
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: primaryColor,
                }}
              >
                Effortless Data Contribution
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: 'grey' }}>
                Seamlessly add new professors by simply providing their RateMyProfessor link—our AI does the rest.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={5}
              sx={{
                padding: 3,
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: primaryColor,
                }}
              >
                Cutting-Edge RAG Technology
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: 'grey' }}>
                Harness the power of Retrieval-Augmented Generation (RAG) for real-time, data-driven academic decisions stored in Pinecone's advanced index.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
