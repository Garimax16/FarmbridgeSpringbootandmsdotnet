import { Link } from 'react-router-dom'; 
import { Navbar, Nav, NavDropdown, Container,Dropdown } from 'react-bootstrap';
import { useState } from 'react';


function NavibarAdminHome() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Navbar expand="lg" className="nav" onToggle={() => setIsCollapsed(!isCollapsed)} 
    expanded={isCollapsed}>
      <Container>
      

        
     <h4 style={heading}>Welcome To Admin DashBoard</h4>
            
            
            
          
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
        
      </Container>
    </Navbar>
  );
}

const heading={
    marginLeft:"40%"
}

export default NavibarAdminHome;