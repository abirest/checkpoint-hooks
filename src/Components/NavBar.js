import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>

    <Navbar className='navbar' bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#MovieApp">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#horror">Horror</Nav.Link>
            <Nav.Link href="#comedy">Comedy</Nav.Link>
            <Nav.Link href="#action">Action</Nav.Link>
            <Nav.Link href="#sciencefiction">Science Fiction</Nav.Link>
            <Nav.Link href="#drama">Drama</Nav.Link>
            <Nav.Link href="#anemy">Anemy</Nav.Link>
            <Nav.Link href="#exclusive">Exclusive</Nav.Link>
            <Nav.Link href="#topseenmovies">Top Seen Movies</Nav.Link>
            <Nav.Link href="#downloadmovies">Download Movies </Nav.Link>
            <Nav.Link href="#signin/up">Sign In/Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;