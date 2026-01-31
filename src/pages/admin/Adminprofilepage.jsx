import React from 'react';
import { ArrowLeft, Camera, Settings, Save } from 'lucide-react';

export default function AdminProfilePage({ 
  adminProfile,
  adminProfileForm, 
  setAdminProfileForm,
  handleUpdateAdminProfile,
  setIsAdminProfileOpen 
}) {
  return (
    <div className="animate-in max-w-4xl mx-auto">
      <button 
        onClick={() => setIsAdminProfileOpen(false)}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 font-semibold"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img 
                src={adminProfile.avatar} 
                className="w-24 h-24 rounded-full ring-4 ring-white/30"
                alt="Admin"
              />
              <button className="absolute bottom-0 right-0 bg-white text-indigo-600 p-2 rounded-full shadow-lg hover:bg-slate-100 transition-colors">
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">{adminProfile.name}</h1>
              <p className="text-indigo-100 font-semibold">{adminProfile.role}</p>
              <p className="text-indigo-200 text-sm mt-1">Member since {adminProfile.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateAdminProfile} className="p-8">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Settings size={20} />
            Account Settings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm">Full Name</label>
              <input
                type="text"
                value={adminProfileForm.name}
                onChange={(e) => setAdminProfileForm({ ...adminProfileForm, name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm">Email Address</label>
              <input
                type="email"
                value={adminProfileForm.email}
                onChange={(e) => setAdminProfileForm({ ...adminProfileForm, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                value={adminProfileForm.phone}
                onChange={(e) => setAdminProfileForm({ ...adminProfileForm, phone: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm">Location</label>
              <input
                type="text"
                value={adminProfileForm.location}
                onChange={(e) => setAdminProfileForm({ ...adminProfileForm, location: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900"
                required
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Security</h3>
            <div className="space-y-4">
              <button 
                type="button"
                className="w-full sm:w-auto bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all"
              >
                Change Password
              </button>
              <button 
                type="button"
                className="w-full sm:w-auto bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all ml-0 sm:ml-3"
              >
                Enable Two-Factor Authentication
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="flex-1 sm:flex-none bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => {
                setAdminProfileForm({...adminProfile});
                setIsAdminProfileOpen(false);
              }}
              className="flex-1 sm:flex-none bg-slate-100 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}