import { useState } from "react";
import { Star, Minus, Plus, ShoppingBag, Leaf, Check } from "lucide-react";

export default function ProductCard() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(9, q + 1));

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ backgroundColor: "#FAF6EF" }}>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgeIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(-6px, 0); }
          50% { transform: translate(6px, -5px); }
        }
        @keyframes popIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .card-enter { animation: cardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .badge-enter { animation: badgeIn 0.4s ease 0.2s both; }
        .bag-float { animation: float 3.2s ease-in-out infinite; }
        .glow-drift { animation: drift 5s ease-in-out infinite; }
        .pop-in { animation: popIn 0.25s cubic-bezier(0.34, 1.4, 0.64, 1) both; }
      `}</style>

      <div
        className="card-enter w-full max-w-[280px] rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        style={{ backgroundColor: "#FFFDF9", border: "1px solid #E7DFD0" }}
      >
        {/* Scaled-down illustration canvas */}
        <div
          className="relative h-40 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#EFE7D6" }}
        >
          <div
            className="glow-drift absolute w-32 h-32 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(201,154,74,0.15) 0%, rgba(201,154,74,0) 70%)",
            }}
          />

          <div
            className="badge-enter absolute top-3 left-3 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide"
            style={{ backgroundColor: "#5F7355", color: "#FAF6EF" }}
          >
            <Leaf size={10} strokeWidth={2.5} />
            Fresh roasted
          </div>

          {/* Scaled down SVG graphic wrapper */}
          <div className="bag-float origin-center scale-75">
            <svg width="100" height="115" viewBox="0 0 120 140" fill="none">
              <path d="M20 40 L20 120 Q20 132 32 132 L88 132 Q100 132 100 120 L100 40 Z" fill="#3E362A" />
              <path d="M20 40 Q20 20 40 16 L80 16 Q100 20 100 40 Z" fill="#2E2A22" />
              <rect x="45" y="4" width="30" height="18" rx="4" fill="#2E2A22" />
              <circle cx="60" cy="80" r="26" fill="#C99A4A" opacity="0.15" />
              <path d="M48 78 Q60 66 72 78 Q60 90 48 78 Z" fill="#C99A4A" />
              <circle cx="60" cy="78" r="3.5" fill="#3E362A" />
            </svg>
          </div>
        </div>

        {/* Compact Content Grid */}
        <div className="p-4">
          <div className="flex items-center gap-0.5 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill={i < 4 ? "#C99A4A" : "none"} stroke="#C99A4A" strokeWidth={1.5} />
            ))}
            <span style={{ color: "#8A8172" }} className="text-[10px] ml-1 font-medium">
              4.0 (128)
            </span>
          </div>

          <h3 style={{ color: "#2E2A22", fontFamily: "Georgia, serif" }} className="text-base font-semibold mb-0.5 leading-tight">
            Highland Reserve
          </h3>
          <p style={{ color: "#8A8172" }} className="text-xs mb-3 leading-normal line-clamp-2">
            Single-origin Ethiopian beans, notes of bergamot &amp; dark honey.
          </p>

          <div className="flex items-center justify-between mb-4">
            <span style={{ color: "#2E2A22" }} className="text-lg font-bold tracking-tight">
              $18.50
            </span>
            <div style={{ border: "1px solid #E7DFD0" }} className="flex items-center rounded-full bg-[#FFFDF9]">
              <button
                onClick={dec}
                aria-label="Decrease quantity"
                style={{ color: "#5F7355" }}
                className="p-1.5 rounded-full hover:bg-black/5 active:scale-90 transition-transform focus:outline-none"
              >
                <Minus size={11} strokeWidth={2.5} />
              </button>
              <span style={{ color: "#2E2A22" }} className="w-5 text-center text-xs font-semibold">
                {qty}
              </span>
              <button
                onClick={inc}
                aria-label="Increase quantity"
                style={{ color: "#5F7355" }}
                className="p-1.5 rounded-full hover:bg-black/5 active:scale-90 transition-transform focus:outline-none"
              >
                <Plus size={11} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            style={{ backgroundColor: added ? "#4A5C40" : "#5F7355", color: "#FAF6EF" }}
            className="relative w-full flex items-center justify-center gap-1.5 rounded-full py-2 text-xs font-medium overflow-hidden transition-colors duration-200 active:scale-[0.98] focus:outline-none"
          >
            {added ? (
              <span key="added" className="pop-in flex items-center gap-1.5">
                <Check size={13} strokeWidth={2.5} /> Added
              </span>
            ) : (
              <span key="idle" className="flex items-center gap-1.5">
                <ShoppingBag size={13} /> Add to bag
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}