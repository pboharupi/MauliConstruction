import React from "react";
import { Link } from "react-router-dom"; 
import { useHistory, NavLink } from "react-router-dom";
function Menu()
{
    return (
        <div class="m-4">
            <nav class="navbar navbar-expand-sm bg-body-tertiary navbar-light ">
                <div class="container-fluid ">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item border border-light" style={{backgroundColor:"#CC0066"}} id="liAboutUs">
                              <Link to="/" class="btn btn-sm " style={{color:"white"}}>  <a class="nav-link"  style={{color:"white"}} href="/"><h6>About Us</h6></a></Link>
                            </li>
                           
                            <li class="nav-item border border-light" style={{backgroundColor:"#CC0066"}} id="liPackages">
                            <Link to="/packages" class="btn btn-sm"><a class="nav-link" href="/packages" style={{color:"white"}}><h6>Our Packages</h6></a></Link>
                            </li>
                            <li class="nav-item border border-light" style={{backgroundColor:"#CC0066"}} id="liProjects">
                            <Link to="/projects" class="btn btn-sm "><a class="nav-link" href="#" style={{color:"white"}}><h6>Our Projects</h6></a></Link>
                            </li>
                            <li class="nav-item border border-light" style={{backgroundColor:"#CC0066"}} id="liCustomers">
                            <Link to="/customer" class="btn btn-sm"><a class="nav-link" href="#" style={{color:"white"}}><h6>Our Customers</h6></a></Link>
                            </li>
                            <li class="nav-item border border-light" style={{backgroundColor:"#CC0066"}} id="liContactUs">
                            <Link to="/contact" class="btn btn-sm "><a class="nav-link" href="#" style={{color:"white"}}><h6>Contact Us</h6></a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu;