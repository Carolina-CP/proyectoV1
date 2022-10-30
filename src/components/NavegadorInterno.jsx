import React from 'react'
import { Link, NavLink } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';

import '..//assets/css/navegadorInterno.css'



const NavegadorInterno = () => {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <>
      <Nav className="navegadorInterno justify-content-center" activeKey="/home">
        <Nav.Item className="m-2 p-2" to='/novedades'>
          <NavLink className={setActiveClass} to="/novedades">
            Novedades </NavLink>
        </Nav.Item>

        <Nav.Item className=" m-2 p-2" to='/novedades'>
          <NavLink className={setActiveClass} to="/tienda">
            Tienda </NavLink>
        </Nav.Item>

        <Nav.Item className=" m-2 p-2" to='/novedades'>
          <NavLink className={setActiveClass} to="/nosotros">
            Nosotros </NavLink>
        </Nav.Item>

        <Nav.Item className=" m-2 p-2" to='/novedades'>
          <NavLink className={setActiveClass} to="/nombre">
            Mi Perfil </NavLink>
        </Nav.Item>

      </Nav>
    </>

  )
}

export default NavegadorInterno