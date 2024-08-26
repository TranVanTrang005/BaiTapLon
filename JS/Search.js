window.addEventListener("load", function() {
    let btns = this.document.querySelectorAll(".searchButton");
    let nameFaculty = this.document.querySelectorAll(".faculty h3");
    let scrollArr= [];
    //scrollQueue
    function scrollQueue() {
        if(scrollArr.length > 0){
            let x = scrollArr.shift();
            blinkBorder(x.previousElementSibling);
            scrollToFaculty(x.parentElement.parentElement.id);
            setTimeout(scrollQueue,1800);
        }
    }

    for(let btn of btns) {
        btn.onclick = function() {
            let txt = btn.previousElementSibling.previousElementSibling;
            for(let m of nameFaculty) {
                let info = m.innerText.toLowerCase();
                if(info.includes(txt.value.toLowerCase()) === true) {
                   scrollArr.push(m);
                }
            }
            scrollQueue();
        }
    }
    //blink
    function blinkBorder(element) {
        let count = 0;
        let maxBlinks = 3;
        let color =[ "red", "blue", "gold"]
        let interval = setInterval(function() {
            if (count >= maxBlinks * 2) {
                clearInterval(interval);
            } else {
                element.style.border = (count % 2 === 0) ? `3px solid ${color[count%3]}` : "none";
                count++;
            }
        }, 300); 
    }
    //scroll
    function scrollToFaculty(id) {
        let target = document.getElementById(id);
        target.scrollIntoView({ behavior: "smooth", block: 'center' });
    }
})

