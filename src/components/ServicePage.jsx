import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, ShieldCheck, ChevronRight, Heart, Sparkles 
} from "lucide-react";

const servicesData = [
  {
    id: "ac",
    category: "Repairs",
    name: "AC Repair & Service",
    rating: 4.8,
    reviews: "2.4k",
    desc: "Deep cleaning and gas charging by certified technicians. Includes 30-day warranty.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller"
  },
  {
    id: "plumber",
    category: "Repairs",
    name: "Expert Plumbing",
    rating: 4.9,
    reviews: "1.8k",
    desc: "Leaking pipes, tap repairs, and complete bathroom fittings. Same day resolution.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
    tag: "Expert Choice"
  },
  {
    id: "cleaning",
    category: "Cleaning",
    name: "Full Home Cleaning",
    rating: 5.0,
    reviews: "950",
    desc: "Hospital-grade disinfection and deep corner cleaning using eco-friendly chemicals.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    tag: "Ultra Clean"
  },
  {
    id: "painting",
    category: "Installations",
    name: "Wall Painting",
    rating: 4.7,
    reviews: "1.2k",
    desc: "Premium finish with waterproof coating. Free color consultation included.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    tag: "Trending"
  },
  {
    id: "pest",
    category: "Cleaning",
    name: "Pest Control",
    rating: 4.8,
    reviews: "3.5k",
    desc: "Herbal treatment for cockroaches, termites, and bed bugs. 100% safe for kids.",
    image: "https://plus.unsplash.com/premium_photo-1682126097276-57e5d1d3f812?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Safe Home"
  },
  {
    id: "ro",
    category: "Repairs",
    name: "Water Purifier Service",
    rating: 4.6,
    reviews: "2.1k",
    desc: "Filter replacement and TDS checking for all major RO brands.",
    image: "https://plus.unsplash.com/premium_photo-1750594941416-6ac3707610dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Essential"
  }
];

function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full bg-white rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl border border-slate-100 flex flex-col"
    >
      {/* Top Badge Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
        <span className="bg-white/90 backdrop-blur-xl text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-slate-900 shadow-lg">
          {service.tag}
        </span>
        <button className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500 transition-colors shadow-lg">
          <Heart size={16} />
        </button>
      </div>

      {/* Image Header - Reduced height on mobile (h-48) */}
      <div className="relative h-48 md:h-60 overflow-hidden">
        <motion.img 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.8 }}
          src={service.image} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
      </div>

      {/* Content - Reduced padding on mobile (p-6) */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs font-bold text-slate-900">{service.rating}</span>
          <span className="text-[10px] text-slate-400 font-medium">({service.reviews})</span>
        </div>

        <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h4>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-8 line-clamp-2 md:line-clamp-3">
          {service.desc}
        </p>

        <div className="mt-auto space-y-3 md:space-y-5">
          <div className="flex items-center justify-center gap-2 text-blue-700 bg-blue-50/50 py-2 md:py-3 rounded-xl md:rounded-2xl border border-blue-100/50">
            <ShieldCheck size={14} className="fill-blue-200" />
            <span className="text-[9px] font-black uppercase tracking-widest italic">FixOnGo Promise</span>
          </div>

          <button className="w-full relative overflow-hidden bg-slate-900 py-4 md:py-5 rounded-xl md:rounded-[24px] text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group/btn hover:bg-blue-600 transition-all">
            <span className="relative z-10">Book Now</span>
            <ChevronRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All Services");
  const categories = ["All Services", "Repairs", "Cleaning", "Installations"];

  const filteredServices = activeTab === "All Services" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    // Reduced vertical padding on mobile (py-16)
    <div className="bg-[#F8FAFC] py-16 md:py-32 px-4 md:px-8 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Reduced bottom margin on mobile */}
        <div className="text-center mb-10 md:mb-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 md:mb-6 font-bold text-[9px] uppercase tracking-[0.3em]">
            <Sparkles size={12} /> Only The Best
          </motion.div>
          <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 md:mb-8 leading-tight">
            Excellence In <br /> <span className="text-blue-600 italic">Every Detail.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 md:px-8 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === cat 
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-300 -translate-y-1" 
                  : "bg-white text-slate-400 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 md:py-20 bg-white rounded-[32px] md:rounded-[40px] border-2 border-dashed border-slate-100">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No services found</p>
          </div>
        )}

        {/* Minimal Footer Stats - Reduced top margin */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <span className="text-xs md:text-sm font-black text-slate-900 uppercase">Trusted by 50,000+ Families</span>
             <span className="text-[10px] md:text-xs text-slate-400 font-medium">Delivering happiness daily.</span>
          </div>

          <div className="flex items-center gap-4 scale-90 md:scale-100">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
              ].map((url, i) => (
                <motion.div key={i} className="relative">
                  <img src={url} alt={`User ${i}`} className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                </motion.div>
              ))}
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[9px] font-black text-white z-10">
                +2k
              </div>
            </div>

            <div className="flex flex-col ml-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-[10px] font-black ml-2 text-slate-900">4.9/5</span>
              </div>
              <span className="text-[9px] text-slate-400 font-bold uppercase">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;