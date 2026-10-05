import React, { useState } from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Send, 
  Star, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  Building2,
  DollarSign,
  FileCheck
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { BLOGS_DATA } from '../data/blogsData';
import { dbService } from '../services/dbService';
import EligibilityCalc from '../components/EligibilityCalc';
import TrustBar from '../components/TrustBar';

export default function Home({ onSelectCountry, onSelectExam, onSelectBlog, onOpenLeadModal }) {
  const [heroForm, setHeroForm] = useState({
    name: '',
    phone: '',
    preferredCountry: 'Russia',
    neetScore: ''
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    dbService.addLead({
      name: heroForm.name,
      phone: heroForm.phone,
      preferredCountry: heroForm.preferredCountry,
      neetScore: heroForm.neetScore,
      message: 'Hero eligibility check form submission'
    });
    setHeroSubmitted(true);
    setTimeout(() => {
      setHeroSubmitted(false);
      setHeroForm({ name: '', phone: '', preferredCountry: 'Russia', neetScore: '' });
    }, 3000);
  };

  return (
    <div className="space-y-16 pb-12">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative bg-gradient-to-br from-[#122443] via-[#1F3864] to-[#0B162C] text-white pt-12 pb-20 overflow-hidden">
        {/* Background Accent Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E15B3F]/15 rounded-full filter blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl -z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-white">BuildX Powered Official Platform</span>
                <span className="text-[#E15B3F] font-bold">2026 Batch Open</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Outfit'] leading-tight">
                Your Trusted Path to an <br className="hidden sm:inline" />
                <span className="text-gradient-coral">MBBS Degree Abroad</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Secure direct admission in top <strong>NMC & WHO recognized</strong> state medical universities in Russia, Georgia, Kyrgyzstan, Uzbekistan, Armenia, and Vietnam with 100% English medium curriculum & FMGE prep.
              </p>

              {/* Trust Badges Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>No Capitation or Donation Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>100% English Medium Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Integrated FMGE / NEXT Test Prep</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>100% Student Visa Guarantee</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenLeadModal}
                  className="btn-primary text-base py-3.5 px-7 shadow-xl font-bold"
                >
                  Get Free Counselling <ArrowRight className="w-5 h-5 ml-1" />
                </button>

                <a 
                  href="tel:+919876543210"
                  className="btn-outline text-white border-white/40 hover:bg-white/10 hover:border-white text-base py-3.5 px-6"
                >
                  Talk to Medical Expert
                </a>
              </div>

            </div>

            {/* Hero Right: Lead Capture Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
                <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-[#E15B3F] to-[#C9472C] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  Fast Seat Reservation 2026
                </div>

                {heroSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1F3864]">Application Submitted!</h3>
                    <p className="text-xs text-slate-600">
                      Our Senior Counsellor will call you shortly on <strong>{heroForm.phone}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    <div className="text-left pb-2">
                      <h3 className="text-xl font-extrabold text-[#1F3864] font-['Outfit']">
                        Check Your Admission Eligibility
                      </h3>
                      <p className="text-xs text-slate-500">
                        Get instant university cut-offs & fee breakdown PDFs
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Student's Full Name"
                        value={heroForm.name}
                        onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Calling Number"
                        value={heroForm.phone}
                        onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Country</label>
                        <select
                          value={heroForm.preferredCountry}
                          onChange={(e) => setHeroForm({ ...heroForm, preferredCountry: e.target.value })}
                          className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#1F3864] bg-white"
                        >
                          {DESTINATIONS.map((d) => (
                            <option key={d.id} value={d.country}>{d.flag} {d.country}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">NEET Status</label>
                        <input
                          type="text"
                          placeholder="Score or Qualified"
                          value={heroForm.neetScore}
                          onChange={(e) => setHeroForm({ ...heroForm, neetScore: e.target.value })}
                          className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#1F3864]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary justify-center text-sm py-3 font-bold shadow-lg mt-2"
                    >
                      Book Free Callback <Send className="w-4 h-4 ml-1" />
                    </button>

                    <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Powered by BuildX Secured Portal
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <TrustBar />

      {/* SECTION 3: WHY STUDY MBBS ABROAD */}
      <section className="container mx-auto px-4 pt-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="badge-tag badge-coral">
            <Sparkles className="w-3 h-3" /> Smart Career Choice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864]">
            Why Choose MBBS Abroad with Medico Overseas?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            With over 20 Lakh students appearing for NEET in India against limited government seats, studying medicine abroad offers an affordable, world-class gateway to becoming a doctor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1F3864]">Affordable Tuition Fees</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete your entire 6-year medical degree starting at just ₹18 Lakhs total, far lower than private medical colleges in India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E15B3F]/10 text-[#E15B3F] flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1F3864]">NMC & WHO Approved</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Degrees are globally recognized by World Health Organization (WHO), ECFMG (USA), GMC (UK), and National Medical Commission (India).
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1F3864]">100% English Medium</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lectures, clinical rotations, exams, and textbooks are entirely in English to prepare you for global medical practice.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1F3864]">FMGE / NEXT Prep</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Medico Overseas provides dedicated online test series and faculty mentorship to ensure high first-attempt passing rates in India.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DESTINATIONS PREVIEW GRID */}
      <section className="bg-slate-100/70 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="badge-tag badge-navy mb-2">Global Medical Hubs</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864]">
                Explore Top MBBS Study Destinations
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Select a country below to inspect fee structures, university lists, eligibility criteria, and visa requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <div 
                key={dest.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dest.heroImage} 
                      alt={dest.country} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-md">
                      <span>{dest.flag}</span> MBBS in {dest.country}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#1F3864] text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                      {dest.duration}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#1F3864] line-clamp-1">{dest.tagline}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {dest.shortBlurb}
                    </p>

                    {/* Stats pills */}
                    <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Avg Tuition/Yr</span>
                        <span className="font-extrabold text-[#E15B3F]">{dest.avgFeesPerYear}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">NEET Cutoff</span>
                        <span className="font-bold text-slate-700">{dest.academicCutoff}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectCountry(dest.id)}
                    className="w-full btn-outline justify-center text-xs py-2.5"
                  >
                    View Universities & Fees <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE ELIGIBILITY CALCULATOR */}
      <section className="container mx-auto px-4">
        <EligibilityCalc 
          onSelectCountry={onSelectCountry} 
          onOpenLeadModal={onOpenLeadModal} 
        />
      </section>

      {/* SECTION 6: ADMISSION ROADMAP (5 STEPS) */}
      <section className="container mx-auto px-4 pt-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="badge-tag badge-coral">Hassle-Free Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864]">
            5-Step Seamless Admission Journey
          </h2>
          <p className="text-slate-600 text-sm">
            From initial counselling to your dormitory check-in abroad, Medico Overseas manages 100% of your documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            { step: "01", title: "Free Counseling", desc: "Evaluate options matching your budget & NEET score." },
            { step: "02", title: "Doc Verification", desc: "Submit 10th/12th marksheets & passport for verification." },
            { step: "03", title: "Offer Letter", desc: "Receive official university admission letter within 48 hours." },
            { step: "04", title: "Visa Processing", desc: "Complete Ministry apostille, invitation & embassy visa stamping." },
            { step: "05", title: "Departure", desc: "Travel in Medico student groups with airport pick-up & hostel setup." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#1F3864] text-white font-extrabold text-sm flex items-center justify-center mx-auto">
                {item.step}
              </div>
              <h3 className="font-bold text-sm text-[#1F3864] font-['Outfit']">{item.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: EXAMS TEASER (FMGE & NMAT) */}
      <section className="bg-gradient-to-r from-[#122443] to-[#1F3864] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-400/30">
              Exam Coaching Center
            </span>
            <h2 className="text-3xl font-extrabold font-['Outfit']">
              Licensing & Entrance Exam Guidance
            </h2>
            <p className="text-xs text-slate-300">
              Medico Overseas prepares you for medical licensing exams to practice legally in India and globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FMGE Box */}
            <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-start">
                <span className="badge-tag badge-coral text-[10px]">Screening Test India</span>
                <BookOpen className="w-6 h-6 text-[#E15B3F]" />
              </div>
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">FMGE / NEXT Exam Guide</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Learn exam patterns, subject-wise weightage (Medicine, Surgery, Ob-Gyn), passing criteria (150/300), and Medico Overseas online coaching modules.
              </p>
              <button
                onClick={() => onSelectExam('fmge')}
                className="btn-primary text-xs py-2.5 px-4"
              >
                Read FMGE Syllabus & Coaching Details
              </button>
            </div>

            {/* NMAT Box */}
            <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-start">
                <span className="badge-tag bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">Medical Aptitude</span>
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">NMAT Exam Guide</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Detailed breakdown of National Medical Admission Test for Asian medical universities, prep workbooks, speed techniques, and scoring percentile rules.
              </p>
              <button
                onClick={() => onSelectExam('nmat')}
                className="btn-outline text-white border-white/30 hover:bg-white/10 text-xs py-2.5 px-4"
              >
                Read NMAT Exam Pattern
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS CAROUSEL */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="badge-tag badge-coral">Student Stories</span>
          <h2 className="text-3xl font-extrabold text-[#1F3864]">
            Hear from Our Doctors Graduated Abroad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Rohan Malhotra",
              uni: "Kazan Federal University, Russia",
              year: "2024 Graduate (Cleared FMGE in 1st Attempt)",
              text: "Medico Overseas handled everything from my university admission to visa and hostel setup. The online FMGE coaching during my 5th year helped me clear the NBE exam with 192 marks on my very first try!",
              rating: 5
            },
            {
              name: "Dr. Ananya Reddy",
              uni: "Tbilisi State Medical University, Georgia",
              year: "2025 Graduate",
              text: "As a girl student moving abroad, safety was my parents' main priority. Medico Overseas provided dedicated girls' hostels with Indian food and local guardians. Highly recommended consultancy!",
              rating: 5
            },
            {
              name: "Dr. Vikas Yadav",
              uni: "Osh State Medical University, Kyrgyzstan",
              year: "2023 Graduate",
              text: "I was looking for an affordable budget MBBS under ₹20 Lakhs. Medico Overseas gave me genuine fee structures with zero hidden charges. Now I am practicing in Delhi!",
              rating: 5
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="font-bold text-sm text-[#1F3864]">{item.name}</div>
                <div className="text-[11px] text-[#E15B3F] font-semibold">{item.uni}</div>
                <div className="text-[10px] text-slate-400">{item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: LATEST BLOG HIGHLIGHTS */}
      <section className="bg-slate-100/60 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="badge-tag badge-navy mb-1">Knowledge Hub</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3864]">Latest Articles & Guides</h2>
            </div>
            <button onClick={() => onSelectBlog('all')} className="btn-outline text-xs py-2 px-4">
              View All Blogs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOGS_DATA.slice(0, 3).map((blog) => (
              <div
                key={blog.id}
                onClick={() => onSelectBlog(blog.id)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm card-hover cursor-pointer"
              >
                <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-[#E15B3F] font-bold uppercase">{blog.category}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#1F3864] line-clamp-2 hover:text-[#E15B3F] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit']">
              Ready to Begin Your Medical Career Abroad?
            </h2>
            <p className="text-sm text-slate-300">
              Speak with our senior medical study counsellors today. We offer 100% free guidance, document processing, and direct university seat reservation for 2026.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenLeadModal}
                className="btn-primary text-base py-3.5 px-8 font-bold"
              >
                Apply for Free Counselling <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
