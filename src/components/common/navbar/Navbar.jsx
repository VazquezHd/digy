import data from "./data.json";
import { DropDown } from "./Dropdown";
import React from 'react';
import miImagen from '../../../assets/logo.png';
import "./header.css";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm" >
      <div className="container-fluid">
        <a href="/" className="navbar-brand font-weight-bold d-block"> 
        <img src={miImagen} alt="logo-nav" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {data.map((menu_data, index) => (
              <DropDown
                data={menu_data}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
