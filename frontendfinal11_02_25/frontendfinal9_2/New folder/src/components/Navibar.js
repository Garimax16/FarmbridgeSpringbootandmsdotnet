
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { OrderMgmt } from './OrderMgmt';
import { useState } from 'react';

function Navibar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Navbar expand="lg" className="nav" onToggle={() => setIsCollapsed(!isCollapsed)} 
    expanded={isCollapsed}>
      <Container>
        <Nav.Link as={Link} to="/">
        <Navbar.Brand className="nav-links" >FarmBridge</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={` ${isCollapsed ?'collapsed-bg':'' }`} >
          <Nav className="me-auto nav-links">
             {/* Link to About Us page */}
            <Nav.Link as={Link} to="/admin-login" className="nav-links">Admin Login</Nav.Link>
            <NavDropdown title="Buyer" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/buyer-login" className='nav-links'>Buyer Login</NavDropdown.Item>  {/* Link to Buyer Login page */}
              <NavDropdown.Item as={Link} to="/buyer-register" className='nav-links'>Buyer Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Farmer" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/seller-login" className="nav-links">Farmer Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Fregister' className="nav-links">Farmer Registration</NavDropdown.Item>
            </NavDropdown>
            
            {/* <Nav.Link as={Link} to="/grievances" className="nav-links">Grievances</Nav.Link> */}
            <Nav.Link as={Link} to="/contact-us" className="nav-links">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className='nav-links'>About Us</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// function Navibar() {
//   // Inline Styles
//   const styles = {
//     navbar: {
//       background: '#1e7e34', // Slightly darker green shade
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       padding: '0.5rem 1rem', // Adjusted padding for better alignment
//     },
//     brand: {
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       color: '#fff',
//       textDecoration: 'none',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     brandIcon: {
//       fontSize: '1.8rem',
//       marginLeft: '0.5rem',
//     },
//     navLink: {
//       color: '#fff',
//       fontSize: '1rem',
//       fontWeight: '500',
//       margin: '0 0.8rem',
//       padding: '0.5rem 1rem',
//       textDecoration: 'none',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     dropdownToggle: {
//       color: '#fff',
//       fontSize: '1rem',
//       fontWeight: '500',
//       margin: '0 0.8rem',
//       padding: '0.5rem 1rem',
//       textDecoration: 'none',
//       background: 'transparent',
//       border: 'none',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     dropdownItem: {
//       color: '#333',
//       fontSize: '0.9rem',
//       padding: '0.5rem 1rem',
//       textDecoration: 'none',
//       transition: 'all 0.3s ease',
//     },
//     navbarCollapse: {
//       display: 'flex',
//       justifyContent: 'center',
//       width: '100%',
//       alignItems: 'center',
//     },
//     dropdownMenu: {
//       background: '#1e7e34', // Matching navbar color
//     },
//   };

//   return (
//     <Navbar expand="lg" style={styles.navbar}>
//       <Container>
//         {/* Brand Logo */}
//         <Nav.Link as={Link} to="/" style={{ textDecoration: 'none' }}>
//           <Navbar.Brand style={styles.brand}>
//             FarmBridge
//             <span style={styles.brandIcon}>🌿</span>
//           </Navbar.Brand>
//         </Nav.Link>

//         {/* Toggle Button */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Navbar Links */}
//         <Navbar.Collapse id="basic-navbar-nav" style={styles.navbarCollapse}>
//           <Nav>
//             <Nav.Link as={Link} to="/admin-login" style={styles.navLink}>
//               Admin Login
//             </Nav.Link>

//             {/* Buyer Dropdown */}
//             <NavDropdown title="Buyer" id="buyer-dropdown" style={styles.dropdownToggle} menuStyle={styles.dropdownMenu}>
//               <NavDropdown.Item as={Link} to="/buyer-login" style={styles.dropdownItem}>
//                 Buyer Login
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/buyer-register" style={styles.dropdownItem}>
//                 Buyer Registration
//               </NavDropdown.Item>
//             </NavDropdown>

//             {/* Farmer Dropdown */}
//             <NavDropdown title="Farmer" id="farmer-dropdown" style={styles.dropdownToggle} menuStyle={styles.dropdownMenu}>
//               <NavDropdown.Item as={Link} to="/seller-login" style={styles.dropdownItem}>
//                 Farmer Login
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/Fregister" style={styles.dropdownItem}>
//                 Farmer Registration
//               </NavDropdown.Item>
//             </NavDropdown>

//             {/* Other Links */}
//             <Nav.Link as={Link} to="/contact-us" style={styles.navLink}>
//               Contact Us
//             </Nav.Link>
//             <Nav.Link as={Link} to="/about-us" style={styles.navLink}>
//               About Us
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navibar;




