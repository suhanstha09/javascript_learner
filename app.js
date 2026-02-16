const topics = [
  "Variables",
  "Data Types",
  "Conditions",
  "Loops",
  "Functions",
  "Arrays",
  "DOM",
  "Events",
  "Local Storage",
  "Async JS",
  "Fetch API",
  "Build Project"
];

const list = document.getElementById("list");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

let saved = JSON.parse(localStorage.getItem("progress")) || {};

topics.forEach(topic => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = saved[topic] || false;

  input.addEventListener("change", () => {
    saved[topic] = input.checked;
    localStorage.setItem("progress", JSON.stringify(saved));
    update();
  });

  label.appendChild(input);
  label.append(" " + topic);
  list.appendChild(label);
});

function update() {
  const done = Object.values(saved).filter(Boolean).length;
  const total = topics.length;
  const p = Math.round((done / total) * 100);
  bar.style.width = p + "%";
  percent.textContent = p + "% complete";
}

update();

document.getElementById("reset").onclick = () => {
  localStorage.clear();
  location.reload();
};
