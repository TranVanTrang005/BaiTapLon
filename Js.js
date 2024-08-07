window.onload = function() {
    let img = document.getElementById("ads-image");
    let inputs = document.querySelectorAll("input[type=radio]");

    for(let input of inputs){
        input.onclick=function() {
            for(let input of inputs){
                if(input !== this)
                    input.checked = false;
            } 
            img.src = `image/tuyensinh_${this.value}.png`;
        }
    } 
}
