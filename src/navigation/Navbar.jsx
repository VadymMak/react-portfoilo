import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="home">Home</Link>
          <Link to="project">Project</Link>
          <Link to="about">About</Link>
          <Link to="contacts">Contacts</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
