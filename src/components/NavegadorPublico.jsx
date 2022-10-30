import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import BotonIngreso from './BotonIngreso';
import BotonRegistro from './BotonRegistro';
import LogoPNG from '..//assets/img/LogoPNG.png'
import '..//assets/css/navegadorPublico.css'

const NavegadorPublico = () => {



  return (
    <>
      <Navbar className='navegadorPublico' expand="lg">
        <Container >
          <Navbar.Brand>
            <Link to='/' >
              <img src={LogoPNG}
                alt="Logotipo Laboral Marketplace"
                style={{ width: '180px' }} />
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
                      
            
        <Nav.Item  to='/Ingresar'>
          <NavLink  to="/ingresar">
          <BotonIngreso /></NavLink>
        </Nav.Item>

            
        <Nav.Item  to='/Registrarse'>
          <NavLink  to="/registrarse">
          <BotonRegistro /></NavLink>
        </Nav.Item>

          </Nav>
        </Container>
      </Navbar>
    </>

  )
}

export default NavegadorPublico