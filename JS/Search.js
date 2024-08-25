window.addEventListener("load", function() {
    let txt = this.document.getElementById("search");
    let btn = this.document.querySelector(".searchButton");
    let nameFaculty = this.document.querySelectorAll(".faculty h3");
    let scrollArr= [];
    btn.onclick = function() {
        for(let m of nameFaculty) {
            let info = m.innerText.toLowerCase();
            if(info.includes(txt.value.toLowerCase()) === true) {
               scrollArr.push(m);
            }
        }
        function scrollQueue() {
            if(scrollArr.length > 0){
                let x = scrollArr.shift();
                blinkBorder(x.parentElement);
                scrollToFaculty(x.parentElement.parentElement.id);
                setTimeout(scrollQueue,1800);
            }
        }
        scrollQueue();
    }
    //blink
    function blinkBorder(element) {
        let count = 0;
        let maxBlinks = 3;
    
        let interval = setInterval(function() {
            if (count >= maxBlinks * 2) {
                clearInterval(interval);
            } else {
                element.style.border = (count % 2 === 0) ? "3px solid red" : "none";
                count++;
            }
        }, 300); 
    }
    //scroll
    function scrollToFaculty(id) {
        let target = document.getElementById(id);
        target.scrollIntoView({ behavior: "smooth" });
    }
})

