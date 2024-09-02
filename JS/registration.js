window.addEventListener("load", function () {
    /*registration*/
    let reg =document.getElementById("Sign up");
    reg.onclick = function() {
        let flag= true;
        let info= document.querySelectorAll(".registration-form input, select");
        for(let x of info) {
            if(x.value=="") {
                x.placeholder="Vui lòng nhập thông tin!";
                x.style.border="2px solid red";
                flag=false;
            }
            else { 
                x.style.border= null;
            }
        }
        if(flag) {
            alert(`Chào ${info[0].value} chúng tôi đã tiếp nhận thông tin và sẽ sớm phản hồi lại bạn. Chân thành cảm ơn!`);
            document.querySelector(".registration-form").reset(); //reset form
        }
    }
});
