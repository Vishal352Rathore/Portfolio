import { useState } from "react";
import {Link}  from "react-router-dom";
import './navbar.css';

function navbarnav(props) {

    return (

        <>
            <nav className="navbar navbar-expand-lg  bg-black ">
                <div className="container-fluid">
                <Link className="navbar-brand lavishFont ps-md-5 ps-1 text-light " to="/">{"<Vishal/>"}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-3">
                        <Link className="nav-item nav-link  hover-underline-animation" to = "/">Home </Link>
                        <Link className="nav-item nav-link hover-underline-animation" to="/about">About</Link>
                        <Link className="nav-item nav-link hover-underline-animation" to="/project">Project</Link>
                        <Link className="nav-item nav-link hover-underline-animation" to="/services">Services</Link>
                        <Link className="nav-item nav-link hover-underline-animation" to="/contact">Contact </Link>
                    </div>
                </div>
                </div>
            </nav>
        </>

    )

}
export default navbarnav;