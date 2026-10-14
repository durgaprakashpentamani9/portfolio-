import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return <main className="page-main shell projects-page"><SectionHeading eyebrow="SELECTED WORK" title={<>Projects &amp; Applications<span className="accent">.</span></>} description="Building practical AI applications and web experiences." />
    <div className="project-grid project-grid-page">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} showThumbnail />)}</div>
    <div className="page-bottom-note"><span>Have a question about one of these projects?</span><Link className="text-link" to="/contact">Let’s talk <ArrowRight size={15} /></Link></div>
  </main>;
}
