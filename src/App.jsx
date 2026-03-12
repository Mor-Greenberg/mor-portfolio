import cartoon from "./assets/mor-cartoon.png";
import { useState } from "react";

function App() {
  const [showContact, setShowContact] = useState(false);
  const hobbies = [
  {
    icon: "🌎",
    title: "Exploring the World",
    text: "I spent six months traveling across South America, discovering new cultures and perspectives."
  },
  {
    icon: "🏃",
    title: "Sports & Energy",
    text: "I enjoy staying active and pushing myself physically."
  },
  {
    icon: "🍳",
    title: "Cooking",
    text: "I love experimenting in the kitchen and creating new dishes."
  },
  {
    icon: "🎵",
    title: "Live Music",
    text: "Concerts are one of my favorite ways to experience music."
  }
];
  const projects = [
    {
      title: "NLP Question Answering System",
      description: "Extractive QA system trained on SQuAD 2.0.",
      github: "https://github.com/Mor-Greenberg",
      tech: ["Python", "NLP", "Transformers"],
      highlights: [
        "Built context selection logic for long passages",
        "Integrated RoBERTa-based QA model",
        "Implemented validation for unanswerable questions",
      ],
    },
    {
      title: "S-Emulator IDE",
      description: "IDE for executing XML-based programs.",
      github: "https://github.com/Mor-Greenberg/S-Emulator_Java",
      tech: ["Java", "JavaFX", "Tomcat"],
      highlights: [
        "Built GUI debugger with execution tracing",
        "Implemented dynamic instruction expansion",
        "Developed client-server validation architecture",
      ],
    },
    {
      title: "Donkey Kong Game",
      description: "2D object-oriented game engine.",
      github: "https://github.com/Mor-Greenberg",
      tech: ["C++", "OOP"],
      highlights: [
        "Designed inheritance hierarchy for game entities",
        "Implemented collision and movement logic",
        "Built gameplay loop and level mechanics",
      ],
    },
    {
      title: "Perceptron",
      description: "Machine learning classifier implemented from scratch.",
      github: "https://github.com/Mor-Greenberg/Perceptron",
      tech: ["Python", "Machine Learning"],
      highlights: [
        "Implemented perceptron training algorithm",
        "Built feature representation pipeline",
        "Evaluated model accuracy and convergence",
      ],
    },
  ];

  const skills = [
    "Python",
    "Java",
    "C++",
    "C",
    "SQL",
    "Machine Learning",
    "NLP",
    "JavaFX",
    "Tomcat",
    "Git",
    "GitHub",
    "Linux",
  ];

  const interests = [
    "AI and machine learning systems",
    "Clean algorithmic implementations",
    "Systems with clear architecture",
    "Interactive logic like games and simulations",
  ];

  return (
    <div className="page" id="top">
        <div className="container">
<nav className="navbar">
  <a href="#top" className="logo">Mor Greenberg</a>

  <div className="nav-links">
    <a href="#projects">Projects</a>
    <a href="#stack">Stack</a>

    <a
      href="https://github.com/Mor-Greenberg"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/mor-greenberg-a20741243/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <button
      className="primary-btn"
      onClick={() => setShowContact(true)}
    >
      Contact
    </button>
  </div>
</nav>       <section className="hero">
          <div className="hero-text">
            <p className="hero-tag">
                Computer Science Student • Open to Junior Software, Data & AI roles

            </p>

            <h1>
              Hi, I’m <span>Mor</span>
            </h1>

            <p className="hero-location">
              Based in Tel Aviv • Available for full-time roles
            </p>

            <p className="hero-description">
            I build software projects combining algorithms,
            machine learning, and clean system design.
            </p>

            <div className="hero-buttons">
              <a
                href="https://github.com/Mor-Greenberg"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View GitHub
              </a>

              <a
                href="/mor-greenberg-cv.pdf"
                className="secondary-btn"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img src={cartoon} alt="Mor cartoon" className="hero-image" />
          </div>
        </section>

        <section className="section about-box" id="about">
            <p className="section-tag">ABOUT</p>
          <h2>A little about me</h2>

          <p className="about-text">
            I’m a Computer Science student who enjoys building projects that combine
            clean logic, thoughtful design, and real problem solving.
          </p>

          <p className="about-text">
            My interests include AI, software engineering, algorithms, and creating
            products that feel both polished and useful.
          </p>
        </section>
          <section className="section" id="projects">
            <p className="section-tag">PROJECTS</p>
          <h2>Featured Work</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="tech-list">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

          <section className="section" id="stack">
            <p className="section-tag">STACK</p>
          <h2>Tech I Work With</h2>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>


          <section className="section">
            <p className="section-tag">BEYOND CODE</p>
            <h2>When I’m not coding</h2>

            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-card">
                  <h3> {hobby.icon}{hobby.title}</h3>
                  <p>{hobby.text}</p>
                </div>
              ))}
            </div>
          </section>
        <section className="section">
          <p className="section-tag">INTERESTS</p>
          <h2>What I enjoy building</h2>

          <div className="interests-grid">
            {interests.map((item, index) => (
              <div key={index} className="interest-card">
                {item}
              </div>
            ))}
          </div>
        </section>



        <section className="section contact-box">
          <p className="section-tag">CONTACT</p>
          <h2>Let’s Connect</h2>
          <p>
            I’m looking for an opportunity where I can grow, contribute, and build
            meaningful software.
          </p>

          <div className="hero-buttons">
            <a href="mailto:mor.green2001@gmail.com" className="primary-btn">
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mor-greenberg-a20741243/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </section>

            {showContact && (
      <div className="modal-overlay">

        <div className="modal">

          <h2>Contact Me</h2>

          <p><strong>Email:</strong></p>
          <p>mor.green2001@gmail.com</p>

          <p><strong>Phone:</strong></p>
          <p>054-6535374</p>

          <button
            className="primary-btn"
            onClick={() => setShowContact(false)}
          >
            Close
          </button>

        </div>

      </div>
    )}
      </div>
    </div>
  );
}

export default App;