import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import { Logout, Copyright } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartCheckout";
import OrdersIcon from "@mui/icons-material/ShoppingBag";
import NotificationIcon from '@mui/icons-material/Notifications';
import ReviewIcon from '@mui/icons-material/Reviews'
import SettingIcon from "@mui/icons-material/Settings";
import AccountIcon from '@mui/icons-material/AccountCircle';


export default function Sidebar() {
  return (
    <div className="min-h-screen w-64 text-blue-950 flex flex-col">

      <div className="w-30 h-auto p-4 flex justify-center">
        <AccountIcon style={{ fontSize: '100px' }} />
      </div>


      <div className="p-3 text-xl font-bold text-center uppercase">User Dashboard</div>

 
      <nav className="flex-1">
        <ul>
          {[
                { name: "Dashboard", path: "", icon: <DashboardIcon /> },
                { name: "Profile", path: "/profile", icon: <AccountCircleIcon /> },
                { name: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
                { name: "Orders", path: "/orders", icon: <OrdersIcon /> },
                { name: "Notifications", path: "/notifications", icon: <NotificationIcon /> },
                { name: "Reviews", path: "/reviews", icon: <ReviewIcon /> },
                { name: "Settings", path: "/settings", icon: <SettingIcon /> },
          ].map((item) => (
            <li key={item.name} className="p-1 text-md font-bold">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-bold"
                      : "hover:bg-blue-100"
                  }`
                }
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>


      <div className="p-4">
        <button className="bg-red-700 text-white w-full py-3 rounded-xl hover:bg-red-800 hover:font-bold flex items-center justify-center">
          <Logout className="mr-2" />
          Logout
        </button>
      </div>

        <footer className="p-4 text-sm text-center">
            <div>
                2025 <Copyright aria-label="Copyright" /> All Rights Reserved.
            </div>
            <div>S JAY Web Solutions (Pvt) Ltd.</div>
        </footer>
    </div>
  );
}
