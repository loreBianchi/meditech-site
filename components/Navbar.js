import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({ bgChange = true }) {
  const [mobileView, setMobileWiew] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [startScroll, setStartScroll] = React.useState(false);


  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
      ? setMobileWiew(true)
      : setMobileWiew(false)
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  React.useEffect (()=>{
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50){
        setStartScroll(true)
      } else {
        setStartScroll(false)
      }
    })
  },[])

  function toggleDrawerOpen() {
    setDrawerOpen(!drawerOpen)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color={!bgChange || startScroll ? "default" : "transparent"} 
        elevation={0}
        >
        <Toolbar>
        {!mobileView 
          ? (<>
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
                <a>Contatti</a>
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary">
              <Link href="/lavora-con-noi">
                <a>Lavora con noi</a>
              </Link>
            </Typography>
            </>)
          : (<>
            <MenuIcon onClick={() => toggleDrawerOpen()} color="primary" />
            <Drawer anchor={'top'} open={drawerOpen}>
              <Box sx={{ p: 1}}>
                <IconButton onClick={() => toggleDrawerOpen()}>
                  <CloseIcon color="primary" />
                </IconButton>
              </Box>
              <Box sx={{ px: 2, textAlign: 'center', mb: 3 }}> 
                <Typography variant="h6" color="primary">
                  <Link href="/">
                    <a>Home page</a>
                  </Link>
                </Typography>
                <Typography variant="h6" color="primary">
                  <Link href="/servizi">
                    <a>Servizi</a>
                  </Link>
                </Typography>
                <Typography variant="h6" color="primary">
                  <Link href="/contatti">
                    <a>Contatti</a>
                  </Link>
                </Typography>
                <Typography variant="h6" color="primary">
                  <Link href="/lavora-con-noi">
                    <a>Lavora con noi</a>
                  </Link>
                </Typography>
              </Box>
            </Drawer>
          </>)
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}