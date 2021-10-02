import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";

function About() {
  return (
     <Layout>
       <Container maxWidth="lg">
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
        >
          About
        </Typography>

       </Container>
     </Layout> 
  )
}
  
  export default About;
  