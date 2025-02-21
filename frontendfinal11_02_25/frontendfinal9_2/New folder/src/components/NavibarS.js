// import { Link } from 'react-router-dom'; 
// import { Navbar, Nav, NavDropdown, Container,Dropdown } from 'react-bootstrap';
// import { useState } from 'react';
// import ProfileEditPage from '../pages/ProfileEditPage';

// function NavibarS() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   return (
//     <Navbar expand="lg" className="nav" onToggle={() => setIsCollapsed(!isCollapsed)} 
//     expanded={isCollapsed}>
//       <Container>
//       <Nav.Link as={Link} to="/">
//         <Navbar.Brand className="nav-links" >FarmBridge</Navbar.Brand>
//         </Nav.Link>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className={` ${isCollapsed ?'collapsed-bg':'' }`} >
//           <Nav className="me-auto nav-links">
//               {/* Link to About Us page */}
//               <Nav.Link as={Link} to="/admin-login" className="nav-links">Admin Login</Nav.Link>
           
//             <NavDropdown title="Buyer" id="basic-nav-dropdown" >
//               <NavDropdown.Item as={Link} to="/buyer-login" className='nav-links'>Buyer Login</NavDropdown.Item>  {/* Link to Buyer Login page */}
//               <NavDropdown.Item as={Link} to="/buyer-register" className='nav-links'>Buyer Registration</NavDropdown.Item>
//             </NavDropdown>

//             <NavDropdown title="Farmer" id="basic-nav-dropdown" >
//               <NavDropdown.Item as={Link} to="/seller-login" className="nav-links">Farmer Login</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/seller-register" className="nav-links">Farmer Registration</NavDropdown.Item>
//             </NavDropdown>
            
            
//             <Nav.Link as={Link} to="/contact-us" className="nav-links">Contact Us</Nav.Link>
           
//             <Nav.Link as={Link} to="/about-us" className='nav-links'>About Us</Nav.Link>
//           </Nav>
//           <Navbar.Text>
//           <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//       Hi,<a href="#login"> Tanya Singh</a>
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item as={Link} to='/seller-profile'>My Profile</Dropdown.Item>
//         <Dropdown.Item as={Link} to='/'>Sign Out</Dropdown.Item>

//       </Dropdown.Menu>
//     </Dropdown>
            
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavibarS;

import { Link, useNavigate } from 'react-router-dom'; 
import { Navbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

function NavibarS() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();  // Hook to redirect user after logout

  const handleLogout = () => {
    localStorage.removeItem('authToken');  // Remove JWT token from local storage
    navigate('/seller-login');  // Redirect to login page
  };

  return (
    <Navbar expand="lg" className="nav" onToggle={() => setIsCollapsed(!isCollapsed)} 
      expanded={isCollapsed}>
      <Container>
        <Nav.Link as={Link} to="/">
          <Navbar.Brand className="nav-links">FarmBridge</Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`${isCollapsed ? 'collapsed-bg' : ''}`}>
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/admin-login" className="nav-links">Admin Login</Nav.Link>
           
            <NavDropdown title="Buyer" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/buyer-login" className='nav-links'>Buyer Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/buyer-register" className='nav-links'>Buyer Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Farmer" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/seller-login" className="nav-links">Farmer Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seller-register" className="nav-links">Farmer Registration</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/contact-us" className="nav-links">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className='nav-links'>About Us</Nav.Link>
          </Nav>

          <Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Hi, <a href="#login">Tanya Singh</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/seller-profile'>My Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>  {/* Logout Button */}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavibarS;
