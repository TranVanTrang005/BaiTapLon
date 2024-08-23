window.addEventListener("load", function () {
  let locations = document.querySelectorAll(".location");
  let mainscreen = document.getElementById("mainscreen");

  for (let location of locations) {
    location.onclick = function () {
      let value = this.firstElementChild.getAttribute("value"); //lay thuoc tinh value trong con dau tien cua div (vi ban than div ko co value)
      mainscreen.src = value;
    };
  }
});
