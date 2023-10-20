import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/" className='brand'>Amazon</Link>
          </div>

          <div className="nav nav-pills">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="about" className='nav-link'>About</Link>
            <Link to="products" className='nav-link'>Products</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header