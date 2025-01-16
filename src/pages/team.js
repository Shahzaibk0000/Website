import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO', avatar: 'https://via.placeholder.com/150' },
  { name: 'Bob Smith', role: 'CTO', avatar: 'https://via.placeholder.com/150' },
  { name: 'Charlie Brown', role: 'Developer', avatar: 'https://via.placeholder.com/150' },
];

const Team = () => (
  <Box sx={{ py: 10, textAlign: 'center' }}>
    <Typography variant="h4" sx={{ mb: 4 }}>
      Meet Our Team
    </Typography>
    <Grid container spacing={4}>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardContent>
              <Avatar src={member.avatar} alt={member.name} sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Team;
