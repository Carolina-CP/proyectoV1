import React from 'react'
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import '..//assets/css/navegadorInterno.css'



const NavegadorInterno = () => {
  return (
    <>
      <Nav className="navegadorInterno justify-content-center" activeKey="/home">
        <Nav.Item className='m-2'><Link  className="link" to='/novedades'>Novedades</Link></Nav.Item>
        <Nav.Item className='m-2'><Link className="link" to='/tienda'>Tienda</Link></Nav.Item>


        <NavDropdown style={{color: 'grey'}} className='desplegable' title="Nosotros" id="basic-nav-dropdown ">
          <NavDropdown.Item> <Link className="link" to='/proyecto'>Proyecto</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link className="link" to='/equipo'>Equipo</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> <Link className="link" to='/preguntas_frecuentes'>Preguntas Frecuentes</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className='m-2'> <Link className="link" to='/contacto'>Contacto</Link></Nav.Item>
        <Nav.Item className='m-2'> <Link className="link" to='/nombre'>Mi Perfil</Link></Nav.Item>
      </Nav>
    </>

  )
}

export default NavegadorInterno