window.onscroll = function() {
    let myButton = document.querySelector(".GoTop");
    if ( document.documentElement.scrollTop > 100) {
        myButton.classList.add("show");
    } else {
        myButton.classList.remove("show");
    }
    document.querySelector(".GoTop").onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
};