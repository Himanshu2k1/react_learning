import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="Footer">
        <div className="container">
            <nav className="d-flex justify-content-center">
                <div className="nav nav-pills">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="about" className='nav-link'>About</Link>
                    <Link to="products" className='nav-link'>Products</Link>
                </div>
            </nav>
        </div>

    </footer>
  )
}

export default Footer