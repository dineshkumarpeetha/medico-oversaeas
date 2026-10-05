import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import LeadModal from './components/LeadModal';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import About from './pages/About';
import DestinationDetail from './pages/DestinationDetail';
import ExamDetail from './pages/ExamDetail';
import BlogListing from './pages/BlogListing';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import { dbService } from './services/dbService';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedDestId, setSelectedDestId] = useState('russia');
  const [selectedExamId, setSelectedExamId] = useState('fmge');
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Theme State ('light' | 'dark')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('medico_theme') || 'light';
  });

  useEffect(() => {
    dbService.init();
    setIsAdminLoggedIn(dbService.checkAdminAuth());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('medico_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSelectCountry = (countryId) => {
    setSelectedDestId(countryId);
    setActivePage('destination');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExam = (examId) => {
    setSelectedExamId(examId);
    setActivePage('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (blogId) => {
    if (blogId === 'all') {
      setActivePage('blogs');
    } else {
      setSelectedBlogId(blogId);
      setActivePage('blogPost');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setActivePage('admin');
  };

  const handleAdminLogout = () => {
    dbService.logoutAdmin();
    setIsAdminLoggedIn(false);
    setActivePage('home');
  };

  // If in Admin view
  if (activePage === 'admin') {
    if (isAdminLoggedIn) {
      return (
        <AdminDashboard
          onLogout={handleAdminLogout}
          onBackToSite={() => setActivePage('home')}
        />
      );
    } else {
      return (
        <AdminLogin
          onLoginSuccess={handleAdminLoginSuccess}
          onBackToSite={() => setActivePage('home')}
        />
      );
    }
  }

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B132B] text-slate-900 dark:text-slate-100 transition-colors ${theme}`}>
      
      {/* Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        selectedDestId={selectedDestId}
        setSelectedDestId={setSelectedDestId}
        selectedExamId={selectedExamId}
        setSelectedExamId={setSelectedExamId}
        onOpenLeadModal={() => setLeadModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home
            onSelectCountry={handleSelectCountry}
            onSelectExam={handleSelectExam}
            onSelectBlog={handleSelectBlog}
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <About onOpenLeadModal={() => setLeadModalOpen(true)} />
        )}

        {activePage === 'destination' && (
          <DestinationDetail
            destId={selectedDestId}
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activePage === 'exam' && (
          <ExamDetail
            examId={selectedExamId}
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activePage === 'blogs' && (
          <BlogListing onSelectBlog={handleSelectBlog} />
        )}

        {activePage === 'blogPost' && (
          <BlogPost
            blogId={selectedBlogId}
            onBack={() => setActivePage('blogs')}
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        setSelectedDestId={setSelectedDestId}
        setSelectedExamId={setSelectedExamId}
        onOpenLeadModal={() => setLeadModalOpen(true)}
      />

      {/* Floating Widgets */}
      <AIChatbot onOpenLeadModal={() => setLeadModalOpen(true)} />
      <WhatsAppFloat />
      <LeadModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} />

    </div>
  );
}
