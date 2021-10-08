import Footer from './Footer'
import Navbar from './Navbar'
import Container from "@mui/material/Container";

export default function Layout({ children, maxWidth, disableGutters = false }) {
  return (
    <>
      <Navbar />
      <Container maxWidth={maxWidth} disableGutters={disableGutters}>
        {children}
      </Container>
      <Footer />
    </>
  )
}