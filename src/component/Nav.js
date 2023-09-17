import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <label className="navbar-brand text-success">E-Commerce</label>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' style={{textDecoration:"none"}}><label className="nav-link text-light " aria-current="page" >Home</label></Link>
        </li>
        <li className="nav-item">
          <Link to="/product" style={{textDecoration:"none"}}><label className="nav-link text-light" >Product</label></Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" style={{textDecoration:"none"}}><label className="nav-link text-light ">Cart</label></Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Nav
