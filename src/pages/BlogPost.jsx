import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Sparkles, Send } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogsData';

export default function BlogPost({ blogId, onBack, onOpenLeadModal }) {
  const blog = BLOGS_DATA.find((b) => b.id === blogId) || BLOGS_DATA[0];

  return (
    <div className="space-y-10 pb-16">
      
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-12">
        <div className="container mx-auto px-4 space-y-4">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </button>

          <span className="badge-tag bg-white/10 text-white border border-white/20 text-xs">
            {blog.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] max-w-4xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#E15B3F]" /> {blog.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-400" /> {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        
        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <img src={blog.image} alt={blog.title} className="w-full h-80 sm:h-96 object-cover" />
        </div>

        {/* Article Body */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
            className="prose max-w-none space-y-4"
          />
        </div>

        {/* Call to Action Box */}
        <div className="bg-gradient-to-r from-[#122443] to-[#1F3864] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold font-['Outfit']">Have Questions About This Article?</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Speak directly with Dr. A. K. Sharma and our senior admission experts for personalized guidance.
          </p>
          <button
            onClick={onOpenLeadModal}
            className="btn-primary text-sm py-3 px-6"
          >
            Get Free Consultation <Send className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
}
