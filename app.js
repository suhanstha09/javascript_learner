// ===== SYLLABUS =====
const syllabusTopics = [
  "let & const",
  "Data types",
  "Operators",
  "Input / Output",
  "If / Else",
  "Loops",
  "Functions",
  "Arrays",
  "Selecting DOM elements",
  "Changing text & styles",
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

// ===== PROJECTS =====
const projectTopics = [
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

const syllabusDiv = document.getElementById("syllabus");
const projectsDiv = document.getElementById("projects");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const msg = document.getElementById("msg");

let progress = JSON.parse(localStorage.getItem("progress")) || {};

// ===== MOTIVATION =====
function motivation(p) {
  if (p === 100) return "Legendary 🏆";
  if (p > 80) return "Future developer 🔥";
  if (p > 50) return "Halfway there 💪";
  if (p > 20) return "Great progress ✨";
  return "Let's start 🚀";
}

// ===== RENDER CHECKBOX =====
function renderList(list, container) {
  list.forEach(item => {
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

renderList(syllabusTopics, syllabusDiv);
renderList(projectTopics, projectsDiv);

// ===== UPDATE PROGRESS =====
function update() {
  const total = syllabusTopics.length + projectTopics.length;
  const done = Object.values(progress).filter(Boolean).length;
  const p = Math.round((done / total) * 100);

  bar.style.width = p + "%";
  percent.textContent = p + "% complete";
  msg.textContent = motivation(p);
}

update();

// ===== RESET =====
document.getElementById("reset").onclick = () => {
  if (confirm("Reset all progress?")) {
    localStorage.clear();
    location.reload();
  }
};
