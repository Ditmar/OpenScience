import React from 'react';
import { Box, Stack, Container } from '@mui/material';
import InitialButton from '../../atoms/initial-button/initial-button';
import logo from '../../../../assets/icons/logo.svg?raw';

function WelcomeScreen() {
  const handleButtonClick = () => {
    window.location.href = '/login'; // Here attach the loginPage  route
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 4 },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100%',
          px: 0,
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '80%',
              md: '70%',
              lg: '60%',
              xl: '50%',
            },
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <Stack spacing={4} alignItems="center" width="100%">
            <Box
              component="img"
              src={`data:image/svg+xml;utf8,${encodeURIComponent(logo)}`}
              alt="Logo"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            />

            <Box
              sx={{
                display: 'inline-block',
                maxWidth: '100%',
                px: { xs: 0, sm: 2 },
              }}
            >
              <InitialButton onClick={handleButtonClick} />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default WelcomeScreen;
