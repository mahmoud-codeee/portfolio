/* =========================
   THEME TOGGLE
========================= */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (toggleBtn) {
  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌙";
    }
  });
}

/* =========================
   PROJECTS DATA
========================= */
const projectData = [
  {
    title: "Pig Game",
    desc: "A fun dice game built with JavaScript and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://mahmoud-codeee.github.io/pig-game/",
    github: "https://github.com/mahmoud-codeee/pig-game",
  },
  {
    title: "Task Manager",
    desc: "Task management app with LocalStorage and filtering.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://mahmoud-codeee.github.io/task-manager-soft-ui/",
    github: "https://github.com/mahmoud-codeee/task-manager-soft-ui",
  },
  {
    title: "Guess My Number",
    desc: "Interactive guessing game with score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://mahmoud-codeee.github.io/guess-my-number/",
    github: "https://github.com/mahmoud-codeee/guess-my-number",
  },
];

/* =========================
   RENDER PROJECTS
========================= */
const container = document.getElementById("projectGrid");

if (container) {
  container.innerHTML = "";

  projectData.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "fade-up");

    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>

      <div class="tech-stack">
        ${p.tech.map((t) => `<span>${t}</span>`).join("")}
      </div>

      <div class="project-links">
        <a href="${p.live}" target="_blank" rel="noopener noreferrer">Live</a>
        <a href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    `;

    container.appendChild(card);
  });

  // Refresh AOS after dynamic content
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}
