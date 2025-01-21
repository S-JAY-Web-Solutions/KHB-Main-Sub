import React from 'react';
import Sidebar from "./User/components/sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './User/pages/dashboard';
import Profile from './User/pages/profile';
import Cart from './User/pages/cart';
import Orders from './User/pages/orders';
import Settings from './User/pages/settings';
import Notification from './User/pages/notifications';
import Reviews from './User/pages/reviews';

export default function userDashboard() {
  return (
    <Router>
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 bg-gray-100'>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/notifications" element={<Notification />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
};
