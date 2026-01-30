import React from "react";
import { useSearchSuggestions } from "../hooks/useSearchSuggestions";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Star, ShieldCheck, ArrowRight, Sparkles, Home, UserCheck } from "lucide-react";

const POPULAR = ["Kitchen Cleaning", "AC Repair", "Painting", "Assembly"];

function Hero() {
  const search = useSearchSuggestions();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.query) return;
    navigate(`/search?q=${search.query}`);
  };

  return (
    /* Increased height from 85vh to 95vh for a more immersive feel */
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Deep contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/20 to-slate-950" />
      </div>

      {/* Floating UI Element */}
      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] hidden lg:block z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl p-4 rounded-3xl border border-white/10 flex items-center gap-4 shadow-2xl">
          <div className="bg-green-500/20 p-2.5 rounded-full"><UserCheck className="text-green-400" size={20}/></div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Professional</p>
            <p className="text-sm font-bold text-white">Verified Expert</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10"
        >
          <Sparkles size={14} className="text-blue-400 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">Trusted by 10k+ Households</span>
        </motion.div>

        {/* Hero Typography */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1] mb-8"
          >
            Your Home, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 italic font-serif">Perfected.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Elite professionals for your essential needs. 
            Experience the <span className="text-white font-medium border-b-2 border-blue-500/50">Gold Standard</span> in home care.
          </motion.p>
        </div>

        {/* 2. Refined Compact Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-2xl relative"
        >
          <div className="relative flex items-center bg-white rounded-[32px] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all focus-within:ring-4 ring-blue-500/20">
            <div className="flex-grow flex items-center px-5">
              <Search className="text-slate-400 group-focus-within:text-blue-500 transition-colors" size={22} />
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none px-3 py-4 text-slate-800 placeholder:text-slate-400 text-lg font-medium"
                placeholder="What can we help you with?"
                value={search.query}
                onChange={(e) => {
                  search.setQuery(e.target.value);
                  search.setShow(true);
                }}
                onBlur={() => setTimeout(() => search.setShow(false), 200)}
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-[26px] transition-all flex items-center gap-2 shadow-lg"
            >
              Book
              <ArrowRight size={18} />
            </motion.button>

            {/* Dropdown Results */}
            <AnimatePresence>
              {search.show && search.query && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-white border border-slate-100 rounded-[28px] overflow-hidden z-50 shadow-2xl"
                >
                  {search.results.map((item, i) => (
                    <button
                      key={i}
                      onMouseDown={() => { search.setQuery(item); search.setShow(false); }}
                      className="w-full text-left px-8 py-5 hover:bg-blue-50 text-slate-700 flex items-center gap-4 transition-colors border-b border-slate-50 last:border-0"
                    >
                      <MapPin size={18} className="text-slate-300" />
                      <span className="font-bold text-base">{item}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Compact Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {POPULAR.map((tag) => (
              <button 
                key={tag}
                onClick={() => search.setQuery(tag)}
                className="px-5 py-2 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full text-xs font-bold text-slate-300 hover:text-white transition-all backdrop-blur-md"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3. Trust Ecosystem */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-10 mt-20"
        >
          {[
            { label: "Verified Pros", icon: <ShieldCheck className="text-blue-400" size={20}/> },
            { label: "5-Star Service", icon: <Star className="text-amber-400 fill-amber-400" size={20}/> },
            { label: "Local Help", icon: <Home className="text-indigo-400" size={20}/> }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;