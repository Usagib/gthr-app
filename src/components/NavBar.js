import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-strain fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#page-top">
        <img src="gthrlogowhite.png" className="logoimg" alt="logo" />
      </a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i className="navbar-toggler-icon"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#catalog">Catalog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#searchForm">Add to Catalog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#filter">Filter</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#searchForm">Reset</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="https://github.com/Usagib/gthr-app">Docs</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;
