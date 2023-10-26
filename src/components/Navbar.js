import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light navstyle">
                            <div className="container-fluid">
                              
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav colortext">
                                    <li className="nav-item mx-2">
                                        <Link to="/home">
                                          <a className="nav-link disabled nounderline"  aria-current="page" href="#">Home</a>
                                        </Link>
                                    </li>
                                 
                                    <li className="nav-item mx-2">   
                                    <Link to="/about">
                                       <a className="nav-link " aria-current="page" href="#">About</a>
                                    </Link>
                                  
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link to="/contact">
                                           <a className="nav-link" href="#">Contact</a>
                                        </Link>
                                       
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </nav>
    </>
  )
}

export default Navbar