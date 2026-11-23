import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, X } from 'lucide-react'
import { capabilities, experience, projects, type Project } from './content'
import amgLogo from './images/companies/AMG.png'
import autochekLogo from './images/companies/Autochek.png'
import boboLogo from './images/companies/Bobo.png'
import cambiumLogo from './images/companies/Cambium.png'
import echLogo from './images/companies/ECH.png'
import ekedcLogo from './images/companies/EKEDC.png'
import fortitudeLogo from './images/companies/Fortitude.png'
import jmanLogo from './images/companies/JMAN.png'

const companies = [
  { name: 'AMG', logo: amgLogo },
  { name: 'Autochek', logo: autochekLogo },
  { name: 'Bobo', logo: boboLogo },
  { name: 'Cambium', logo: cambiumLogo },
  { name: 'ECH', logo: echLogo },
  { name: 'EKEDC', logo: ekedcLogo },
  { name: 'Fortitude', logo: fortitudeLogo },
  { name: 'JMAN', logo: jmanLogo },
]

function App() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [selected])

  return <>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#top" className="wordmark">ONYEMA MBADIWE<span className="wordmark-dot">.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <ArrowUpRight className="icon icon-small" aria-hidden="true" /></a></div>
      </nav>
    </header>

    <main id="top">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-meta"><span>Independent creative practice</span><span>Lagos, Nigeria <i className="status-dot" /> Available for select projects</span></div>
        <h1 id="hero-title">Making ideas<br className="desktop-break" /> tangible through<br className="desktop-break" /> design &amp; <span className="outline-word">technology.</span></h1>
        <div className="hero-bottom">
          <p className="hero-intro">I’m <strong>Onyema Mbadiwe</strong> — a multidisciplinary designer and creative technologist working across visual identity, digital products and interactive experiences.</p>
          <a className="text-link hero-link" href="#work">Explore selected work <ArrowDown className="icon" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">A selection of works · 2023—2026</span><h2>Selected works</h2></div><p>Different challenges, connected by a belief that good work should feel as good as it functions.</p></div>
          <div className="project-grid">
            {projects.map((project) => <button className={`project project-${project.layout}`} key={project.number} onClick={() => setSelected(project)} aria-label={`Open case study: ${project.title}`}>
              <div className={`project-image${project.imageFit === 'contain' ? ' project-image-contain' : ''}`}><img src={project.image} alt={project.imageAlt} loading="lazy" /><span className="project-open" aria-hidden="true"><ArrowUpRight className="icon" /></span><span className="project-number">{project.number}</span></div>
              <div className="project-caption"><div><h3>{project.title}</h3><span>{project.discipline}</span>{project.period && <span className="project-period">Execution · {project.period}</span>}</div></div>
            </button>)}
          </div>
          <div className="work-foot"><span><strong className="work-foot-note">Part of 100+ projects</strong> across design, technology and creative production. More work and process available on request.</span><a href="#contact" className="text-link">Start a conversation <ArrowUpRight className="icon" aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="capabilities-section section-pad" id="services">
        <div className="container capabilities-layout"><div className="capabilities-title"><span className="eyebrow">01 — What I do</span><h2>Many ways<br />to make meaning.</h2><p>One connected practice, moving between disciplines to find the right answer to each brief.</p></div>
          <div className="capability-list">{capabilities.map((item, i) => <article className="capability" key={item.name}><span className="mono">0{i + 1}</span><div><h3>{item.name}</h3><p>{item.description}</p></div><ArrowUpRight className="capability-arrow icon" aria-hidden="true" /></article>)}</div>
        </div>
      </section>

      <section className="about-section" id="about"><div className="container about-layout">
        <div className="about-label"><span className="eyebrow">02 — A little about me</span></div>
        <div className="about-copy"><h2>Driven by curiosity.<br />Built on creativity.</h2><div className="about-text"><p>I’m Onyema, a creative technologist and product builder working at the intersection of design, technology and storytelling. My journey started with 2D animation in 2011 and has since evolved through product design, web development, branding, interactive media and game experiences.</p><p>Over the years, I’ve worked with individuals, businesses and teams across Africa and beyond to turn ideas into digital products, visual identities and engaging experiences.</p></div><a href="#contact" className="text-link">A bit more about working together <ArrowUpRight className="icon" aria-hidden="true" /></a></div>
      </div></section>

      <section className="experience-section section-pad"><div className="container experience-layout"><div><span className="eyebrow">03 — Experience</span><h2>Where I’ve<br />been.</h2></div><div className="experience-list">{experience.map((item, i) => <article className="experience-item" key={`${item.company}-${i}`}><span className="mono">0{i + 1}</span><div className="experience-main"><h3>{item.company}</h3><span>{item.role}</span><p className="experience-location">{item.location}</p>{item.note && <p>{item.note}</p>}</div><span className="experience-period">{item.period}</span></article>)}</div></div></section>

      <section className="company-strip" aria-label="Teams and brands I’ve worked with">
        <div className="container">
          <div className="company-marquee">
            <div className="company-track">
              <div className="company-logo-group">
                {companies.map((company) => <img key={company.name} src={company.logo} alt={company.name} loading="lazy" />)}
              </div>
              <div className="company-logo-group" aria-hidden="true">
                {companies.map((company) => <img key={company.name} src={company.logo} alt="" loading="lazy" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="container"><span className="eyebrow">04 — Contact</span><div className="contact-main"><h2>Have something<br />interesting in mind?</h2><a href="mailto:mbadiwe.onyema@gmail.com" className="contact-arrow" aria-label="Email me"><ArrowUpRight className="icon" aria-hidden="true" /></a></div><div className="contact-bottom"><a href="mailto:mbadiwe.onyema@gmail.com" className="email-link">mbadiwe.onyema@gmail.com</a><p>Open to collaborations, thoughtful briefs and good conversations.</p></div><div className="social-links"><a href="https://www.linkedin.com/in/mbadiwe-onyema-5789a994/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="icon icon-small" aria-hidden="true" /></a><a href="https://instagram.com/onyema.one" target="_blank" rel="noreferrer">Instagram <ArrowUpRight className="icon icon-small" aria-hidden="true" /></a></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="wordmark" href="#top">ONYEMA MBADIWE<span className="wordmark-dot">.</span></a><span>© {new Date().getFullYear()} Onyema Mbadiwe</span><a href="#top" className="back-top">Back to top <ArrowUp className="icon icon-small" aria-hidden="true" /></a></div></footer>

    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}><section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title"><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close case study">Close <X className="icon icon-small" aria-hidden="true" /></button><img className={`case-image${selected.imageFit === 'contain' ? ' case-image-contain' : ''}`} src={selected.image} alt={selected.imageAlt} /><div className="case-content"><span className="eyebrow">{selected.discipline}{selected.period && ` · Execution ${selected.period}`}</span><h2 id="case-title">{selected.title}</h2>{selected.sections ? <div className="case-sections">{selected.sections.map((section) => <article className="case-section" key={section.title}><h3>{section.title}</h3>{section.text && <p>{section.text}</p>}{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <ol>{section.items.map((item) => <li key={item.label}><strong>{item.label}</strong> — {item.description}</li>)}</ol>}</article>)}</div> : selected.story ? <div className="case-story">{selected.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : <p className="case-description">{selected.detail}</p>}{selected.statement && <h3 className="case-statement">{selected.statement}</h3>}{selected.highlight && <blockquote className="case-highlight"><div className="case-highlight-copy">{selected.highlight.statement} {selected.highlight.context}</div></blockquote>}{selected.gallery && <div className={`case-gallery${selected.galleryLayout === 'square' ? ' case-gallery-square' : ''}`}>{selected.gallery.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div>}{selected.fullWidthGallery && <div className="case-gallery-fullwidth">{selected.fullWidthGallery.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div>}{selected.videos && <div className="case-films"><span className="eyebrow">Selected films</span><div className="film-grid">{selected.videos.map((video) => <article className="film" key={video.id}><div className="film-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.label} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><span>{video.label}</span></article>)}</div></div>}<a className="text-link" href="#contact" onClick={() => setSelected(null)}>Discuss a similar project <ArrowUpRight className="icon" aria-hidden="true" /></a></div></section></div>}
  </>
}

export default App
