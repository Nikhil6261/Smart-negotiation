import React, { useState } from 'react';
import { 
  Clock, ArrowLeft, ArrowUpRight, Bot, 
  MessageSquare, ShieldAlert, Sliders, RefreshCw,
  ShoppingBag, ChevronDown
} from 'lucide-react';

export default function PendingNegotiations() {
  const [pendingDeals] = useState([
    {
      id: "NEG-8402",
      item: "Enterprise API Infrastructure Access",
      seller: "CloudNode Systems",
      targetPrice: "$3,200/mo",
      yourLastBid: "$3,000/mo",
      sellerLastCounter: "$3,400/mo",
      progress: 65, // Percentage of bargaining completed
      round: "Round 3 of 5",
      aiStatus: "AI Tuning Offer...",
      aiStatusColor: "text-teal-600 bg-teal-50 border-teal-100",
      timeRemaining: "14 mins left in round",
      strategy: "Optimized Savings (Balanced)"
    },
    {
      id: "NEG-7193",
      item: "Premium UI Design Architecture Kit",
      seller: "PixelForge Studio",
      targetPrice: "$450",
      yourLastBid: "$420",
      sellerLastCounter: "$490",
      progress: 40,
      round: "Round 1 of 4",
      aiStatus: "Awaiting Seller Response",
      aiStatusColor: "text-amber-600 bg-amber-50 border-amber-100",
      timeRemaining: "Expiring in 3 hours",
      strategy: "Aggressive Floor Matching"
    }
  ]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 hover:text-slate-800 transition-all active:scale-95">
              <ArrowLeft size={18} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Pending Negotiations</h1>
                <span className="bg-amber-100 text-amber-800 text-xs px-2.5 py-0.5 rounded-full font-bold border border-amber-200">
                  {pendingDeals.length} Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Live machine-brokered settlements currently in progress.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl text-xs font-semibold shadow-sm transition-all active:scale-98">
              <RefreshCw size={14} className="animate-spin [animation-duration:8s]" />
              Sync Live Status
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Pending List Layout */}
        <div className="lg:col-span-2 space-y-6">
          {pendingDeals.map((deal) => (
            <div key={deal.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              
              {/* Card Header Banner */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-slate-400 font-bold tracking-wider">{deal.id}</span>
                  <span className="text-slate-300">•</span>
                  <p className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                    <Sliders size={12} className="text-indigo-500" /> {deal.strategy}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Clock size={13} />
                  <span>{deal.timeRemaining}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-slate-800 group-hover:text-teal-600 transition-colors duration-200">{deal.item}</h3>
                    <p className="text-xs text-slate-400 font-medium">Vendor: <span className="text-slate-600">{deal.seller}</span></p>
                  </div>
                  
                  {/* Status Tag */}
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${deal.aiStatusColor}`}>
                    <Bot size={13} />
                    {deal.aiStatus}
                  </span>
                </div>

                {/* Pricing Delta Block */}
                <div className="grid grid-cols-3 gap-4 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">List Asking Price</span>
                    <span className="text-sm font-semibold text-slate-400 line-through mt-0.5 block">{deal.sellerLastCounter}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Your Active Bid</span>
                    <span className="text-sm font-bold text-slate-700 mt-0.5 block">{deal.yourLastBid}</span>
                  </div>
                  <div className="border-l border-slate-200 pl-4">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal-600 block">Target Savings Goal</span>
                    <span className="text-sm font-extrabold text-teal-600 mt-0.5 block flex items-center gap-0.5">
                      {deal.targetPrice} <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Progress Tracks */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Negotiation Convergence</span>
                    <span className="font-bold text-slate-700">{deal.round}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${deal.progress}%` }}
                    ></div>
                  </div>
                </div>

              </div>

              {/* Action Strip */}
              <div className="px-6 py-3.5 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
                <button className="text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors">
                  <MessageSquare size={14} /> View AI Activity Log
                </button>
                <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95">
                  Enter Live Room
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Right Side Strategy Column */}
        <div className="space-y-6">
          
          {/* AI Automated Guardrail Stats */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl shadow-md border border-slate-800">
            <h3 className="font-bold text-sm tracking-tight flex items-center gap-1.5 text-indigo-400">
              <Bot size={16} /> Automation Safe-Zone
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Your agents are locked inside your target criteria. The contract system will never step outside your configured thresholds without prompting you for manual confirmation.
            </p>
            <div className="mt-5 border-t border-slate-800 pt-4 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Max Drifting Threshold</span>
                <span className="font-semibold">8.0% Max</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Timeout Protection Block</span>
                <span className="font-semibold text-emerald-400">Active</span>
              </div>
            </div>
          </div>

          {/* Warning System Card */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-3.5 items-start">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl border border-amber-100 shrink-0">
              <ShieldAlert size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Algorithmic Standoffs</h4>
              <p className="text-xs text-slate-400 mt-1 leading-normal">
                If an agreement cannot be struck within 5 loops, the system drops auto-pilot and invites you to arbitrate manually.
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}