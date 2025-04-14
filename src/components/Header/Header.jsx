import { NavLink, Link } from 'react-router-dom'
import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <img src='./assets/hp logo.png' alt='logo' />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Profile'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
