import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/adminlogo.png";
import { Logout, Copyright, ExpandMore, ExpandLess  } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReviewIcon from "@mui/icons-material/Reviews";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import OfferIcon from "@mui/icons-material/LocalOffer";



export default function Sidebar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const toggleDropdown1 = () => {
    setDropdown1Open(!isDropdown1Open);
  }
  
  return (
    <div className="min-h-screen w-64 bg-white text-blue-950 flex flex-col">

      <div className="w-full h-16 p-4 ">
          <img src={Logo} alt="logo" className="w-32" />
      </div>
      <hr className="mb-5"/>
      <nav className="flex-1">
        <ul>
          {/* Dashboard Link*/  }
          <li className="p-1 text-md font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                }`
              }
            >
              <span className="mr-2">
                <DashboardIcon />
              </span>
              Dashboard
            </NavLink>
          </li>

          {/* Manage User Link*/  }
          <li className="p-1 text-md">
            <button
              onClick={toggleDropdown}
              className="flex font-bold items-center w-full py-2 px-4 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-all"
            >
              <PeopleIcon className="mr-2" />
              Manage Users
              {isDropdownOpen ? (
                <ExpandLess className="ml-auto" />
              ) : (
                <ExpandMore className="ml-auto" />
              )}
            </button>

            <ul
              className={`overflow-hidden transition-max-height duration-500 ease-in-out rounded-md shadow-md ${
                isDropdownOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="text-md ">
                <NavLink
                  to="/customers"
                  className={({ isActive }) =>
                    `block py-2 px-12 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                    }`
                  }
                >
                  Customers
                </NavLink>
              </li>
              <li className="text-md ">
                <NavLink
                  to="/managers"
                  className={({ isActive }) =>
                    `block py-2 px-12 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                    }`
                  }
                >
                  Managers
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Inventory Link*/  }
          <li className="p-1 text-md">
            <button
              onClick={toggleDropdown1}
              className="flex font-bold items-center w-full py-2 px-4  hover:bg-blue-100 hover:text-blue-700 rounded-md transition-all"
            >
              <InventoryIcon className="mr-2" />
              Inventory
              {isDropdown1Open ? (
                <ExpandLess className="ml-auto" />
              ) : (
                <ExpandMore className="ml-auto" />
              )}
            </button>
            <ul
              className={`overflow-hidden transition-max-height duration-500 ease-in-out rounded-md shadow-md ${
                isDropdown1Open ? "max-h-40" : "max-h-0"
              }`}
            >
                <li className="text-md">
                  <NavLink
                    to="/addproduct"
                    className={({ isActive }) =>
                      `block py-2 px-12 ${
                        isActive
                        ? "bg-blue-100 text-blue-700 font-bold "
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                      }`
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                <li className="text-md">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `block py-2 px-12 ${
                        isActive
                        ? "bg-blue-100 text-blue-700 font-bold "
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                      }`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="text-md">
                  <NavLink
                    to="/category"
                    className={({ isActive }) =>
                      `block py-2 px-12 ${
                        isActive
                        ? "bg-blue-100 text-blue-700 font-bold "
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                      }`
                    }
                  >
                    Categories
                  </NavLink>
                </li>
                <li className="text-md">
                  <NavLink
                    to="/brands"
                    className={({ isActive }) =>
                      `block py-2 px-12 ${
                        isActive
                        ? "bg-blue-100 text-blue-700 font-bold "
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                      }`
                    }
                  >
                    Brands
                  </NavLink>
                </li>
              </ul>
            
          </li>

          {/* Orders Link*/  }
          <li className="p-1 text-md font-bold ">
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                }`
              }
            >
              <span className="mr-2">
                <ShoppingCartIcon />
              </span>
              Orders
            </NavLink>
          </li>

          {/* Reviews Link*/  }
          <li className="p-1 text-md font-bold ">
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                }`
              }
            >
              <span className="mr-2">
                <ReviewIcon />
              </span>
              Reviews
            </NavLink>
          </li>

          {/* Promotions Link*/  }
          <li className="p-1 text-md font-bold ">
            <NavLink
              to="/promotions"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                }`
              }
            >
              <span className="mr-2">
                <OfferIcon />
              </span>
              Promotions
            </NavLink>
          </li>

          {/* Analytics Link*/  }
          <li className="p-1 text-md font-bold ">
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                }`
              }
            >
              <span className="mr-2">
                <AnalyticsIcon />
              </span>
              Analytics
            </NavLink>
          </li>

          <hr className="m-5"/>

          {/* Setting Link*/  }
          <li className="p-1 text-md font-bold ">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive
                        ? "bg-blue-100 text-blue-700 font-bold"
                        : "hover:bg-blue-100 hover:text-blue-700 transition-all"
                }`
              }
            >
              <span className="mr-2">
                <SettingsIcon />
              </span>
              Settings
            </NavLink>
          </li>
        </ul>

      </nav>


      <div className="p-4 my-2">
        <button className="bg-red-700 text-white w-full py-3 rounded-xl hover:bg-red-800 hover:font-bold flex items-center justify-center">
          <Logout className="mr-2" />
          Logout
        </button>
      </div>

        <footer className="py-4 text-sm text-center">
            <div>
                2025 <Copyright aria-label="Copyright" /> All Rights Reserved.
            </div>
            <div>S JAY Web Solutions (Pvt) Ltd.</div>
        </footer>
    </div>
  );
}
