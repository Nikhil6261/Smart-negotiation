import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowLeft, ShieldCheck, FileText, 
  Download, Landmark, Sparkles, AlertCircle, PencilLine
} from 'lucide-react';

export default function DealAcceptancePage() {
  const [signature, setSignature] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [dealTerms] = useState({
    id: "CTR-9904-A",
    item: "Enterprise API Infrastructure Access",
    vendor: "CloudNode Systems",
    originalAsk: "$3,400/mo",
    finalSettledPrice: "$3,050/mo",
    totalAnnualSavings: "$4,200 Saved",
    billingCycle: "Monthly (Net 30)",
    slaGuarantee: "99.99% Uptime SLA",
    termLength: "12 Months Commitment"
  });

  const handleFinalSign = (e) => {
    e.preventDefault();
    if (signature.trim().length > 2) {
      setIsSigned(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500/10">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-700 transition-all active:scale-95">
              <ArrowLeft size={18} />
            </button>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 block bg-emerald-50 border border-emerald-200 w-fit px-2 py-0.5 rounded-md">
                Negotiation Finalized
              </span>
              <h1 className="text-xl font-bold tracking-tight mt-1">Review & Accept Offer</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Secured via Negotio.ai Escrow</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Contract Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Milestone Success Celebrate Box */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-xl shadow-emerald-900/10 relative overflow-hidden">
            <div className="absolute right-[-10px] top-[-10px] w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-white">
                <Sparkles size={22} className="animate-pulse" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight">Optimal Settlement Achieved!</h2>
                <p className="text-emerald-100/90 text-xs mt-1 leading-relaxed">
                  Your smart AI assistant successfully optimized pricing matrices with **{dealTerms.vendor}**. You locked in a pricing tier **10.3% lower** than their standard listing market value.
                </p>
              </div>
            </div>
          </div>

          {/* Golden Terms Slate Box */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-slate-400" />
                <span className="font-bold text-sm text-slate-700">Settled Parameter Audit Log</span>
              </div>
              <span className="font-mono text-xs text-slate-400 font-bold bg-white border px-2 py-0.5 rounded-md">{dealTerms.id}</span>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Asset Description</h3>
                <p className="font-semibold text-slate-800 text-base mt-1">{dealTerms.item}</p>
                <p className="text-xs text-slate-400 mt-0.5">Counterparty Supplier: {dealTerms.vendor}</p>
              </div>

              {/* Grid Financials Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-slate-100 py-5">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Original Price Asked</span>
                  <span className="text-sm font-medium text-slate-400 line-through block mt-0.5">{dealTerms.originalAsk}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Final Negotiated Rate</span>
                  <span className="text-lg font-extrabold text-emerald-600 block mt-0.5">{dealTerms.finalSettledPrice}</span>
                </div>
                <div className="sm:border-l sm:border-slate-100 sm:pl-4">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Calculated Net Value Saved</span>
                  <span className="text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-lg inline-block mt-0.5">
                    {dealTerms.totalAnnualSavings} / year
                  </span>
                </div>
              </div>

              {/* Standard Legal Clauses Summary */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Billing Cadence</span>
                  <p className="font-semibold text-slate-700 mt-0.5">{dealTerms.billingCycle}</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">SLA Grade Commitment</span>
                  <p className="font-semibold text-slate-700 mt-0.5">{dealTerms.slaGuarantee}</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Contract Validity Term</span>
                  <p className="font-semibold text-slate-700 mt-0.5">{dealTerms.termLength}</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Fulfillment Routing</span>
                  <p className="font-semibold text-slate-700 mt-0.5">Instant Digital Provisioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Column: Authorization Actions & Signature */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            
            {!isSigned ? (
              // Active Signature View Template
              <form onSubmit={handleFinalSign} className="space-y-4">
                <div className="flex items-center gap-2 text-slate-800 mb-2">
                  <PencilLine size={16} className="text-teal-600" />
                  <h3 className="font-bold text-sm">Binding Digital Signature</h3>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Type your full statutory signature name below to legally execute this contract transaction parameters.
                </p>
                
                <div className="space-y-1">
                  <input 
                    type="text" 
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="Type Full Name to Sign" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none transition-all font-serif"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={signature.trim().length < 3}
                  className={`w-full py-3 text-xs font-bold rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5
                    ${signature.trim().length >= 3 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-98' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                >
                  <CheckCircle2 size={14} /> Execute Smart Agreement
                </button>
              </form>
            ) : (
              // Executed/Signed State Template Summary
              <div className="text-center py-4 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-800">Contract Fully Executed</h3>
                  <p className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Signed: {signature}</p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm">
                    <Landmark size={14} /> Initialize Escrow Funding
                  </button>
                  <button type="button" className="w-full py-2.5 bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5">
                    <Download size={14} /> Download Secure Receipt PDF
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Legal Compliance Disclaimer Banner */}
          <div className="bg-slate-100/60 border border-slate-200/80 p-4 rounded-xl flex gap-3 items-start">
            <AlertCircle size={14} className="text-slate-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-400 leading-normal">
              By pressing execute, you acknowledge that contract parameters match cryptographic consensus variables verified by block system logs. Immutable audit traces are logged permanently.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}