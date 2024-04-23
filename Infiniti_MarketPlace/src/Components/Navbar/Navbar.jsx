import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg shadow bg-light fixed-top">
                <div className="container-fluid">                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="toggle" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={"/"}>Banner</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Categories"}>Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Trending_Auctions"}>Auctions</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Trending_Products"}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Trending_Services"}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Trending_Events"}>Events</NavLink>
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-1 custom-search-input" type="search" placeholder="Search by Products & Services" aria-label="Search" />                            
                            <button className="btn btn-outline-success custom-filter" type="submit">
                                <i className="bi bi-funnel me-1"></i>Filter
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
  )
}

export default Navbar