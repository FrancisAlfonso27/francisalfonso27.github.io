'use strict';

const tools = [
  { name: "Cisco Packet Tracer", type: "Networking", level: "Intermediate" },
  { name: "Wireshark", type: "Monitoring", level: "Beginner" },
  { name: "GitHub", type: "Version Control", level: "Intermediate" },
  { name: "Figma", type: "Design", level: "Beginner" },
  { name: "Python", type: "Programming", level: "Intermediate" }
];

function formatTool(tool) {
  return `${tool.name} (${tool.type} - ${tool.level})`;
}

function renderTools(list) {
  let html = "";
  for (const tool of list) {
    html += `<div class="tool-card">${formatTool(tool)}</div>`;
  }
  document.querySelector("#tool-list").innerHTML = html;
  document.querySelector("#empty").textContent =
    list.length === 0 ? "No tools match your search." : "";
}

const searchBox = document.querySelector("#search");
searchBox.addEventListener("input", () => {
  const term = searchBox.value.trim().toLowerCase();
  if (term === "") {
    renderTools(tools);
    return;
  }
  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(term)
  );
  renderTools(filtered);
});

renderTools(tools);
