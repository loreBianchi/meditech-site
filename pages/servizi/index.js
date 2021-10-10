import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import Link from "next/link";

const services = [
  { link: 'cablaggio-quadri-elettrici', label: 'Cablaggio quadri elettrici' },
  { link: 'impianti-gas-medicinali', label: 'Impianti gas medicinali' },
  { link: 'impianti-gas-tecnici', label: 'Impianti Gas Tecnici' },
  { link: 'manutenzione-assistenza', label: 'Manutenzione e assistenza' },
  { link: 'posa-cablaggio-pensili', label: 'Posa e cablaggio pensili sale operatorie' },
  { link: 'posa-cablaggio-testaletto', label: 'Posa e cablaggio testaletto' }
];

function Servizi() {
  return (
     <Layout navbarBgChange={false}>
       <Container sx={{ pt: 10, minHeight: 'calc(100vh - 163px)' }}>
       <Typography
          component="h2"
          variant="h3"
          color="text.primary"
        >
          Servizi
        </Typography>
        <ul>
          {services.map(service => (
            <li key={service.link}>
              <Link href={`/servizi/${service.link}`}>
                <a>{service.label}</a>
              </Link>
            </li>
          ))}
        </ul>
       </Container>
     </Layout> 
  )
}
  
  export default Servizi;
  