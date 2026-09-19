'use strict';

const pages = {
  hero: `
    <section class="hero-section">
      <div class="container hero-content">
        <span class="badge">Welcome to my portfolio</span>
        <h1>Hi, I'm a student specializing BSIT-Net ad!</h1>
        <p>I build secure, reliable networks and IT solutions. Explore my background, projects, and skills below.</p>
        <div class="hero-btns">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  `,
  about: `
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-image-wrapper">
            <img src="images/2.png" alt="Jan Francis M. Alfonso" class="about-image">
          </div>
          <div class="about-text-card">
            <h1>Jan Francis M. Alfonso</h1>
            <p class="bio-subtitle">Aspiring Network Administrator & IT Student</p>
            <div class="bio-paragraphs">
              <p>I am an aspiring network administrator passionate about designing secure, efficient, and resilient IT infrastructures.</p>
              <p>Beyond network management, I actively build my programming skills in Python and Java, explore frontend web development, and design intuitive user interfaces.</p>
              <p>I strive to combine core technical knowledge with creative problem-solving to deliver practical, user-centered technology projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  education: `
    <section class="education-section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="timeline">
          <div class="timeline-card">
            <span class="timeline-level">Junior High School</span>
            <h3>High School Diploma</h3>
            <p class="timeline-school">Republic Central Colleges | 2019-2023</p>
            <p>Completed secondary education with a strong foundation in science, mathematics, and technology.</p>
          </div>
          <div class="timeline-card">
            <span class="timeline-level">Senior High School</span>
            <h3>TVL - ICT</h3>
            <p class="timeline-school">Holy Angel University | 2023-2025</p>
            <p>Studied core computer systems, programming, and introductory graphic design.</p>
          </div>
          <div class="timeline-card">
            <span class="timeline-level">College</span>
            <h3>Bachelor of Science in Information Technology</h3>
            <p class="timeline-meta">Specialization in Network Administration</p>
            <p class="timeline-school">Holy Angel University | 2025-Present</p>
            <p>Focusing on network infrastructure, system security, web development, and IT management.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  skills: `
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-card"><h3>Networking & Systems</h3><p>Network Administration, Router/Switch Configuration, Troubleshooting</p></div>
          <div class="skill-card"><h3>Programming & Web</h3><p>Python, Java, HTML5, CSS3, JavaScript</p></div>
          <div class="skill-card"><h3>Design & Tools</h3><p>Git, GitHub Pages, Figma, Digital Media</p></div>
        </div>
      </div>
    </section>
  `,
  projects: `
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <article class="project-card">
            <div class="project-info">
              <span class="tag">Web Platform</span>
              <h3>Alerta PH Platform</h3>
              <p>A web proposal focusing on disaster alerts and evacuation guidance.</p>
              <div class="project-tech"><span>HTML</span><span>CSS</span><span>UI Design</span></div>
            </div>
          </article>
          <article class="project-card">
            <div class="project-info">
              <span class="tag">Math & Art</span>
              <h3>Geometric Math-Art</h3>
              <p>Artwork using curves, symmetry, and parabolas in GeoGebra/Desmos.</p>
              <div class="project-tech"><span>Math</span><span>GeoGebra</span><span>Calculus</span></div>
            </div>
          </article>
          <article class="project-card">
            <div class="project-info">
              <span class="tag">Development</span>
              <h3>Personal Portfolio</h3>
              <p>A responsive personal website deployed on GitHub Pages.</p>
              <div class="project-tech"><span>HTML5</span><span>CSS Grid</span><span>GitHub Pages</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <p class="contact-subtitle">Interested in collaborating or have a question? Feel free to connect!</p>
        <div class="contact-box">
          <a href="mailto:janalfonso50@gmail.com" class="contact-item">
            <i class="fa-solid fa-envelope contact-icon"></i>
            <div class="contact-details">
              <span class="contact-label">Email</span>
              <span class="contact-value">janalfonso50@gmail.com</span>
            </div>
          </a>
          <a href="https://github.com/FrancisAlfonso27" target="_blank" rel="noopener noreferrer" class="contact-item">
            <i class="fa-brands fa-github contact-icon"></i>
            <div class="contact-details">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">FrancisAlfonso27</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  `
};

function loadPage(page) {
  const main = document.querySelector("main");
  main.innerHTML = pages[page] || pages.hero;
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").replace("#", "");
    loadPage(id);
  });
});

loadPage("hero");
