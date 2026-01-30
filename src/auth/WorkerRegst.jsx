import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  RiUserLine, RiToolsLine, RiMapPinUserLine, RiMailLine, 
  RiLockPasswordLine, RiSmartphoneLine, RiHashtag, 
  RiUploadCloud2Line, RiArrowRightLine, RiStarFill,
  RiAccountCircleLine, RiBuilding4Line, RiCheckboxCircleFill, RiDeleteBin6Line
} from "react-icons/ri";

function WorkerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "", gender: "Male", age: "", skill: "Electrician",
    officeAddress: "", email: "", phone: "", password: "",
    confirmPassword: "", adharNumber: "", panNumber: ""
  });

  // State for Image Previews
  const [previews, setPreviews] = useState({ adhar: null, pan: null });
  
  // Refs to trigger hidden file inputs
  const adharInputRef = useRef(null);
  const panInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({ ...prev, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (type) => {
    setPreviews(prev => ({ ...prev, [type]: null }));
  };

  return (
<div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center pt-32 pb-12 px-4 md:px-6">
      
      {/* --- Header Section --- */}
      <div className="text-center mb-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex bg-slate-950 text-white px-5 py-2 rounded-xl rotate-[-2deg] mb-6 shadow-xl">
          <span className="text-sm font-black tracking-tighter italic uppercase">
            FixOn<span className="text-blue-500 not-italic">Go</span> Partner
          </span>
        </motion.div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Join the <span className="text-blue-600">Elite.</span></h1>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-slate-200 overflow-hidden grid lg:grid-cols-12">
        
        <div className="lg:col-span-7 p-6 md:p-12 border-r border-slate-50">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
              <RiAccountCircleLine className="text-blue-600" size={24}/> Personal Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <div className="relative">
                  <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="fullName" onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-slate-50 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 text-sm" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email ID</label>
                <div className="relative">
                  <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="email" onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-slate-50 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900 text-sm" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Gender</label>
                <select name="gender" onChange={handleChange} className="w-full bg-slate-50 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm appearance-none">
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Age</label>
                <input name="age" onChange={handleChange} type="number" placeholder="25" className="w-full bg-slate-50 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm" />
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                <div className="relative">
                  <RiSmartphoneLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="phone" onChange={handleChange} type="tel" placeholder="9876543210" className="w-full bg-slate-50 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm" />
                </div>
              </div>
            </div>

            <hr className="border-slate-100 my-4" />
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
              <RiBuilding4Line className="text-blue-600" size={24}/> Verification Documents
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Aadhar Number</label>
                <input name="adharNumber" onChange={handleChange} type="text" placeholder="1234 5678 9101" className="w-full bg-slate-50 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">PAN Card Number</label>
                <input name="panNumber" onChange={handleChange} type="text" placeholder="ABCDE1234F" className="w-full bg-slate-50 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm" />
              </div>
            </div>

            {/* --- UPLOAD SECTION --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[ {id: 'adhar', label: 'Aadhar Card', ref: adharInputRef}, 
                 {id: 'pan', label: 'PAN Card', ref: panInputRef} ].map((doc) => (
                <div key={doc.id} className="relative group">
                  <input type="file" hidden ref={doc.ref} accept="image/*" onChange={(e) => handleFileChange(e, doc.id)} />
                  
                  {!previews[doc.id] ? (
                    <button type="button" onClick={() => doc.ref.current.click()}
                      className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-2 bg-slate-50 hover:bg-blue-50 hover:border-blue-400 transition-all group">
                      <RiUploadCloud2Line size={28} className="text-slate-400 group-hover:text-blue-600" />
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">Upload {doc.label}</span>
                    </button>
                  ) : (
                    <div className="relative h-32 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-lg animate-in zoom-in-95 duration-300">
                      <img src={previews[doc.id]} className="w-full h-full object-cover" alt="preview" />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button onClick={() => removeImage(doc.id)} className="p-2 bg-red-500 text-white rounded-full hover:scale-110 transition-transform"><RiDeleteBin6Line /></button>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full"><RiCheckboxCircleFill /></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <hr className="border-slate-100 my-4" />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                <input name="password" onChange={handleChange} type="password" placeholder="••••••••" className="w-full bg-slate-50 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirm Password</label>
                <input name="confirmPassword" onChange={handleChange} type="password" placeholder="••••••••" className="w-full bg-slate-50 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-600 font-bold text-slate-900 text-sm" />
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-950 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 mt-6">
              Complete Registration <RiArrowRightLine size={20} />
            </button>

            <p className="text-center text-xs font-bold text-slate-400">
              Already registered? <Link to="/workerlogin" className="text-blue-600 hover:underline">Login here</Link>
            </p>
          </form>
        </div>

        {/* --- Right: Information Sidebar --- */}
        <div className="hidden lg:flex lg:col-span-5 bg-slate-950 p-12 text-white flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] border-[30px] border-blue-600 rounded-full" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black leading-tight mb-8">Ready to grow your <br/><span className="text-blue-500 italic">Business?</span></h3>
            <ul className="space-y-8">
              {["Smart Lead Matching", "Weekly Payouts", "24/7 Support"].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                  <div><p className="font-black text-sm uppercase tracking-widest leading-none mb-2">{item}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-10 bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-2xl text-xs">
            <div className="flex gap-1 text-yellow-400 mb-3">{[...Array(5)].map((_, i) => <RiStarFill key={i} />)}</div>
            <p className="italic mb-4">"FixOnGo changed my life. I used to wait for calls, now I get jobs every day."</p>
            <p className="font-black uppercase">Rajesh Kumar <span className="text-blue-500 ml-2">Gold Partner</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WorkerRegistration;