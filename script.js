/* ===== REVEAL ON SCROLL ===== */
function reveal(){
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(r=>{
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    const visible = 100;

    if(elementTop < windowHeight - visible){
      r.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
/* web */
function openPortfolio(){
  document.getElementById("webModal").style.display="block";
}
function closeWeb(){
  document.getElementById("webModal").style.display="none";
}

/* multimedia */
function openMM(){
  document.getElementById("multiModal").style.display="block";  
}
function closeMM(){
  document.getElementById("multiModal").style.display="none";
}

/* machine learning */
function openML(){
  document.getElementById("mlModal").style.display="block";
}
function closeML(){
  document.getElementById("mlModal").style.display="none";
}
function zoomImage(img){
  document.getElementById("zoomModal").style.display="block";
  document.getElementById("zoomedImg").src=img.src;
}
function closeZoom(){
  document.getElementById("zoomModal").style.display="none";
}


/* ===== GALLERY FUNCTIONS ===== */
function openGallery(){
  document.getElementById("galleryModal").style.display="block";
}

function closeGallery(){
  document.getElementById("galleryModal").style.display="none";
}

/* Close if click outside image */
window.addEventListener("click", function(e){
  const modal = document.getElementById("galleryModal");
  if(e.target === modal){
    modal.style.display="none";

  }

});