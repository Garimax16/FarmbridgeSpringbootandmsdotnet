import { Link } from 'react-router-dom'; 
import { Navbar, Nav, NavDropdown, Container,Dropdown } from 'react-bootstrap';
import { useState } from 'react';


function NavibarA() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Navbar expand="lg" className="nav" onToggle={() => setIsCollapsed(!isCollapsed)} 
    expanded={isCollapsed}>
      <Container>
      

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={` ${isCollapsed ?'collapsed-bg':'' }`} >
          <Nav className="me-auto nav-links">
              {/* Link to About Us page */}
              <Nav.Link as={Link} to="/product-approval" className="nav-links">Product Approval</Nav.Link>
              <Nav.Link as={Link} to="/AdminSupportPage" className="nav-links">Customer Support</Nav.Link>
              <Nav.Link as={Link} to="/admin-m" className="nav-links">Profile Management</Nav.Link>
              <Nav.Link as={Link} to="/order" className="nav-links">Orders Management</Nav.Link>
     
            
            
            
          </Nav>
          <Navbar.Text>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Hi,<a href="#login"> Admin</a>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        <Dropdown.Item as={Link} to="/">Sign Out</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavibarA;