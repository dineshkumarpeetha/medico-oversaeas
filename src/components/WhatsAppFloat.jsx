import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Medico%20Overseas,%20I%20want%20information%20about%20MBBS%20Abroad%20admissions.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-transform pulse-glow group"
      title="Chat on WhatsApp with Medico Counsellor"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      <span className="absolute left-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:block">
        WhatsApp Live Support
      </span>
    </a>
  );
}
