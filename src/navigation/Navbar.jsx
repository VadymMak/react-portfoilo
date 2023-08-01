import React from "react";

import { Link } from "react-router-dom";

import styled from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styled.container}>
      <div className={styled.container__title}>
        <h3>Mikolay</h3>
      </div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="project">Project</Link>
          <Link to="about">About</Link>
          <Link to="contacts">Contacts</Link>
        </ul>
      </nav>

      <div className={styled.container__button}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
