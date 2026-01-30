import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, Play, Plus, X, MessageSquare, Camera } from "lucide-react";

// This is your data array. In the future, you will fetch this from your database.
const INITIAL_REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    text: "The precision they brought to my kitchen renovation was unmatched. I've never seen a contractor show up 5 minutes early, but FixOnGo did. Truly elite service.",
    rating: 5,
    tag: "Renovation",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    text: "Managing 12 units is a nightmare. FixOnGo is now my only call. Their dashboard makes tracking repairs incredibly easy.",
    rating: 5,
    tag: "Maintenance",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    text: "I recommend FixOnGo to all my clients. Their attention to detail on finishing work is exactly what a high-end home requires. The professionals are courteous and clean.",
    rating: 5,
    tag: "Design",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    text: "Finally, a service that feels like it belongs in the 21st century. The booking is seamless and the quality is consistent across every job I've booked.",
    rating: 5,
    tag: "Repair",
    date: "1 month ago"
  }
];

export default function TestimonialPage() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* --- Header Section --- */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              <MessageSquare size={14} fill="currentColor" /> Verified Feedback
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              The Wall of <br />
              <span className="italic font-serif text-blue-600">Satisfaction.</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium max-w-xl mb-10">
              Don't just take our word for it. Explore the experiences of thousands of homeowners who chose the gold standard.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
              >
                <Plus size={18} /> Share Your Experience
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-700">4.9/5 from 2.4k+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Video Story --- */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden group bg-slate-900 shadow-3xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            alt="customer home"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform cursor-pointer">
              <Play fill="currentColor" size={32} />
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-4">"It's like having a concierge for your home."</h2>
            <p className="text-blue-200 font-bold uppercase tracking-widest text-xs">The Miller Family • Full Smart Home Setup</p>
          </div>
        </motion.div>
      </section>

      {/* --- Reviews Grid (Future-Proof Masonry) --- */}
      <section className="pb-32 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className="flex items-center gap-1 text-amber-500 mb-6">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <Quote className="text-blue-600/10 mb-4" size={40} />
              
              <p className="text-slate-700 font-medium leading-relaxed mb-8 italic">
                "{item.text}"
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm flex items-center gap-1">
                      {item.name} <CheckCircle2 size={14} className="text-emerald-500" />
                    </h4>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Review Modal (Placeholder) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] p-10 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X /></button>
              
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Write a Review</h3>
              <p className="text-slate-500 font-medium mb-8">Share your FixOnGo experience with the community.</p>
              
              <div className="space-y-6">
                <div className="flex gap-2 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={30} className="text-slate-200 hover:text-amber-500 cursor-pointer transition-colors" />)}
                </div>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="What made your experience special?"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  Submit Review <CheckCircle2 size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}