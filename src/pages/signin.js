import React from 'react';
import Vector from '../assets/login image.png';
import Logo from '../assets/logo 4.png';

export default function SignIn() {
  return (
    <div className="flex flex-row bg-gray-100 px-32 py-6" style={{ height: '83vh' }}>
      <div className="flex flex-row bg-white min-h-full w-full border-2 rounded-3xl shadow-lg">
        
        {/* Left Hero Section */}
        <div className="p-6 w-1/2 flex flex-col items-center justify-center bg-purple-800 h-full border-2 rounded-l-3xl">
          <h1 className="text-5xl mt-4 text-white font-bold leading-tight text-center">
            Simplify management with a <span className="text-purple-950 decoration-black">user</span> dashboard
          </h1>
          <p className="text-white mt-1 text-sm text-center">
            Simplify your e-commerce management with our user-friendly dashboard.
          </p>
          <img src={Vector} alt="Dashboard visualization" className="w-full h-64 mt-1 object-contain" />
        </div>

        {/* Right Hero Section */}
        <div className="p-10 flex-1 flex flex-col items-center w-full">
          <img src={Logo} alt="Company Logo" className="w-32 mb-4" />

          <h1 className="font-bold text-3xl">Welcome Back</h1>
          <p className="text-gray-500 text-sm ">Please login to your account</p>

          <form className="flex flex-col w-full mt-6 space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              name='email'
              className="p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              name='password'
              className="p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            
            {/* Forgot Password */}
            <p className="text-gray-400 text-sm text-right">
              <a href="/forgotpassword" className="hover:text-purple-600 transition">Forgot password?</a>
            </p>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-purple-600 text-white p-3 rounded font-bold hover:bg-purple-950 transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-xs text-gray-400 mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-700 font-bold hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
