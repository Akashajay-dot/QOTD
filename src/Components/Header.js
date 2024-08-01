import React from 'react'
import "../Styles/Header.css"
import Logo from "../Assets/logo.png"
function Header() {
  return (
    <div className='Header'>
      <div className="logoSct">
        <img className ="logo" src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Header