import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../apitherapy.png'

const Navbar=()=>{





        return (
            <div>
                
                <nav className="navbar fixed-top navbar-expand-lg bg-warning ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light fs-4" to="#">
                        <img src={logo} style={{height:30, width:30}}/>

                            <strong >NewsHive</strong> 
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active text-light fs-6 fw-semibold" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/entertainment">Entertainment</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/general">General</Link></li> */}
                                <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light fs-6 fw-semibold" to="/technology">Technology</Link></li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default Navbar
