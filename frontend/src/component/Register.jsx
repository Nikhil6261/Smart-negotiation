import React from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [check, setCheck] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState("");
  const [Error, setError] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData( (prev) => ({ ...prev, [name]: value }));

    const isMatch = formData.password === formData.confirmPassword;
    console.log(isMatch);
    
  };

  const handlesumit = (e) => {
    e.preventDefault();
    console.log(formData);
  
  };




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-bounce"></div>

      {/* Register Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8 animate-[fadeIn_1s_ease-in-out]">
        <h1 className="text-4xl font-bold text-white text-center">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Join us and start your journey
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              name="name"
              type="name"
              value={formData.name}
              placeholder="Full Name"
              onChange={handlechange}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handlechange}
              placeholder="Email Address"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handlechange}
              placeholder="Password"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              name="confirmpassword"
              type="password"
              onChange={handlechange}
              placeholder="Confirm Password"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" />
            <span>I agree to the Terms & Conditions</span>
          </div>

          {/* Register Button */}
          <button
            onClick={handlesumit}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition duration-300 shadow-lg"
          >
            <UserPlus size={20} />
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="text-pink-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
