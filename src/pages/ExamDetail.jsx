import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle2, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { EXAMS_DATA } from '../data/examsData';

export default function ExamDetail({ examId, onOpenLeadModal }) {
  const exam = EXAMS_DATA[examId] || EXAMS_DATA.fmge;
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-16">
        <div className="container mx-auto px-4 space-y-4">
          <span className="badge-tag bg-white/10 text-amber-300 border border-white/20 text-xs">
            {exam.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">{exam.title}</h1>
          <p className="text-slate-200 text-base max-w-3xl leading-relaxed">{exam.shortDescription}</p>
          <div className="pt-2">
            <button onClick={onOpenLeadModal} className="btn-primary text-sm py-3 px-6">
              Enroll in {exam.id.toUpperCase()} Prep Course <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-10">
        
        {/* Eligibility & Overview */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-[#1F3864]">Exam Eligibility & Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exam.eligibility.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pattern & Format */}
        <section className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h2 className="text-2xl font-bold text-[#1F3864]">Exam Pattern & Scoring</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {Object.entries(exam.examPattern).map(([key, val], idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">{key}</span>
                <span className="font-extrabold text-sm text-[#1F3864]">{val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Subject Breakdown if FMGE */}
        {exam.subjectBreakdown && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1F3864]">Subject-wise Question Breakdown</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {exam.subjectBreakdown.map((subj, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-[#E15B3F] font-bold uppercase">{subj.phase}</span>
                  <div className="font-bold text-sm text-[#1F3864] mt-0.5">{subj.subject}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{subj.weightage}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Medico Overseas Coaching Assistance */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-[#1F3864]">How Medico Overseas Helps You Clear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exam.coachingAssistance.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100 text-xs font-semibold text-emerald-950">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-[#1F3864]">Exam FAQs</h2>
          <div className="space-y-3">
            {exam.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-4 bg-slate-50 flex justify-between items-center text-sm font-bold text-[#1F3864]"
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
