import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-700">Sign in to your account</h2>
        <p className="text-center text-gray-600">Welcome back! Please enter your details.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full bg-white border border-gray-300 placeholder:text-gray-400"
              placeholder="user@gmail.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input input-bordered w-full text-sm pr-10 bg-white border border-gray-300 placeholder:text-gray-400"
                placeholder="••••••••"
              />
              <span onClick={()=> setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-10">
                {
                  showPassword? <FaEyeSlash/> : <FaEye/>
                }
              </span>
            </div>
          </div>


          <button type="submit" className="btn border-none w-full bg-purple-600 hover:bg-purple-700">
            Sign in
          </button>
        </form>

        <div className="divider">Or continue with</div>

        <button className="btn bg-white w-full border border-gray-300 text-gray-700 hover:bg-gray-200">
          <FcGoogle className="text-xl mr-2" />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have any account?
          <Link to="/register" className="text-purple-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;