import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import '../../styles/global.css';

const HeroSection = () => (
  <Box className="hero-section">
    <video
      autoPlay
      loop
      muted
      className="hero-video"
    >
      <source src="184489-873483996_medium.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <Box className="hero-content">
      <Typography variant="h2" className="fade-in animation-1">
        Create Business Solutions
      </Typography>
      <Typography variant="body1" className="fade-in animation-2">
        We work with international startups and help entrepreneurs launch for the long term.
      </Typography>
      <Button variant="contained" color="primary" className="fade-in animation-3">
        Write to Us
      </Button>
    </Box>
  </Box>
);

export default HeroSection;
