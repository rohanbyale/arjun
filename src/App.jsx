import { useState, useEffect } from "react"; // Added useEffect
import { Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicePage";
import Process from './components/Process';

// Auth Components (Customer Modals)
import Login from "./auth/Login";
import Signup from "./auth/Signup";

// Pages
import SearchResults from "./pages/SearchResults";
import BecomeProvider from "./pages/BecomeProvider";
import AboutPage from "./components/About";
import WorkerHomeCTA from "./components/WorkerCta";
import WorkerLogin from "./auth/WorkerLogin";
import WorkerRegistration from "./auth/WorkerRegst";
import Service from "./components/Service";
import AdminLogin from "./auth/AdminLogin";
import AdminSignUp from "./auth/AdminRegistration";
import AdminProfile from "./pages/admin/AdminProfile";



// --- SCROLL TO TOP UTILITY ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("fixongo_user"),
  );

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("fixongo_user");
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Ensures page starts at top on route change */}
      <ScrollToTop /> 

      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className={(showLogin || showSignup) ? "blurred filter blur-sm transition-all" : "transition-all duration-500"}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
            {/* <AdminSignUp />
            <AdminLogin /> */}
            <AdminProfile />
              <Hero />
              <ServicesPage />
              <Process />
              <WorkerHomeCTA />
            </>
          } />

          {/* Search & Content */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Service />} />
          
          {/* --- WORKER ROUTES --- */}
          <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/workerregistration" element={<WorkerRegistration />} />
          
     

          {/* Legacy route (optional) */}
          <Route path="/become-provider" element={<BecomeProvider />} />
        </Routes>
        
        <Footer />
      </div>

      {/* 🔐 LOGIN MODAL */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLogin={handleLoginSuccess}
        />
      )}

      {/* 🆕 SIGNUP MODAL */}
      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          onLogin={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default App;