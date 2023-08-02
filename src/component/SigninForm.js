import React, { useState, useEffect } from 'react';
import { HiOutlineMail, HiOutlineLockClosed, HiEye } from 'react-icons/hi';
import { FaGoogle } from 'react-icons/fa';
import car from './car.png';
import torus from './torus.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post(
        'https://vspdealers.onrender.com/api/v1/users/login',
        { email, password }
      );
      if (response.data && response.data.user && response.data.user.email) {
        localStorage.setItem('Profile', JSON.stringify(response.data.user.email));
      }
      const { token } = response.data;
      localStorage.setItem('Token', token);
      console.log('Login successful! Token:', token);
      // Navigate to the appropriate page based on the email and password
      if (email === 'admin.user@gmail.com' && password === 'admin1234') {
        navigate('/AdminNav/Dashboard');
      } else {
        navigate('/homepage');
      }
    } catch (error) {
      console.log(error);
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slideshow">
      {/* Left-side section */}
      <div className="md:w-2/5 md:relative text-white">
        <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
          <Link to="/signup">
            <HiOutlineMail className="text-red-600 text-4xl mb-6 md:hidden" />
          </Link>
          
          <div className="md:ml-32 md:mt-8">
            <h1 className="text-center mx-2 text-5xl font-Ubuntu font-semibold">
              Not yet a Hyundai VSP Dealers member?
            </h1>
            <h2 className="text-3xl font-Ubuntu font-light py-2">
              Just a couple of clicks to get started
            </h2>
          </div>
        </div>
        
      </div>

      {/* Right-side section */}
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center text-white items-center z-20">
        <h1 className="text-2xl text-center font-medium  mb-6">Sign in</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10">
            <div className="pl-3 text-xl">
              <HiOutlineMail />
            </div>
            <input
              className="p-3 w-full rounded-sm font-Ubuntu focus:outline-none text-black"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h1>...</h1>
          </div>
          <div className="mb-3 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10">
            <div className="pl-3 text-xl">
              <HiOutlineLockClosed />
            </div>
            <input
              className="p-3 w-full text-black font-Ubuntu focus:outline-none"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="h-5 w-5 ml-2 outline-none"
              onClick={togglePasswordVisibility}
            >
              <HiEye />
            </button>
          </div>
          <h1 className="text-right mb-2 mr-2 sm:mr-12">Forgot password</h1>
          <div className="mx-2 sm:mx-10">
            <button
              className="bg-red-500 text-white px-4 py-2 w-full rounded-full hover:bg-white hover:shadow-xl hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
              type="submit"
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? (
                <h1>...</h1> // Show loading gif when isLoading is true
              ) : (
                'Login'
              )}
            </button>
            {error && <div className="text-red-700 text-center my-4">{error}</div>}
          </div>
         
          <div className="flex flex-col sm:flex-row justify-center mb-2 p-2 z-20">
            <div className="mx-2 mb-3 sm:mb-0 sm:mx-5">
              <button
                className="px-6 py-2 w-full rounded-full border-[1.5px] border-red-400 font-Ubuntu"
                type="button"
              >
                <FaGoogle className="h-5 w-5 inline-block mr-2 text-xl bg-red-600" />
                Continue with Google
              </button>
            </div>
          </div>
          <h1 className="text-center capitalize">Haven't an account yet?</h1>
          <div className="p-2 mx-auto z-20">
            <Link to="/signup">
              <button
                className="px-6 py-2 w-full bg-red-600 rounded-full border-[1.5px] border-red-400 font-Ubuntu"
                type="button"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
