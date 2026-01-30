import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, MapPin, Phone, MessageCircle, ShieldCheck, 
  ChevronLeft, MoreVertical, Star, CheckCircle2, Navigation 
} from "lucide-react";

const ExpertTrackingPage = ({ bookingDetails, onBack }) => {
  const [status, setStatus] = useState("heading_to_location"); // statuses: heading_to_location, arrived, work_in_progress, completed
  const [eta, setEta] = useState(12);

  // Mock countdown for ETA
  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 1));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* --- HEADER --- */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-slate-100">
        <button onClick={onBack} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
          <ChevronLeft size={24} className="text-slate-900" />
        </button>
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Job ID: #FOG-8829</p>
          <h1 className="text-sm font-black text-slate-900">AC Repair Tracking</h1>
        </div>
        <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
          <MoreVertical size={24} className="text-slate-900" />
        </button>
      </nav>

      <div className="max-w-4xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-8">
        
        {/* --- LEFT COLUMN: LIVE STATUS & MAP --- */}
        <div className="space-y-6">
          {/* Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Navigation size={24} className="animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  {status === "heading_to_location" ? "Expert is on the way" : "Expert Arrived"}
                </h2>
                <p className="text-slate-500 text-sm font-medium">Estimated arrival in {eta} mins</p>
              </div>
            </div>

            {/* Timeline Progress */}
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
              <div className="flex gap-4 relative z-10">
                <div className="h-6 w-6 bg-blue-600 rounded-full border-4 border-white ring-1 ring-blue-600 shadow-lg" />
                <span className="text-sm font-black text-slate-900">Booking Confirmed</span>
              </div>
              <div className="flex gap-4 relative z-10">
                <div className="h-6 w-6 bg-blue-600 rounded-full border-4 border-white ring-1 ring-blue-600 shadow-lg" />
                <span className="text-sm font-black text-slate-900">Expert Assigned</span>
              </div>
              <div className="flex gap-4 relative z-10">
                <div className={`h-6 w-6 rounded-full border-4 border-white ring-1 shadow-lg transition-colors ${status === "heading_to_location" ? "bg-blue-600 ring-blue-600" : "bg-white ring-slate-200"}`} />
                <span className={`text-sm font-black ${status === "heading_to_location" ? "text-slate-900" : "text-slate-300"}`}>Heading to Location</span>
              </div>
            </div>
          </motion.div>

          {/* Map Preview Placeholder */}
          <div className="relative h-64 bg-slate-200 rounded-[32px] overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/88.3639,22.5726,13/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-blue-600/10" />
            
            {/* Pulsing Location Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 h-12 w-12 bg-blue-600 rounded-full animate-ping opacity-25" />
                <div className="relative h-12 w-12 bg-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white">
                  <Navigation size={20} />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl flex items-center justify-between shadow-lg">
              <span className="text-[10px] font-black text-slate-900 uppercase">Live Location Tracking</span>
              <button className="text-blue-600 font-black text-[10px] uppercase">Open Map</button>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: EXPERT INFO & CHAT --- */}
        <div className="space-y-6">
          {/* Expert Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 rounded-[32px] p-6 text-white overflow-hidden relative"
          >
            <div className="relative z-10 flex items-center gap-5">
              <img 
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&h=400&fit=crop" 
                className="h-20 w-20 rounded-[24px] object-cover border-2 border-blue-500 shadow-2xl" 
                alt="Expert"
              />
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-black">Arjun Sharma</h3>
                  <div className="bg-blue-500 p-1 rounded-full"><ShieldCheck size={12} /></div>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold">
                  <span className="flex items-center gap-1"><Star size={12} className="text-amber-400 fill-amber-400" /> 4.9</span>
                  <span>•</span>
                  <span>AC Specialist</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8 relative z-10">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                <Phone size={16} /> Call Expert
              </button>
              <button className="bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-blue-900/50 transition-all">
                <MessageCircle size={16} /> Secure Chat
              </button>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-blue-600 rounded-full blur-[80px] opacity-30" />
          </motion.div>

          {/* Job Details */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-6">
            <h4 className="text-lg font-black text-slate-900">Job Details</h4>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Service Address</p>
                  <p className="text-sm font-bold text-slate-700 leading-snug">Apartment 402, Green Valley Towers, Outer Ring Road, Bangalore</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Scheduled Time</p>
                  <p className="text-sm font-bold text-slate-700">Today, Jan 30th • 10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase">Bill Amount</p>
                <p className="text-2xl font-black text-slate-900">₹499</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-black text-slate-400 uppercase">Payment Method</p>
                <div className="flex items-center gap-1 font-bold text-slate-900">
                  <CheckCircle2 size={14} className="text-green-500" /> UPI
                </div>
              </div>
            </div>
          </div>

          {/* Safety Reminder */}
          <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-100 rounded-[24px]">
            <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <p className="text-[11px] font-bold text-amber-800 leading-relaxed">
              For your safety, please verify the expert's ID card and do not share your OTP until the work is started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTrackingPage;