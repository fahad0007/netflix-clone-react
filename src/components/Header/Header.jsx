import React from 'react'
import "./Header.css";
import logo from "../../assets/Netflix-Logo.png"
import bg from "../../assets/Netflix-bg.jpg"


import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header className='showcase'>
            <div className="showcase-top">
                <img src={logo} alt='logo' />
                <Link to="/" className='btn btn-rounded'>Sign In</Link>
            </div>
            <div className="showcase-content">
                <h1>Unlimited Movies, TV shows and more</h1>
                <p>Watch anywhere, Cancel Anytime</p>
                <Link to="/ShowPage" className='btn-header btn-xl'>Watch free for 30 days <i className='fas fa-chevron-right btn-icon'></i> </Link>
            </div>
        </header>
    )
}

export default Header  