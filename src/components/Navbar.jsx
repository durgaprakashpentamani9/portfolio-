import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Skills', '/skills'], ['Contact', '/contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <nav className="nav shell" aria-label="Main navigation">
      <Link className="brand" to="/" onClick={() => setOpen(false)}><img className="brand-photo" src="/profile.jpg" alt="Durgaprakash Pentamani profile photo" /><span>Durgaprakash<span className="brand-dot">.</span></span></Link>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div id="nav-links" className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}</NavLink>)}
      </div>
    </nav>
  </header>;
}
