window.onload = function() {
    /*nav*/
    let img = document.getElementById("ads-image");
    let inputs = document.querySelectorAll("input[type=radio]");
    function notCheck(im) {
        for(let input of inputs){
            if(input !== im)
                input.checked = false;
        } 
    }
    function animeted() {
        // img.classList.add("onclick-slide");
        // setTimeout(function() {
        //     img.classList.remove("onclick-slide");
        // }, 500);
        img.classList.toggle("onclick-slide");
    }

     //timeChange
     let count1 = 0;
     function changeImg() {
        count1=(count1+1)%3;
        img.src = `image/tuyensinh_${count1}.png`;
        animeted();
        inputs[count1].checked=true;
        notCheck(inputs[count1]);
         
     }
     setInterval(changeImg,5000);

    //click
    for(let input of inputs){
        input.onclick=function() {
            count1=this.value;
            notCheck(this);
            img.src = `image/tuyensinh_${this.value}.png`;
            //
            animeted();
        }
    } 
   

    /*registration*/

    let reg =document.getElementById("Sign up");
    let info= document.querySelectorAll(".registration-form input, select");
    let count2= 0;
    reg.onclick = function() {
        for(let x of info) {
            if(x.value=="") {
                x.placeholder="Vui lòng nhập thông tin!";
                x.style.border="2px solid red"
            }
            else { 
                count2++;
                x.style.border= null;
            }
        }
        if(count2==6) {
            alert(`Chào ${info[0].value} chúng tôi đã tiếp nhận thông tin và sẽ sớm phản hồi lại bạn. Chân thành cảm ơn!` );
        }
    }
}
