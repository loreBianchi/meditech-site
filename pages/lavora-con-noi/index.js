import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";

function LavoraConNoi() {
  return (
     <Layout navbarBgChange={false}>
       <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 163px)', pt: 10 }}>
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
        >
          Lavora Con Noi
        </Typography>

       </Container>
     </Layout> 
  )
}
  
  export default LavoraConNoi;
  