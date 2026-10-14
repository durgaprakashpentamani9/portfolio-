import { ArrowUpRight, Compass, GraduationCap, Lightbulb, Target, Wrench } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import RoleCarousel from '../components/RoleCarousel.jsx';
import { GithubMark, LinkedinMark } from '../components/SocialIcons.jsx';

const interests = ['Applied Artificial Intelligence', 'Machine Learning', 'Agentic AI & LLM applications', 'Software Development', 'Full-Stack Web Development', 'Problem Solving'];

function InfoCard({ icon: Icon, eyebrow, title, children, className = '', delay = 0 }) {
  return <Reveal className={`about-info-card ${className}`} delay={delay}>
    <div className="about-info-heading"><span className="card-icon"><Icon /></span><span className="eyebrow">{eyebrow}</span></div>
    <h2>{title}</h2>
    {children}
  </Reveal>;
}

export default function About() {
  return <main className="page-main shell about-page">
    <div className="about-dashboard">
      <Reveal className="about-profile-card">
        <div className="about-profile-head">
          <div className="about-profile-photo-wrap"><img className="about-profile-photo" src="/profile.jpg" alt="Portrait of Durgaprakash Pentamani" /></div>
          <div className="about-profile-identity">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h1>Durgaprakash<br className="about-name-break" /> Pentamani</h1>
            <div className="about-role"><RoleCarousel /></div>
            <p className="about-tagline">I build AI-powered web apps and voice agents.</p>
          </div>
        </div>
        <div className="about-profile-rule" />
        <p className="about-introduction">I am a final-year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy building practical applications that combine software engineering, web technologies, and AI. My project work includes AI-powered interview practice and voice-agent applications.</p>
        <div className="about-profile-socials">
          <a href="https://github.com/durgaprakashpentamani9" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GithubMark size={17} />GitHub<ArrowUpRight size={13} /></a>
          <a href="https://www.linkedin.com/in/durga-prakash-p-3b2441294" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedinMark size={17} />LinkedIn<ArrowUpRight size={13} /></a>
        </div>
      </Reveal>

      <div className="about-info-grid">
        <InfoCard icon={GraduationCap} eyebrow="EDUCATION" title="B.E. Computer Science & Engineering" className="about-education" delay={70}>
          <p className="about-info-copy">Artificial Intelligence &amp; Machine Learning</p>
          <p className="about-info-copy">Methodist College of Engineering and Technology</p>
          <div className="about-info-meta"><span>2023 — 2027</span><span>CGPA&nbsp; 7.69</span></div>
        </InfoCard>
        <InfoCard icon={Compass} eyebrow="CAREER GOAL" title="Build useful software" className="about-career" delay={130}>
          <p className="about-info-copy">Explore software engineering and applied AI/ML roles, including Python and full-stack development.</p>
        </InfoCard>
        <InfoCard icon={Lightbulb} eyebrow="INTERESTS" title="Areas I’m exploring" className="about-interests" delay={190}>
          <div className="about-interest-list">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
        </InfoCard>
        <InfoCard icon={Target} eyebrow="CURRENT FOCUS" title="Practical AI applications" className="about-focus" delay={250}>
          <p className="about-info-copy">Software development, AI-powered web applications, and voice-agent experiences.</p>
        </InfoCard>
      </div>
    </div>

    <Reveal className="approach-strip about-approach">
      <div className="card-icon"><Wrench /></div>
      <div><p className="eyebrow">MY APPROACH</p><p>Learn the fundamentals, build a working version, test it, and keep refining. I’m interested in the details that make an idea useful and an application dependable.</p></div>
    </Reveal>
  </main>;
}
