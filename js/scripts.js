/* =========================================================
   CONTENT
   Edit these arrays — everything below renders from here.
   Pulled from the wireframe: swap in your real roles/projects.
   ========================================================= */

   const EXPERIENCE = [
    {
      date: "August 2025 - October 2025",
      role: "Research Undergraduate Assistant",
      org: "University of Oklahoma",
      //desc: "Short description of the research, tools used, and your contribution."
    },
    {
      date: "October 2025 - December 2025",
      role: "Software Development Intern",
      org: "Calvient",
      //desc: "Short description of what you built or shipped during the internship."
    },
    {
      date: "May 2026 - August 2026",
      role: "Software Engineer Intern - Computer Scientist",
      org: "Tinker AFB",
      //desc: "Tutored students in intro CS / data structures / whatever applies."
    }
  ];
  
  const PROJECTS = [
    {
      title: "AI Assistant Project",
      tag: "Python · LLM",
      desc: "Click-to-expand project card, as sketched: a short write-up of what the assistant does, the stack, and a link to the repo.",
      github: "https://github.com/your-username/ai-assistant-project"
    },
    {
      title: "NBA Team Info Project",
      tag: "JavaScript · API",
      desc: "Pulls live team/player data from a sports API and displays it in a clean dashboard.",
      github: "https://github.com/your-username/nba-team-info"
    },
    {
      title: "Career Elevation GPS",
      tag: "Hackathon Project",
      desc: "Describe the concept, what problem it solves, and current status.",
      github: "https://github.com/your-username/tinker-heb"
    } 
  ];
  
  /* =========================================================
     RENDER: EXPERIENCE
     ========================================================= */
  function renderExperience() {
    const list = document.getElementById("timelineList");
    list.innerHTML = EXPERIENCE.map(item => `
      <li class="timeline-item">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-org">${item.org}</p>
        <p class="timeline-desc">${item.desc}</p>
      </li>
    `).join("");
  }
  
  /* =========================================================
     RENDER: PROJECTS (click a card to expand)
     ========================================================= */
  function renderProjects() {
    const grid = document.getElementById("projectGrid");
  
    grid.innerHTML = PROJECTS.map((p, i) => `
      <article class="project-card" tabindex="0" role="button"
                aria-expanded="false" data-index="${i}">
        <div class="project-card-head">
          <div>
            <h3 class="project-title">${p.title}</h3>
            <span class="project-tag">${p.tag}</span>
          </div>
          <span class="project-toggle" aria-hidden="true">+</span>
        </div>
        <div class="project-body">
          <p class="project-desc">${p.desc}</p>
          <a class="project-link" href="${p.github}" target="_blank" rel="noopener">
            View on GitHub ↗
          </a>
        </div>
      </article>
    `).join("");
  
    // click OR keyboard (Enter/Space) toggles the card open
    grid.querySelectorAll(".project-card").forEach(card => {
      const toggle = () => {
        const isOpen = card.getAttribute("aria-expanded") === "true";
        card.setAttribute("aria-expanded", String(!isOpen));
      };
  
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }
  
  /* =========================================================
     NAV: mobile menu toggle
     ========================================================= */
  function initNav() {
    const toggleBtn = document.getElementById("navToggle");
    const links = document.querySelector(".nav-links");
  
    toggleBtn.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });
  
    // close menu after clicking a link (mobile)
    links.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
  
  /* =========================================================
     CONTACT FORM
     This is a front-end-only placeholder. To actually send email,
     wire this up to a service like Formspree, EmailJS, or your
     own backend endpoint — replace the fetch/console.log below.
     ========================================================= */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = form.email.value.trim();
      const body = form.body.value.trim();
  
      if (!email || !body) {
        status.textContent = "Please fill in both fields.";
        return;
      }
  
      // TODO: replace with a real submission (e.g. Formspree endpoint,
      // EmailJS, or your own API route).
      console.log("Contact form submitted:", { email, body });
  
      status.textContent = "Message ready to send — connect this form to a backend to go live.";
      form.reset();
    });
  }
  
  /* =========================================================
     INIT
     ========================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    renderExperience();
    renderProjects();
    initNav();
    initContactForm();
    document.getElementById("year").textContent = new Date().getFullYear();
  });
