import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Zap,
  Globe,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden font-sans">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40vh] right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto backdrop-blur-md bg-[#09090b]/40 sticky top-0 border-b border-white/5"
      >
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          <span>
            Nexus<span className="text-purple-500">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            How it Works
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* AUTH BUTTONS CLUSTER */}
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors px-3 py-2"
 
            onClick={() =>  navigate('/login') }
          >
            Log In
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-block text-sm font-semibold text-zinc-300 hover:text-white border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors px-4 py-2.5 rounded-xl"
          onClick={() =>  navigate('/register') }
          >
            Register
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
          >
            Launch Dashboard
          </motion.button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          <span>The Next-Gen Frictionless Marketplace Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-8"
        >
          Connect instantly. Sell effortlessly. <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Grow exponentially.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          We bridge the gap between brilliant creators and global buyers. Turn
          your products into revenue with our high-converting, automated
          ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-purple-600/20 transition-all"
          >
            Start Selling Free
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl border border-zinc-800 text-zinc-300 font-semibold transition-colors"
          >
            Explore Marketplace
          </motion.button>
        </motion.div>
      </section>

      {/* TRUST / STATS BAR */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-12 border-y border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-[#09090b]/50 backdrop-blur-sm"
      >
        {[
          { value: "$42M+", label: "Total Volume Traded" },
          { value: "150k+", label: "Active Merchants" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "24/7", label: "Expert Support" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-zinc-500 font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineered for High-Velocity Sales
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Everything you need to list, market, scale, and secure your
            automated ecosystem.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8, borderColor: "rgba(168,85,247,0.4)" }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">1-Minute Setup</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connect your product repository, configure your terms, and go
                live instantly with zero friction.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8, borderColor: "rgba(59,130,246,0.4)" }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Distribution</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Instantly reach buyers across 180+ countries with automatic
                currency localized checkouts.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8, borderColor: "rgba(236,72,153,0.4)" }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Escrow-Backed Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Total peace of mind. Funds are securely locked and only released
                upon successful digital handover.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FINAL CTA CLOSING SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-12 md:p-16 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 text-center flex flex-col items-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 z-10">
            Ready to scale your product sales?
          </h2>
          <p className="text-zinc-400 max-w-lg mb-8 z-10">
            Join thousands of modern sellers leveraging our infrastructure to
            automate their revenue.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="z-10 px-8 py-4 bg-white text-black font-bold rounded-xl shadow-xl hover:bg-zinc-200 transition-colors"
          >
            Create Your Account
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
