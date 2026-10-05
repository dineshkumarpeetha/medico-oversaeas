import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Building2, 
  BookOpen, 
  MessageSquare, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  CheckCircle, 
  Sparkles, 
  Download, 
  ArrowLeft,
  GraduationCap
} from 'lucide-react';
import { dbService } from '../services/dbService';

export default function AdminDashboard({ onLogout, onBackToSite }) {
  const [activeTab, setActiveTab] = useState('leads'); // leads | destinations | blogs | chatbot
  const [leads, setLeads] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [chatbotLogs, setChatbotLogs] = useState([]);

  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState('All');

  // New Blog State
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: '', category: 'Russia', excerpt: '', content: '' });

  // Edit University Fee State
  const [editingUni, setEditingUni] = useState(null); // { destId, uniIndex, uniData }

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setLeads(dbService.getLeads());
    setDestinations(dbService.getDestinations());
    setBlogs(dbService.getBlogs());
    setChatbotLogs(dbService.getChatbotLogs());
  };

  const handleUpdateLeadStatus = (id, newStatus) => {
    const updated = dbService.updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      const updated = dbService.deleteLead(id);
      setLeads(updated);
    }
  };

  const handleSaveUniFee = (e) => {
    e.preventDefault();
    if (!editingUni) return;
    dbService.updateUniversityFee(editingUni.destId, editingUni.uniIndex, editingUni.uniData);
    setEditingUni(null);
    refreshData();
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();
    dbService.addBlog(newBlog);
    setNewBlog({ title: '', category: 'Russia', excerpt: '', content: '' });
    setShowAddBlogModal(false);
    refreshData();
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Delete this blog post?')) {
      dbService.deleteBlog(id);
      refreshData();
    }
  };

  const exportLeadsCSV = () => {
    const headers = ['ID', 'Name', 'Phone', 'Email', 'City', 'Preferred Country', 'NEET Score', 'Status', 'Date'];
    const rows = leads.map(l => [l.id, l.name, l.phone, l.email, l.city, l.preferredCountry, l.neetScore, l.status, l.date]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `medico_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => {
    const matchStatus = leadStatusFilter === 'All' || l.status === leadStatusFilter;
    const matchSearch = l.name.toLowerCase().includes(leadSearch.toLowerCase()) || 
                        l.phone.includes(leadSearch) || 
                        l.email.toLowerCase().includes(leadSearch.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* Top Admin Header */}
      <header className="bg-gradient-to-r from-[#122443] to-[#1F3864] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E15B3F] p-2 flex items-center justify-center font-bold text-white">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight font-['Outfit'] flex items-center gap-2">
              Medico Overseas Admin <span className="text-[10px] px-2 py-0.5 bg-white/20 rounded font-semibold">BuildX Engine</span>
            </div>
            <div className="text-xs text-slate-300">Logged in as Administrator</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBackToSite}
            className="text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-2 rounded-xl flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> View Live Site
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1 transition-colors shadow-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      {/* Main Admin Layout */}
      <div className="flex-1 container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar Menu */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Control Panel
            </div>
            
            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-xs flex items-center justify-between transition-colors ${
                activeTab === 'leads' ? 'bg-[#1F3864] text-white shadow-md' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#E15B3F]" /> Student Leads ({leads.length})
              </span>
              <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                {leads.filter(l => l.status === 'New').length} New
              </span>
            </button>

            <button
              onClick={() => setActiveTab('destinations')}
              className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-xs flex items-center justify-between transition-colors ${
                activeTab === 'destinations' ? 'bg-[#1F3864] text-white shadow-md' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-emerald-500" /> Universities & Fees CMS
              </span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-xs flex items-center justify-between transition-colors ${
                activeTab === 'blogs' ? 'bg-[#1F3864] text-white shadow-md' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-sky-500" /> Blog Manager ({blogs.length})
              </span>
            </button>

            <button
              onClick={() => setActiveTab('chatbot')}
              className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-xs flex items-center justify-between transition-colors ${
                activeTab === 'chatbot' ? 'bg-[#1F3864] text-white shadow-md' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-amber-500" /> AI Chatbot Logs ({chatbotLogs.length})
              </span>
            </button>
          </div>

          {/* Quick Metrics Badge */}
          <div className="bg-gradient-to-br from-[#122443] to-[#1F3864] text-white p-5 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" /> Live Platform Status
            </div>
            <div className="text-2xl font-extrabold font-['Outfit']">{leads.length} Active Leads</div>
            <div className="text-[11px] text-slate-300">All data automatically persisted in Local Database.</div>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* TAB 1: STUDENT LEADS MANAGER */}
          {activeTab === 'leads' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-[#1F3864] font-['Outfit']">Student Inquiries & Leads</h2>
                  <p className="text-xs text-slate-500">Manage callback requests, NEET scores, and country preferences.</p>
                </div>
                <button
                  onClick={exportLeadsCSV}
                  className="btn-navy text-xs py-2 px-3.5 flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" /> Export CSV
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search by student name, phone or email..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-xl pl-9 pr-3 py-2 outline-none focus:border-[#1F3864]"
                  />
                </div>

                <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  {['All', 'New', 'Contacted', 'Enrolled'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setLeadStatusFilter(st)}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        leadStatusFilter === st ? 'bg-[#1F3864] text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Leads Table */}
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Contact Info</th>
                      <th>Country / NEET</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-8 text-xs text-slate-400">
                          No student leads found.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((l) => (
                        <tr key={l.id}>
                          <td className="font-bold text-[#1F3864]">
                            {l.name}
                            <div className="text-[10px] text-slate-400 font-normal">{l.city}</div>
                          </td>
                          <td className="text-xs">
                            <div className="font-semibold text-slate-800">{l.phone}</div>
                            <div className="text-[10px] text-slate-400">{l.email}</div>
                          </td>
                          <td className="text-xs font-medium">
                            <span className="font-bold text-[#E15B3F]">{l.preferredCountry}</span>
                            <div className="text-[10px] text-slate-500">NEET: {l.neetScore}</div>
                          </td>
                          <td>
                            <select
                              value={l.status}
                              onChange={(e) => handleUpdateLeadStatus(l.id, e.target.value)}
                              className={`text-[11px] font-bold px-2 py-1 rounded-lg border outline-none cursor-pointer ${
                                l.status === 'New' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                                l.status === 'Contacted' ? 'bg-sky-100 text-sky-900 border-sky-300' :
                                'bg-emerald-100 text-emerald-900 border-emerald-300'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Enrolled">Enrolled</option>
                            </select>
                          </td>
                          <td className="text-[11px] text-slate-400">{l.date}</td>
                          <td>
                            <button
                              onClick={() => handleDeleteLead(l.id)}
                              title="Delete Lead"
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: UNIVERSITIES & FEE CMS */}
          {activeTab === 'destinations' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#1F3864] font-['Outfit']">University Fee Structure CMS</h2>
                <p className="text-xs text-slate-500">Edit tuition fees, hostel charges, and package costs for partner medical universities.</p>
              </div>

              <div className="space-y-6">
                {destinations.map((d) => (
                  <div key={d.id} className="border border-slate-200 rounded-2xl p-5 space-y-4 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-[#1F3864] flex items-center gap-2">
                        <span className="text-xl">{d.flag}</span> MBBS in {d.country}
                      </h3>
                      <span className="text-xs font-semibold text-[#E15B3F]">{d.popularUniversities.length} Listed Universities</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {d.popularUniversities.map((uni, uIdx) => (
                        <div key={uIdx} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-[#1F3864]">{uni.name} ({uni.city})</span>
                            <button
                              onClick={() => setEditingUni({ destId: d.id, uniIndex: uIdx, uniData: { ...uni } })}
                              className="text-[11px] text-[#E15B3F] hover:underline font-bold flex items-center gap-0.5"
                            >
                              <Edit3 className="w-3 h-3" /> Edit Fees
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600">
                            <div>Tuition/Yr: <strong>{uni.tuitionFeeYr}</strong></div>
                            <div>Hostel/Yr: <strong>{uni.hostelFeeYr}</strong></div>
                            <div className="col-span-2 text-[#E15B3F] font-bold mt-1">Total Package: {uni.totalPackage}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BLOG MANAGER CMS */}
          {activeTab === 'blogs' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-[#1F3864] font-['Outfit']">Blog Content Management System</h2>
                  <p className="text-xs text-slate-500">Publish, edit or delete blog articles shown on the live website.</p>
                </div>
                <button
                  onClick={() => setShowAddBlogModal(true)}
                  className="btn-primary text-xs py-2.5 px-4 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add New Blog
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogs.map((b) => (
                  <div key={b.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="badge-tag badge-coral text-[9px]">{b.category}</span>
                      <h4 className="font-bold text-xs text-[#1F3864] line-clamp-1">{b.title}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2">{b.excerpt}</p>
                      <div className="text-[10px] text-slate-400 pt-1">{b.date} • {b.author}</div>
                    </div>

                    <button
                      onClick={() => handleDeleteBlog(b.id)}
                      className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CHATBOT LOGS */}
          {activeTab === 'chatbot' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#1F3864] font-['Outfit']">AI Chatbot Query Logs</h2>
                <p className="text-xs text-slate-500">Inspect real questions asked by visitors to the BuildX AI assistant.</p>
              </div>

              <div className="space-y-2">
                {chatbotLogs.map((log) => (
                  <div key={log.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                    <div className="font-semibold text-slate-800">"{log.query}"</div>
                    <span className="text-[10px] text-slate-400">{log.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Edit University Fee Modal */}
      {editingUni && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4">
            <h3 className="text-lg font-bold text-[#1F3864]">Edit University Fee Structure</h3>
            <form onSubmit={handleSaveUniFee} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700">Tuition Fee / Year</label>
                <input
                  type="text"
                  required
                  value={editingUni.uniData.tuitionFeeYr}
                  onChange={(e) => setEditingUni({ ...editingUni, uniData: { ...editingUni.uniData, tuitionFeeYr: e.target.value } })}
                  className="w-full border p-2 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700">Hostel Fee / Year</label>
                <input
                  type="text"
                  required
                  value={editingUni.uniData.hostelFeeYr}
                  onChange={(e) => setEditingUni({ ...editingUni, uniData: { ...editingUni.uniData, hostelFeeYr: e.target.value } })}
                  className="w-full border p-2 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700">Total 6-Year Package</label>
                <input
                  type="text"
                  required
                  value={editingUni.uniData.totalPackage}
                  onChange={(e) => setEditingUni({ ...editingUni, uniData: { ...editingUni.uniData, totalPackage: e.target.value } })}
                  className="w-full border p-2 rounded-lg mt-1"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 btn-primary justify-center text-xs py-2">
                  Save Changes
                </button>
                <button type="button" onClick={() => setEditingUni(null)} className="flex-1 btn-outline justify-center text-xs py-2">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Blog Modal */}
      {showAddBlogModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4">
            <h3 className="text-lg font-bold text-[#1F3864]">Publish New Blog Article</h3>
            <form onSubmit={handleCreateBlog} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700">Title</label>
                <input
                  type="text"
                  required
                  placeholder="Article Title"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  className="w-full border p-2 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700">Category</label>
                <select
                  value={newBlog.category}
                  onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                  className="w-full border p-2 rounded-lg mt-1 bg-white"
                >
                  <option value="Russia">Russia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="FMGE Prep">FMGE Prep</option>
                  <option value="Comparison">Comparison</option>
                  <option value="Admissions">Admissions</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-slate-700">Short Excerpt</label>
                <textarea
                  rows="2"
                  required
                  placeholder="Brief summary..."
                  value={newBlog.excerpt}
                  onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                  className="w-full border p-2 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700">HTML / Text Content</label>
                <textarea
                  rows="4"
                  required
                  placeholder="<p>Detailed article content...</p>"
                  value={newBlog.content}
                  onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                  className="w-full border p-2 rounded-lg mt-1"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 btn-primary justify-center text-xs py-2">
                  Publish Article
                </button>
                <button type="button" onClick={() => setShowAddBlogModal(false)} className="flex-1 btn-outline justify-center text-xs py-2">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
