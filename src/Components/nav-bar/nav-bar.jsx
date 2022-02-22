/** @format */

import "./nav-bar.scss";

const Navbar = () => {
  return (
    <div className="navBar p-0 m-0">
      <ul className=" d-flex flex-row  justify-content-center">
        <li to="#Main">Main</li>

        <li href="#About">About</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
