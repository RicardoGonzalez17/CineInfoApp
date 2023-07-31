import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    setSearch(search.trim())
    onSearch(search.trim())
  }
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>Cine App</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>Home</NavLink>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Buscar'
              value={search} aria-label='Buscar'
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className='btn btn-outline-success' onClick={handleSearch} type='button'>Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
