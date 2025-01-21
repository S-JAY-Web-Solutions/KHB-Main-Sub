import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/adminlogo.png";
import { Logout, Copyright, ExpandMore, ExpandLess  } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";
import InventoryIcon from "@mui/icons-material/Inventory2Outlined";
import ReviewIcon from "@mui/icons-material/ReviewsOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import AnalyticsIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import OfferIcon from "@mui/icons-material/LocalOfferOutlined";



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
          <li className="py-2 px-4 text-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-[5px] px-4 rounded-md ${
                  isActive
                    ? "text-white bg-custom-gradient "
                    : "hover:bg-gray-100 transition-all"
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
          <li className="py-2 px-4 text-md">
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-100 transition-all"
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
                    `block py-[5px] px-12 ${
                      isActive
                      ? "text-white bg-custom-gradient "
                      : "hover:bg-gray-100 transition-all"
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
                    `block py-[5px] px-12 ${
                      isActive
                      ? "text-white bg-custom-gradient "
                      : "hover:bg-gray-100 transition-all"
                    }`
                  }
                >
                  Managers
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Inventory Link*/  }
          <li className="py-2 px-4 text-md">
            <button
              onClick={toggleDropdown1}
              className="flex items-center w-full py-[5px] px-4  hover:bg-gray-100 rounded-md transition-all"
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
                      `block py-[5px] px-12 ${
                        isActive
                        ? "text-white bg-custom-gradient "
                        : "hover:bg-gray-100 transition-all"
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
                      `block py-[5px] px-12 ${
                        isActive
                        ? "text-white bg-custom-gradient "
                        : "hover:bg-gray-100 transition-all"
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
                      `block py-[5px] px-12 ${
                        isActive
                        ? "text-white bg-custom-gradient "
                        : "hover:bg-gray-100 transition-all"
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
                      `block py-[5px] px-12 ${
                        isActive
                        ? "text-white bg-custom-gradient "
                        : "hover:bg-gray-100 transition-all"
                      }`
                    }
                  >
                    Brands
                  </NavLink>
                </li>
              </ul>
            
          </li>

          {/* Orders Link*/  }
          <li className="py-2 px-4 text-md">
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `block py-[5px] px-4 rounded-md ${
                  isActive
                  ? "text-white bg-custom-gradient "
                  : "hover:bg-gray-100 transition-all"
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
          <li className="py-2 px-4 text-md">
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `block py-[5px] px-4 rounded-md ${
                  isActive
                  ? "text-white bg-custom-gradient "
                  : "hover:bg-gray-100 transition-all"
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
          <li className="py-2 px-4 text-md">
            <NavLink
              to="/promotions"
              className={({ isActive }) =>
                `block py-[5px] px-4 rounded-md ${
                  isActive
                  ? "text-white bg-custom-gradient "
                  : "hover:bg-gray-100 transition-all"
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
          <li className="py-2 px-4 text-md">
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `block py-[5px] px-4 rounded-md ${
                  isActive
                  ? "text-white bg-custom-gradient "
                  : "hover:bg-gray-100 transition-all"
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
          <li className="py-2 px-4 text-md">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block py-[5px] px-4 rounded-md ${
                  isActive
                  ? "text-white bg-custom-gradient "
                  : "hover:bg-gray-100 transition-all"
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


      <div className="py-2 px-4 my-2">
        <button className="bg-[#ff4c51] text-white w-full py-3 rounded-xl hover:bg-[#ff0000]  flex items-center justify-center transition-all duration-300">
          <Logout className="mr-2" />
          Logout
        </button>
      </div>

        <footer className="py-3 text-sm text-center">
            <div>
                2025 <Copyright aria-label="Copyright" /> All Rights Reserved.
            </div>
            <div>S JAY Web Solutions (Pvt) Ltd.</div>
        </footer>
    </div>
  );
}
