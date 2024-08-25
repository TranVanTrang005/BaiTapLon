window.addEventListener("load", function() {
    /*nav*/
    // Ngăn chặn chuyển hướng
    let myLinks = document.querySelectorAll("#myLink");
    for (let link of myLinks) {
        link.onclick = function(event) {
            event.preventDefault(); 
        };
    }
    /*aside*/
    let img = document.getElementById("ads-image");
    let inputs = document.querySelectorAll("input[type=radio]");
    function notCheck(im) {
        for(let input of inputs){
            if(input !== im)
                input.checked = false;
        } 
    }
    function animated() {
        img.classList.toggle("onclick-slide");
    }

     //timeChange
     let count1 = 0;
     function changeImg() {
        count1=(count1+1)%3;
        img.src = `../image/tuyensinh_${count1}.png`;
        animated();
        inputs[count1].checked=true;
        notCheck(inputs[count1]);
         
     }
     setInterval(changeImg,5000);

    //click
    for(let input of inputs){
        input.onclick=function() {
            count1=this.value;
            notCheck(this);
            img.src = `../image/tuyensinh_${this.value}.png`;
            //
            animated();
        }
    } 
    /*aside*/
    
});