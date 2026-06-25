import React, { useState } from 'react';
import { 
  ShoppingBag, Sparkles, Compass, CreditCard, 
  ArrowUpRight, ChevronRight, CheckCircle2, History 
} from 'lucide-react';

import BuyerNavbar from './BuyerNav'

export default function BuyerDashboard() {
  const [myBids] = useState([
    { id: 1, item: "Premium UI Design Architecture Kit", seller: "PixelForge Studio", initialOffer: "$450", currentCounter: "$520", status: "Review Counter", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    { id: 2, item: "High-Performance Database Cluster", seller: "CloudNode Systems", initialOffer: "$3,200", currentCounter: "$3,200", status: "AI Haggling...", color: "bg-teal-500/10 text-teal-400 border-teal-500/20 animate-pulse" },
    { id: 3, item: "E-Commerce Optimization Script", seller: "CodeFlow LLC", initialOffer: "$180", currentCounter: "$195", status: "Offer Accepted", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" }
  ]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Buyer Bar */}
     
     <BuyerNavbar/>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Active Purchases & Negotiations */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Your Active Buying Journeys</h1>
            <p className="text-slate-500 text-sm mt-1">Track where the AI is successfully driving down prices for you.</p>
          </div>

          {/* Value Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Negotiated Capital Saved</p>
              <p className="text-3xl font-bold text-slate-800 mt-1 tracking-tight">$1,450.00</p>
              <p className="text-xs text-teal-600 font-semibold mt-2 flex items-center gap-0.5">
                Saved an average of 14.2% off original list asking prices
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Smart Bids Pending</p>
              <p className="text-3xl font-bold text-slate-800 mt-1 tracking-tight">2</p>
              <p className="text-xs text-slate-400 mt-2">
                AI automated agents currently engaged in live haggling
              </p>
            </div>
          </div>

          {/* Active Bids Container */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 font-bold text-sm text-slate-800">
              Live Bidding War Arena
            </div>

            <div className="divide-y divide-slate-100">
              {myBids.map((bid) => (
                <div key={bid.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-all group cursor-pointer">
                  <div className="space-y-0.5">
                    <h3 className="font-semibold text-sm group-hover:text-teal-600 transition-colors">{bid.item}</h3>
                    <p className="text-xs text-slate-400">Seller: {bid.seller}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] block text-slate-400">Your Start</span>
                      <span className="text-xs font-medium text-slate-500 line-through">{bid.initialOffer}</span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] block text-slate-400">Current Standing</span>
                      <span className="text-sm font-bold text-slate-800">{bid.currentCounter}</span>
                    </div>
                    <div>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${bid.color}`}>
                        {bid.status}
                      </span>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Smart Copilot Advice for Buyers */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white p-6 rounded-2xl shadow-xl border border-teal-950 relative overflow-hidden group">
            <div className="flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/20 w-fit px-2.5 py-1 rounded-md text-[11px] font-semibold text-teal-300 mb-4">
              <Sparkles size={12} />
              <span>Smart Buyer Match</span>
            </div>
            <h3 className="font-bold text-base tracking-tight">Strategy Suggestion</h3>
            <p className="text-xs text-teal-100/80 mt-2 leading-relaxed">
              <strong>PixelForge Studio</strong> has accepted 4 counter offers this week that settled exactly 8% lower than their current counter-offer on your design kit. 
            </p>
            <button className="w-full mt-5 py-2.5 bg-teal-600 hover:bg-teal-500 active:scale-95 text-xs font-semibold rounded-lg transition-all shadow-md shadow-teal-700/10">
              Counter with $490 Instant Close
            </button>
          </div>

          {/* Secure Escrow Protection Status */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Escrow Vault Security</h4>
            <div className="flex gap-3 items-start">
              <div className="text-teal-600 p-1.5 bg-teal-50 rounded-lg mt-0.5"><CheckCircle2 size={16} /></div>
              <p className="text-xs text-slate-500 leading-relaxed">
                All deal funds are held securely in a zero-trust multi-sig digital vault until final verification parameters are signed off by both parties.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}