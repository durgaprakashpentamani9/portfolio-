import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

const pageMeta = {
  '/': ['Durgaprakash Pentamani | AI & ML Developer Portfolio', 'Explore the projects, technical skills, and work of Durgaprakash Pentamani, a final-year Computer Science and Engineering student focused on AI applications and software development.'],
  '/about': ['About | Durgaprakash Pentamani', 'Learn about Durgaprakash Pentamani, his education, interests, and approach to building practical applications.'],
  '/projects': ['Projects | Durgaprakash Pentamani', 'Explore the AI Virtual Interview System and Home Credit LAP Voice Agent projects.'],
  '/skills': ['Skills | Durgaprakash Pentamani', 'Programming, web development, AI, backend, database, and development skills.'],
  '/contact': ['Contact | Durgaprakash Pentamani', 'Contact Durgaprakash Pentamani by email, phone, LinkedIn, or GitHub.'],
};

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const [title, description] = pageMeta[location.pathname] || pageMeta['/'];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [location.pathname]);
  return null;
}

export default function App() {
  return <><RouteEffects /><div className="ambient ambient-one" /><div className="ambient ambient-two" /><Navbar /><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/projects" element={<Projects />} /><Route path="/skills" element={<Skills />} /><Route path="/contact" element={<Contact />} />
    <Route path="*" element={<main className="page-main shell not-found"><p className="eyebrow">404 — PAGE NOT FOUND</p><h1>That page isn’t here.</h1><a className="button" href="/">Back to home</a></main>} />
  </Routes><Footer /></>;
}
