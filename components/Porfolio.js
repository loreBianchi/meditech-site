import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import QuiltedImageList from './QuiltedImageList';

export default function Porfolio({ 
    title = "Portfolio Ultimi Lavori",
    titleColor = 'primary',
    images,
   }) {
    return (
      <Box sx={{ my: 6 }}>
         <Typography
            component="h4"
            variant="h4"
            color={titleColor}
          >
            {title}
          </Typography>
          <QuiltedImageList data={images} />
      </Box>
    )
}