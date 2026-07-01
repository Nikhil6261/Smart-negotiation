import React, { useState } from 'react';
import { 
  BarChart3, ShieldCheck, Layers, EyeOff, 
  Settings, ArrowUpRight, ArrowRight, Sparkles 
} from 'lucide-react';
import SellerNav from './SellerNav'

export default function SellerDashboard() {
  const [inventory] = useState([
    { id: 'PROD-01', name: "Enterprise SaaS Suite (Annual)", askPrice: "$12,000", floorPrice: "$9,500", dynamicStrategy: "Balanced", activeBids: 3 },
    { id: 'PROD-02', name: "API Infrastructure Access", askPrice: "$4,500/mo", floorPrice: "$3,800/mo", dynamicStrategy: "Aggressive", activeBids: 1 },
    { id: 'PROD-03', name: "Dedicated Cloud Server Node", askPrice: "$8,200", floorPrice: "$7,000", dynamicStrategy: "High Volume", activeBids: 5 }
  ]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      {/* Top Seller Bar */}
      

<SellerNav/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Seller Command Center</h1>
          <p className="text-slate-400 text-sm mt-1">Protect your bottom line with AI-driven guardrails.</p>
        </div>

        {/* Seller Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl shadow-sm hover:border-indigo-500/30 transition-all group">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Protected Pipeline Value</p>
            <p className="text-3xl font-bold mt-2 tracking-tight">$384,100</p>
            <div className="text-xs text-indigo-400 flex items-center gap-1 mt-3 font-medium">
              <ShieldCheck size={14} /> AI active protection turned on
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl shadow-sm hover:border-indigo-500/30 transition-all group">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg. Margin Premium Retained</p>
            <p className="text-3xl font-bold mt-2 tracking-tight">91.4%</p>
            <div className="text-xs text-emerald-400 flex items-center gap-1 mt-3 font-medium">
              <ArrowUpRight size={14} /> +2.1% above your floor limits
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl shadow-sm hover:border-indigo-500/30 transition-all group">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Auto-Settled Deals</p>
            <p className="text-3xl font-bold mt-2 tracking-tight">18</p>
            <div className="text-xs text-slate-400 flex items-center gap-1 mt-3">
              No human manual adjustment required
            </div>
          </div>
        </div>

        {/* Dynamic Pricing Asset Inventory */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Layers size={18} className="text-indigo-400" />
              <h2 className="font-bold text-base">Your Listed Assets & Price Floors</h2>
            </div>
            <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/10">
              List New Asset
            </button>
          </div>

          <div className="divide-y divide-slate-800">
            {inventory.map((item) => (
              <div key={item.id} className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-slate-900/40 transition-colors group">
                <div className="space-y-1 max-w-sm">
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded-md border border-indigo-900/50">{item.id}</span>
                  <h3 className="font-semibold text-sm text-slate-200 mt-1">{item.name}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Public Ask</span>
                    <span className="text-sm font-bold text-slate-300">{item.askPrice}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <EyeOff size={11} className="text-amber-500" /> Hidden Floor
                    </span>
                    <span className="text-sm font-bold text-amber-500">{item.floorPrice}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">AI Logic Mode</span>
                    <span className="text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded-md inline-block mt-0.5">
                      {item.dynamicStrategy}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Active Battles</span>
                    <span className="text-sm font-bold text-indigo-400 flex items-center gap-1">
                      {item.activeBids} open bids <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}