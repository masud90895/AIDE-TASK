import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {  login } = useContext(AuthContext);
  const Navigate= useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        login(email, password)
        .then((result) => {
          console.log(result);
          toast.success('login successful')
          Navigate("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    }
    return (
        <div className="flex items-center h-screen">
        <div className="w-full max-w-sm p-6 m-auto mx-auto border bg-white rounded-lg shadow-md dark:bg-gray-800">
  
          <form onSubmit={handleLogin} className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
  
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>
                <a
                  className="text-xs cursor-wait text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Forget Password?
                </a>
              </div>
  
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
  
            <div className="mt-6"></div>
            <button
              type="submit"
              className="w-full button px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-white hover:text-black hover:border hover:border-blue-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              id="button-5"
            >
              Sign In
            </button>
          </form>

  
          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Don't have an account?{" "}
            <Link
              to="../register"
              className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;