import React from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Api/Axios";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { setUser } from "../Redux/Features/ProfileSlice";


const Login = () => {
  const navigate = useNavigate();

  const [FormData, SetFormData] = useState({ email: "", password: "" });

  const [loading, setLoadig] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    const { name, value } = e.target;

    SetFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlechange = async (e) => {
    e.preventDefault();

    setLoadig(true);
    setError("");

    try {
      const result = await AxiosInstance.post("/api/login", FormData);

      console.log(result.data.data[0].role);

      let role = result.data.data[0].role;
      let token = result.data.token;


      console.log(result.data.data[0]);
      
      dispatch((
        setUser({
          user:result.data.data[0],
          token: token,
          isAuthanicate:true
        })
      ))


      localStorage.setItem("token", token);


      if (role === "seller") {
        navigate("/sellerdash");
      } else if (role === "buyer") {
        navigate("/buyerdash");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 animate-bounce bottom-10 right-10"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 animate-[fadeIn_1s_ease-in-out]">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Login to continue your journey
        </p>

        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={FormData.email}
              onChange={handleSubmit}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={FormData.password}
              onChange={handleSubmit}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="hover:text-pink-400 transition">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            onClick={handlechange}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition duration-300 shadow-lg"
          >
            <LogIn size={20} />
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-pink-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
