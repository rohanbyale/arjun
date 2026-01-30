import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react"; // Updated for latest framer-motion
import { 
  Star, ShieldCheck, ChevronRight, Heart, Sparkles, 
  Calendar, Clock, MapPin, Phone, CheckCircle2, X, Users, Award,
  MessageSquare, CreditCard, Wallet, Landmark, Truck
} from "lucide-react";

// --- MOCK DATABASE ---
const servicesData = [
  {
    id: "ac",
    category: "Repairs",
    name: "AC Repair & Service",
    rating: 4.8,
    reviews: "2.4k",
    desc: "Deep cleaning and gas charging by certified technicians. Includes 30-day warranty.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller",
    price: "₹499"
  },
  {
    id: "plumber",
    category: "Repairs",
    name: "Expert Plumbing",
    rating: 4.9,
    reviews: "1.8k",
    desc: "Leaking pipes, tap repairs, and complete bathroom fittings. Same day resolution.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
    tag: "Expert Choice",
    price: "₹199"
  },
  {
    id: "cleaning",
    category: "Cleaning",
    name: "Full Home Cleaning",
    rating: 5.0,
    reviews: "950",
    desc: "Hospital-grade disinfection and deep corner cleaning using eco-friendly chemicals.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    tag: "Ultra Clean",
    price: "₹2,499"
  }
];

const workersData = [
  { id: 1, name: "Arjun Sharma", specialty: "ac", rating: 4.9, exp: "8 yrs", jobs: 1200, img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&h=400&fit=crop" },
  { id: 2, name: "Vikram Singh", specialty: "ac", rating: 4.7, exp: "5 yrs", jobs: 850, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
  { id: 3, name: "Suresh Iyer", specialty: "plumber", rating: 4.9, exp: "12 yrs", jobs: 2100, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { id: 4, name: "Rahul Verma", specialty: "plumber", rating: 4.6, exp: "4 yrs", jobs: 400, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { id: 5, name: "Priya Das", specialty: "cleaning", rating: 5.0, exp: "6 yrs", jobs: 980, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
];

// --- MODAL COMPONENT ---
function BookingModal({ service, isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    worker: null,
    date: "",
    time: "",
    address: "",
    phone: "",
    problem: "",
    paymentMethod: "cod"
  });

  const relatedWorkers = useMemo(() => 
    workersData.filter(w => w.specialty === service.id), 
  [service.id]);

  if (!isOpen) return null;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative bg-white w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-100 flex shrink-0">
          <motion.div className="h-full bg-blue-600" animate={{ width: `${(step / 6) * 100}%` }} />
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X size={20} />
        </button>

        <div className="p-6 md:p-8 overflow-y-auto">
          {/* STEP 1: SELECT WORKER */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest text-center block">Step 1 of 5</span>
                <h3 className="text-2xl font-black text-slate-900">Choose Your Expert</h3>
                <p className="text-slate-500 text-sm">Select a top-rated professional for your {service.name}</p>
              </div>
              <div className="grid gap-3">
                {relatedWorkers.map(worker => (
                  <button 
                    key={worker.id}
                    onClick={() => { setBookingData({...bookingData, worker}); nextStep(); }}
                    className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50/30 transition-all text-left group"
                  >
                    <img src={worker.img} className="h-16 w-16 rounded-xl object-cover shadow-sm" alt="" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h4 className="font-black text-slate-900">{worker.name}</h4>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                          <Star size={12} className="fill-amber-500" /> {worker.rating}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter flex items-center gap-1"><Award size={10} /> {worker.exp} Exp</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter flex items-center gap-1"><Users size={10} /> {worker.jobs} Jobs</span>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: PROBLEM DESCRIPTION (NEW) */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900">Describe the Issue</h3>
                <p className="text-slate-500 text-sm">Tell {bookingData.worker?.name} what needs fixing</p>
              </div>
              <div className="relative">
                <MessageSquare className="absolute top-4 left-4 text-slate-300" size={20} />
                <textarea 
                  placeholder="Example: My AC is making a loud noise and the cooling is low. Please check the filter and gas level."
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl h-40 focus:border-blue-500 focus:outline-none transition-all font-medium text-slate-700"
                  onChange={(e) => setBookingData({...bookingData, problem: e.target.value})}
                />
              </div>
              <div className="flex gap-3">
                <button onClick={prevStep} className="flex-1 py-4 font-bold text-slate-400">Back</button>
                <button disabled={!bookingData.problem} onClick={nextStep} className="flex-[2] bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs disabled:opacity-50">Continue Booking</button>
              </div>
            </div>
          )}

          {/* STEP 3: SCHEDULE */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900">Select Date & Time</h3>
              </div>
              <div className="space-y-4">
                <input 
                  type="date" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-3">
                  {["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"].map(t => (
                    <button 
                      key={t}
                      onClick={() => setBookingData({...bookingData, time: t})}
                      className={`py-3 rounded-xl border-2 text-xs font-black transition-all ${bookingData.time === t ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-100 text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={prevStep} className="flex-1 py-4 font-bold text-slate-400">Back</button>
                <button disabled={!bookingData.date || !bookingData.time} onClick={nextStep} className="flex-[2] bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Location Details</button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT DETAILS */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900">Where to Visit?</h3>
              </div>
              <div className="space-y-4">
                <div className="relative">
                   <MapPin className="absolute top-4 left-4 text-slate-300" size={20} />
                   <textarea 
                    placeholder="Full Address (House No, Building, Landmark...)" 
                    className="w-full pl-12 p-4 bg-slate-50 border border-slate-200 rounded-2xl h-24"
                    onChange={(e) => setBookingData({...bookingData, address: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-300" size={20} />
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="w-full pl-12 p-4 bg-slate-50 border border-slate-200 rounded-2xl"
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={prevStep} className="flex-1 py-4 font-bold text-slate-400">Back</button>
                <button disabled={!bookingData.address || !bookingData.phone} onClick={nextStep} className="flex-[2] bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Payment Method</button>
              </div>
            </div>
          )}

          {/* STEP 5: PAYMENT SELECTION (NEW) */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900">Payment Method</h3>
                <p className="text-slate-500 text-sm">Safe & Secure Transactions</p>
              </div>
              <div className="grid gap-3">
                {[
                  { id: 'upi', label: 'UPI / Google Pay', icon: Wallet, sub: 'Pay via any UPI app' },
                  { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, sub: 'All major cards accepted' },
                  { id: 'net', label: 'Net Banking', icon: Landmark, sub: 'Secure bank login' },
                  { id: 'cod', label: 'Cash After Service', icon: Truck, sub: 'Pay when job is done' },
                ].map(method => (
                  <button 
                    key={method.id}
                    onClick={() => setBookingData({...bookingData, paymentMethod: method.id})}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${bookingData.paymentMethod === method.id ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <div className={`p-3 rounded-xl ${bookingData.paymentMethod === method.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <method.icon size={20} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-black text-slate-900 text-sm">{method.label}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{method.sub}</p>
                    </div>
                    {bookingData.paymentMethod === method.id && <div className="h-4 w-4 bg-blue-600 rounded-full border-4 border-white ring-1 ring-blue-600" />}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={prevStep} className="flex-1 py-4 font-bold text-slate-400">Back</button>
                <button onClick={nextStep} className="flex-[2] bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-200">Confirm Booking</button>
              </div>
            </div>
          )}

          {/* STEP 6: SUCCESS */}
          {step === 6 && (
            <div className="py-10 text-center space-y-6">
              <div className="flex justify-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 size={56} />
                </motion.div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Booking Confirmed!</h3>
                <p className="text-slate-500 font-medium">Order ID: #FOG-{Math.floor(Math.random() * 90000) + 10000}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-[24px] text-left space-y-3">
                <p className="text-xs text-slate-400 font-black uppercase">Service Summary</p>
                <div className="flex justify-between font-bold text-slate-800">
                  <span>{service.name}</span>
                  <span>{service.price}</span>
                </div>
                <div className="text-xs text-slate-500">Expert: <b>{bookingData.worker?.name}</b></div>
                <div className="text-xs text-slate-500">Scheduled: <b>{bookingData.date} at {bookingData.time}</b></div>
                <div className="text-xs text-slate-500">Payment: <b className="uppercase">{bookingData.paymentMethod}</b></div>
              </div>
              <button onClick={onClose} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold">Done</button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// --- REMAINING COMPONENTS (ServiceCard & ServicesPage) ---
function ServiceCard({ service, onBook }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div layout onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="group relative w-full bg-white rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl border border-slate-100 flex flex-col h-full">
      <div className="absolute top-4 left-4 z-20"><span className="bg-white/90 backdrop-blur-xl text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-slate-900">{service.tag}</span></div>
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img animate={{ scale: isHovered ? 1.1 : 1 }} src={service.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent opacity-90" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs font-bold">{service.rating}</span>
          <div className="ml-auto text-blue-600 font-black text-sm">{service.price}</div>
        </div>
        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2">{service.name}</h4>
        <p className="text-slate-500 text-xs md:text-sm line-clamp-2 mb-6">{service.desc}</p>
        <button onClick={() => onBook(service)} className="mt-auto w-full bg-slate-900 py-4 rounded-xl md:rounded-[24px] text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
          Hire Expert Now <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All Services");
  const [selectedService, setSelectedService] = useState(null);
  const categories = ["All Services", "Repairs", "Cleaning", "Installations"];

  const filteredServices = activeTab === "All Services" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <div className="bg-[#F8FAFC] py-16 md:py-32 px-4 md:px-8 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 font-bold text-[9px] uppercase tracking-[0.3em]">
            <Sparkles size={12} /> Personalized Hiring
          </div>
          <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Fix Anything <br /> <span className="text-blue-600 italic">Professionally.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveTab(cat)} className={`px-6 py-2.5 rounded-xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === cat ? "bg-slate-900 text-white" : "bg-white text-slate-400 border border-slate-200"}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} onBook={setSelectedService} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <BookingModal 
            service={selectedService} 
            isOpen={!!selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicesPage;