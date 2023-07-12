import React from 'react'
import './navbar.css'
import {ShoppingCart, MagnifyingGlass} from 'phosphor-react'
import { Link } from 'react-router-dom'
import profile from '../assets/Images/profile/profile.jpg'
import { useFilterContext } from '../context/FilterContext'

const Navbar = () => {
  const { filters: { text }, updateFilterValues } = useFilterContext()
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
            <div className="nav-logo">
                <h2>Shein</h2>
            </div>
            <div className="nav-left_items">
                <Link to="/">Shop</Link>
                <Link to="/women">Women</Link>
                <Link to="/men">Men</Link>
                <Link to="/children">Children</Link>
            </div>
        </div>
        <div className="nav-right">
            <div className="nav-search">
              <form onSubmit={(e) => e.preventDefault()}>
                <input 
                  type='text' 
                  name='text' 
                  value={text} 
                  onChange={updateFilterValues} 
                  placeholder='Search' 
                />
                <div className="search-btn">
                    <MagnifyingGlass size={28} />
                </div>
              </form>
            </div>
            <div className="nav-img">
                <img src={profile} alt='Nav Img' />
            </div>
            <Link to="/cart" className="nav-cart">
                <ShoppingCart size={28} />
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
