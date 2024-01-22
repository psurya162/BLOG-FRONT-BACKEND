import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Hollywood from "./Hollywood";
import Bollywood from "./Bollywood";
import Sports from "./Sports";
import Fitness from "./Fitness";
import Technology from "./Technology";
import DataCompo from "../../Store/Store";
import "./NavBar.css";
import DynamicCompo from "./DynamicCompo";


const Navbar = () => {
  const [menuOpen, setMenuopen] = useState(false);
  const togglemenu = () => {
    setMenuopen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuopen(false);
  };
  return (

    <>
    
   
    {/* // <Router> */}
      <div className="navbar">
        <div className="menu" onClick={togglemenu}>
          <i
            class={menuOpen ? "fa-solid fa-square-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/Hollywood" onClick={closeMenu}>
              HOLLYWOOD
            </NavLink>
          </li>
          <li>
            <NavLink to="/Bollywood" onClick={closeMenu}>
              BOLLYWOOD
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sports" onClick={closeMenu}>
              SPORTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/Fitness" onClick={closeMenu}>
              FITNESS
            </NavLink>
          </li>
          <li>
            <NavLink to="/Technology" onClick={closeMenu}>
              TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <DataCompo>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Technology" element={<Technology />} />
          
          <Route path="/dynamic/:id" element={<DynamicCompo />} />
          
        </Routes>
        
      </DataCompo>
      
    {/* // </Router> */}
    </>
  );
};

export default Navbar;
