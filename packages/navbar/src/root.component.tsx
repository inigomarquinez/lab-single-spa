import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

import "./root.component.css";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/app1" className="link">
          GLUE
        </Link>
        <Link to="/app2" className="link">
          IESE
        </Link>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
