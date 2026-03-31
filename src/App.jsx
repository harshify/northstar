import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Page Views
import Home from './pages/Home';
import LiftSolutionsPage from './pages/LiftSolutionsPage';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Search from './pages/Search';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import NotFound from './pages/NotFound';
import ServiceAreasPage from './pages/ServiceAreasPage';
import BlogGuidesPage from './pages/BlogGuidesPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions" element={<LiftSolutionsPage />} />
          <Route path="/solutions/:id" element={<ServiceDetail />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/resources/service-areas" element={<ServiceAreasPage />} />
          <Route path="/resources/blog-guides" element={<BlogGuidesPage />} />
          <Route path="/resources/blog-guides/:slug" element={<BlogPostPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
