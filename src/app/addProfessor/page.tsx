'use client';

import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const BackgroundBox = styled(Box)({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  background: '#243B55',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const AddProfessorContainer = styled(Stack)(({ theme }) => ({
  width: '400px',
  maxWidth: '100%',
  borderRadius: '16px',
  border: '1px solid #00BFA5',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.75)',
  padding: theme.spacing(4),
  backgroundColor: '#1B2735',
  overflow: 'hidden',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#FFFFFF', // Unified text color
}));

const Header = styled(Box)(({ theme }) => ({
  background: '#00BFA5',
  color: '#FFFFFF',
  borderRadius: '16px 16px 0 0',
  textAlign: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  zIndex: 1,
}));

export default function AddProfessor() {
  const router = useRouter();
  const [website, setWebsite] = useState('');

  const getReviews = async () => {
    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        body: JSON.stringify({ website }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while scraping the website.');
    }
    setWebsite('');
  };

  return (
    <BackgroundBox>
      <AddProfessorContainer>
        {/* Header */}
        <Header>
          <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 0.5 }}>
            Add a Professor
          </Typography>
        </Header>

        {/* Instruction Box */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: '#00ACC1',
            boxShadow: 3,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="p"
            gutterBottom
            sx={{ fontSize: '1.5rem', fontFamily: 'inherit' }}
          >
            How to add a Professor
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: '1rem', fontFamily: 'inherit' }}
          >
            Find the professor that you wish to add on{' '}
            <a href="https://www.ratemyprofessors.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>
              RateMyProfessors
            </a>
            . Enter the URL of the professor in the field below and click "Scrape". The system will process your request and fetch the reviews of the professor from the site.
          </Typography>
        </Box>

        {/* Scrape Input Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="URL to Scrape"
            fullWidth
            value={website}
            variant="outlined"
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            sx={{
              borderRadius: 2,
              backgroundColor: '#243B55',
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: '#00BFA5',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#00BFA5',
                },
              },
              '& .MuiInputBase-input': {
                padding: '10px 14px',
                color: '#FFFFFF',
                fontFamily: 'inherit',
              },
              '& .MuiInputLabel-root': {
                color: 'lightgray',
                fontFamily: 'inherit',
              },
            }}
          />
          <Button
            sx={{
              fontFamily: 'inherit',
              backgroundColor: '#00ACC1',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#0288D1',
              },
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '12px',
            }}
            variant="contained"
            onClick={getReviews}
          >
            Scrape
          </Button>
        </Box>

        {/* Back to Homepage Button */}
        <Button
          onClick={() => router.push('/')}
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            fontFamily: 'inherit',
            backgroundColor: '#00ACC1',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#0288D1',
            },
            borderRadius: 2,
            padding: '12px',
          }}
        >
          Home Page
        </Button>
      </AddProfessorContainer>
    </BackgroundBox>
  );
}
