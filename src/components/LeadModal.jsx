import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { dbService } from '../services/dbService';

export default function LeadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    preferredCountry: 'Russia',
    neetScore: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    dbService.addLead(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1F3864] font-['Outfit']">Counseling Request Received!</h3>
            <p className="text-slate-600 text-sm">
              Thank you <strong>{formData.name}</strong>. Our senior medical study-abroad expert will contact you at <strong>{formData.phone}</strong> within 15 minutes.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E15B3F]" /> Secured by BuildX Lead Gateway
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#122443] to-[#1F3864] text-white p-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E15B3F]/20 text-[#E15B3F] text-xs font-semibold rounded-full mb-2 border border-[#E15B3F]/30">
                <Sparkles className="w-3.5 h-3.5" /> Free 1-on-1 Guidance 2026
              </div>
              <h3 className="text-2xl font-bold font-['Outfit']">Get Free MBBS Abroad Counseling</h3>
              <p className="text-xs text-slate-300 mt-1">
                Fill in your details below to receive cut-offs, fee structure PDFs & eligibility reports.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile / WhatsApp No *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. student@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Current City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi / Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Country</label>
                  <select
                    value={formData.preferredCountry}
                    onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864] bg-white"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.country}>
                        {d.flag} {d.country}
                      </option>
                    ))}
                    <option value="Not Sure">Need Expert Suggestion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">NEET Score (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. 240 or Appearing"
                    value={formData.neetScore}
                    onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Question</label>
                <textarea
                  rows="2"
                  placeholder="Ask about fees, hostel, eligibility or admission dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-[#1F3864]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center text-base py-3 shadow-lg"
              >
                Submit Inquiry <Send className="w-4 h-4 ml-1" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Your details are 100% confidential. No spam guaranteed.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
