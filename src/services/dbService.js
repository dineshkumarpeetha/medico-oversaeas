import { DESTINATIONS } from '../data/destinationsData';
import { BLOGS_DATA } from '../data/blogsData';

const LEADS_STORAGE_KEY = 'medico_buildx_leads_db';
const DESTINATIONS_STORAGE_KEY = 'medico_buildx_destinations_db';
const BLOGS_STORAGE_KEY = 'medico_buildx_blogs_db';
const CHATBOT_LOGS_KEY = 'medico_buildx_chatbot_logs';
const AUTH_KEY = 'medico_buildx_admin_auth';

// Initial Seed Data for Leads
const initialLeads = [
  {
    id: 'lead-101',
    name: 'Priya Sharma',
    phone: '+91 98765 12345',
    email: 'priya.s@gmail.com',
    city: 'Delhi',
    preferredCountry: 'Russia',
    neetScore: '245 Marks',
    message: 'Interested in Kazan Federal University hostel fee structure.',
    status: 'New',
    date: '2026-08-05 10:15 AM'
  },
  {
    id: 'lead-102',
    name: 'Rohan Verma',
    phone: '+91 98123 99887',
    email: 'rohan.v@yahoo.com',
    city: 'Mumbai',
    preferredCountry: 'Georgia',
    neetScore: '310 Marks',
    message: 'Want to know about Tbilisi State Medical University FMGE passing rate.',
    status: 'Contacted',
    date: '2026-08-04 04:30 PM'
  },
  {
    id: 'lead-103',
    name: 'Anish Kumar',
    phone: '+91 97788 44556',
    email: 'akumar@gmail.com',
    city: 'Hyderabad',
    preferredCountry: 'Kyrgyzstan',
    neetScore: '180 Marks',
    message: 'Looking for total 5-year budget under ₹20 Lakhs.',
    status: 'Enrolled',
    date: '2026-08-03 11:20 AM'
  }
];

// Initial Seed Data for Chatbot Logs
const initialChatbotLogs = [
  { id: 'log-1', query: 'What is the fee for MBBS in Russia?', timestamp: '2026-08-05 11:00 AM' },
  { id: 'log-2', query: 'Can I study in Georgia without NEET?', timestamp: '2026-08-05 11:35 AM' },
  { id: 'log-3', query: 'FMGE passing criteria 2026', timestamp: '2026-08-05 12:10 PM' }
];

export const dbService = {
  // Initialize DB if not present
  init: () => {
    if (!localStorage.getItem(LEADS_STORAGE_KEY)) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(initialLeads));
    }
    if (!localStorage.getItem(DESTINATIONS_STORAGE_KEY)) {
      localStorage.setItem(DESTINATIONS_STORAGE_KEY, JSON.stringify(DESTINATIONS));
    }
    if (!localStorage.getItem(BLOGS_STORAGE_KEY)) {
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(BLOGS_DATA));
    }
    if (!localStorage.getItem(CHATBOT_LOGS_KEY)) {
      localStorage.setItem(CHATBOT_LOGS_KEY, JSON.stringify(initialChatbotLogs));
    }
  },

  // LEADS CRUD
  getLeads: () => {
    dbService.init();
    return JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
  },

  addLead: (leadData) => {
    dbService.init();
    const leads = dbService.getLeads();
    const newLead = {
      id: 'lead-' + Date.now(),
      name: leadData.name || 'Anonymous',
      phone: leadData.phone || 'N/A',
      email: leadData.email || 'N/A',
      city: leadData.city || 'N/A',
      preferredCountry: leadData.preferredCountry || 'Not Specified',
      neetScore: leadData.neetScore || 'N/A',
      message: leadData.message || 'Callback Request',
      status: 'New',
      date: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    };
    leads.unshift(newLead);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    return newLead;
  },

  updateLeadStatus: (leadId, newStatus) => {
    const leads = dbService.getLeads();
    const updated = leads.map((l) => l.id === leadId ? { ...l, status: newStatus } : l);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  deleteLead: (leadId) => {
    const leads = dbService.getLeads();
    const filtered = leads.filter((l) => l.id !== leadId);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  },

  // DESTINATIONS CRUD
  getDestinations: () => {
    dbService.init();
    return JSON.parse(localStorage.getItem(DESTINATIONS_STORAGE_KEY) || '[]');
  },

  updateUniversityFee: (destId, uniIndex, updatedUniData) => {
    const destinations = dbService.getDestinations();
    const updated = destinations.map((d) => {
      if (d.id === destId) {
        const unis = [...d.popularUniversities];
        unis[uniIndex] = { ...unis[uniIndex], ...updatedUniData };
        return { ...d, popularUniversities: unis };
      }
      return d;
    });
    localStorage.setItem(DESTINATIONS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  addUniversity: (destId, newUniData) => {
    const destinations = dbService.getDestinations();
    const updated = destinations.map((d) => {
      if (d.id === destId) {
        return {
          ...d,
          popularUniversities: [...d.popularUniversities, newUniData]
        };
      }
      return d;
    });
    localStorage.setItem(DESTINATIONS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  // BLOGS CRUD
  getBlogs: () => {
    dbService.init();
    return JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');
  },

  addBlog: (blogData) => {
    dbService.init();
    const blogs = dbService.getBlogs();
    const newBlog = {
      id: 'blog-' + Date.now(),
      title: blogData.title,
      excerpt: blogData.excerpt,
      category: blogData.category || 'General',
      author: blogData.author || 'Medico Overseas Editor',
      date: new Date().toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: blogData.readTime || '5 min read',
      image: blogData.image || 'https://images.unsplash.com/photo-1513326718677-b964603b136d?auto=format&fit=crop&w=800&q=80',
      content: blogData.content
    };
    blogs.unshift(newBlog);
    localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
    return newBlog;
  },

  deleteBlog: (blogId) => {
    const blogs = dbService.getBlogs();
    const filtered = blogs.filter((b) => b.id !== blogId);
    localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  },

  // CHATBOT LOGS
  getChatbotLogs: () => {
    dbService.init();
    return JSON.parse(localStorage.getItem(CHATBOT_LOGS_KEY) || '[]');
  },

  logChatbotQuery: (query) => {
    dbService.init();
    const logs = dbService.getChatbotLogs();
    logs.unshift({
      id: 'log-' + Date.now(),
      query,
      timestamp: new Date().toLocaleString([], { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem(CHATBOT_LOGS_KEY, JSON.stringify(logs.slice(0, 50))); // Keep last 50 logs
  },

  // AUTHENTICATION
  loginAdmin: (username, password) => {
    if ((username === 'admin' || username === 'buildx') && (password === 'admin123' || password === 'password123')) {
      const authState = { isAuthenticated: true, username, loginTime: new Date().toISOString() };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
      return { success: true, authState };
    }
    return { success: false, message: 'Invalid Admin Username or Password' };
  },

  logoutAdmin: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  checkAdminAuth: () => {
    const auth = localStorage.getItem(AUTH_KEY);
    if (!auth) return false;
    try {
      const parsed = JSON.parse(auth);
      return parsed.isAuthenticated === true;
    } catch {
      return false;
    }
  }
};
