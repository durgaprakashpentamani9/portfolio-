import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import RoleCarousel from '../components/RoleCarousel.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';
import { GithubMark, LinkedinMark } from '../components/SocialIcons.jsx';

export default function Home() {
  const skills = ['Python', 'React', 'FastAPI', 'Machine Learning', 'PostgreSQL', 'LLM applications'];
  return <>
    <section className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker"><span className="status-dot" /> HELLO, I'M</p>
        <h1 className="hero-title">Durgaprakash<br /><span>Pentamani</span></h1>
        <div className="hero-role"><span className="role-prefix">I’m a </span><RoleCarousel /></div>
        <p className="hero-tagline">I build AI-powered web apps and voice agents.</p>
        <p className="hero-description">I’m a final-year engineering student interested in practical AI applications, software development, and thoughtful web experiences.</p>
        <div className="hero-actions"><Link className="button" to="/projects">View My Projects <ArrowRight size={17} /></Link><Link className="button button-quiet" to="/contact">Contact Me <ArrowUpRight size={16} /></Link></div>
        <div className="social-row"><a href="https://github.com/durgaprakashpentamani9" target="_blank" rel="noopener noreferrer"><GithubMark size={18} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/durga-prakash-p-3b2441294" target="_blank" rel="noopener noreferrer"><LinkedinMark size={18} /> LinkedIn <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="hero-visual" aria-label="Profile portrait">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="portrait-glow" />
        <div className="portrait-frame"><img src="/profile.jpg" alt="Durgaprakash Pentamani" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.hidden = false; }} /><span className="portrait-fallback" hidden>DP</span></div>
        <div className="floating-note"><Sparkles size={16} /><span><strong>Curious by nature</strong><small>Building through learning</small></span></div>
        <span className="visual-coordinate">17.3850° N&nbsp;&nbsp; 78.4867° E</span>
      </div>
      <a className="scroll-cue" href="#featured"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
    </section>

    <section className="section shell" id="featured"><div className="section-topline"><div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p><h2 className="section-title">Projects in focus<span className="accent">.</span></h2></div><Link className="text-link" to="/projects">All projects <ArrowUpRight size={16} /></Link></div>
      <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
    </section>

    <section className="section shell skills-preview"><Reveal className="skills-preview-copy"><p className="eyebrow"><span className="eyebrow-line" /> TOOLKIT</p><h2 className="section-title">Tools for turning<br />ideas into <span className="accent">real things.</span></h2><p className="body-copy">A growing set of tools and concepts I use to explore software and applied AI.</p><Link className="text-link" to="/skills">Explore my skills <ArrowUpRight size={16} /></Link></Reveal><Reveal className="preview-tags" delay={120}>{skills.map((skill, index) => <span className={`preview-tag preview-tag-${index + 1}`} key={skill}><span className="tag-dot" />{skill}</span>)}</Reveal></section>

    <section className="cta-band shell"><Reveal className="cta-content"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s make a thoughtful<br /><span className="accent">connection.</span></h2><p>For opportunities, project ideas, or a technical conversation, feel free to reach out.</p><Link className="button" to="/contact">Get in touch <ArrowRight size={17} /></Link></Reveal></section>
  </>;
}
