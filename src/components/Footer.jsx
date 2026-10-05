import React from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  Heart
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { InstagramIcon, YoutubeIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ setActivePage, setSelectedDestId, setSelectedExamId, onOpenLeadModal }) {
  const INSTAGRAM_URL = "https://www.instagram.com/medico_overseas_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const YOUTUBE_URL = "https://www.youtube.com/@MedicoAbroad01";

  const navigateTo = (page, param = null) => {
    if (page === 'destination' && param) setSelectedDestId(param);
    if (page === 'exam' && param) setSelectedExamId(param);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B162C] text-slate-300 pt-16 pb-8 border-t-4 border-[#E15B3F]">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info, Social Links & BuildX Badge */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F3864] to-[#E15B3F] p-2 flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white font-['Outfit']">
                  Medico <span className="text-[#E15B3F]">Overseas</span>
                </span>
                <span className="text-xs text-slate-400">MBBS Abroad Consultancy</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Medico Overseas is India's leading MBBS study-abroad agency. We guide medical aspirants through NMC & WHO approved medical university admissions in Russia, Georgia, Kyrgyzstan, Uzbekistan, Armenia, and Vietnam.
            </p>

            {/* Social Media Links Bar */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Follow Medico Overseas
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  title="Instagram (@medico_overseas_)"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href={YOUTUBE_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  title="YouTube (@MedicoAbroad01)"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* BuildX Technology Badge */}
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E15B3F]/20 text-[#E15B3F] flex items-center justify-center font-extrabold text-sm font-['Outfit']">
                BX
              </div>
              <div>
                <div className="text-xs text-slate-400">Platform Technology Partner</div>
                <div className="text-sm font-semibold text-white flex items-center gap-1">
                  BuildX Digital Solutions <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" /> 100% Admission Guarantee
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-['Outfit'] font-bold text-base border-l-2 border-[#E15B3F] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E15B3F]" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E15B3F]" /> About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('exam', 'fmge')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E15B3F]" /> FMGE / NEXT Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('exam', 'nmat')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E15B3F]" /> NMAT Exam Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blogs')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E15B3F]" /> Latest Medical Blogs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E15B3F]" /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: MBBS Destinations */}
          <div className="space-y-3">
            <h4 className="text-white font-['Outfit'] font-bold text-base border-l-2 border-[#E15B3F] pl-2.5">
              MBBS Abroad Hubs
            </h4>
            <ul className="space-y-2 text-sm">
              {DESTINATIONS.map((d) => (
                <li key={d.id}>
                  <button 
                    onClick={() => navigateTo('destination', d.id)}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{d.flag}</span> MBBS in {d.country}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Helpline & Offices */}
          <div className="space-y-3">
            <h4 className="text-white font-['Outfit'] font-bold text-base border-l-2 border-[#E15B3F] pl-2.5">
              Contact & Support
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E15B3F] shrink-0 mt-1" />
                <span>Head Office: BuildX Tower, 5th Floor, Connaught Place, New Delhi - 110001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210 / +91 98123 45678</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:admissions@medicooverseas.com" className="hover:text-white">admissions@medicooverseas.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
              </div>

              <button 
                onClick={onOpenLeadModal}
                className="w-full btn-primary justify-center text-xs py-2.5 mt-2"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyrights & BuildX Attribution */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong>Medico Overseas</strong>. All Rights Reserved. Approved by NMC & WHO directory compliance.
          </div>
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            <span>Designed & Developed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>by <strong className="text-white font-['Outfit']">BuildX Technology</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
