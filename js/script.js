function init() {
  loadProjects();
}

function loadProjects() {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].categorie == "ui-design") {
      document.getElementById("ui-design").innerHTML += contentBoxHTML(i);
      loadTools(i);
    }
    if (projects[i].categorie == "web-development") {
      document.getElementById("web-development").innerHTML += contentBoxHTML(i);
      loadTools(i);
    }
    if (projects[i].categorie == "creative") {
      document.getElementById("creative").innerHTML += creativeImgHTML(i);
    }
  }
}

function loadTools(i) {
  const tools = projects[i].tools;
  for (let j = 0; j < tools.length; j++) {
    const toolName = tools[j];
    document.getElementById(`tools${i}`).innerHTML += toolsHTML(
      `./img/tools/${toolName}.svg `
    );
  }
}

function showOverlay(i) {
  if (projects[i].categorie == "web-development") {
    document.getElementById(`img${i}`).innerHTML += overlayLinksHTML(i);
  }
  if (projects[i].categorie == "creative") {
    document.getElementById(`img${i}`).innerHTML += overlayProjectNameHTML(i);
  }
}

function hideOverlay(i) {
  if (projects[i].categorie == "web-development") {
    setTimeout(() => {
      document.getElementById(`img${i}`).innerHTML = loadImgHTML(i);
    }, 250);
  }
  if (projects[i].categorie == "creative") {
    setTimeout(() => {
      document.getElementById(`img${i}`).innerHTML = creativeImgHTML(i);
    }, 250);
  }
}

