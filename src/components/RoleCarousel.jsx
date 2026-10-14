import { useEffect, useState } from 'react';

const roles = ['AI & ML Engineer', 'Agentic AI Developer', 'Python Developer', 'Full-Stack Web Developer'];

export default function RoleCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % roles.length), 2800);
    return () => window.clearInterval(timer);
  }, []);
  return <span className="role-window" aria-label="Areas of focus">
    <span className="sr-only">AI &amp; ML Engineer, Agentic AI Developer, Python Developer, Full-Stack Web Developer</span>
    <span className="role-text" aria-hidden="true" key={index}>{roles[index]}</span>
  </span>;
}
