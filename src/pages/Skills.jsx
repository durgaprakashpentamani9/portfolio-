import { Code2, Database, BrainCircuit, Globe2, Server } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../data/skills.js';

const icons = [Code2, Globe2, Server, BrainCircuit, Database];

export default function Skills() {
  return <main className="page-main shell skills-page"><SectionHeading eyebrow="MY TOOLKIT" title={<>Skills I’m<br /><span className="accent">building with.</span></>} description="A practical collection of languages, tools, and concepts connected to my interests and project work." />
    <div className="skills-grid">{skillGroups.map((group, index) => { const Icon = icons[index]; return <Reveal className="skill-card" delay={index * 65} key={group.title}><div className="skill-card-heading"><span className="card-icon"><Icon /></span><span className="skill-index">0{index + 1}</span></div><h2>{group.title}</h2><p className="skill-card-description">{group.description}</p><div className="skill-tag-list">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></Reveal>; })}</div>
  </main>;
}
