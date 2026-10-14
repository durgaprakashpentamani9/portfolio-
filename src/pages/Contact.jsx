import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { GithubMark, LinkedinMark } from '../components/SocialIcons.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const contacts = [
  { label: 'Email', value: 'pentamanidurgaprakash@gmail.com', href: 'mailto:pentamanidurgaprakash@gmail.com', Icon: Mail },
  { label: 'Phone', value: '8096912580', href: 'tel:8096912580', Icon: Phone },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/durga-prakash-p-3b2441294', Icon: LinkedinMark, external: true },
  { label: 'GitHub', value: 'Explore GitHub profile', href: 'https://github.com/durgaprakashpentamani9', Icon: GithubMark, external: true },
];

export default function Contact() {
  return <main className="page-main shell contact-page"><SectionHeading eyebrow="GET IN TOUCH" title={<>Let’s<br /><span className="accent">connect.</span></>} description="Have an opportunity, project idea, or technical discussion in mind? Feel free to get in touch." />
    <div className="contact-layout"><Reveal className="contact-card"><p className="eyebrow">CONTACT DETAILS</p><h2>Find me here.</h2><div className="contact-list">{contacts.map(({ label, value, href, Icon, external }) => <a className="contact-item" key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}><span className="contact-icon"><Icon size={19} /></span><span className="contact-text"><small>{label}</small><strong>{value}</strong></span><ArrowUpRight size={16} className="contact-arrow" /></a>)}</div><div className="contact-location"><MapPin size={16} /><span>Hyderabad, India</span></div></Reveal>
      <Reveal className="contact-note" delay={100}><div className="contact-orb"><Mail size={28} /></div><p className="eyebrow">START A CONVERSATION</p><h2>One good message<br />can start <span className="accent">something.</span></h2><p className="body-copy">Email is the best way to reach me. Your email app will open with my address ready.</p><a className="button" href="mailto:pentamanidurgaprakash@gmail.com?subject=Hello%20Durgaprakash">Write an email <ArrowUpRight size={16} /></a></Reveal>
    </div>
  </main>;
}
