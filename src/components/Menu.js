import React from 'react'

import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <img src='../../public/images/here-logo.svg' />
        <Link to='/' className='navbar-brand'>
          Maps API Explorer
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Features</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
