window.addEventListener("load", function() {
    let showmenu = this.document.getElementById("showmenu");
    let menu = this.document.querySelector("nav");
    showmenu.onclick =function() {
      showmenu.classList.toggle("active");
      menu.classList.toggle("block");
    }
});
