import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import Jumbotron from "../../components/Jumbotron";

function ImpiantiGasTecnici() {
  return (
     <Layout>
       <Container maxWidth="lg">
        <Jumbotron 
          backgroundImage="/gas.jpeg" 
          title="Impianti Gas Tecnici"
        />
        <Typography
            component="p"
            color="text.primary"
            sx={{ my: 3 }}
          >
            Aliqua do mollit qui nulla irure. Culpa sunt sint cillum aliquip esse sit. Velit magna ad veniam cillum aliquip Lorem.
            Aute nostrud officia voluptate fugiat. Duis incididunt ut cupidatat deserunt. Consequat eu tempor magna laborum. Nisi officia cupidatat cillum aliquip aliquip nulla aliquip. 
            Ut aliqua irure sit ex proident Lorem elit et deserunt enim amet. Duis nulla veniam dolore exercitation eiusmod excepteur excepteur ullamco duis eu id. Aliqua fugiat proident ut culpa labore officia incididunt do est dolor ut sunt exercitation eiusmod.
          </Typography>
       </Container>
     </Layout> 
  )
}
  
  export default ImpiantiGasTecnici;
  