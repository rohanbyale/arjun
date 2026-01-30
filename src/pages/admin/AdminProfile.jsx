import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, Calendar, 
  ShieldCheck, Camera, Edit3, LogOut, 
  Bell, Key, Activity, CheckCircle2, ArrowRight,
  TrendingUp, Award, Globe, Zap
} from "lucide-react";

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const adminData = {
    name: "Arjun Mehta",
    email: "arjun.admin@fixandgo.com",
    phone: "+91 98765 43210",
    role: "Senior Operations Manager",
    office: "Sector 18, Gurgaon HQ",
    joined: "Jan 2024",
    level: 85, // Progress to next rank
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 font-sans relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Glass Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white/50 backdrop-blur-md p-6 rounded-[32px] border border-white shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <Zap className="text-white" size={24} fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 leading-tight">Admin Terminal</h1>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">FixAndGo Internal Ops</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <nav className="flex bg-slate-100 p-1.5 rounded-2xl">
              {['overview', 'security'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === tab ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <button className="p-3 bg-white border border-slate-200 text-red-500 rounded-2xl hover:bg-red-50 transition-colors shadow-sm">
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Info */}
          <aside className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[40px] shadow-xl shadow-slate-200/40 border border-slate-100 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500" />
              
              <div className="relative inline-block mt-4">
                <div className="w-36 h-36 bg-gradient-to-br from-indigo-50 to-slate-50 rounded-[40%] flex items-center justify-center border-2 border-slate-100 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <User size={64} className="text-indigo-600/20 absolute" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun" alt="avatar" className="w-28 h-28 relative z-10" />
                </div>
                <button className="absolute bottom-2 right-2 bg-slate-900 text-white p-2.5 rounded-2xl shadow-xl hover:bg-indigo-600 transition-colors">
                  <Camera size={16} />
                </button>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{adminData.name}</h2>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-wider mt-2">
                  <Award size={12} /> {adminData.role}
                </span>
              </div>

              {/* Progress Level */}
              <div className="mt-8 text-left space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>Trust Level</span>
                  <span className="text-indigo-600">Lvl 8</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${adminData.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-indigo-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-600 p-5 rounded-[32px] text-white shadow-lg shadow-indigo-200">
                <Globe size={20} className="opacity-60 mb-3" />
                <p className="text-[10px] font-bold uppercase opacity-80 tracking-widest">Region</p>
                <p className="text-lg font-black tracking-tight">IN-North</p>
              </div>
              <div className="bg-white border border-slate-100 p-5 rounded-[32px] shadow-sm">
                <TrendingUp size={20} className="text-green-500 mb-3" />
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Rating</p>
                <p className="text-lg font-black text-slate-900 tracking-tight">4.9/5.0</p>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Info Grid */}
                  <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-10">
                      <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg"><ShieldCheck size={20} className="text-indigo-600" /></div>
                        Profile Details
                      </h3>
                      <button className="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
                        <Edit3 size={14} className="group-hover:rotate-12 transition-transform" /> Edit 
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                      <div className="space-y-8">
                        <InfoRow icon={<Mail />} label="Communication" value={adminData.email} />
                        <InfoRow icon={<Phone />} label="Primary Contact" value={adminData.phone} />
                        <InfoRow icon={<MapPin />} label="Assigned Station" value={adminData.office} />
                      </div>
                      <div className="space-y-8">
                        <InfoRow icon={<Calendar />} label="Enrolled Since" value="January 14, 2024" />
                        <div className="grid grid-cols-2 gap-4">
                          <InfoRow icon={<Activity />} label="Uptime" value="99.9%" />
                          <InfoRow icon={<CheckCircle2 />} label="Status" value="Active" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Tiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FeatureTile icon={<Key className="text-indigo-600" />} title="Security" subtitle="Password & 2FA" />
                    <FeatureTile icon={<Bell className="text-orange-500" />} title="Logs" subtitle="System Activity" />
                    <FeatureTile icon={<Zap className="text-blue-600" />} title="Tools" subtitle="Admin Console" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="security"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 min-h-[400px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <Key size={32} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Security Terminal</h3>
                  <p className="text-slate-500 max-w-xs mt-2">Update your authentication methods and manage active sessions.</p>
                  <button className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-100 hover:scale-105 transition-transform">
                    Reset Password
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-5 group">
    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] mb-0.5">{label}</p>
      <p className="text-[15px] font-bold text-slate-900 leading-none">{value}</p>
    </div>
  </div>
);

const FeatureTile = ({ icon, title, subtitle }) => (
  <motion.button 
    whileHover={{ y: -5 }}
    className="flex flex-col items-start p-6 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all text-left"
  >
    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <p className="text-sm font-black text-slate-900">{title}</p>
    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{subtitle}</p>
  </motion.button>
);

export default AdminProfile;