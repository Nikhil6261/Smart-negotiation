import React from "react";
import { User, Mail, Lock, UserPlus, ShoppingBag, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axiosinstance from "../Api/Axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "buyer"
  });

  const [Stop, setStop] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState("");
  const [Error, setError] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlesumit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    } else {
      setStop(true);
    }

    try {
      const result = await Axiosinstance.post("/api/register", formData);
      console.log(result);

      if (result.status) navigate("/login");
      
    } catch (error) {
      switch (error.status) {
        case 400: {
          console.log(error.data);
          break;
        }
        case 409: {
          console.log("User already exists");
          break;
        }
        default: {
          console.log("something went wrong");
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] relative flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* ─── DYNAMIC SKY BACKGROUND (MOON & STARS) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* The Morphing Celestial Moon */}
        <div 
          className={`absolute top-[8%] right-[10%] w-32 h-32 rounded-full transition-all duration-1000 ease-in-out mix-blend-screen
            ${formData.role === "buyer"
              ? "bg-gradient-to-tr from-cyan-400 via-indigo-200 to-white shadow-[0_0_50px_rgba(34,211,238,0.4)] translate-y-0 rotate-0"
              : "bg-gradient-to-tr from-rose-500 via-amber-200 to-white shadow-[0_0_60px_rgba(244,63,94,0.5)] -translate-y-2 rotate-[15deg]"
            }`}
        />
        
        {/* Extra glowing atmosphere rings behind the moon */}
        <div 
          className={`absolute top-[4%] right-[6%] w-48 h-48 rounded-full blur-2xl transition-all duration-1000 mix-blend-screen
            ${formData.role === "buyer" ? "bg-indigo-500/20" : "bg-rose-500/25"}`}
        />

        {/* Dynamic Twinkling Star Clusters */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Star 1 - Top Left */}
          <path 
            d="M150 100 L153 115 L168 118 L153 121 L150 136 L147 121 L132 118 L147 115 Z" 
            className={`transition-all duration-1000 ease-in-out animate-[twinkle_3s_infinite_ease-in-out]
              ${formData.role === "buyer" ? "fill-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" : "fill-rose-300 drop-shadow-[0_0_6px_rgba(244,63,94,0.8)]"}`}
          />
          {/* Star 2 - Mid Left */}
          <path 
            d="M220 450 L222 458 L230 460 L222 462 L220 470 L218 462 L210 460 L218 458 Z" 
            className={`transition-all duration-1000 ease-in-out animate-[twinkle_4s_infinite_ease-in-out_1s]
              ${formData.role === "buyer" ? "fill-indigo-300 drop-shadow-[0_0_4px_rgba(99,102,241,0.6)]" : "fill-amber-300 drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]"}`}
          />
          {/* Star 3 - Bottom Right */}
          <path 
            d="M850 550 L853 562 L865 565 L853 568 L850 580 L847 568 L835 565 L847 562 Z" 
            className={`transition-all duration-1000 ease-in-out animate-[twinkle_3.5s_infinite_ease-in-out_0.5s]
              ${formData.role === "buyer" ? "fill-teal-200 drop-shadow-[0_0_5px_rgba(45,212,191,0.7)]" : "fill-pink-300 drop-shadow-[0_0_5px_rgba(244,114,182,0.7)]"}`}
          />
          {/* Star 4 - Top Center */}
          <path 
            d="M550 80 L552 86 L558 88 L552 90 L550 96 L548 90 L542 88 L548 86 Z" 
            className={`transition-all duration-1000 ease-in-out animate-[twinkle_5s_infinite_ease-in-out_2s]
              ${formData.role === "buyer" ? "fill-white" : "fill-rose-200"}`}
          />
        </svg>

        {/* Ambient background blur spots for depth */}
        <div className={`absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full blur-[120px] transition-all duration-1000 ${formData.role === "buyer" ? "bg-indigo-600/15" : "bg-rose-600/15"}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full blur-[120px] transition-all duration-1000 ${formData.role === "buyer" ? "bg-cyan-600/10" : "bg-pink-600/15"}`} />
      </div>

      {/* Modern Cyber Grid Subtle Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Glassmorphic Active Container Card */}
      <div className="relative w-full max-w-[440px] rounded-[2rem] border border-white/[0.06] bg-black/50 backdrop-blur-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] p-8 sm:p-10 transition-all duration-300 hover:border-white/[0.1] z-10">
        
        {/* Header Block */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-medium text-purple-300 mb-3 tracking-wide backdrop-blur-md">
            Marketplace Agency Network
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight">
            Get Started
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Create your account to connect and trade flawlessly
          </p>
        </div>

        <form onSubmit={handlesumit} className="space-y-5">
          
          {/* Account Role Toggle Switch */}
          <div className="space-y-2">
            <div className="relative p-1 grid grid-cols-2 gap-1 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              
              {/* Sliding Background Blob */}
              <div 
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) 
                  ${formData.role === "buyer" 
                    ? "translate-x-0 bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-lg shadow-indigo-600/20" 
                    : "translate-x-full bg-gradient-to-r from-rose-600 to-pink-600 shadow-lg shadow-pink-600/20"
                  }`}
              />

              {/* Buyer Selector Tab */}
              <label className="relative flex items-center justify-center gap-2.5 py-3 rounded-xl cursor-pointer select-none transition-colors z-10">
                <input 
                  type="radio" 
                  name="role" 
                  value="buyer" 
                  checked={formData.role === "buyer"} 
                  onChange={handlechange} 
                  className="sr-only" 
                />
                <ShoppingBag size={16} className={`transition-colors duration-300 ${formData.role === "buyer" ? "text-white" : "text-slate-400"}`} />
                <span className={`text-sm font-semibold transition-colors duration-300 ${formData.role === "buyer" ? "text-white" : "text-slate-400"}`}>
                  Buyer Mode
                </span>
              </label>

              {/* Seller Selector Tab */}
              <label className="relative flex items-center justify-center gap-2.5 py-3 rounded-xl cursor-pointer select-none transition-colors z-10">
                <input 
                  type="radio" 
                  name="role" 
                  value="seller" 
                  checked={formData.role === "seller"} 
                  onChange={handlechange} 
                  className="sr-only" 
                />
                <Store size={16} className={`transition-colors duration-300 ${formData.role === "seller" ? "text-white" : "text-slate-400"}`} />
                <span className={`text-sm font-semibold transition-colors duration-300 ${formData.role === "seller" ? "text-white" : "text-slate-400"}`}>
                  Seller Mode
                </span>
              </label>
            </div>
          </div>

          {/* Form Input Groups */}
          <div className="space-y-4">
            {/* Full Name */}
            <div className="relative group">
              <User className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={18} />
              <input
                name="name"
                type="text"
                value={formData.name}
                placeholder="Full Name"
                onChange={handlechange}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white placeholder-slate-500 outline-none focus:border-purple-500/40 focus:bg-white/[0.05] focus:ring-4 focus:ring-purple-500/5 transition-all duration-200 text-sm"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={18} />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handlechange}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white placeholder-slate-500 outline-none focus:border-purple-500/40 focus:bg-white/[0.05] focus:ring-4 focus:ring-purple-500/5 transition-all duration-200 text-sm"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={18} />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handlechange}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white placeholder-slate-500 outline-none focus:border-purple-500/40 focus:bg-white/[0.05] focus:ring-4 focus:ring-purple-500/5 transition-all duration-200 text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={18} />
              <input
                name="confirmpassword"
                type="password"
                value={formData.confirmpassword}
                onChange={handlechange}
                placeholder="Confirm Password"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white placeholder-slate-500 outline-none focus:border-purple-500/40 focus:bg-white/[0.05] focus:ring-4 focus:ring-purple-500/5 transition-all duration-200 text-sm"
              />
            </div>
          </div>

          {/* Glowing CTA Button */}
          <button
            type="submit"
            className={`w-full relative mt-2 group overflow-hidden py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-500 shadow-lg
              ${formData.role === "buyer" 
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-indigo-500/10" 
                : "bg-gradient-to-r from-rose-500 to-pink-500 shadow-rose-500/10"
              }`}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_infinite]" />
            <UserPlus size={18} />
            Create Account
          </button>
        </form>

        {/* Footer Redirection Row */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className={`font-medium transition-all duration-300 cursor-pointer underline underline-offset-4 decoration-current
              ${formData.role === "buyer" ? "text-cyan-400" : "text-rose-400"}`}
          >
            Sign In
          </span>
        </p>
      </div>

      {/* Embedded custom keyframe styles for smooth star breathing space */}
      <style px-theme="true">{`
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Register;