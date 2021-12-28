function nextScreen (){
    let start = document.getElementById("start");
    let intro = document.getElementById("intro");
    start.classList.remove("animate__animated");
    start.classList.remove("animate__fadeIn");
    start.innerHTML="";
    start.classList.add("animate__start");
    intro.classList.add("animate__shrinkUp");
    intro.addEventListener("animationend", function() {
        intro.style.display="none";
    });
}

