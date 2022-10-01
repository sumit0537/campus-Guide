import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import './navbar.css'

const Navbar = () => {

 const navigate = useNavigate()

 const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate("/login");
 }

  return (
    <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/Home' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link to='/home' className='nav-item nav-btn'>About</Link>
                <Link to='/home' className='nav-item nav-btn'>Products</Link>
                <Link to='/home' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18" className='search-icon'/>
                </form>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
  )
}

export default Navbar