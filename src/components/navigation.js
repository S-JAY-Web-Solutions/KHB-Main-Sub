import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Navigation() {
  // State to control the visibility of the dropdown
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  // Handle mouse enter and mouse leave for hover effect
  const handleMouseEnter = () => setCategoriesOpen(true); // Open dropdown on hover
  const handleMouseLeave = () => setCategoriesOpen(false); // Close dropdown when hover ends

  // State to handle hover effect (optional)
  const [toggleCategoriesHover, setToggleCategoriesHover] = useState(false);

  // Handle hover start and end for button
  const handleHoverEnter = () => setToggleCategoriesHover(true);
  const handleHoverLeave = () => setToggleCategoriesHover(false);

  return (
    <nav className="flex items-center justify-end space-x-6 bg-white px-8 py-4 uppercase text-blue-950">
      {/* Static Links */}
      {[ 
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" }
      ].map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `text-md px-4 py-2 transition-all ${
              isActive
                ? "text-blue-950 border-b-2 border-blue-950 font-bold transition-all ease-in-out duration-200"
                : "text-blue-950 hover:border-b-2 hover:border-blue-950 hover:text-blue-950 transition-all duration-200 ease-in-out"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}

      {/* Categories Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter} // Open on hover
        onMouseLeave={handleMouseLeave} // Close on hover end
      >
        <button
          onMouseEnter={handleHoverEnter} // Handle hover on button
          onMouseLeave={handleHoverLeave} // Handle hover off button
          className={`flex items-center text-md px-4 uppercase py-2 transition-all ${
            toggleCategoriesHover
              ? "text-blue-950 border-b-2 border-blue-950"
              : "hover:text-blue-950 hover:border-b-2 border-blue-950"
          }`}
        >
          Categories
          {isCategoriesOpen ? (
            <ExpandLessIcon className="ml-2" />
          ) : (
            <ExpandMoreIcon className="ml-2" />
          )}
        </button>

        {isCategoriesOpen && (
          <ul className="absolute right-0 text-sm w-48 bg-white shadow-lg text-blue-950">
            {[
              { name: "Electronics", path: "/categories/electronics" },
              { name: "Fashion", path: "/categories/fashion" },
              { name: "Home Appliances", path: "/categories/home-appliances" },
              { name: "Books", path: "/categories/books" }
            ].map((category) => (
              <li key={category.name} >
                <NavLink
                  to={category.path}
                  className="block px-4 py-2 hover:bg-blue-100 transition-all"
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
