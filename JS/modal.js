window.addEventListener("load", function () {
  //MODAL

  let modal = document.getElementById("myModal");
  modal.style.display = "none";

  let contact = document.querySelector(".contact");
  let close = document.querySelector(".close");
  let submit = document.querySelector(".submit");
  let abort = document.querySelector(".abort");

  //TOGGLE MODAL
  contact.onclick = function () {
    modal.classList.toggle("show");
  };
  close.onclick = function () {
    modal.classList.toggle("show");
  };
  abort.onclick = function () {
    modal.classList.toggle("show");
  };

  //SUBMIT
  submit.onclick = function () {
    let flag = true;
    let infos = document.querySelectorAll(".info");
    for (let info of infos) {
      if (info.value === "") {
        info.placeholder = "Vui long nhap thong tin";
        info.style.border = "2px solid red";
        flag = false;
      } else {
        info.style.border = null;
      }
    }
    if (flag === true) {
      window.alert("Đã gửi thành công");
      document.getElementById("contact-form").reset(); //reset form
      modal.classList.toggle("show");
    }
  };

  //MODAL
});
