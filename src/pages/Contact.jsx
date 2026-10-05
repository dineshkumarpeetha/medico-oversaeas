import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { InstagramIcon, YoutubeIcon, LinkedinIcon, FacebookIcon } from '../components/SocialIcons';

export default function Contact() {
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

  const INSTAGRAM_URL = "https://www.instagram.com/medico_overseas_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const YOUTUBE_URL = "https://www.youtube.com/@MedicoAbroad01";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-14 text-center">
        <div className="container mx-auto px-4 space-y-3">
          <span className="badge-tag bg-white/10 text-amber-300 border border-white/20 text-xs">
            <Sparkles className="w-3.5 h-3.5" /> 24/7 Student Assistance
          </span>
          <h1 className="text-4xl font-extrabold font-['Outfit']">Contact Medico Overseas</h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Visit our offices in Delhi, Mumbai, or Hyderabad, or request a call back from our medical study counsellors.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1C2541] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-[#1F3864] dark:text-white font-['Outfit']">Send Us an Inquiry</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Fill in your requirements to receive university prospectuses & fee charts.</p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F3864] dark:text-white">Thank You!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Your query has been sent to our admissions desk. We will call you on <strong>{formData.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Student Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Interested Destination</label>
                    <select
                      value={formData.preferredCountry}
                      onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#1F3864] bg-white dark:bg-[#0B132B]"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.country}>{d.flag} {d.country}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">NEET Score (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. 215 Marks"
                      value={formData.neetScore}
                      onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Your Question / Inquiry</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us what you would like to know..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary justify-center text-sm py-3 font-bold">
                  Submit Inquiry <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Quick Contacts & Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold font-['Outfit']">Head Office Details</h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E15B3F] shrink-0 mt-0.5" />
                  <span>BuildX Tower, 5th Floor, Connaught Place, New Delhi - 110001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210 / +91 98123 45678</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="mailto:admissions@medicooverseas.com" className="hover:text-white">admissions@medicooverseas.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Monday - Saturday: 9:30 AM - 7:00 PM IST</span>
                </div>
              </div>

              {/* Official Social Links */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Connect on Social Media</div>
                <div className="flex items-center gap-3">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors text-white" title="Instagram (@medico_overseas_)">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors text-white" title="YouTube (@MedicoAbroad01)">
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors text-white" title="LinkedIn">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-white" title="Facebook">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                </a>
                <a 
                  href="tel:+919876543210" 
                  className="flex-1 bg-[#E15B3F] hover:bg-[#C9472C] text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Specialist
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map Simulation */}
            <div className="bg-white dark:bg-[#1C2541] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md p-2">
              <div className="w-full h-56 bg-slate-200 dark:bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center text-slate-500 text-xs">
                <div className="absolute inset-0 opacity-80">
                  <iframe 
                    title="Office Location Map" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src="https://maps.google.com/maps?q=Connaught%20Place,%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
