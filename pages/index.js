import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";

const Homepage = () => {
  return (
    <Layout maxWidth="sm">
      <Box
          sx={{
            pt: 8,
            pb: 6,
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
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
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
    </Layout>
  );
};

export default Homepage;