const syllabus = [
  "let & const",
  "Data types",
  "Operators",
  "Input / Output",
  "If / Else",
  "Loops",
  "Functions",
  "Arrays",
  "DOM selection",
  "Text & style updates",
  "Events",
  "Form validation",
  "Local storage",
  "Arrow functions",
  "Template literals",
  "Destructuring",
  "Spread operator",
  "Map & Filter",
  "Async / Await",
  "Fetch API"
];

const projects = [
  "Calculator",
  "Number guessing game",
  "Tip calculator",
  "Palindrome checker",
  "To-do list",
  "Notes app",
  "Quiz app",
  "Digital clock",
  "Weather app",
  "Movie search",
  "GitHub profile viewer",
  "Expense tracker"
];

const syllabusList = document.getElementById("syllabusList");
const projectList = document.getElementById("projectList");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const statusText = document.getElementById("status");

let progress = JSON.parse(localStorage.getItem("progress")) || {};

function render(items, container) {
  items.forEach(item => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = progress[item] || false;

    input.addEventListener("change", () => {
      progress[item] = input.checked;
      localStorage.setItem("progress", JSON.stringify(progress));
      update();
    });

    label.appendChild(input);
    label.append(item);
    container.appendChild(label);
  });
}

render(syllabus, syllabusList);
render(projects, projectList);

function getStatus(p) {
  if (p === 100) return "Unstoppable 🏆";
  if (p > 75) return "Future engineer 🔥";
  if (p > 40) return "Strong progress 💪";
  if (p > 10) return "Momentum building ✨";
  return "Let's start 🚀";
}

function update() {
  const total = syllabus.length + projects.length;
  const done = Object.values(progress).filter(Boolean).length;
  const p = Math.round((done / total) * 100);

  bar.style.width = p + "%";
  percent.textContent = p + "%";
  statusText.textContent = getStatus(p);
}

update();

/* TAB SWITCH */
document.querySelectorAll("[data-tab]").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll("[data-tab]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  };
});
