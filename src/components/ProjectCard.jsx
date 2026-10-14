import { ArrowUpRight, AudioLines, Mic, ScanFace, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { GithubMark } from './SocialIcons.jsx';

function ProjectThumbnail({ project }) {
  const isVoice = project.thumbnail === 'voice-agent';
  return <div className={`project-thumbnail ${isVoice ? 'project-thumbnail-voice' : 'project-thumbnail-interview'}`} role="img" aria-label={`Abstract concept visual for ${project.name}`}>
    <div className="thumbnail-caption"><span>{isVoice ? 'VOICE AI' : 'AI INTERVIEW'}</span><span>CONCEPT VISUAL</span></div>
    {isVoice ? <div className="voice-art" aria-hidden="true">
      <div className="voice-orbit voice-orbit-one" /><div className="voice-orbit voice-orbit-two" />
      <div className="voice-mic"><Mic size={32} strokeWidth={1.4} /></div>
      <AudioLines className="voice-audio-lines" size={112} strokeWidth={1} />
      <span className="voice-art-label">CONVERSATIONAL AI</span>
    </div> : <div className="interview-art" aria-hidden="true">
      <div className="interview-orbit" />
      <div className="interview-scan"><ScanFace size={77} strokeWidth={1.15} /></div>
      <div className="interview-spark"><Sparkles size={19} /></div>
      <span className="interview-art-label">PRACTICE · REFLECT · IMPROVE</span>
    </div>}
  </div>;
}

export default function ProjectCard({ project, index = 0, showThumbnail = false }) {
  return <Reveal className={`project-card ${showThumbnail ? 'has-thumbnail' : ''}`} delay={index * 120}>
    {showThumbnail && <ProjectThumbnail project={project} />}
    <div className="project-card-content">
      <div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-symbol" aria-hidden="true">{project.icon}</span></div>
      <p className="eyebrow project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">{project.technologies.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        <a className="button button-outline" href={project.github} target="_blank" rel="noopener noreferrer"><GithubMark size={16} /> Repository <ArrowUpRight size={15} /></a>
        <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">{project.demoLabel}<ArrowUpRight size={15} /></a>
      </div>
    </div>
  </Reveal>;
}
