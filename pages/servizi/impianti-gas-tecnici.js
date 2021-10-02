import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";

function ImpiantiGasTecnici() {
  return (
     <Layout>
       <Container maxWidth="lg">
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          sx={{ my: 3 }}
        >
          Impianti Gas Tecnici
        </Typography>

       </Container>
     </Layout> 
  )
}
  
  export default ImpiantiGasTecnici;
  