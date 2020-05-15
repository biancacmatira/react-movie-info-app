import React from "react";
import Form from "./Form";

const Navbar = () => {
  const imdbLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png";

  return (
    <div className="navbar">
      <img src={imdbLogo} className="navbar-logo" alt="logo" />
      <Form />
    </div>
  );
};

export default Navbar;
