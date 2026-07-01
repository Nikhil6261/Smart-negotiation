import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, Compass, User, History, 
  LogOut, CheckSquare, XSquare, Clock, ChevronDown,
  Package, DollarSign 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {useSelector} from 'react-redux'

export default function SellerNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const {user}= useSelector( (state) => state.profile )

  const name = user.user.name
  const email = user.user.email
  

  // Close dropdown if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <nav className="border-b border-slate-200 bg-blue/80 backdrop-blur px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/sellerdash')}>
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-600/10">
          <ShoppingBag size={20} />
        </div>
        <div>
          <span className="font-bold tracking-tight text-lg block">Negotio<span className="text-indigo-600">.ai</span></span>
          <span className="text-[10px] uppercase tracking-wider block text-slate-400 font-bold">Seller Portal</span>
        </div>
      </div>

      {/* Center/Right Actions (Navigation Tabs) */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => navigate('/products')}
          className="hidden sm:flex text-xs font-semibold text-slate-600 hover:text-indigo-600 items-center gap-1.5 transition-colors"
        >
          <Package size={16} /> Products
        </button>

        <button 
          onClick={() => navigate('/sales')}
          className="hidden sm:flex text-xs font-semibold text-slate-600 hover:text-indigo-600 items-center gap-1.5 transition-colors"
        >
          <DollarSign size={16} /> Sales
        </button>

        <button 
          onClick={() => navigate('/marketplace')}
          className="hidden sm:flex text-xs font-semibold text-slate-600 hover:text-indigo-600 items-center gap-1.5 transition-colors"
        >
          <Compass size={16} /> Explore Marketplace
        </button>

        {/* PROFILE DROPDOWN CONTAINER */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-all duration-200 outline-none select-none group"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              JD
            </div>
            <ChevronDown 
              size={14} 
              className={`text-slate-400 transition-transform duration-300 ease-in-out ${isProfileOpen ? 'rotate-180 text-indigo-600' : ''}`} 
            />
          </button>

          {/* Dropdown Panel */}
          <div className={`absolute right-0 mt-2 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 origin-top-right transform transition-all duration-300 ease-out
            ${isProfileOpen 
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            {/* User Meta Data */}
            <div className="px-3 py-2 border-b border-slate-100 mb-1">
              <p className="text-xs font-bold text-slate-800 leading-none"> {name} </p>
              <p className="text-[11px] text-slate-400 mt-1"> {email}</p>
            </div>

            {/* Group 1: General Account */}
            <div className="space-y-0.5">
              <button 
                onClick={() => { navigate('/viewprofile'); setIsProfileOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-colors text-left group"
              >
                <User size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                <span>View Profile</span>
              </button>
              <button 
                onClick={() => { navigate('/history'); setIsProfileOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-colors text-left group"
              >
                <History size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                <span>History</span>
              </button>
            </div>

            {/* Separator / Title */}
            <div className="border-t border-slate-100 my-1.5 pt-1.5 px-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Negotiations</span>
            </div>

            {/* Group 2: Negotiation States */}
            <div className="space-y-0.5">
              <button 
                onClick={() => { navigate('/accept'); setIsProfileOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl transition-colors text-left group"
              >
                <CheckSquare size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                <span>Accept Offer</span>
              </button>
              <button 
                onClick={() => { navigate('/reject'); setIsProfileOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50/50 rounded-xl transition-colors text-left group"
              >
                <XSquare size={16} className="text-slate-400 group-hover:text-rose-500 transition-colors" />
                <span>Reject Offer</span>
              </button>
              <button 
                onClick={() => { navigate('/pending'); setIsProfileOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-amber-600 hover:bg-amber-50/50 rounded-xl transition-colors text-left group"
              >
                <Clock size={16} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
                <span>Pending</span>
              </button>
            </div>

            {/* Group 3: Danger Zone */}
            <div className="border-t border-slate-100 mt-1.5 pt-1">
              <button 
                onClick={() => { /* Handle logout logic here */ }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left group"
              >
                <LogOut size={16} className="text-rose-400 group-hover:text-rose-600 transition-colors" />
                <span onClick={()=> navigate('/') } >Logout</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}