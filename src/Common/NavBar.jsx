import React from 'react';


const NavbarMenu = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-title">My App</h2>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
