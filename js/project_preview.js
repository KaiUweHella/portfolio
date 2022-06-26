let currentID;

function initOverview() {
  loadId();
  loadHeader();
  loadPreview();
}

function loadId() {
  currentID = localStorage.getItem("currentID", currentID);
}

function loadPreview() {
  let previewImages = projects[currentID].images;
  for (let i = 0; i < previewImages.length; i++) {
    const img = previewImages[i];
    document.getElementById("preview").innerHTML += loadImgPreviewHTML(img);
  }
}

function loadHeader() {
  let img = projects[currentID].preview_img;
  let name = projects[currentID].name;
  document.getElementById("header-mockup").innerHTML = mockupHeaderHTML(
    img,
    name
  );
}
