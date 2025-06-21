import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, CssBaseline, Typography, Box, Button, Paper } from '@mui/material';
import { theme } from './theme';
import {
  useIsMobile,
  useIsTabletUp,
  useIsDesktopDown,
  useIsSmallMobileDown,
  useIsSmallMobileLargeUp,
  useIsLargeTabletUp,
} from './media-queries';

const meta: Meta = {
  title: 'Theme/MediaQueriesMUI',
  component: Typography,
};
export default meta;

function ResponsiveTypographyDemoComponent() {
  const isMobile = useIsMobile();
  const isTabletUp = useIsTabletUp();
  const isDesktopDown = useIsDesktopDown();
  const isSmallMobileDown = useIsSmallMobileDown();
  const isSmallMobileLargeUp = useIsSmallMobileLargeUp();
  const isLargeTabletUp = useIsLargeTabletUp();

  return (
    <Box sx={{ p: 2, bgcolor: '#f9f9f9' }}>
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Box textAlign="center">
          <Typography variant="h1" gutterBottom>
            Welcome to Our Site
          </Typography>
          <Typography variant="subtitle1">Delivering awesome experiences on any device</Typography>
          <Box mt={2}>
            <Button variant="contained" size="large">
              Get Started
            </Button>
          </Box>
        </Box>
      </Paper>

      <Box
        component={Paper}
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: isTabletUp ? 'row' : 'column',
          gap: 3,
          p: 2,
          mb: 3,
        }}
      >
        <Box flex={1} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We aim to create responsive, high-performance user interfaces that work on all devices.
          </Typography>
          <Typography variant="body2">
            Learn more about how we build scalable front-end architectures and clean codebases.
          </Typography>
        </Box>

        <Box flex={1} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h5" gutterBottom>
            Key Features
          </Typography>
          <Box component="ul" sx={{ pl: isMobile ? 2 : 3, m: 0 }}>
            {[
              'Fluid typography that scales with viewport',
              'Custom breakpoints for fine-tuned layouts',
              'Hooks for conditional rendering',
            ].map((text) => (
              <Typography component="li" variant="body1" key={text}>
                {text}
              </Typography>
            ))}
          </Box>

          {isSmallMobileDown && (
            <Typography variant="caption" color="error.main" sx={{ mt: 1, display: 'block' }}>
              You are on a very small mobile device (≤ 320px).
            </Typography>
          )}
          {isSmallMobileLargeUp && (
            <Typography variant="caption" color="success.main" sx={{ mt: 1, display: 'block' }}>
              Your screen is at least 568px wide.
            </Typography>
          )}
          {isLargeTabletUp && (
            <Typography variant="caption" color="info.main" sx={{ mt: 1, display: 'block' }}>
              Tablet or larger (≥ 1112px) detected.
            </Typography>
          )}
        </Box>
      </Box>

      <Paper elevation={1} sx={{ p: 1, textAlign: 'center' }}>
        <Typography variant="caption">© 2025 Your Company. All rights reserved.</Typography>
        {isDesktopDown && (
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
            Viewing on desktop or smaller screen.
          </Typography>
        )}
        {isMobile && (
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'primary.main' }}>
            Viewing on mobile device.
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export const ResponsiveTypographyDemo: StoryObj = {
  render: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveTypographyDemoComponent />
    </ThemeProvider>
  ),
};

function HeroImageComponent() {
  return (
    <div
      style={{
        width: '100%',
        height: '100dvh',
        maxHeight: '100dvh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="https://nicolaslule.com/wp-content/uploads/hero-image-flex-example-1.jpg"
        alt="Hero"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '32px',
          maxWidth: 800,
          margin: '0 auto',
          overflow: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h1" color="common.white" gutterBottom>
          Discover Your Adventure
        </Typography>
        <Typography variant="h5" color="common.white" gutterBottom>
          Experience breathtaking views anywhere, anytime.
        </Typography>
        <Button variant="contained" size="large">
          Explore Now
        </Button>
      </div>
    </div>
  );
}

export const FullscreenHeroExample = {
  render: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroImageComponent />
    </ThemeProvider>
  ),
};
