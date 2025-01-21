import React from 'react';
import Vector from '../assets/login image.png';
import Logo from '../assets/logo 4.png';

export default function SignUp() {
  return (
    <div className="flex flex-row bg-gray-100 px-32 py-6" style={{ height: '83vh' }}>
      <div className="flex flex-row bg-white min-h-full w-full border-2 rounded-3xl shadow-lg">
        
        {/* Left Hero Section */}
        <div className="p-6 flex flex-col items-center w-1/2">
          <img src={Logo} alt="Company Logo" className="w-32 mb-4" />

          <h1 className="font-bold text-3xl">Welcome to KHB Associates</h1>
          <p className="text-gray-500 text-sm ">Please register for login to your account</p>

          <form className="flex flex-col w-full mt-6 space-y-4">
            <div className="container space-y-4">
                {/* Row for Name Inputs */}
                <div className="row flex flex-col lg:flex-row lg:space-x-4 m-3">
                    <div className="col w-full lg:w-1/2">
                        <input
                        type="text"
                        placeholder="First Name"
                        name='fname'
                        className="p-3 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                        />
                    </div>
                    <div className="col w-full lg:w-1/2 mt-4 lg:mt-0">
                        <input
                        type="text"
                        placeholder="Last Name"
                        name='lname'
                        className="p-3 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Row for Contact Inputs */}
                <div className="row flex flex-col lg:flex-row lg:space-x-4 m-3">
                    <div className="col w-full lg:w-1/2">
                        <input
                        type="email"
                        placeholder="Primary Email"
                        name='email'
                        className="p-3 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                        />
                    </div>
                    <div className="col w-full lg:w-1/2 mt-4 lg:mt-0">
                        <input
                        type="text"
                        placeholder="Phone Number"
                        name='phone'
                        pattern="^\+?[1-9]\d{1,11}$"
                        title="Phone number must be in the format +94712345678"
                        className="p-3 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Row for Password Inputs */}
                <div className="row flex flex-col space-y-4 m-3">
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    className="p-3 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name='cpassword'
                    className="p-3 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                />
                </div>
            </div>

            {/* Register Button */}
            <button
                type="submit"
                className="bg-purple-600 text-white p-3 rounded font-bold hover:bg-purple-950 transition-all duration-300"
            >
                Register
            </button>
            </form>


          {/* Signup Link */}
          <p className="text-xs text-gray-400 mt-4">
           Already have an account?{' '}
            <a href="/signin" className="text-purple-700 font-bold hover:underline">
              Signin
            </a>
          </p>
        </div>

        {/* Right Hero Section */}
        <div className="p-6 w-full flex-1 flex flex-col items-center justify-center bg-purple-800 h-full border-2 rounded-r-3xl">
          <h1 className="text-5xl mt-4 text-white font-bold leading-tight text-center">
            Simplify management with a <span className="text-purple-950 decoration-black">user</span> dashboard
          </h1>
          <p className="text-white mt-1 text-sm text-center">
            Simplify your e-commerce management with our user-friendly dashboard.
          </p>
          <img src={Vector} alt="Dashboard visualization" className="w-full h-64 mt-1 object-contain transform scale-x-[-1]" />
        </div>

        
      </div>
    </div>
  );
}
