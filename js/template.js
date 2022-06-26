function contentBoxHTML(i) {
  return /*html*/ `
    <div class="content-box">
        <div class="content-img" id="img${i}" onmouseleave="hideOverlay(${i})">
            <img onmouseenter="showOverlay(${i})" src="${projects[i].preview_img}" alt="">
        </div>
        <div>
            <h4>${projects[i].name}</h4>
            <p>${projects[i].description}</p>
            <div class="tools" id="tools${i}">
                <!-- loaded tools -->
            </div>
        </div>
    </div>
    `;
}

function contentBoxDesignHTML(i) {
  return /*html*/ `
    <a href="ui_design.html" class="content-box" onclick="setId(${i})">
        <div class="content-img" id="img${i}">
            <img src="${projects[i].preview_img}" alt="">
        </div>
        <div>
            <h4>${projects[i].name}</h4>
            <p>${projects[i].description}</p>
            <div class="tools" id="tools${i}">
                <!-- loaded tools -->
            </div>
        </div>
    </a>
    `;
}

function toolsHTML(img) {
  return /*html*/ `
    <img class="tool-icon" src="${img}" alt="">
    `;
}

function creativeImgHTML(i) {
  return /*html*/ `
 <div class="creative-img" id="img${i}" onmouseleave="hideOverlay(${i})">
     <img onmouseenter="showOverlay(${i})" src="${projects[i].preview_img}" alt="">
 </div>
 `;
}

function overlayLinksHTML(i) {
  let linkWebsite = projects[i].link_website;

  return /*html*/ `
    <div class="overlay-links">
       <a href="link1" target="_blank">
        <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	        viewBox="0 0 32.6 31.8" xml:space="preserve">
        <path class="st0" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8
	        c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4
	        c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7
	        c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4
	        c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5
	        C32.6,7.3,25.3,0,16.3,0z"/>
        </svg></a> 
        <div class="vertical-line"></div>
       <a href="${linkWebsite}" target="_blank">
       <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	        viewBox="0 0 493 493.9" xml:space="preserve">
        <g>
	        <path class="st0" d="M246.5,0.5C110.5,0.5,0.1,111,0.1,246.9c0,136,110.4,246.4,246.4,246.4c135.9,0,246.4-110.4,246.4-246.4
		        C492.9,110.9,382.4,0.5,246.5,0.5L246.5,0.5z M257.7,26.7c7.3,2.2,14.6,6.7,22,13.6c11.1,10.4,21.7,26.3,30.8,46.4
		        c3.1,6.8,6,14.2,8.6,21.9h-61.4L257.7,26.7z M235.3,26.7v81.9h-61.4c2.7-7.7,5.6-15.1,8.6-21.9c9.1-20.1,19.7-36,30.8-46.4
		        C220.6,33.4,227.9,29,235.3,26.7L235.3,26.7z M192.6,29.4c-11.7,12.6-21.9,28.9-30.5,48.1c-4.3,9.7-8.3,20.1-11.9,31.1H70.2
		        C100.5,70,143.3,41.6,192.6,29.4L192.6,29.4z M300.4,29.4c49.2,12.1,92.1,40.5,122.4,79.2h-80.1c-3.5-11-7.5-21.4-11.8-31.1
		        C322.2,58.3,312.1,42,300.4,29.4L300.4,29.4z M54.7,131h89.2c-7.9,31.4-12.6,66.9-13.4,104.7H22.8C24.6,197.5,36.1,161.8,54.7,131
		        L54.7,131z M167.1,131h68.2v104.7h-82.4C153.7,197.5,158.9,161.7,167.1,131L167.1,131z M257.7,131h68.2
		        c8.2,30.7,13.3,66.4,14.1,104.7h-82.4V131z M349.1,131h89.2c18.6,30.8,30.1,66.5,31.9,104.7H362.4
		        C361.6,197.9,356.9,162.4,349.1,131L349.1,131z M22.8,258.1h107.7c0.8,37.2,5.4,72.2,13,103.3H53.8
		        C35.7,330.9,24.6,295.7,22.8,258.1L22.8,258.1z M152.9,258.1h82.4v103.3h-68.6C158.7,331,153.7,295.8,152.9,258.1L152.9,258.1z
		         M257.7,258.1H340c-0.8,37.7-5.8,72.9-13.8,103.3h-68.6L257.7,258.1z M362.4,258.1h107.8c-1.8,37.6-13,72.8-31.1,103.3h-0.1h-89.6
		        C357.1,330.3,361.7,295.3,362.4,258.1L362.4,258.1z M69.1,383.8h80.7c3.7,11.6,7.8,22.5,12.3,32.5c8.6,19.2,18.8,35.5,30.5,48.1
		        C142.7,452.1,99.5,423.2,69.1,383.8L69.1,383.8z M173.4,383.8h61.9v83.3c-7.3-2.2-14.6-6.7-21.9-13.6
		        c-11.1-10.4-21.7-26.3-30.8-46.4C179.3,399.9,176.2,392.1,173.4,383.8L173.4,383.8z M257.7,383.8h61.9c-2.8,8.3-5.9,16.1-9.1,23.4
		        c-9.1,20.1-19.7,36-30.8,46.4c-7.3,6.9-14.6,11.4-22,13.6L257.7,383.8z M343.1,383.8h80.8c-30.4,39.4-73.7,68.3-123.5,80.6
		        c11.7-12.6,21.9-28.9,30.5-48.1C335.4,406.3,339.5,395.4,343.1,383.8L343.1,383.8z"/>
        </g>
        </svg>
       </a>
    </div>
    `;
}

function loadImgHTML(i) {
  return /*html*/ `
    <img  onmouseenter="showOverlay(${i})" src="${projects[i].preview_img}" alt="">
    `;
}

function overlayProjectNameHTML(i) {
  return /*html*/ `
    <div class="overlay-links">
       <p class="creative-overlay-text">${projects[i].name}</p>
    </div>
    `;
}

function loadImgPreviewHTML(img, i) {
  return /*html*/ `
    <img class="preview-content-img" onclick="openImage(${i})" class="preview-img" src="${img}" alt="">
    `;
}

function mockupHeaderHTML(img, name) {
  return /*html*/ `
    <img class="header-mockup-img" src="${img}" alt="">
    <div class="dark-overlay"></div>
    <h2 class="preview-name">${name}</h2>
    `;
}

function imgOverlayHTML(img, i) {
  return /*html*/ `
    <div class="img-info">
        <img class="icon close-icon" onclick="closeImage(${i})" src="img/icons/close.svg" alt="">
    </div>
    <div class="img-change">
        <img class="arrow-left icon" src="img/icons/arrow_left.svg" alt="" onclick="previousImage(${i})">
        <img class="arrow-right icon" src="img/icons/arrow_right.svg" alt="" onclick="nextImage(${i})">
    </div>
    <img class="overlay-img" src="${img}" alt="">
    `;
}
