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

/* =========================
   GRADUATION SLIDER (WITH TEXT)
========================= */
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const graduationText = document.getElementById("graduationText");

const slideTexts = [
  "Graduating with pride after years of dedication, discipline, and continuous learning in Software Engineering.",
  "Honored to graduate with a GPA of 3.9 and ranked 1st on the Dean’s List — a milestone that reflects consistency and hard work.",
  "Graduation day 🎓 Feeling proud, grateful, and motivated for the road ahead.",
  "A proud moment marking academic achievement and perseverance.",
  "Sitting back and taking in the moment.",
  "A moment worth smiling for—hard work behind me, new goals ahead.",
  "A proud moment worth remembering.",
];

let currentSlide = 0;

/* Show slide + text */
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  if (graduationText) {
    graduationText.textContent = slideTexts[index];
  }
}

/* Next / Prev */
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

/* Init slider */
if (slides.length && graduationText) {
  showSlide(currentSlide);
}

/* Button events */
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
}

/* =========================
   TOUCH SWIPE (MOBILE)
========================= */
let startX = 0;
let endX = 0;
const slider = document.querySelector(".slider");

if (slider) {
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });
}

function handleSwipe() {
  const threshold = 50;
  const diff = startX - endX;

  if (diff > threshold) {
    nextSlide();
  } else if (diff < -threshold) {
    prevSlide();
  }
}
