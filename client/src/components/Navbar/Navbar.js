import React from "react";

const Navbar =() =>(
<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <a className="navbar-brand" href="/">T.A.G-FRESH!!!</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mixes">Mixes</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#sets">Sets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

)
export default Navbar