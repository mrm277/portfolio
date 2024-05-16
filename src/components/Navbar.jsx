import React from "react";
import logo from "../img/logo.svg";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);  

function Navbar() {
  
  return (
    <nav className="flex p-4 justify-between text-white w-full bg-transparent">
      <Link to="/" >
        <img src={logo} alt="logo" className="w-auto h-16" />
      </Link>

      { window.location.pathname === "/" ? ( 
      <ul className=" flex space-x-4 items-center align-middle" >
        <li className="text-lg font-medium hover:text-[#FFE6E6]">
          <a href="/" onClick={(e) => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: "#aboutme"});
      }}>About Me</a>
        </li>

        <li className="text-lg font-medium hover:text-[#FFE6E6]">
        <Link to="/projects">Projects</Link>
      </li>
      </ul>
      ) : (
      <ul className=" flex space-x-4 items-center align-middle" >
        <li className="text-lg font-medium hover:text-[#FFE6E6]">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      )}

      
    </nav>
  );
}

export default Navbar;