import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";

function ManutenzioneAssistenza() {
  return (
     <Layout>
       <Container maxWidth="lg">
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          sx={{ my: 3 }}
        >
          Manutenzione e Assistenza tecnica
        </Typography>

       </Container>
     </Layout> 
  )
}
  
  export default ManutenzioneAssistenza;
  