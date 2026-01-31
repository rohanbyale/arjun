import React, { useState } from 'react';
import { 
  Menu, Search, Bell, LogOut, LayoutDashboard, 
  Briefcase, Users, UserCheck, DollarSign, Activity, Clock
} from 'lucide-react';

// Import all page components
import DashboardPage from './AdminDashboard';
import AdminProfilePage from './Adminprofilepage';
import ServicesPage from './Serviceage';
import WorkerDetail from './WorkerDetail';
import Modals from './Modals'
import PendingRequestsPage from './Pendingrequestspage';
import WorkerDetailPage from './Workerdetailpage';
import WorkersPage from './WorkerPage';

import { 
  AddServiceModal, 
  EditServiceModal, 
  AddWorkerModal, 
  EditWorkerModal 
} from './Modals';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [isAddWorkerModalOpen, setIsAddWorkerModalOpen] = useState(false);
  const [isEditServiceModalOpen, setIsEditServiceModalOpen] = useState(false);
  const [isEditWorkerModalOpen, setIsEditWorkerModalOpen] = useState(false);
  const [isWorkerDetailOpen, setIsWorkerDetailOpen] = useState(false);
  const [isAdminProfileOpen, setIsAdminProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Admin Profile State
  const [adminProfile, setAdminProfile] = useState({
    name: 'Admin User',
    email: 'admin@fixandgo.com',
    phone: '+1 234-567-8999',
    role: 'Super Administrator',
    location: 'New York, NY',
    joinDate: '2022-01-15',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff'
  });

  const [adminProfileForm, setAdminProfileForm] = useState({...adminProfile});

  // Services State
  const [services, setServices] = useState([
    { 
      id: 1, 
      name: 'Plumbing', 
      category: 'Home Services', 
      workers: 42, 
      status: 'active', 
      icon: '🔧',
      description: 'Professional plumbing repair and installation',
      pricing: '$50-150/hr',
      rating: 4.8,
      totalJobs: 1250,
      createdDate: '2023-01-10'
    },
    { 
      id: 2, 
      name: 'Electrical', 
      category: 'Home Services', 
      workers: 38, 
      status: 'active', 
      icon: '⚡',
      description: 'Licensed electrical work and maintenance',
      pricing: '$60-180/hr',
      rating: 4.9,
      totalJobs: 980,
      createdDate: '2023-01-12'
    },
    { 
      id: 3, 
      name: 'Painting', 
      category: 'Home Services', 
      workers: 55, 
      status: 'active', 
      icon: '🎨',
      description: 'Interior and exterior painting services',
      pricing: '$40-120/hr',
      rating: 4.7,
      totalJobs: 1450,
      createdDate: '2023-01-15'
    },
    { 
      id: 4, 
      name: 'Carpentry', 
      category: 'Home Services', 
      workers: 31, 
      status: 'active', 
      icon: '🪚',
      description: 'Custom woodwork and furniture repair',
      pricing: '$55-160/hr',
      rating: 4.8,
      totalJobs: 890,
      createdDate: '2023-02-01'
    },
    { 
      id: 5, 
      name: 'HVAC', 
      category: 'Technical Services', 
      workers: 28, 
      status: 'active', 
      icon: '❄️',
      description: 'Heating, cooling, and ventilation services',
      pricing: '$70-200/hr',
      rating: 4.9,
      totalJobs: 756,
      createdDate: '2023-02-10'
    },
    { 
      id: 6, 
      name: 'Cleaning', 
      category: 'Home Services', 
      workers: 64, 
      status: 'active', 
      icon: '🧹',
      description: 'Professional cleaning and sanitization',
      pricing: '$30-90/hr',
      rating: 4.6,
      totalJobs: 2100,
      createdDate: '2023-02-15'
    },
  ]);

  // Workers State
  const [workers, setWorkers] = useState([
    { 
      id: 1, 
      name: 'John Smith', 
      service: 'Plumbing', 
      phone: '+1 234-567-8900', 
      email: 'john.smith@email.com',
      rating: 4.8, 
      status: 'approved', 
      experience: '5 years',
      location: 'New York, NY',
      jobsCompleted: 248,
      joinDate: '2023-01-15',
      availability: 'Available',
      hourlyRate: '$85/hr',
      bio: 'Experienced plumber with expertise in residential and commercial plumbing systems.',
      certifications: ['Licensed Plumber', 'Backflow Prevention', 'Gas Line Certified'],
      languages: ['English', 'Spanish'],
      emergencyService: true,
      portfolio: ['https://example.com/work1.jpg', 'https://example.com/work2.jpg']
    },
    { 
      id: 2, 
      name: 'Maria Garcia', 
      service: 'Electrical', 
      phone: '+1 234-567-8901', 
      email: 'maria.garcia@email.com',
      rating: 4.9, 
      status: 'approved', 
      experience: '8 years',
      location: 'Los Angeles, CA',
      jobsCompleted: 312,
      joinDate: '2022-11-20',
      availability: 'Available',
      hourlyRate: '$95/hr',
      bio: 'Master electrician specializing in commercial electrical installations.',
      certifications: ['Master Electrician', 'Solar Panel Installation', 'Industrial Wiring'],
      languages: ['English', 'Spanish'],
      emergencyService: true,
      portfolio: []
    },
    { 
      id: 3, 
      name: 'David Chen', 
      service: 'Painting', 
      phone: '+1 234-567-8905', 
      email: 'david.chen@email.com',
      rating: 4.7, 
      status: 'approved', 
      experience: '6 years',
      location: 'Chicago, IL',
      jobsCompleted: 195,
      joinDate: '2023-03-10',
      availability: 'Busy',
      hourlyRate: '$75/hr',
      bio: 'Professional painter with focus on interior and exterior residential painting.',
      certifications: ['Professional Painter', 'Lead-Safe Certified'],
      languages: ['English', 'Mandarin'],
      emergencyService: false,
      portfolio: []
    },
    { 
      id: 4, 
      name: 'Sarah Johnson', 
      service: 'Carpentry', 
      phone: '+1 234-567-8906', 
      email: 'sarah.j@email.com',
      rating: 4.9, 
      status: 'approved', 
      experience: '10 years',
      location: 'Houston, TX',
      jobsCompleted: 389,
      joinDate: '2022-08-05',
      availability: 'Available',
      hourlyRate: '$110/hr',
      bio: 'Expert carpenter specializing in custom furniture and home renovations.',
      certifications: ['Licensed Carpenter', 'Cabinet Making', 'Finish Carpentry'],
      languages: ['English'],
      emergencyService: false,
      portfolio: []
    },
    { 
      id: 5, 
      name: 'Michael Brown', 
      service: 'HVAC', 
      phone: '+1 234-567-8907', 
      email: 'michael.b@email.com',
      rating: 4.8, 
      status: 'approved', 
      experience: '7 years',
      location: 'Phoenix, AZ',
      jobsCompleted: 267,
      joinDate: '2023-02-18',
      availability: 'Available',
      hourlyRate: '$100/hr',
      bio: 'Certified HVAC technician with expertise in all heating and cooling systems.',
      certifications: ['EPA Certified', 'HVAC Excellence', 'NATE Certified'],
      languages: ['English'],
      emergencyService: true,
      portfolio: []
    },
  ]);

  // Pending Requests State
  const [pendingRequests, setPendingRequests] = useState([
    { 
      id: 1, 
      name: 'Robert Johnson', 
      service: 'Carpentry', 
      phone: '+1 234-567-8902', 
      email: 'robert.j@email.com', 
      experience: '7 years',
      location: 'Miami, FL',
      certifications: 'Licensed Carpenter',
      requestDate: '2024-01-28',
      portfolio: 'Yes',
      hourlyRate: '$95/hr',
      bio: 'Skilled carpenter with residential and commercial experience.'
    },
    { 
      id: 2, 
      name: 'Sarah Williams', 
      service: 'Painting', 
      phone: '+1 234-567-8903', 
      email: 'sarah.w@email.com', 
      experience: '4 years',
      location: 'Seattle, WA',
      certifications: 'Commercial Painting Certified',
      requestDate: '2024-01-29',
      portfolio: 'Yes',
      hourlyRate: '$70/hr',
      bio: 'Professional painter with attention to detail.'
    },
    { 
      id: 3, 
      name: 'James Wilson', 
      service: 'Plumbing', 
      phone: '+1 234-567-8908', 
      email: 'james.w@email.com', 
      experience: '9 years',
      location: 'Boston, MA',
      certifications: 'Master Plumber License',
      requestDate: '2024-01-30',
      portfolio: 'Yes',
      hourlyRate: '$105/hr',
      bio: 'Master plumber specializing in complex installations.'
    },
  ]);

  // Service Form State
  const [serviceForm, setServiceForm] = useState({
    name: '',
    category: '',
    description: '',
    icon: '',
    pricing: ''
  });

  // Worker Form State
  const [workerForm, setWorkerForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    experience: '',
    location: '',
    hourlyRate: '',
    bio: ''
  });

  // Stats for Dashboard
  const dashboardStats = [
    { label: 'Total Revenue', value: '$124,500', trend: '+12.5%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Active Jobs', value: '142', trend: '+8 today', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Technicians', value: workers.length, trend: '92% online', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Pending Appr.', value: pendingRequests.length, trend: 'High priority', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  // Recent Activity
  const recentActivity = [
    { id: 1, name: 'Alex Rivera', service: 'Plumbing', status: 'In Progress', time: '2 hours ago', customer: 'John Doe' },
    { id: 2, name: 'Maria Garcia', service: 'Electrical', status: 'Completed', time: '4 hours ago', customer: 'Jane Smith' },
    { id: 3, name: 'David Chen', service: 'Painting', status: 'In Progress', time: '5 hours ago', customer: 'Bob Wilson' },
    { id: 4, name: 'Sarah Johnson', service: 'Carpentry', status: 'Scheduled', time: '1 day ago', customer: 'Alice Brown' },
  ];

  // Functions
  const handleAddService = (e) => {
    e.preventDefault();
    const newService = {
      id: services.length + 1,
      name: serviceForm.name,
      category: serviceForm.category,
      description: serviceForm.description,
      icon: serviceForm.icon || '💼',
      pricing: serviceForm.pricing,
      workers: 0,
      status: 'active',
      rating: 0,
      totalJobs: 0,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setServices([...services, newService]);
    setServiceForm({ name: '', category: '', description: '', icon: '', pricing: '' });
    setIsAddServiceModalOpen(false);
  };

  const handleEditService = (e) => {
    e.preventDefault();
    setServices(services.map(s => 
      s.id === selectedService.id ? { ...s, ...serviceForm } : s
    ));
    setIsEditServiceModalOpen(false);
    setSelectedService(null);
  };

  const openEditService = (service) => {
    setSelectedService(service);
    setServiceForm({
      name: service.name,
      category: service.category,
      description: service.description,
      icon: service.icon,
      pricing: service.pricing
    });
    setIsEditServiceModalOpen(true);
  };

  const handleAddWorker = (e) => {
    e.preventDefault();
    const newWorker = {
      id: workers.length + 1,
      name: workerForm.name,
      email: workerForm.email,
      phone: workerForm.phone,
      service: workerForm.service,
      experience: workerForm.experience,
      location: workerForm.location,
      hourlyRate: workerForm.hourlyRate,
      bio: workerForm.bio,
      rating: 0,
      status: 'approved',
      jobsCompleted: 0,
      joinDate: new Date().toISOString().split('T')[0],
      availability: 'Available',
      certifications: [],
      languages: ['English'],
      emergencyService: false,
      portfolio: []
    };
    setWorkers([...workers, newWorker]);
    setWorkerForm({ name: '', email: '', phone: '', service: '', experience: '', location: '', hourlyRate: '', bio: '' });
    setIsAddWorkerModalOpen(false);
  };

  const handleEditWorker = (e) => {
    e.preventDefault();
    setWorkers(workers.map(w => 
      w.id === selectedWorker.id ? { ...w, ...workerForm } : w
    ));
    setIsEditWorkerModalOpen(false);
    setSelectedWorker(null);
    setIsWorkerDetailOpen(false);
  };

  const openEditWorker = (worker) => {
    setSelectedWorker(worker);
    setWorkerForm({
      name: worker.name,
      email: worker.email,
      phone: worker.phone,
      service: worker.service,
      experience: worker.experience,
      location: worker.location,
      hourlyRate: worker.hourlyRate,
      bio: worker.bio || ''
    });
    setIsEditWorkerModalOpen(true);
  };

  const openWorkerDetail = (worker) => {
    setSelectedWorker(worker);
    setIsWorkerDetailOpen(true);
  };

  const deleteService = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const approveWorker = (request) => {
    if (window.confirm(`Approve ${request.name} as a worker?`)) {
      const newWorker = {
        id: workers.length + 1,
        name: request.name,
        email: request.email,
        phone: request.phone,
        service: request.service,
        experience: request.experience,
        location: request.location,
        hourlyRate: request.hourlyRate,
        bio: request.bio,
        rating: 0,
        status: 'approved',
        jobsCompleted: 0,
        joinDate: new Date().toISOString().split('T')[0],
        availability: 'Available',
        certifications: [request.certifications],
        languages: ['English'],
        emergencyService: false,
        portfolio: []
      };
      setWorkers([...workers, newWorker]);
      setPendingRequests(pendingRequests.filter(r => r.id !== request.id));
    }
  };

  const rejectWorker = (id) => {
    if (window.confirm('Are you sure you want to reject this application?')) {
      setPendingRequests(pendingRequests.filter(r => r.id !== id));
    }
  };

  const suspendWorker = (id) => {
    if (window.confirm('Are you sure you want to suspend this worker?')) {
      setWorkers(workers.map(w => w.id === id ? { ...w, status: 'suspended' } : w));
    }
  };

  const handleUpdateAdminProfile = (e) => {
    e.preventDefault();
    setAdminProfile({...adminProfileForm});
    setIsAdminProfileOpen(false);
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      'In Progress': 'bg-amber-50 text-amber-600',
      'Completed': 'bg-emerald-50 text-emerald-600',
      'Scheduled': 'bg-blue-50 text-blue-600',
      'Cancelled': 'bg-red-50 text-red-600'
    };
    return statusStyles[status] || 'bg-slate-50 text-slate-600';
  };

  const getAvailabilityBadge = (availability) => {
    return availability === 'Available' 
      ? 'bg-emerald-50 text-emerald-600' 
      : 'bg-amber-50 text-amber-600';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .animate-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 z-50 transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">FixAndGo</span>
          </div>

          <nav className="flex-1 space-y-1">
            {[
              { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
              { id: 'services', icon: Briefcase, label: 'Services' },
              { id: 'workers', icon: Users, label: 'Technicians' },
              { id: 'requests', icon: UserCheck, label: 'Approvals', badge: pendingRequests.length },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setIsSidebarOpen(false); setIsWorkerDetailOpen(false); setIsAdminProfileOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                  activeSection === item.id 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  {item.label}
                </div>
                {item.badge > 0 && (
                  <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{item.badge}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-100">
            <button 
              onClick={() => { setIsAdminProfileOpen(true); setActiveSection('profile'); }}
              className="flex items-center gap-3 px-4 py-3 mb-2 w-full hover:bg-slate-50 rounded-xl transition-colors"
            >
              <img src={adminProfile.avatar} className="w-10 h-10 rounded-full" alt="Admin" />
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-slate-900">{adminProfile.name}</p>
                <p className="text-xs text-slate-500">{adminProfile.email}</p>
              </div>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-500 hover:text-red-600 w-full transition-colors rounded-xl hover:bg-red-50">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 lg:ml-64 min-h-screen`}>
        {/* Header */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-30 px-4 py-4 lg:px-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                <Menu size={20} />
              </button>
              <h2 className="text-lg font-bold text-slate-900 capitalize">
                {isWorkerDetailOpen ? 'Worker Details' : isAdminProfileOpen ? 'Admin Profile' : activeSection}
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 focus-within:ring-2 ring-indigo-500/20">
                <Search size={16} className="text-slate-400" />
                <input type="text" placeholder="Quick search..." className="bg-transparent border-none text-sm focus:ring-0 focus:outline-none w-48 ml-2 text-slate-900" />
              </div>
              <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button 
                onClick={() => { setIsAdminProfileOpen(true); setActiveSection('profile'); }}
                className="w-8 h-8 rounded-full ring-2 ring-slate-100 overflow-hidden hover:ring-indigo-500 transition-all"
              >
                <img src={adminProfile.avatar} alt="avatar" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          {/* Render the appropriate page based on activeSection and state */}
          {activeSection === 'dashboard' && !isWorkerDetailOpen && !isAdminProfileOpen && (
            <DashboardPage 
              dashboardStats={dashboardStats}
              recentActivity={recentActivity}
              services={services}
              workers={workers}
              pendingRequests={pendingRequests}
              setIsAddServiceModalOpen={setIsAddServiceModalOpen}
              setActiveSection={setActiveSection}
              getStatusBadge={getStatusBadge}
            />
          )}

          {activeSection === 'services' && !isWorkerDetailOpen && !isAdminProfileOpen && (
            <ServicesPage 
              services={services}
              setIsAddServiceModalOpen={setIsAddServiceModalOpen}
              openEditService={openEditService}
              deleteService={deleteService}
            />
          )}

          {activeSection === 'workers' && !isWorkerDetailOpen && !isAdminProfileOpen && (
            <WorkersPage 
              workers={workers}
              setIsAddWorkerModalOpen={setIsAddWorkerModalOpen}
              openWorkerDetail={openWorkerDetail}
              openEditWorker={openEditWorker}
              suspendWorker={suspendWorker}
              getAvailabilityBadge={getAvailabilityBadge}
            />
          )}

          {isWorkerDetailOpen && selectedWorker && (
            <WorkerDetailPage 
              selectedWorker={selectedWorker}
              setIsWorkerDetailOpen={setIsWorkerDetailOpen}
              openEditWorker={openEditWorker}
              suspendWorker={suspendWorker}
              getAvailabilityBadge={getAvailabilityBadge}
            />
          )}

          {isAdminProfileOpen && (
            <AdminProfilePage 
              adminProfile={adminProfile}
              adminProfileForm={adminProfileForm}
              setAdminProfileForm={setAdminProfileForm}
              handleUpdateAdminProfile={handleUpdateAdminProfile}
              setIsAdminProfileOpen={setIsAdminProfileOpen}
            />
          )}

          {activeSection === 'requests' && !isWorkerDetailOpen && !isAdminProfileOpen && (
            <PendingRequestsPage 
              pendingRequests={pendingRequests}
              approveWorker={approveWorker}
              rejectWorker={rejectWorker}
            />
          )}
        </div>
      </main>

      {/* Modals */}
      <Modals
        isOpen={isAddServiceModalOpen}
        setIsOpen={setIsAddServiceModalOpen}
        serviceForm={serviceForm}
        setServiceForm={setServiceForm}
        handleAddService={handleAddService}
      />

      <EditServiceModal 
        isOpen={isEditServiceModalOpen}
        setIsOpen={setIsEditServiceModalOpen}
        serviceForm={serviceForm}
        setServiceForm={setServiceForm}
        handleEditService={handleEditService}
      />

      <AddWorkerModal 
        isOpen={isAddWorkerModalOpen}
        setIsOpen={setIsAddWorkerModalOpen}
        workerForm={workerForm}
        setWorkerForm={setWorkerForm}
        handleAddWorker={handleAddWorker}
        services={services}
      />

      <EditWorkerModal 
        isOpen={isEditWorkerModalOpen}
        setIsOpen={setIsEditWorkerModalOpen}
        workerForm={workerForm}
        setWorkerForm={setWorkerForm}
        handleEditWorker={handleEditWorker}
        services={services}
      />
    </div>
  );
}