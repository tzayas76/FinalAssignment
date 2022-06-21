import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import { Button, ButtonGroup } from 'react-bootstrap';
import Home from '../Home-Page';
import Donate from '../DONATE';
import Adopt from '../ADOPT';
import React from 'react';

function Navigation() {
    return (
      <>
     <Navbar bg="dark" expand="lg" variant='dark' >
       <Container>
         <Navbar.Brand href="#home">Endangered Wildlife Fund</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link><Link to="/home">Home</Link></Nav.Link>
             <Nav.Link><Link to="/donate">Donate</Link></Nav.Link>
             <Nav.Link><Link to="/adopt">Adopt</Link></Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>

      <main> 
        <Routes>
      <Route path="home" element={<Home />} />
      <Route path="donate" element={<Donate />} /> 
      <Route path="adopt" element={<Adopt />} />
      </Routes></main>
      </>
        
    )
     
}


export default Navigation 