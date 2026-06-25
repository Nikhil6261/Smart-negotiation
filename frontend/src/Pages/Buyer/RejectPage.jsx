import React, { useState } from 'react';
import { 
  XCircle, ArrowLeft, HeartCrack, MessageSquare, AlertTriangle, 
  Sparkles, ShieldAlert, ArrowRight, RefreshCw, ShoppingBag, ChevronRight 
} from 'lucide-react';
export default function DealRejectionPage() {
  const [rejectReason, setRejectReason] = useState("");
  const [customFeedback, setCustomFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [dealTerms] = useState({
    id: "CTR-9904-A",
    item: "Enterprise API Infrastructure Access",
    vendor: "CloudNode Systems",
    originalAsk: "$3,400/mo",
    finalAIOffer: "$3,050/mo",
    sellerStiffCounter: "$3,350/mo",
    deadlockReason: "Seller counter-offer exceeded maximum configured slippage thresholds (+9.8% over target)."
  });

  const handleRejectionSubmit = (e) => {
    e.preventDefault();
    if (rejectReason) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-500/10">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-700 transition-all active:scale-95">
              <ArrowLeft size={18} />
            </button>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-rose-600 bg-rose-50 border border-rose-200 w-fit px-2 py-0.5 rounded-md">
                Negotiation Deadlock
              </span>
              <h1 className="text-xl font-bold tracking-tight mt-1">Reject Offer & Break Walkway</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
            <ShieldAlert size={14} className="text-rose-500" />
            <span>Session Terminated</span>
          </div>
        </div>
      </header>

      {/* Main Framework Grid */}
      <main className="max-w-5xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Deadlock Summary & Feedback Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Rejection Alert Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-rose-950 text-white p-6 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute right-[-10px] top-[-10px] w-32 h-32 bg-rose-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-rose-500/20 border border-rose-500/30 rounded-xl text-rose-400">
                <HeartCrack size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight">Walking Away is a Power Move</h2>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  The counter-offer presented by <strong className="text-white">{dealTerms.vendor}</strong> failed to respect your fiscal boundaries. Walking away protects your purchasing data integrity and system margins.
                </p>
              </div>
            </div>
          </div>

          {/* Audit Data Block */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-bold tracking-wider block">{dealTerms.id}</span>
                <h3 className="font-bold text-sm text-slate-800 mt-0.5">{dealTerms.item}</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Seller Rigid Price</span>
                <span className="text-base font-extrabold text-rose-600">{dealTerms.sellerStiffCounter}</span>
              </div>
            </div>

            <div className="flex gap-2.5 items-start bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-500 leading-normal">
              <AlertTriangle size={15} className="text-amber-500 shrink-0 mt-0.5" />
              <span><strong>System Trigger Log:</strong> {dealTerms.deadlockReason}</span>
            </div>
          </div>

          {/* Action Log Form */}
          {!isSubmitted ? (
            <form onSubmit={handleRejectionSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-slate-800">
                <MessageSquare size={16} className="text-rose-500" />
                <h3 className="font-bold text-sm">Log Reason for Marketplace Analytics</h3>
              </div>

              {/* Radio List Choices */}
              <div className="space-y-2.5">
                {[
                  "Counterparty price is too far above market baseline",
                  "Unreasonable contract term lengths / SLA rigidity",
                  "Inflexible payment timeline constraints (Net 30/60 denial)",
                  "AI system mismatch / Bad behavioral bargaining loops"
                ].map((reason, index) => (
                  <label key={index} className="flex items-start gap-3 p-3 bg-slate-50/50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all select-none text-xs text-slate-700 font-medium">
                    <input 
                      type="radio" 
                      name="rejection_reason"
                      value={reason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      className="mt-0.5 accent-rose-600 h-3.5 w-3.5"
                    />
                    <span>{reason}</span>
                  </label>
                ))}
              </div>

              {/* Free Text Area */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Anonymized Feedback to Supplier (Optional)</label>
                <textarea 
                  rows="3"
                  value={customFeedback}
                  onChange={(e) => setCustomFeedback(e.target.value)}
                  placeholder="Tell the seller why the deal fell through. Doing so might prompt an automated catalog discount notification later."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={!rejectReason}
                className={`w-full py-3 text-xs font-bold rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5
                  ${rejectReason 
                    ? 'bg-rose-600 text-white hover:bg-rose-500 active:scale-98' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
              >
                <XCircle size={14} /> Permanently Close & Vault Records
              </button>
            </form>
          ) : (
            /* Success Feedback Safe View */
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-rose-50">
                <XCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-800">Records Securely Vaulted</h3>
                <p className="text-xs text-slate-400 mt-1">
                  The session is officially cataloged as a <strong>Walk-Away</strong>. Both agents have been cleared from memory.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side Column: Dynamic Safe Pipeline Recovery Options */}
        <div className="space-y-6">
          
          {/* Smart AI Recommendation Alternative Engine */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl shadow-md border border-slate-800 group">
            <div className="flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 w-fit px-2.5 py-1 rounded-md text-[11px] font-semibold text-indigo-300 mb-4">
              <Sparkles size={12} className="text-indigo-400 animate-pulse" />
              <span>AI Pipeline Recovery</span>
            </div>
            <h3 className="font-bold text-sm tracking-tight">Alternative Option Located</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Our index scans located **Stark Infrastructure Nodes** carrying the exact same capacity vectors for **$2,950/mo** with a history of quick margin flexibility.
            </p>
            <button className="w-full mt-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm">
              Launch Alternative Bid <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Quick Fallback Routines */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-3">
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Alternative Adjustments</h4>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-2.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                <span className="flex items-center gap-2"><RefreshCw size={13} /> Reset Strategy Thresholds</span>
                <ChevronRight size={14} className="text-slate-300" />
              </button>
              <button className="w-full flex items-center justify-between p-2.5 text-xs font-semibold text-slate-600 hover:text-teal-600 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                <span className="flex items-center gap-2"><ShoppingBag size={13} /> Return to Open Marketplace</span>
                <ChevronRight size={14} className="text-slate-300" />
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}