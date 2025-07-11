const base = "https://script.google.com/macros/s/YOUR_DEPLOYED_URL/exec";

function loadStudents() {
  fetch(base + "?action=getStudents")
    .then(res => res.json())
    .then(data => {
      let html = `<h3>Students</h3><ul>`;
      data.forEach(([cls, name, adno]) => {
        html += `<li>${cls} - ${name} (${adno})</li>`;
      });
      html += `</ul>`;
      document.getElementById("output").innerHTML = html;
    });
}

function loadRooms() {
  fetch(base + "?action=getRooms")
    .then(res => res.json())
    .then(data => {
      let html = `<h3>Rooms</h3><ul>`;
      data.forEach(([name, sides, rows, perRow]) => {
        html += `<li>${name}: ${sides} sides × ${rows} rows × ${perRow} seats</li>`;
      });
      html += `</ul>`;
      document.getElementById("output").innerHTML = html;
    });
}

function generateAllocation() {
  fetch(base + "?action=generateAllocation")
    .then(res => res.text())
    .then(msg => alert(msg));
}

function generatePDF() {
  fetch(base + "?action=downloadPDF")
    .then(res => res.text())
    .then(url => {
      window.open(url, "_blank");
    });
}
