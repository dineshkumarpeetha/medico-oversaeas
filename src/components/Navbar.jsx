import React, { useState } from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Globe, 
  ChevronDown, 
  PhoneCall, 
  Menu, 
  X, 
  Sparkles, 
  BookOpen, 
  Award, 
  Sun, 
  Moon
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { InstagramIcon, YoutubeIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  selectedDestId, 
  setSelectedDestId, 
  selectedExamId, 
  setSelectedExamId, 
  onOpenLeadModal,
  theme,
  toggleTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [examDropdownOpen, setExamDropdownOpen] = useState(false);

  const INSTAGRAM_URL = "https://www.instagram.com/medico_overseas_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const YOUTUBE_URL = "https://www.youtube.com/@MedicoAbroad01";

  const navigateTo = (page, param = null) => {
    if (page === 'destination' && param) {
      setSelectedDestId(param);
    }
    if (page === 'exam' && param) {
      setSelectedExamId(param);
    }
    setActivePage(page);
    setMobileMenuOpen(false);
    setDestDropdownOpen(false);
    setExamDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#121E36]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
      
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-1.5 px-4 text-xs font-medium">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Left info & social icons */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" /> 100% NMC & WHO Approved Universities
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            
            {/* Social Media Links */}
            <div className="hidden md:flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" title="Instagram" className="text-slate-300 hover:text-pink-400 transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" title="YouTube" className="text-slate-300 hover:text-red-500 transition-colors">
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="text-slate-300 hover:text-sky-400 transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" className="text-slate-300 hover:text-blue-500 transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right contacts, theme toggle & admin button */}
          <div className="flex items-center gap-3">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <PhoneCall className="w-3 h-3 text-[#E15B3F]" /> +91 98765 43210
            </a>

            {/* Dark/Light Theme Toggle */}
            <button 
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors flex items-center gap-1 text-[11px] px-2"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-200" />}
              <span className="hidden sm:inline font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button 
              onClick={() => navigateTo('admin')}
              className="flex items-center gap-1 px-2.5 py-0.5 bg-[#E15B3F] hover:bg-[#C9472C] text-white rounded text-[11px] font-bold transition-colors shadow-sm"
            >
              Admin Portal
            </button>

            <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 bg-slate-800/80 rounded text-[10px] text-slate-300 border border-slate-700">
              <Sparkles className="w-3 h-3 text-amber-400" /> Powered by <strong className="text-white ml-0.5">BuildX</strong>
            </div>
          </div>

        </div>
      </div>

      {/* Main Nav Container */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo (Medico Overseas + BuildX Badge) */}
        <div 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1F3864] to-[#122443] p-2 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform relative">
            <div className="relative flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#E15B3F]" />
              <Stethoscope className="w-4 h-4 text-amber-400 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-[#E15B3F] font-['Outfit']">Medico</span>
              <span className="font-extrabold text-xl tracking-tight text-[#1F3864] dark:text-white font-['Outfit']">Overseas</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              <span>MBBS Abroad Consultancy</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#E15B3F] font-semibold">BuildX Platform</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <button 
            onClick={() => navigateTo('home')}
            className={`font-semibold text-sm transition-colors py-1 ${activePage === 'home' ? 'text-[#E15B3F] border-b-2 border-[#E15B3F]' : 'text-slate-700 dark:text-slate-200 hover:text-[#1F3864]'}`}
          >
            Home
          </button>

          <button 
            onClick={() => navigateTo('about')}
            className={`font-semibold text-sm transition-colors py-1 ${activePage === 'about' ? 'text-[#E15B3F] border-b-2 border-[#E15B3F]' : 'text-slate-700 dark:text-slate-200 hover:text-[#1F3864]'}`}
          >
            About Us
          </button>

          {/* Destinations Dropdown */}
          <div className="relative" onMouseLeave={() => setDestDropdownOpen(false)}>
            <button 
              onMouseEnter={() => setDestDropdownOpen(true)}
              onClick={() => setDestDropdownOpen(!destDropdownOpen)}
              className={`font-semibold text-sm flex items-center gap-1 py-1 transition-colors ${activePage === 'destination' ? 'text-[#E15B3F]' : 'text-slate-700 dark:text-slate-200 hover:text-[#1F3864]'}`}
            >
              Destinations <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {destDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white dark:bg-[#1C2541] rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Top Medical Countries
                </div>
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => navigateTo('destination', dest.id)}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between text-sm text-slate-700 dark:text-slate-200 hover:text-[#1F3864] transition-colors"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <span className="text-lg">{dest.flag}</span> MBBS in {dest.country}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-300 font-semibold">{dest.duration.split(' ')[0]} Yrs</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Exams Dropdown */}
          <div className="relative" onMouseLeave={() => setExamDropdownOpen(false)}>
            <button 
              onMouseEnter={() => setExamDropdownOpen(true)}
              onClick={() => setExamDropdownOpen(!examDropdownOpen)}
              className={`font-semibold text-sm flex items-center gap-1 py-1 transition-colors ${activePage === 'exam' ? 'text-[#E15B3F]' : 'text-slate-700 dark:text-slate-200 hover:text-[#1F3864]'}`}
            >
              Exams <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {examDropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white dark:bg-[#1C2541] rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <button
                  onClick={() => navigateTo('exam', 'fmge')}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 hover:text-[#1F3864] font-medium"
                >
                  <BookOpen className="w-4 h-4 text-[#E15B3F]" /> FMGE / NEXT Exam
                </button>
                <button
                  onClick={() => navigateTo('exam', 'nmat')}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 hover:text-[#1F3864] font-medium"
                >
                  <Award className="w-4 h-4 text-amber-500" /> NMAT Exam
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => navigateTo('blogs')}
            className={`font-semibold text-sm transition-colors py-1 ${activePage === 'blogs' || activePage === 'blogPost' ? 'text-[#E15B3F] border-b-2 border-[#E15B3F]' : 'text-slate-700 dark:text-slate-200 hover:text-[#1F3864]'}`}
          >
            Blogs
          </button>

          <button 
            onClick={() => navigateTo('contact')}
            className={`font-semibold text-sm transition-colors py-1 ${activePage === 'contact' ? 'text-[#E15B3F] border-b-2 border-[#E15B3F]' : 'text-slate-700 dark:text-slate-200 hover:text-[#1F3864]'}`}
          >
            Contact
          </button>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenLeadModal}
            className="hidden sm:inline-flex btn-primary text-sm font-semibold shadow-md py-2.5 px-5"
          >
            Get Free Counselling
          </button>

          {/* Mobile menu icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#121E36] border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 animate-in slide-in-from-top-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-400">Social Connect</span>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><InstagramIcon className="w-4 h-4 hover:text-pink-500" /></a>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"><YoutubeIcon className="w-4 h-4 hover:text-red-500" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><LinkedinIcon className="w-4 h-4 hover:text-sky-500" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FacebookIcon className="w-4 h-4 hover:text-blue-500" /></a>
            </div>
          </div>

          <button 
            onClick={() => navigateTo('home')}
            className="block w-full text-left font-semibold text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('about')}
            className="block w-full text-left font-semibold text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
          >
            About Us
          </button>
          
          <div className="py-1">
            <div className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">Destinations</div>
            <div className="grid grid-cols-2 gap-2">
              {DESTINATIONS.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => navigateTo('destination', dest.id)}
                  className="text-left px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5"
                >
                  <span>{dest.flag}</span> {dest.country}
                </button>
              ))}
            </div>
          </div>

          <div className="py-1">
            <div className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">Exams</div>
            <div className="flex gap-2">
              <button
                onClick={() => navigateTo('exam', 'fmge')}
                className="flex-1 text-left px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200"
              >
                FMGE / NEXT
              </button>
              <button
                onClick={() => navigateTo('exam', 'nmat')}
                className="flex-1 text-left px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200"
              >
                NMAT Exam
              </button>
            </div>
          </div>

          <button 
            onClick={() => navigateTo('blogs')}
            className="block w-full text-left font-semibold text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
          >
            Blogs
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className="block w-full text-left font-semibold text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
          >
            Contact Us
          </button>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLeadModal(); }}
            className="w-full btn-primary justify-center text-sm py-3 mt-2"
          >
            Get Free Counselling
          </button>
        </div>
      )}
    </header>
  );
}
