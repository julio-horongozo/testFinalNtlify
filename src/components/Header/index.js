import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  

  return (
    
    
    <div >
    
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={"/"}>Receitas de Vó</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/criar-receita">Postar Receita</Nav.Link>
          </Nav>
          <Navbar.Text>
            Feito por: Irene Stronczek
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
    

    

  );
}

export default Header;
