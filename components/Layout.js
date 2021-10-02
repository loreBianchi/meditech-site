import Navbar from './Navbar'
import Container from "@mui/material/Container";

export default function Layout({ children, maxWidth }) {
  return (
    <>
      <Navbar />
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </>
  )
}