import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Jumbotron({ 
  backgroundImage, 
  height = 400,
  title,
  titleColor = 'white',
  backgroundPosition,
 }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: height,
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundPosition: backgroundPosition,
      }}
    >
       <Typography
          component="h4"
          variant="h4"
          color={titleColor}
          sx={{ my: 3 }}
        >
          {title}
        </Typography>
    </Box>
  )
}