import React from 'react';
import Sidebar from "./Admin/components/sidebar";
import Header from './Admin/components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Admin/pages/dashboard';
import Managers from './Admin/pages/managers';
import Customers from './Admin/pages/customers';
import Analytics from './Admin/pages/analytics';
import Settings from './Admin/pages/settings';
import Products from './Admin/pages/products';
import Orders from './Admin/pages/orders';
import Category from './Admin/pages/category';
import Brands from './Admin/pages/brands';
import AddProduct from './Admin/pages/addProduct';
import Reviews from './Admin/pages/reviews';
import Promotions from './Admin/pages/promotions';
import Notifications from './Admin/pages/notifications';
import Account from './Admin/pages/account';

export default function AdminDashboard() {
  return (
    <Router>
      <div className="flex h-screen">

        <div className="bg-gray-800 text-white">
          <Sidebar />
        </div>


        <div className="flex-1 flex flex-col">

          <div className="h-16 bg-white shadow-md">
            <Header />
          </div>

          <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/managers" element={<Managers />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/products" element={<Products />} />
              <Route path="/category" element={<Category />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
