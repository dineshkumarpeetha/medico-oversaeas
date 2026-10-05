import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, User, ChevronRight, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogsData';

export default function BlogListing({ onSelectBlog }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Russia', 'FMGE Prep', 'Comparison', 'Admissions'];

  const filteredBlogs = BLOGS_DATA.filter((b) => {
    const matchesCat = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white py-14 text-center">
        <div className="container mx-auto px-4 space-y-3">
          <span className="badge-tag bg-white/10 text-amber-300 border border-white/20 text-xs">
            <Sparkles className="w-3.5 h-3.5" /> Official Knowledge Base
          </span>
          <h1 className="text-4xl font-extrabold font-['Outfit']">MBBS Abroad Articles & Guides</h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Read expert insights on university cut-offs, NMC rules, FMGE licensing prep, and country comparisons.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-8">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search blog topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 outline-none focus:border-[#1F3864]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-colors whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-[#1F3864] text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            No articles found matching "{searchTerm}". Try another search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => onSelectBlog(blog.id)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md card-hover cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="badge-tag badge-coral text-[10px]">{blog.category}</span>
                      <span className="text-slate-400 text-[11px] font-semibold">{blog.readTime}</span>
                    </div>

                    <h3 className="font-bold text-base text-[#1F3864] hover:text-[#E15B3F] transition-colors font-['Outfit']">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#E15B3F]" />
                    <span className="truncate max-w-[140px]">{blog.author.split('(')[0]}</span>
                  </div>
                  <span className="text-[#1F3864] font-bold flex items-center gap-1">
                    Read <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
