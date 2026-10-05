import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Building2, 
  Globe, 
  Users, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import TrustBar from '../components/TrustBar';

export default function About({ onOpenLeadModal }) {
  const teamMembers = [
    {
      name: "Dr. A. K. Sharma",
      role: "Founder & Chief Medical Advisor",
      qual: "MD (Physician), 20+ Years Educational Counselling",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Ritu Verma",
      role: "Academic Director (FMGE Coaching)",
      qual: "MBBS, MD (Pathology), Ex-AIIMS Faculty",
      image: "https://images.unsplash.com/photo-1594824813571-24a69c100417?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sanjay Patel",
      role: "Director - International Relations",
      qual: "MBA (Overseas Education), 15+ Years University Tie-ups",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const branchOffices = [
    {
      city: "New Delhi (Head Office)",
      address: "BuildX Tower, 5th Floor, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43210",
      email: "delhi@medicooverseas.com"
    },
    {
      city: "Mumbai Branch",
      address: "Suite 402, Trade Centre, BKC, Bandra East, Mumbai - 400051",
      phone: "+91 98123 45678",
      email: "mumbai@medicooverseas.com"
    },
    {
      city: "Hyderabad Branch",
      address: "Level 3, Jubilee Heights, Road No. 36, Jubilee Hills, Hyderabad - 500033",
      phone: "+91 98999 11223",
      email: "hyd@medicooverseas.com"
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-16 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-amber-300 text-xs font-semibold rounded-full border border-white/20">
            <Sparkles className="w-3.5 h-3.5" /> 15+ Years Empowering Medical Aspirants
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            About Medico Overseas
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Bridging the gap for Indian NEET aspirants by providing ethical, transparent, and top-quality MBBS abroad counseling & licensing exam preparation.
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <TrustBar />

      {/* Company Story & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4">
            <span className="badge-tag badge-coral">Our Founding Story</span>
            <h2 className="text-3xl font-extrabold text-[#1F3864]">
              Dedicated to Genuine Guidance, Zero Hidden Fees
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded in 2011 by senior medical doctors and education experts, <strong>Medico Overseas</strong> was built to eliminate fraud and misdirection in the study-abroad industry. Over the past 15 years, we have placed more than 5,000 Indian students in WHO & NMC recognized medical universities across Russia, Georgia, Kyrgyzstan, Uzbekistan, Armenia, and Vietnam.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We accompany our students through every stage: from choosing the right university and processing student visas to providing on-campus Indian messes, local guardians, and FMGE/NEXT licensing exam coaching.
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E15B3F]" />
                <span>100% Transparency in Fee Structure & Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E15B3F]" />
                <span>Direct Official University Admission Letters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E15B3F]" />
                <span>Integrated FMGE / NEXT Academic Support</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 space-y-6">
            <h3 className="text-2xl font-bold text-[#1F3864]">Our Core Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To empower every passionate medical student with an affordable, world-class MBBS education that leads to successful licensure as a physician in India or abroad.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <div className="text-2xl font-extrabold text-[#E15B3F] font-['Outfit']">5,000+</div>
                <div className="text-xs text-slate-500 font-medium">Students Enrolled</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <div className="text-2xl font-extrabold text-[#1F3864] font-['Outfit']">100%</div>
                <div className="text-xs text-slate-500 font-medium">Visa Approval Rate</div>
              </div>
            </div>

            <button
              onClick={onOpenLeadModal}
              className="w-full btn-primary justify-center text-sm py-3 font-bold"
            >
              Consult with Senior Director
            </button>
          </div>

        </div>
      </section>

      {/* Senior Leadership Team */}
      <section className="bg-slate-100/70 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="badge-tag badge-navy">Leadership & Advisors</span>
            <h2 className="text-3xl font-extrabold text-[#1F3864]">Meet Our Expert Counsellors</h2>
            <p className="text-xs text-slate-600">
              Our team consists of medical doctors and international admission specialists with decades of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((m, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md card-hover text-center p-6 space-y-3">
                <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-100 shadow-md" />
                <div>
                  <h3 className="font-bold text-lg text-[#1F3864]">{m.name}</h3>
                  <div className="text-xs font-semibold text-[#E15B3F]">{m.role}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{m.qual}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="badge-tag badge-coral">Pan-India Support</span>
          <h2 className="text-3xl font-extrabold text-[#1F3864]">Our Branch Offices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branchOffices.map((office, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#1F3864] font-bold text-base">
                <MapPin className="w-5 h-5 text-[#E15B3F]" /> {office.city}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{office.address}</p>
              <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" /> {office.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-500" /> {office.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
