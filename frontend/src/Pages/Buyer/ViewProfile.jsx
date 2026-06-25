import React, { useState } from 'react';
import { 
  User, ShieldCheck, Mail, Building, Globe, Edit3, 
  Award, TrendingUp, Key, Zap, Settings, BarChart3 
} from 'lucide-react';

export default function ProfilePage() {
  const [profile] = useState({
    name: "Alex Mercer",
    title: "Head of Procurement & Partnerships",
    company: "Vortex Digital Agency",
    email: "alex.mercer@vortexagency.io",
    location: "Austin, TX (UTC-6)",
    verifiedStatus: "Tier 1 Verified Buyer",
    reputationScore: "98.4%",
    joinedDate: "October 2025",
    totalSpent: "$142,500",
    estimatedSavings: "$18,400"
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* Profile Framing Banner */}
      <div className="h-44 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Main Container Layout */}
      <main className="max-w-5xl mx-auto px-8 pb-16 relative -mt-16 z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Avatar & Core Information */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center relative overflow-hidden">
            
            {/* Profile Avatar Frame */}
            <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-teal-500 rounded-2xl mx-auto flex items-center justify-center p-1 shadow-md">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-slate-700">
                <User size={40} className="text-slate-400" />
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-800 mt-4 tracking-tight">{profile.name}</h2>
            <p className="text-xs text-slate-400 font-medium">{profile.title}</p>
            
            <div className="mt-3 inline-flex items-center gap-1 bg-teal-50 text-teal-700 border border-teal-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              <ShieldCheck size={12} />
              {profile.verifiedStatus}
            </div>

            <hr className="my-5 border-slate-100" />

            {/* Direct Contact Matrix List */}
            <div className="space-y-3 text-left text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2.5">
                <Building size={14} className="text-slate-400 shrink-0" />
                <span className="truncate">{profile.company}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-slate-400 shrink-0" />
                <span className="truncate">{profile.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe size={14} className="text-slate-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-98">
              <Edit3 size={13} /> Edit System Profile
            </button>
          </div>

          {/* Verification Badge Score */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Award size={14} className="text-amber-500" /> Marketplace Standing
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-800">{profile.reputationScore}</span>
              <span className="text-xs font-bold text-emerald-600">Excellent</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Score derived from successful contract execution rates, prompt escrow clearing, and automated arbitration responses.
            </p>
          </div>
        </div>

        {/* Right 2 Columns: Advanced Analytics & Bot Guardrails */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Total Volume Brokered</span>
              <p className="text-xl font-bold text-slate-800 mt-1">{profile.totalSpent}</p>
              <p className="text-[10px] text-slate-400 mt-1">Across 14 valid marketplace assets</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-teal-600 block">Net Bargaining Recovery</span>
              <p className="text-xl font-bold text-teal-600 mt-1">+{profile.estimatedSavings}</p>
              <p className="text-[10px] text-slate-400 mt-1">Capital saved by autonomous agents</p>
            </div>
          </div>

          {/* Guardrails Control Board Panel */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Settings size={16} className="text-slate-400" />
                <span className="font-bold text-sm text-slate-700">Autonomous Negotiator Guardrails</span>
              </div>
              <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                <Zap size={10} /> AI Active
              </span>
            </div>

            <div className="p-6 space-y-6">
              
              {/* Parameter Row 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-800">Default Negotiation Strategy</h4>
                  <p className="text-[11px] text-slate-400">Controls target pricing aggression and pacing loops.</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 bg-slate-100 rounded-xl text-slate-700 border border-slate-200">
                  Balanced Optimization
                </span>
              </div>

              {/* Parameter Row 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-800">Maximum Slippage Limit</h4>
                  <p className="text-[11px] text-slate-400">Max deviation permitted above the designated target bid floor.</p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1.5 bg-slate-50 rounded-xl text-slate-600 border border-slate-100">
                  8.0% Max Cap
                </span>
              </div>

              {/* Parameter Row 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-800">API Credentials & Cryptographic Keys</h4>
                  <p className="text-[11px] text-slate-400">Connected wallet interfaces signing safe settlement receipts.</p>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                  <Key size={13} /> Manage Keys
                </button>
              </div>

            </div>
          </div>

          {/* Footnote Sign-in Tracker */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-2">
            <span>Account initialized: {profile.joinedDate}</span>
            <span className="flex items-center gap-1"><BarChart3 size={11} /> Node Instance Status: Online</span>
          </div>

        </div>

      </main>
    </div>
  );
}