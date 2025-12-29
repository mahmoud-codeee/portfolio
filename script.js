const projectData = [
  {
    title: "Pig Game",
    desc: "A simple dice game.",
    link: "https://mahmoud-codeee.github.io/pig-game/",
  },
  {
    title: "Task Manager (JS)",
    desc: "Add, delete and track tasks using LocalStorage.",
    link: " https://mahmoud-codeee.github.io/task-manager-soft-ui/",
  },
  {
    title: "Interactive Game (DOM)",
    desc: "Simple game showing DOM interactions.",
    link: " https://mahmoud-codeee.github.io/guess-my-number/",
  },
];

const container = document.getElementById("projectGrid");
container.innerHTML = ""; // Clear existing content

projectData.forEach((p) => {
  const hasLink = p.link && p.link !== "#";

  if (hasLink) {
    container.innerHTML += `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-card-link" data-aos="fade-up">
              <div class="project-card">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <span class="view-link">View on GitHub</span>
              </div>
            </a>
          `;
  } else {
    container.innerHTML += `
            <div class="project-card no-link" data-aos="fade-up">
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <span class="coming-soon">Coming soon</span>
            </div>
          `;
  }
});

AOS.refresh();
