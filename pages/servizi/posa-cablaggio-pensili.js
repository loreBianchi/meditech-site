import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";

function PosaCablaggioPensili() {
  return (
     <Layout>
       <Container maxWidth="lg">
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          sx={{ my: 3 }}
        >
          Posa e Cablaggio Pensili sale operatorie
        </Typography>

       </Container>
     </Layout> 
  )
}
  
  export default PosaCablaggioPensili;
  