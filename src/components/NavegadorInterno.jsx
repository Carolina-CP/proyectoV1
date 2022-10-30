import React from 'react'
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import '..//assets/css/navegadorInterno.css'



const NavegadorInterno = () => {
  return (
    <>
      <Nav className="navegadorInterno justify-content-center" activeKey="/home">
        <Nav.Item className='m-2'><Link className="link" to='/novedades'>Novedades</Link></Nav.Item>
        <Nav.Item className='m-2'><Link className="link" to='/tienda'>Tienda</Link></Nav.Item>
        <Nav.Item className='m-2'><Link className="link" to='/nosotros'>Nosotros</Link></Nav.Item>
        <Nav.Item className='m-2'> <Link className="link" to='/nombre'>Mi Perfil</Link></Nav.Item>
      </Nav>
    </>

  )
}

export default NavegadorInterno