import React, { useState } from 'react';
import { 
  History, ArrowLeft, Download, FileCheck, Search,
  SlidersHorizontal, ArrowUpRight, CheckCircle2, XCircle,
  Calendar, ExternalLink, ChevronRight, HelpCircle
} from 'lucide-react';

export default function NegotiationHistory() {
  // Sample data tracking historical settlements
  const [historyItems] = useState([
    {
      id: "NEG-9904",
      item: "Enterprise API Infrastructure Access",
      party: "CloudNode Systems",
      date: "Jun 24, 2026",
      originalAsk: "$3,400/mo",
      settledPrice: "$3,050/mo",
      totalSaved: "$4,200/yr",
      status: "Settled",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
      icon: <CheckCircle2 size={14} className="text-emerald-600" />
    },
    {
      id: "NEG-9481",
      item: "Automated E-Commerce Script Pro",
      party: "CodeFlow LLC",
      date: "Jun 18, 2026",
      originalAsk: "$195",
      settledPrice: "$180",
      totalSaved: "$15",
      status: "Settled",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
      icon: <CheckCircle2 size={14} className="text-emerald-600" />
    },
    {
      id: "NEG-8821",
      item: "High-Performance Storage Clusters",
      party: "Stark Data Systems",
      date: "Jun 02, 2026",
      originalAsk: "$8,500",
      settledPrice: "—",
      totalSaved: "—",
      status: "Walked Away",
      statusColor: "text-slate-500 bg-slate-100 border-slate-200",
      icon: <XCircle size={14} className="text-slate-400" />
    },
    {
      id: "NEG-7612",
      item: "Dedicated Cloud Server Node V4",
      party: "Apex Distribution",
      date: "May 24, 2026",
      originalAsk: "$8,200",
      settledPrice: "$7,150",
      totalSaved: "$1,050",
      status: "Settled",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
      icon: <CheckCircle2 size={14} className="text-emerald-600" />
    }
  ]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-500/10">
      
      {/* Upper Navigation Strip */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-8 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-700 transition-all active:scale-95">
              <ArrowLeft size={18} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Settlement Ledger</h1>
                <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-0.5 rounded-full font-bold border border-slate-200">
                  Total Archival: {historyItems.length}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Historical verification records for machine-brokered contracts.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Framework Grid */}
      <main className="max-w-6xl mx-auto px-8 py-10 space-y-6">
        
        {/* Top Ledger Analytic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Cumulative Capital Saved</span>
            <p className="text-2xl font-bold text-slate-800 mt-1 tracking-tight">$5,265.00</p>
            <span className="text-xs text-teal-600 font-semibold flex items-center gap-0.5 mt-2">
              <ArrowUpRight size={14} /> 12.8% below initial vendor asks
            </span>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Deal Closing Success Rate</span>
            <p className="text-2xl font-bold text-slate-800 mt-1 tracking-tight">75.0%</p>
            <span className="text-xs text-slate-400 block mt-2">
              3 Successful Deals • 1 Aborted Standoff
            </span>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Total AI Evaluation Cycles</span>
            <p className="text-2xl font-bold text-slate-800 mt-1 tracking-tight">14 Loops</p>
            <span className="text-xs text-slate-400 block mt-2">
              Average 3.5 negotiation rounds per asset
            </span>
          </div>
        </div>

        {/* Dynamic Interactive Filter Row */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row gap-3 justify-between items-center shadow-sm">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-teal-600 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Filter by counterparty or asset item..." 
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-slate-300 focus:outline-none transition-all"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-600 transition-colors">
              <SlidersHorizontal size={14} /> Filters
            </button>
            <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 rounded-xl transition-colors shadow-sm">
              <Download size={14} /> Export Audit CSV
            </button>
          </div>
        </div>

        {/* Historical Ledger Record Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  <th className="py-4 px-6">Negotiated Asset / ID</th>
                  <th className="py-4 px-6">Counterparty</th>
                  <th className="py-4 px-6">Final Pricing Matrix</th>
                  <th className="py-4 px-6">Total Saved</th>
                  <th className="py-4 px-6">Status State</th>
                  <th className="py-4 px-6 text-center">Receipts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                {historyItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors group cursor-pointer">
                    
                    {/* Item Description & ID */}
                    <td className="py-4 px-6 max-w-xs">
                      <p className="font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{item.item}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-[10px] text-slate-400 font-mono font-bold">
                        <span>{item.id}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"><Calendar size={10} /> {item.date}</span>
                      </div>
                    </td>

                    {/* Counterparty Partner */}
                    <td className="py-4 px-6 font-semibold text-slate-600">
                      {item.party}
                    </td>

                    {/* Financial Spread Delta */}
                    <td className="py-4 px-6">
                      <div className="space-y-0.5">
                        <p className="font-bold text-slate-800">{item.settledPrice}</p>
                        <p className="text-[10px] text-slate-400 line-through">Ask: {item.originalAsk}</p>
                      </div>
                    </td>

                    {/* Capital Safeguarded */}
                    <td className="py-4 px-6">
                      {item.totalSaved !== "—" ? (
                        <span className="text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md font-bold inline-block">
                          {item.totalSaved}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-normal">None</span>
                      )}
                    </td>

                    {/* Custom Status Block Pills */}
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border inline-flex items-center gap-1 ${item.statusColor}`}>
                        {item.icon}
                        {item.status}
                      </span>
                    </td>

                    {/* Action Download Elements */}
                    <td className="py-4 px-6 text-center">
                      {item.status === "Settled" ? (
                        <button className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all">
                          <Download size={14} />
                        </button>
                      ) : (
                        <button className="p-2 text-slate-300 cursor-not-allowed" disabled>
                          <HelpCircle size={14} />
                        </button>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}