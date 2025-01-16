import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
  <Box sx={{ py: 10, textAlign: 'center' }}>
    <Typography variant="h4">About Us</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      We are a software house dedicated to delivering high-quality software solutions.
    </Typography>
  </Box>
);

export default About;
