import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, ChevronRight, Settings, 
  Package, Star, CreditCard, Bell, Search,
  ArrowUpRight, Download, Filter, User
} from "lucide-react";

// --- MOCK DATA FOR HISTORY ---
const bookings = [
  {
    id: "BK-9901",
    service: "AC Repair & Service",
    expert: "Arjun Sharma",
    date: "30 Jan 2026",
    status: "Upcoming",
    price: "₹499",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200"
  },
  {
    id: "BK-8842",
    service: "Full Home Cleaning",
    expert: "Priya Das",
    date: "15 Jan 2026",
    status: "Completed",
    price: "₹2,499",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200"
  },
  {
    id: "BK-7721",
    service: "Expert Plumbing",
    expert: "Suresh Iyer",
    date: "02 Jan 2026",
    status: "Completed",
    price: "₹199",
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=200"
  }
];

const UserDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      {/* --- TOP NAV --- */}
      <nav className="bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">F</div>
            <h1 className="font-black text-slate-900 tracking-tight hidden md:block">Fixlt Dashboard</h1>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Bell size={20} /></button>
            <div className="h-8 w-[1px] bg-slate-100" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-[10px] font-black text-slate-400 uppercase">Premium Member</p>
                <p className="text-sm font-black text-slate-900">Alex Graham</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* --- STATS BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">Wallet Balance</p>
            <h2 className="text-4xl font-black mb-6">₹1,240.00</h2>
            <button className="bg-white text-slate-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter">Add Money</button>
            <CreditCard className="absolute -bottom-4 -right-4 text-white/5" size={120} />
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
            <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
              <Package size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">12</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Bookings</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
            <div className="h-12 w-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-4">
              <Star size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">4.9</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Avg. Rating Given</p>
          </motion.div>
        </div>

        {/* --- BOOKING HISTORY SECTION --- */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recent Activity</h2>
              <p className="text-slate-500 text-sm">Manage your past and upcoming services</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {["All", "Upcoming", "Completed", "Cancelled"].map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === filter ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-slate-400 border border-slate-100"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {bookings.filter(b => activeFilter === "All" || b.status === activeFilter).map((booking, i) => (
              <motion.div 
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-4 md:p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6"
              >
                <img src={booking.img} className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover" alt="" />
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h4 className="font-black text-slate-900 text-lg">{booking.service}</h4>
                    <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-tighter w-fit mx-auto md:mx-0 ${booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    <span className="flex items-center gap-1"><User size={12} /> {booking.expert}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {booking.date}</span>
                    <span className="text-blue-600 font-black">{booking.id}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                  <div className="flex-grow md:text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase">Total Paid</p>
                    <p className="text-xl font-black text-slate-900">{booking.price}</p>
                  </div>
                  <button className="h-12 w-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    {booking.status === 'Upcoming' ? <ArrowUpRight size={20} /> : <Download size={20} />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PROMO BANNER --- */}
        <div className="mt-12 bg-blue-600 rounded-[32px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black mb-2 leading-tight">Save 20% on every <br /> service with Plus</h3>
            <p className="text-blue-100 text-sm">Join 50,000+ members saving on home maintenance.</p>
          </div>
          <button className="whitespace-nowrap bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">Get Plus Now</button>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;