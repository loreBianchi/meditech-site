import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
      <Box sx={{ bgcolor: 'aliceblue', p: 6 }} component="footer">
        <Typography variant="h6" gutterBottom>
          Meditech srl
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    );
}
