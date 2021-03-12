import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{paddingRight: 15, paddingLeft: 15}}>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/banks"
                    >
                        Banks
                    </NavLink>
                </div>
            </div>
        </nav>
        
    )
}