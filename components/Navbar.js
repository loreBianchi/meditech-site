import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0}
        >
        <Toolbar>
          <Link href="/">
            <a>
              <Image
                alt="Meditech logo"
                src="/meditech.png"
                width={120}
                height={32}
              />          
            </a>
          </Link>
          <Typography variant="h6" component="div" sx={{ mx: 3 }} color="primary">
            <Link href="/servizi">
              <a>Servizi</a>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 3 }} color="primary">
            <Link href="/contatti">
              <a>Contati</a>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary">
            <Link href="/lavora-con-noi">
              <a>Lavora con noi</a>
            </Link>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}