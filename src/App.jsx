import './App.css'

const skills = [
  'Python', 'C', 'React', 'HTML', 'Git', 'GitHub',
  'Artificial Intelligence', 'Data Science', 'Machine Learning', 'Problem Solving',
]

const projects = [
  {
    number: '01',
    title: 'Insight Forecast',
    description: 'A beginner-friendly machine learning workspace for exploring patterns, training models, and turning datasets into clear decisions.',
    tags: ['Python', 'Pandas', 'ML'],
  },
  {
    number: '02',
    title: 'Campus Companion',
    description: 'A focused React interface that brings student resources, events, and useful academic links into one calm, searchable home.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    number: '03',
    title: 'Smart Sorter',
    description: 'An AI concept project exploring how classification can help organize everyday information with simple, explainable outputs.',
    tags: ['Python', 'AI', 'Data'],
  },
]

const milestones = [
  { date: '2025 — 2029', title: 'B.Tech in AI & Data Science', detail: 'REVA University' },
  { date: '01', title: 'Certifications', detail: 'Add courses, workshops and credentials here.' },
  { date: '02', title: 'Achievements', detail: 'Add hackathons, awards and academic milestones here.' },
]

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Rohith Babu K home"><span>RBK</span><i>.</i></a>
        <nav aria-label="Main navigation">
          {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="nav-cta" href="mailto:rohithbbuk59@gmail.com">Let&apos;s talk <ArrowUpRight /></a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Available to learn & collaborate</p>
            <h1>Building a sharper<br /><em>future</em> with data.</h1>
            <p className="hero-intro">I&apos;m Rohith Babu K, an aspiring AI & Data Science engineer who enjoys turning curious questions into useful digital experiences.</p>
            <div className="hero-actions"><a className="button button-dark" href="#projects">View my work <ArrowUpRight /></a><a className="text-link" href="#contact">Get in touch <span>↓</span></a></div>
          </div>
          <div className="hero-art reveal delay-one" aria-label="Abstract data visualization" role="img">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>AI</span><small>DS</small></div>
            <div className="art-label label-top">01 / explore</div><div className="art-label label-bottom">learn · build · repeat</div>
          </div>
          <div className="hero-meta"><span>01 — Introduction</span><span>Scroll to explore <b>↓</b></span></div>
        </section>

        <section className="about-section content-section" id="about">
          <div className="section-kicker">01 / About me</div><div className="about-content"><h2>Curious by nature.<br /><em>Intentional</em> by design.</h2><div><p className="large-copy">I&apos;m a B.Tech student at REVA University, specializing in Artificial Intelligence & Data Science. I&apos;m at the beginning of my journey, but I&apos;m serious about making every project a chance to learn something real.</p><p>I like understanding how things work, finding the simple shape inside a complex problem, and building with care. Right now, I&apos;m growing my foundations across code, data, and the web.</p></div></div>
        </section>

        <section className="education-section content-section" id="education"><div className="section-kicker">02 / Education</div><div className="education-card"><div className="edu-mark">R</div><div><p className="card-label">Currently pursuing</p><h2>B.Tech — Artificial Intelligence<br />& Data Science</h2><p>REVA University · Bengaluru, India</p></div><strong>2025<br /><span>—</span><br />2029</strong></div></section>

        <section className="skills-section content-section" id="skills"><div className="section-kicker">03 / Toolkit</div><div className="section-heading"><h2>Tools for turning<br /><em>ideas into outcomes.</em></h2><p>My current toolkit is always evolving. Each skill is a new way to ask better questions and solve better problems.</p></div><div className="skills-grid">{skills.map((skill, index) => <span className={index < 3 ? 'skill-pill featured' : 'skill-pill'} key={skill}><b>{String(index + 1).padStart(2, '0')}</b>{skill}</span>)}</div></section>

        <section className="projects-section content-section" id="projects"><div className="section-kicker">04 / Selected work</div><div className="section-heading projects-heading"><h2>Small projects,<br /><em>meaningful practice.</em></h2><p>A growing collection of experiments and student projects. Replace the placeholders with your live work as it takes shape.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-links"><a href="#contact" aria-label={`${project.title} GitHub placeholder`}>GitHub <ArrowUpRight /></a><a href="#contact" aria-label={`${project.title} live demo placeholder`}>Live demo <ArrowUpRight /></a></div></article>)}</div></section>

        <section className="milestones-section content-section" id="certifications"><div className="section-kicker">05 / Milestones</div><div className="section-heading"><h2>The next chapter<br /><em>is yours to add.</em></h2><p>Use this space to document the moments that mark your progress, from a new course to a hard-won hackathon.</p></div><div className="milestone-list">{milestones.map((milestone) => <div className="milestone" key={milestone.title}><span>{milestone.date}</span><div><h3>{milestone.title}</h3><p>{milestone.detail}</p></div><ArrowUpRight /></div>)}</div></section>

        <section className="contact-section" id="contact"><div className="section-kicker">06 / Contact</div><div className="contact-content"><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="email-link" href="mailto:rohithbbuk59@gmail.com">rohithbbuk59@gmail.com <ArrowUpRight /></a><div className="social-links"><a href="#contact">GitHub <ArrowUpRight /></a><a href="#contact">LinkedIn <ArrowUpRight /></a></div></div></section>
      </main>
      <footer><div className="brand"><span>RBK</span><i>.</i></div><p>Rohith Babu K · AI & Data Science</p><p>© {year} / Built with curiosity.</p></footer>
    </div>
  )
}

export default App
