import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import Link from 'next/link'

const cards = [1, 2, 3];
const flexCenter = { 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center'
};

const Homepage = () => {
  return (
    <Layout maxWidth={false} disableGutters={true}>
      <>
        <Box
            sx={{ 
              ...flexCenter,
              backgroundImage: '-webkit-linear-gradient(top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url("hero.jpeg");',
              // backgroundPosition: 'right top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100vh'
             }}
          >
          <Grid container spacing={2} sx={{ color: ' white', textAlign: ' center'}}>
            <Grid item xs={6} sx={{ mb: 4 }}>
              <Link href="/servizi/cablaggio-quadri-elettrici">
                <a className="home-banner-link">CABLAGGIO QUADRI ELETTRICI</a>
              </Link>
            </Grid>
            <Grid item xs={6} sx={{ mb: 4 }}>
              <Link href="/servizi/impianti-gas-medicinali">
                <a className="home-banner-link">IMPIANTI GAS MEDICINALI</a>
              </Link>
            </Grid>
            <Grid item xs={2} sx={flexCenter}>
              <Link href="/servizi/impianti-gas-tecnici">
                <a className="home-banner-link">IMPIANTI GAS TECNICI</a>
              </Link>
            </Grid>
            <Grid item xs={8}>
            <Container maxWidth="sm" className="home-title">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="primary"
                gutterBottom
              >
                MediTech
              </Typography>
              <Typography variant="h5" align="center" color="white" paragraph>
                Installazione e Manutenzione impianti Gas Medicali
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Link href="/servizi" passHref>
                  <Button variant="contained"> 
                    Scopri i nostri servizi
                  </Button>
                </Link>
                <Link href="/contatti" passHref>
                  <Button variant="outlined">
                    Contattaci
                  </Button>
                </Link>
              </Stack>
            </Container>            
          </Grid>
            <Grid 
              item xs={2} 
              sx={flexCenter}
            >
              <Link href="/servizi/manutenzione-assistenza">
                <a className="home-banner-link">MANUTENZIONE E ASSISTENZA</a>
              </Link>
            </Grid>
            <Grid item xs={6} sx={{ mt: 4 }}>
              <Link href="/servizi/posa-cablaggio-pensili">
                <a className="home-banner-link">POSA E CABLAGGIO PENSILI</a>
              </Link>
            </Grid>
            <Grid item xs={6} sx={{ mt: 4 }}>
              <Link href="/servizi/posa-cablaggio-testaletto">
                <a className="home-banner-link">POSA E CABLAGGIO TESTALETTO</a>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Container sx={{ my: 15 }}>
          <Typography variant="p" color="text.primary">
            Aliqua do mollit qui nulla irure. Culpa sunt sint cillum aliquip esse sit. Velit magna ad veniam cillum aliquip Lorem.
            Aute nostrud officia voluptate fugiat. Duis incididunt ut cupidatat deserunt. Consequat eu tempor magna laborum. Nisi officia cupidatat cillum aliquip aliquip nulla aliquip. 
            Ut aliqua irure sit ex proident Lorem elit et deserunt enim amet. Duis nulla veniam dolore exercitation eiusmod excepteur excepteur ullamco duis eu id. Aliqua fugiat proident ut culpa labore officia incididunt do est dolor ut sunt exercitation eiusmod.
          </Typography>
        </Container>
        <Container sx={{ py: 8, my: 15 }}>
        
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{ p: 4 }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h2"
                  color="secondary"
                  align="center"
                >
                  Heading
                </Typography>
                <Typography align="center">
                  Aliqua do mollit qui nulla irure. Culpa sunt sint cillum aliquip esse sit. Velit magna ad veniam cillum aliquip Lorem.
                </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    </Layout>
  );
};

export default Homepage;