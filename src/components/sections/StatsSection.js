import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Employees', value: '+200' },
  { label: 'Projects', value: '+500' },
  { label: 'Clients', value: '+300' },
];

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6, when: 'beforeChildren', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <motion.div variants={containerVariants}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Typography variant="h4" color="primary">
                    {stat.value}
                  </Typography>
                  <Typography variant="body1">{stat.label}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default StatsSection;
