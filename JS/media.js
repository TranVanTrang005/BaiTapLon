window.addEventListener("load", function() {
    //nav
    let showmenu = this.document.getElementById("showmenu");
    let menu = this.document.querySelector("nav");
    let search= this.document.getElementById("menuSearch");
    showmenu.onclick =function() {
      showmenu.classList.toggle("active");
      menu.classList.toggle("block");
      search.classList.toggle("block")
    }
});
