import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout"; 
import Image from 'next/image';

function PosaCablaggioTestaLetto() {
  return (
     <Layout>
       <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image
              alt="Mountains"
              src="/test-img.jpg"
              width={540}
              height={360}
              quality={100}
            />          
          </Grid>
          <Grid item xs={6}>
            <Typography
              component="h3"
              variant="h4"
              color="text.primary"
              sx={{ my: 3 }}
            >
              Posa e Cablaggio TestaLetto
            </Typography>
            <Typography>
              Nulla ea elit do eu pariatur. Ipsum excepteur officia eiusmod et ut ad id occaecat qui Lorem do cupidatat veniam culpa. Commodo do anim ex incididunt. Nisi adipisicing exercitation esse irure non officia duis magna.

              Ea cillum quis dolor sunt eiusmod voluptate. Culpa consectetur amet eu velit tempor sunt esse velit esse. Velit commodo cupidatat velit enim magna velit in commodo sit irure eiusmod cillum fugiat. Magna dolore proident sint mollit veniam ipsum amet pariatur deserunt sit est et et.

              Enim anim fugiat exercitation do enim. Sint ea commodo ad veniam dolore consequat cupidatat. Elit excepteur cillum labore irure ea nisi mollit tempor labore dolore. Ut non fugiat pariatur sint in. Labore elit deserunt eiusmod eiusmod. Ex ut duis deserunt commodo ad laborum excepteur. Id duis consectetur velit in velit do.

              Laboris in cillum dolore ut fugiat aliquip qui. Sunt anim minim esse fugiat et in irure eu aliquip deserunt ullamco. Mollit enim ut fugiat exercitation amet ad est. Quis ullamco est id et.

              Consequat aute commodo labore nulla aliquip incididunt magna cupidatat excepteur officia eu et. In culpa ullamco exercitation nisi occaecat ullamco consequat duis in. Lorem officia ex et anim sint reprehenderit velit. Et est veniam Lorem est ea. Et consequat quis veniam nulla do eu laboris nostrud non eu quis. Enim ea voluptate fugiat do dolore eu. Aliquip nulla laborum aute fugiat duis minim dolore Lorem ullamco nostrud culpa.
            </Typography>
          </Grid>
        </Grid>
       </Container>
     </Layout> 
  )
}
  
  export default PosaCablaggioTestaLetto;
  