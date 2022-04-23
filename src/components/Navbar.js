import React from 'react'
import { NavLink} from "react-rounter-dom";

function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light" sticky="top">
            <div className="container">
                <a className="navbar-brand" href="/mamona">Mamona Masood</a>
                <div className="nav-band" id="navbarToggler"></div>
                <ul className="navbar-nav">
                    <NavLink
                        activeClassName="nav_link--active"
                        className="nav_link"
                        to="/about"
                    >
                    |   About Me

                    </NavLink>

                    <NavLink
                        activeClassName="nav_link--active"
                        className="nav_link"
                        to="/portfolio"
                    >
                    |   Portfolio

                    </NavLink>

                    <NavLink
                        activeClassName="nav_link--active"
                        className="nav_link"
                        to="/contact"
                    >
                    |   Contact

                    </NavLink>

                    <NavLink
                        activeClassName="nav_link--active"
                        className="nav_link"
                        to="/resume"
                    >
                    |   Resume

                    </NavLink>


                </ul>

            </div>

        </nav>
        </>
    )
}


export default NavBar;



    

  
  
        