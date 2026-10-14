import { Mail } from 'lucide-react';
import { GithubMark, LinkedinMark } from './SocialIcons.jsx';

export default function Footer() {
  return <footer className="footer"><div className="shell footer-inner">
    <div><a className="brand footer-brand" href="/"><img className="brand-photo" src="/profile.jpg" alt="Durgaprakash Pentamani profile photo" /><span>Durgaprakash Pentamani</span></a><p>Building practical AI applications and web experiences.</p></div>
    <div className="footer-socials" aria-label="Social links">
      <a href="https://github.com/durgaprakashpentamani9" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark /></a>
      <a href="https://www.linkedin.com/in/durga-prakash-p-3b2441294" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinMark /></a>
      <a href="mailto:pentamanidurgaprakash@gmail.com" aria-label="Email"><Mail /></a>
    </div>
    <div className="copyright">© {new Date().getFullYear()} Durgaprakash Pentamani</div>
  </div></footer>;
}
