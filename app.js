// =================== DATA ===================
const syllabus = [
  { title: "Introduction & Fundamentals", items:[
    "What is JavaScript?",
    "JavaScript in the Browser vs. Node.js",
    "Setting Up Your Development Environment",
    "Using the Browser Console & Debugging Tools",
    "Writing Your First Script"
  ] },
  { title: "Core Language Basics", items:[
    "Variables: let, const, var",
    "Data Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt",
    "Operators: Arithmetic, Assignment, Comparison, Logical, Ternary",
    "Control Flow: if, else, switch, for, while, do...while, break, continue",
    "Functions: Declarations, Expressions, Arrow Functions, Default Parameters",
    "Scope: Global, Function, Block, Lexical Scope",
    "Hoisting & Temporal Dead Zone",
    "Error Handling: try, catch, finally, throw"
  ] },
  { title: "Working with Data", items:[
    "Arrays: Creation, Methods (map, filter, reduce, etc.), Iteration",
    "Objects: Properties, Methods, Destructuring, Spread/Rest",
    "JSON: Parsing and Stringifying",
    "Sets, Maps, WeakSet, WeakMap",
    "Date and Time Handling"
  ] },
  { title: "ES6+ Modern JavaScript Features", items:[
    "Template Literals",
    "Destructuring Assignment",
    "Spread & Rest Operators",
    "Enhanced Object Literals",
    "Default, Named, and Dynamic Imports/Exports (Modules)",
    "Classes & Inheritance",
    "Symbols & Iterators",
    "Generators",
    "Optional Chaining & Nullish Coalescing",
    "Private Fields & Methods in Classes",
    "Top-level await",
    "New Built-in Methods (Array, String, Object, etc.)"
  ] },
  { title: "DOM & Browser APIs", items:[
    "What is the DOM?",
    "Selecting Elements (querySelector, getElementById, etc.)",
    "Manipulating Elements (textContent, innerHTML, attributes, classes)",
    "Creating, Inserting, and Removing Elements",
    "Event Handling (addEventListener, event delegation)",
    "Forms & User Input",
    "Browser Events (load, DOMContentLoaded, etc.)",
    "Accessibility (ARIA, semantic HTML)",
    "LocalStorage, SessionStorage, and Cookies",
    "Fetch API & AJAX",
    "Geolocation API",
    "Drag and Drop",
    "Canvas & SVG",
    "Web Audio, Web Animations",
    "Notifications, Clipboard, and other modern APIs",
    "Service Workers & Progressive Web Apps (PWA) Basics"
  ] },
  { title: "Async JavaScript", items:[
    "Callbacks",
    "Promises",
    "async/await",
    "Error Handling in Async Code",
    "Fetch API Deep Dive",
    "Working with APIs (REST, GraphQL basics)",
    "Debouncing & Throttling"
  ] },
  { title: "Tooling & Testing", items:[
    "ES Modules (import/export)",
    "Bundlers: Webpack, Vite, Parcel",
    "Transpilers: Babel, SWC",
    "Linters & Formatters: ESLint, Prettier",
    "Package Management: npm, yarn, pnpm",
    "Using TypeScript with JavaScript",
    "Debugging Tools (Browser DevTools, VS Code Debugger)",
    "Unit Testing: Jest, Vitest, Mocha",
    "End-to-End Testing: Cypress, Playwright"
  ] },
  { title: "Frameworks & Advanced", items:[
    "React: Components, State, Props, Hooks, Context, Router",
    "Vue: Directives, Components, Vuex/Pinia, Composition API",
    "Angular: Components, Services, Dependency Injection, RxJS",
    "Svelte: Stores, Reactivity, Transitions",
    "State Management (Redux, Zustand, Vuex, etc.)",
    "UI Libraries (Material UI, Ant Design, Tailwind CSS)",
    "Functional Programming in JavaScript",
    "Object-Oriented Programming Patterns",
    "Design Patterns (Singleton, Observer, Factory, etc.)",
    "Memory Management & Performance Optimization",
    "Security Best Practices (XSS, CSRF, CORS, etc.)",
    "Internationalization (i18n) & Localization (l10n)",
    "Web Components & Custom Elements",
    "Server-Side JavaScript (Node.js, Express basics)",
    "Real-time Communication (WebSockets, SSE)",
    "Mobile & Desktop Apps with JavaScript (React Native, Electron, Tauri)",
    "Version Control with Git & GitHub",
    "Documentation (JSDoc, Storybook)",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Building a Portfolio & Contributing to Open Source"
  ] }
];

const projects = [
  { level:"Beginner", items:[
    "To-Do List App (Beginner)",
    "Digital Clock (Beginner)",
    "Simple Calculator (Beginner)",
    "Weather Widget - API (Beginner)",
    "Quiz Game (Beginner)",
    "Random Quote Generator (Beginner)",
    "Unit Converter (Beginner)",
    "Color Picker Tool (Beginner)",
    "Image Slider (Beginner)",
    "Personal Portfolio Website (Beginner)"
  ] },
  { level:"Intermediate", items:[
    "Expense Tracker (Intermediate)",
    "Chat Application - WebSockets (Intermediate)",
    "Recipe Finder - API (Intermediate)",
    "Markdown Editor (Intermediate)",
    "Movie Search App - TMDB API (Intermediate)",
    "E-commerce Product Page (Intermediate)",
    "Memory Game (Intermediate)",
    "Pomodoro Timer (Intermediate)",
    "Drag-and-Drop Kanban Board (Intermediate)",
    "Progressive Web App (PWA) Starter (Intermediate)"
  ] },
  { level:"Advanced", items:[
    "Real-Time Collaboration Tool (Advanced)",
    "AI-Powered Image Classifier - TensorFlow.js (Advanced)",
    "Full-Stack Blog Platform - Node.js + MongoDB (Advanced)",
    "Voice-Controlled Assistant - Web Speech API (Advanced)",
    "E-commerce Storefront with Payment Integration (Advanced)",
    "Social Media Dashboard - OAuth, REST APIs (Advanced)",
    "Real-Time Multiplayer Game (Advanced)",
    "Custom Video Chat App - WebRTC (Advanced)",
    "Personal Finance Manager - Data Visualization (Advanced)",
    "Smart Home Dashboard - IoT Integration (Advanced)"
  ] }
];

const resources = [
  { name:"MDN Web Docs", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript", desc:"Authoritative JS documentation" },
  { name:"freeCodeCamp JS", url:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", desc:"Interactive hands-on curriculum" },
  { name:"JavaScript.info", url:"https://javascript.info/", desc:"Modern JS tutorials" },
  { name:"Codecademy JS", url:"https://www.codecademy.com/learn/introduction-to-javascript", desc:"Interactive JS course" }
];

// =================== SELECTORS ===================
const syllabusList = document.getElementById("syllabusList");
const projectList = document.getElementById("projectList");
const resourceList = document.getElementById("resourceList");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const statusText = document.getElementById("status");

let progress = JSON.parse(localStorage.getItem("progress")) || {};

// =================== HELPER ===================
function getStatus(p){
  if(p===100) return "Unstoppable 🏆";
  if(p>75) return "Future engineer 🔥";
  if(p>40) return "Strong progress 💪";
  if(p>10) return "Momentum building ✨";
  return "Let's start 🚀";
}

// =================== RENDER SYLLABUS ===================
syllabus.forEach(chapter => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("checklist");

  // Chapter label (click to expand/collapse)
  const chapterLabel = document.createElement("span");
  chapterLabel.className = "chapter-label";
  chapterLabel.textContent = chapter.title;
  chapterLabel.style.cursor = "pointer";

  // Chapter checkbox (auto-checked if all sub-items checked)
  const chapterCheckbox = document.createElement("input");
  chapterCheckbox.type = "checkbox";
  chapterCheckbox.style.marginRight = "8px";
  chapterCheckbox.disabled = true;

  // Sub-list
  const subList = document.createElement("ul");
  subList.style.display = "none";

  // Render sub-items with checkboxes
  chapter.items.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("sub-item");
    const subCheckbox = document.createElement("input");
    subCheckbox.type = "checkbox";
    subCheckbox.checked = progress[item] || false;
    subCheckbox.addEventListener("change", () => {
      progress[item] = subCheckbox.checked;
      localStorage.setItem("progress", JSON.stringify(progress));
      update();
      // Update chapter checkbox
      const allChecked = Array.from(subList.querySelectorAll('input[type=checkbox]')).every(cb => cb.checked);
      chapterCheckbox.checked = allChecked;
    });
    li.appendChild(subCheckbox);
    li.append(" ", item);
    subList.appendChild(li);
  });

  // Set initial chapter checkbox state
  chapterCheckbox.checked = chapter.items.every(item => progress[item]);

  // Expand/collapse logic
  chapterLabel.onclick = () => {
    subList.style.display = subList.style.display === "none" ? "block" : "none";
  };

  // Chapter row
  const chapterRow = document.createElement("div");
  chapterRow.appendChild(chapterCheckbox);
  chapterRow.appendChild(chapterLabel);
  wrapper.appendChild(chapterRow);
  wrapper.appendChild(subList);
  syllabusList.appendChild(wrapper);
});

// =================== RENDER PROJECTS ===================
projects.forEach(group => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("checklist");

  // Group label (click to expand/collapse)
  const groupLabel = document.createElement("span");
  groupLabel.className = "chapter-label";
  groupLabel.textContent = group.level;
  groupLabel.style.cursor = "pointer";

  // Group checkbox (auto-checked if all sub-items checked)
  const groupCheckbox = document.createElement("input");
  groupCheckbox.type = "checkbox";
  groupCheckbox.style.marginRight = "8px";
  groupCheckbox.disabled = true;

  // Sub-list
  const subList = document.createElement("ul");
  subList.style.display = "none";

  // Render sub-items with checkboxes
  group.items.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("sub-item");
    const subCheckbox = document.createElement("input");
    subCheckbox.type = "checkbox";
    subCheckbox.checked = progress[item] || false;
    subCheckbox.addEventListener("change", () => {
      progress[item] = subCheckbox.checked;
      localStorage.setItem("progress", JSON.stringify(progress));
      update();
      // Update group checkbox
      const allChecked = Array.from(subList.querySelectorAll('input[type=checkbox]')).every(cb => cb.checked);
      groupCheckbox.checked = allChecked;
    });
    li.appendChild(subCheckbox);
    li.append(" ", item);
    subList.appendChild(li);
  });

  // Set initial group checkbox state
  groupCheckbox.checked = group.items.every(item => progress[item]);

  // Expand/collapse logic
  groupLabel.onclick = () => {
    subList.style.display = subList.style.display === "none" ? "block" : "none";
  };

  // Group row
  const groupRow = document.createElement("div");
  groupRow.appendChild(groupCheckbox);
  groupRow.appendChild(groupLabel);
  wrapper.appendChild(groupRow);
  wrapper.appendChild(subList);
  projectList.appendChild(wrapper);
});

// =================== RENDER RESOURCES ===================
resources.forEach(r=>{
  const a = document.createElement("a");
  a.href = r.url; a.target="_blank";
  a.classList.add("resource");
  a.innerHTML = `${r.name}<br><span class="desc">${r.desc}</span>`;
  resourceList.appendChild(a);
});

// =================== UPDATE ===================
function toggleSubItems(list, show){
  Array.from(list.children).forEach(li=>{
    if(show) li.classList.add("open"); else li.classList.remove("open");
  });
}

function update(){
  // Count all sub-items in syllabus and projects
  let total = 0, done = 0;
  syllabus.forEach(ch => ch.items.forEach(item => {
    total++;
    if(progress[item]) done++;
  }));
  projects.forEach(gr => gr.items.forEach(item => {
    total++;
    if(progress[item]) done++;
  }));
  const p = total ? Math.round((done/total)*100) : 0;
  bar.style.width = p+"%";
  percent.textContent = p+"%";
  statusText.textContent = getStatus(p);
}
update();

// =================== TAB SWITCH ===================
document.querySelectorAll("[data-tab]").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll("[data-tab]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  };
});
