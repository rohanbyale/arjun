import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Mail, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      alert("Admin Authentication successful. Redirecting to Dashboard...");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Brand Gradient Blobs (Matching User Style) */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-100 blur-[120px] rounded-full opacity-70" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-indigo-100 blur-[120px] rounded-full opacity-70" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 bg-indigo-600 rounded-3xl items-center justify-center shadow-2xl shadow-indigo-200 mb-6">
            <ShieldCheck size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-semibold mt-2">Sign in to your admin dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-[48px] shadow-2xl shadow-slate-200/60">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  required
                  placeholder="admin@fixit.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 outline-none transition-all font-medium shadow-sm"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[11px] font-black text-indigo-600 uppercase hover:text-indigo-700 transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-12 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 outline-none transition-all font-medium shadow-sm"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button 
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-100 mt-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Sign In to Terminal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* New to Admin? Sign Up Bridge */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">New Team Member?</p>
            <button className="text-indigo-600 font-black text-sm hover:text-indigo-700 transition-colors">
              Request Admin Access
            </button>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          Secure System Access • 2026 FixIt Ops
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;