import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Mediatech
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
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

export default Homepage;