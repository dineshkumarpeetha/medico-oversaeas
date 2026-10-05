import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';

export default function EligibilityCalc({ onSelectCountry, onOpenLeadModal }) {
  const [pcbScore, setPcbScore] = useState(60);
  const [neetStatus, setNeetStatus] = useState('qualified');
  const [budgetLimit, setBudgetLimit] = useState(25); // in Lakhs

  // Filter matching destinations based on user input
  const getMatches = () => {
    return DESTINATIONS.filter((dest) => {
      const numericFee = parseFloat(dest.avgFeesPerYear.replace(/[^0-9.]/g, '')) * 6;
      return neetStatus === 'qualified' && pcbScore >= 50 && numericFee <= budgetLimit + 5;
    });
  };

  const matches = getMatches();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-[#E15B3F]/10 text-[#E15B3F] flex items-center justify-center font-bold">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <span className="badge-tag badge-coral mb-1">
            <Sparkles className="w-3 h-3" /> Interactive Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F3864] font-['Outfit']">
            Instant MBBS Eligibility & Budget Calculator
          </h3>
        </div>
      </div>

      {/* Input Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* PCB Score Slider */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase">12th PCB Aggregate %</label>
            <span className="text-base font-extrabold text-[#E15B3F]">{pcbScore}%</span>
          </div>
          <input
            type="range"
            min="40"
            max="95"
            value={pcbScore}
            onChange={(e) => setPcbScore(Number(e.target.value))}
            className="w-full accent-[#E15B3F] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>Min 40% (SC/ST)</span>
            <span>Min 50% (Gen)</span>
            <span>95%</span>
          </div>
        </div>

        {/* NEET Status Toggle */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">NEET Qualification</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setNeetStatus('qualified')}
              className={`py-2 text-xs font-semibold rounded-xl border transition-colors ${
                neetStatus === 'qualified' 
                  ? 'bg-[#1F3864] text-white border-[#1F3864]' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Qualified (135+ Marks)
            </button>
            <button
              onClick={() => setNeetStatus('appearing')}
              className={`py-2 text-xs font-semibold rounded-xl border transition-colors ${
                neetStatus === 'appearing' 
                  ? 'bg-[#1F3864] text-white border-[#1F3864]' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Appearing 2026
            </button>
          </div>
        </div>

        {/* Total Budget Slider */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase">Max Target Budget</label>
            <span className="text-base font-extrabold text-emerald-600">₹{budgetLimit} Lakhs</span>
          </div>
          <input
            type="range"
            min="18"
            max="40"
            step="1"
            value={budgetLimit}
            onChange={(e) => setBudgetLimit(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>₹18L (Kyrgyzstan)</span>
            <span>₹40L (Georgia/Russia)</span>
          </div>
        </div>

      </div>

      {/* Results Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Calculated Recommendation</span>
            <div className="text-lg font-bold font-['Outfit'] text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Found {matches.length} Matching Destination Countries
            </div>
          </div>

          <button
            onClick={onOpenLeadModal}
            className="btn-primary text-xs py-2.5 px-4 shrink-0"
          >
            Apply for Seat in Matched Country
          </button>
        </div>

        {/* Country Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-4">
          {DESTINATIONS.map((dest) => {
            const isMatched = matches.some((m) => m.id === dest.id);
            return (
              <div
                key={dest.id}
                onClick={() => isMatched && onSelectCountry(dest.id)}
                className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                  isMatched 
                    ? 'bg-slate-800/90 border-emerald-500/50 hover:border-emerald-400 text-white shadow-md' 
                    : 'bg-slate-900/40 border-slate-800/60 opacity-40 text-slate-500'
                }`}
              >
                <div className="text-2xl mb-1">{dest.flag}</div>
                <div className="font-bold text-xs">{dest.country}</div>
                <div className="text-[10px] text-slate-400 mt-1">{dest.avgFeesPerYear}/yr</div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
