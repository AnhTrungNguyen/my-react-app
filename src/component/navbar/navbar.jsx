import './navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {

    const activeNavbar =  {
        color: "white",
        background: "#1abc9c",
        borderRadius: "8px"
    };

    return (<>
        <nav>
            <NavLink to="/" style={({isActive}) => isActive ? activeNavbar : {}}>Home</NavLink>
            <NavLink to="/food" style={({isActive}) => isActive ? activeNavbar : {}}>Food</NavLink>
            <NavLink to="/blog" style={({isActive}) => isActive ? activeNavbar : {}}>Blog</NavLink>
            <NavLink to="/contact" style={({isActive}) => isActive ? activeNavbar : {}}>Contact</NavLink>
            <NavLink to="/donate" style={({isActive}) => isActive ? activeNavbar : {}}>Donate</NavLink>
            <div className="animation start-home"></div>
        </nav>
    </>);
}

export default Navbar;