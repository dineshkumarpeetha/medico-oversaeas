import React from 'react';
import { Award, GraduationCap, Building2, Globe, ShieldCheck, Users } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+ Years", color: "text-[#E15B3F]" },
    { icon: Users, label: "Students Placed", value: "5,000+", color: "text-amber-500" },
    { icon: Building2, label: "NMC & WHO Universities", value: "50+ Partner Unis", color: "text-emerald-500" },
    { icon: Globe, label: "Study Countries", value: "6 Destinations", color: "text-sky-500" },
    { icon: ShieldCheck, label: "Visa Success Rate", value: "100% Guaranteed", color: "text-[#1F3864]" }
  ];

  return (
    <section className="bg-white py-8 border-y border-slate-200/80 shadow-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                <div className={`w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-2 ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#1F3864] font-['Outfit']">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
