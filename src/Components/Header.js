import React from 'react'
import "../Styles/Header.css"
import Logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Header'>
      <div className="logoSct">
        <Link to="/">
        <img className ="logo" src={Logo} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Header