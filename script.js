const projectData = [
  {
    title: "Personal Portfolio",
    desc: "A responsive portfolio website with modern UI.",
    link: "https://github.com/mahmoud-codeee"
  },
  {
    title: "Task Manager (JS)",
    desc: "Add, delete and track tasks using LocalStorage.",
    link: "#"
  },
  {
    title: "Interactive Game (DOM)",
    desc: "Simple game showing DOM interactions.",
    link: "#"
  }
];

const container = document.getElementById("projectGrid");
projectData.forEach(p => {
  container.innerHTML += `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="${p.link}" target="_blank">View on GitHub</a>
    </div>
  `;
});
