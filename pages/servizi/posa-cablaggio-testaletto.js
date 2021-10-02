import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";

function PosaCablaggioTestaLetto() {
  return (
     <Layout>
       <Container maxWidth="lg">
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          sx={{ my: 3 }}
        >
          Posa e Cablaggio TestaLetto
        </Typography>

       </Container>
     </Layout> 
  )
}
  
  export default PosaCablaggioTestaLetto;
  