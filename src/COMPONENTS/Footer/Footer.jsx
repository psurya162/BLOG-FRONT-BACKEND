import React from "react";
import "./Footer.css";
import {
  BrowserRouter as Router,
  NavLink,
 
} from "react-router-dom";


const Footer = () => {
  return (
    <>
      
        <div className="Footer-Parent">
          <div className="Footer-child-1">
            <h2>The Siren</h2>
          </div>
          <div className="Footer-child-2">
            <NavLink to="/">
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/Hollywood">
              <h2>Hollywood</h2>
            </NavLink>
            <NavLink to="/Bollywood">
              <h2>Bollywood</h2>
            </NavLink>
          </div>
          <div className="Footer-child-3">
            <NavLink to="/Fitness">
              <h2>Fitness</h2>
            </NavLink>
            <NavLink to="/Technology">
              <h2>Technology</h2>
            </NavLink>
            <NavLink to="/Sports">
              <h2>Sports</h2>
            </NavLink>
          </div>
          <div className="Footer-child-4">
            <h2 > 
              <a  href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
              
            </h2>
            <h2>
              <a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></a>
              
            </h2>
            <h2>
              <a href="https://www.instagram.com/" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
             
            </h2>
          </div>
        </div>

      
      
    </>
  );
};

export default Footer;
