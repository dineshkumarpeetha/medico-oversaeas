import React, { useState } from 'react';
import { Lock, User, ShieldCheck, Sparkles, ArrowRight, AlertCircle, GraduationCap } from 'lucide-react';
import { dbService } from '../services/dbService';

export default function AdminLogin({ onLoginSuccess, onBackToSite }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const res = dbService.loginAdmin(username, password);
    if (res.success) {
      onLoginSuccess();
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#122443] via-[#1F3864] to-[#0B162C] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white text-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 relative">
        
        {/* Header */}
        <div className="text-center space-y-3 pb-6 border-b border-slate-100">
          <div className="w-14 h-14 rounded-2xl bg-[#1F3864] text-white flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-8 h-8 text-[#E15B3F]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E15B3F]" /> BuildX Secured Portal
            </div>
            <h2 className="text-2xl font-extrabold text-[#1F3864] font-['Outfit']">Admin Management Login</h2>
            <p className="text-xs text-slate-500">Log in to manage leads, university fees & blog CMS</p>
          </div>
        </div>

        {/* Demo credentials banner */}
        <div className="my-4 p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 space-y-1">
          <div className="font-bold text-[#1F3864]">🔑 Demo Admin Credentials:</div>
          <div className="flex justify-between">
            <span>Username: <strong className="text-slate-800">admin</strong></span>
            <span>Password: <strong className="text-slate-800">admin123</strong></span>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Username</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 outline-none focus:border-[#1F3864]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 outline-none focus:border-[#1F3864]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary justify-center text-sm py-3 font-bold shadow-lg"
          >
            Log In to Admin Dashboard <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 mt-6 text-center">
          <button
            onClick={onBackToSite}
            className="text-xs text-slate-500 hover:text-[#1F3864] font-semibold underline"
          >
            ← Return to Medico Overseas Website
          </button>
        </div>

      </div>
    </div>
  );
}
