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
    document.getElementById("preview").innerHTML += loadImgPreviewHTML(img, i);
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

function openImage(i) {
  let img = projects[currentID].images[i];
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay").innerHTML = imgOverlayHTML(img, i);
}

function closeImage() {
  document.getElementById("overlay").classList.add("d-none");
}

function nextImage(i) {
  i++;
  if (i > projects[currentID].images.length - 1) {
    i = 0;
  }
  openImage(i);
}

function previousImage(i) {
  i--;
  if (i < 0) {
    i = projects[currentID].images.length - 1;
  }
  openImage(i);
}
