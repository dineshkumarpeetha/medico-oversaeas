import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText, 
  GraduationCap, 
  HelpCircle, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Globe, 
  ArrowRight,
  Sun,
  ChevronDown
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';

export default function DestinationDetail({ destId, onOpenLeadModal }) {
  const dest = DESTINATIONS.find((d) => d.id === destId) || DESTINATIONS[0];
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Country Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={dest.heroImage} alt={dest.country} className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{dest.flag}</span>
            <span className="badge-tag bg-white/10 text-white border border-white/20 text-xs">
              Official 2026 Admissions Guide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            MBBS in {dest.country}
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            {dest.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Duration</div>
              <div className="font-bold text-sm text-white">{dest.duration}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Avg Tuition / Yr</div>
              <div className="font-bold text-sm text-amber-400">{dest.avgFeesPerYear}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Medium</div>
              <div className="font-bold text-sm text-emerald-400">{dest.medium}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <div className="text-[10px] text-slate-300 uppercase font-semibold">NEET Requirement</div>
              <div className="font-bold text-sm text-sky-400">{dest.neetRequired}</div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onOpenLeadModal}
              className="btn-primary text-sm py-3 px-6 shadow-lg"
            >
              Apply for MBBS in {dest.country} <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Sub-Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 flex gap-4 overflow-x-auto no-scrollbar py-2 text-xs font-bold">
          {[
            { id: 'overview', label: '1. Overview & Benefits' },
            { id: 'eligibility', label: '2. Eligibility Criteria' },
            { id: 'universities', label: '3. Top Universities & Fees' },
            { id: 'admission', label: '4. Admission & Visa Process' },
            { id: 'living', label: '5. Living & Climate' },
            { id: 'faqs', label: '6. Country FAQs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 py-2 px-3.5 rounded-xl transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#1F3864] text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Containers */}
      <div className="container mx-auto px-4 space-y-12">
        
        {/* TAB 1: OVERVIEW */}
        <section id="overview" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <span className="badge-tag badge-coral">Why Choose {dest.country}?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
            Key Benefits of Studying MBBS in {dest.country}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {dest.shortBlurb}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {dest.whyStudy.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TAB 2: ELIGIBILITY */}
        <section id="eligibility" className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
          <div className="flex items-center gap-2">
            <span className="badge-tag badge-navy">Mandatory Criteria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
            Admission Eligibility for Indian Aspirants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Minimum Age</span>
              <div className="font-extrabold text-sm text-[#1F3864]">{dest.eligibility.minAge}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">12th PCB Aggregate</span>
              <div className="font-extrabold text-sm text-[#E15B3F]">{dest.eligibility.pcbScore}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">NEET Exam</span>
              <div className="font-extrabold text-sm text-emerald-600">{dest.eligibility.neetScore}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Passport Status</span>
              <div className="font-extrabold text-sm text-sky-600">{dest.eligibility.passport}</div>
            </div>
          </div>
        </section>

        {/* TAB 3: POPULAR UNIVERSITIES & FEE STRUCTURE TABLE */}
        <section id="universities" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <span className="badge-tag badge-coral">Top Partner Institutes</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                Recognized Medical Universities & Fee Structure
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              ⚡ 100% NMC Gazette & WHO Compliance
            </div>
          </div>

          {/* Interactive Fee Breakdown Table */}
          <div className="table-responsive bg-white shadow-md">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Location</th>
                  <th>Tuition Fee / Year</th>
                  <th>Hostel / Year</th>
                  <th>Mess / Year</th>
                  <th>Total 6-Yr Package</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dest.popularUniversities.map((uni, idx) => (
                  <tr key={idx}>
                    <td className="font-bold text-[#1F3864]">
                      {uni.name}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold">NMC Approved</span>
                        <span className="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 rounded font-semibold">WHO Directory</span>
                      </div>
                    </td>
                    <td>{uni.city} (Est. {uni.established})</td>
                    <td className="font-semibold text-slate-800">{uni.tuitionFeeYr}</td>
                    <td>{uni.hostelFeeYr}</td>
                    <td>{uni.messFeeYr}</td>
                    <td className="font-extrabold text-[#E15B3F]">{uni.totalPackage}</td>
                    <td>
                      <button
                        onClick={onOpenLeadModal}
                        className="bg-[#1F3864] hover:bg-[#E15B3F] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors"
                      >
                        Reserve Seat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TAB 4: ADMISSION & VISA PROCESS */}
        <section id="admission" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <span className="badge-tag badge-navy">Step-by-Step</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
            Admission Roadmap & Document Checklist
          </h2>

          <div className="space-y-3">
            {dest.admissionSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-[#1F3864] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{step}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Visa Support Note:</strong> {dest.visaProcedure}
          </div>
        </section>

        {/* TAB 5: LIVING & CLIMATE */}
        <section id="living" className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
            <Sun className="w-5 h-5" /> Climate & Student Life
          </div>
          <h2 className="text-2xl font-bold text-[#1F3864]">Student Lifestyle & Climate</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {dest.climateAndLiving}
          </p>
        </section>

        {/* TAB 6: FAQS */}
        <section id="faqs" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl font-bold text-[#1F3864]">Frequently Asked Questions ({dest.country})</h2>

          <div className="space-y-3">
            {dest.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center text-sm font-bold text-[#1F3864]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="p-4 text-xs text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
