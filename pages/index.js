import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";

const cards = [1, 2, 3];

const Homepage = () => {
  return (
    <Layout maxWidth={false} disableGutters={true}>
      <>
        <Box
            sx={{ 
              py: 30,
              backgroundImage: '-webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("hero.jpeg");',
              // backgroundPosition: 'right top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
             }}
          >
          <Container maxWidth="sm">
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
              <Button variant="contained">Scopri i nostri servizi</Button>
              <Button variant="outlined">Contattaci</Button>
            </Stack>
          </Container>
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