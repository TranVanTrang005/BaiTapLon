window.addEventListener("load", function () {
  //add dropdown arrow because Im too lazy to paste 19 times
  let h = `<span class="dropdown-arrow"></span>`;
  let titles = document.querySelectorAll(".reason-title");
  for (let title of titles) {
    title.insertAdjacentHTML("beforeend", h);
  }

  let reasons = document.querySelectorAll(".reason-container > ul > li");
  for (let reason of reasons) {
    reason.onclick = function () {
      let tmp = reason.querySelector(".reason-text");
      tmp.classList.toggle("visible");
      let tmp2 = reason.querySelector(".dropdown-arrow");
      tmp2.classList.toggle("active");
    };
  }
});
