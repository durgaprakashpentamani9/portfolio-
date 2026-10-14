export default function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h1>{title}</h1>{description && <p className="section-description">{description}</p>}</div>;
}
