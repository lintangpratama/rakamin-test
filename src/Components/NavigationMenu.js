import React from "react";
import { Link } from "react-router-dom";


function NavigationMenu(props) {
    const {closeMenu} = props;
  return (
    <>
      <span className="font-bold">The menu</span>

      <ul className="mt-3">
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500  py-3 border-b block"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-blue-500  py-3 border-b block"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-blue-500  py-3 border-b block"
            onClick={closeMenu}
          >
            Product
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavigationMenu;
