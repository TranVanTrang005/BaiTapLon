window.addEventListener("load", function () {
  //CAROUSEL
  let carousel_imgs = document.getElementById("carousel-main-img");
  let thumbs = document.querySelectorAll(".thumb-box img");
  for (let thumb of thumbs) {
    thumb.onclick = function () {
      for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("thumb-selected");
      }
      this.classList.add("thumb-selected");
      carousel_imgs.src = this.src;
      carousel_imgs.classList.remove("animate__animated");
      carousel_imgs.classList.remove("animate__fadeIn");
      setTimeout(() => {
        carousel_imgs.classList.add("animate__animated");
        carousel_imgs.classList.add("animate__fadeIn");
      }, 0.1);
    };
  }
});
