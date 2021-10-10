import Footer from './Footer'
import Navbar from './Navbar'
import Container from "@mui/material/Container";

export default function Layout({ 
  children, 
  maxWidth, 
  disableGutters = false,
  navbarBgChange = true 
}) {
  return (
    <>
      <Navbar bgChange={navbarBgChange} />
      <Container 
        maxWidth={maxWidth} 
        disableGutters={disableGutters}
      >
        {children}
      </Container>
      <Footer />
    </>
  )
}