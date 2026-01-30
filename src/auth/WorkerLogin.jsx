import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you use react-router
import { 
  RiHammerFill, 
  RiMailLine, 
  RiLockPasswordLine, 
  RiArrowRightLine,
  RiCheckboxCircleFill
} from "react-icons/ri";

function WorkerLogin() {
  const [email, setEmail] = useState("");

  return (
    /* Added pt-20 to prevent Navbar overlap */
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans pt-20 lg:pt-0">
      
      {/* --- Left Side: Branding (Hidden on mobile or shown as a header) --- */}
      <div className="w-full lg:w-5/12 bg-slate-900 p-8 lg:p-16 flex flex-col justify-center lg:justify-between relative overflow-hidden">
        {/* Background Texture/Accent */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] border-[40px] border-blue-600 rounded-full" />
        </div>

        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex bg-blue-600 text-white px-5 py-2 rounded-xl rotate-[-2deg] mb-6 lg:mb-8 shadow-xl"
          >
            <span className="text-sm font-black tracking-tighter italic uppercase">
              FixOn<span className="text-slate-900 not-italic">Go</span> Pro
            </span>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight lg:leading-[0.9] tracking-tighter">
            Turn your skills <br className="hidden lg:block" /> into <span className="text-blue-500 italic">Earnings.</span>
          </h1>
        </div>

        {/* Benefits List - Hidden on small mobile to save space, visible on tablet+ */}
        <div className="relative z-10 mt-8 lg:mt-0 hidden sm:block">
          <div className="space-y-4">
            {[
              "Access high-paying local jobs",
              "Manage your pro dashboard",
              "Track weekly service payouts"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <RiCheckboxCircleFill className="text-blue-500" size={20} />
                <p className="text-slate-300 font-medium text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-slate-500 text-[10px] font-black mt-8 lg:mt-0 uppercase tracking-widest">
          Secure Partner Portal • 2026
        </p>
      </div>

      {/* --- Right Side: Login Form --- */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-slate-50 lg:bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white p-8 lg:p-0 rounded-[2.5rem] lg:rounded-none shadow-xl shadow-slate-200 lg:shadow-none"
        >
          <div className="mb-8 lg:mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Pro Login</h2>
            <p className="text-slate-500 font-medium mt-1">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="name@provider.com"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-medium text-slate-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Keep me logged in</span>
              </label>
              <button className="text-[11px] font-black text-blue-600 uppercase tracking-widest hover:underline">Forgot Password?</button>
            </div>

            {/* Action Button */}
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-950 shadow-xl shadow-blue-200 hover:shadow-slate-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
              Go Online <RiArrowRightLine size={20} />
            </button>
          </form>

          {/* Registration Link Card */}
          <div className="mt-10 p-5 bg-blue-50 rounded-[2rem] border border-blue-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600 shrink-0">
              <RiHammerFill size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight leading-none mb-1">New to the platform?</p>
              <Link to="/workerregistration" className="text-sm font-bold text-blue-600 hover:underline">
                Register as a Pro Partner
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkerLogin;