
function nextScreen (){ //Transiciones y animaciones al pulsar Start
    let start = document.getElementById("start");
    let intro = document.getElementById("intro");
    let subtitle = document.getElementsByClassName("subtitle");
    start.classList.remove("animate__animated");
    start.classList.remove("animate__fadeIn");
    start.innerHTML="";
    start.classList.add("animate__start"); //Se modifican los estilos del botón para la transición
    document.getElementById("welcome-cv").style.display="none";
    intro.classList.add("animate__shrinkUp"); //se encoge la pantalla de bienvenida y desaparece
    intro.addEventListener("animationend", function() { //al terminar la animacion de transicion
        intro.style.display="none";
        document.getElementById("main").style.display="block";
        document.getElementById("3").style.display="block";
        document.getElementById("2").style.display="block";
        document.getElementById("1").style.display="block";
        document.getElementById("0").style.display="block";
    });
    let cero = document.getElementById("0");
    cero.addEventListener("animationend", function() {
      document.getElementById("3").style.display="none";
      document.getElementById("2").style.display="none";
      document.getElementById("1").style.display="none";
      document.getElementById("0").style.display="none";
    });
}


function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__fadeInLeft");
    } else {
      reveals[i].classList.remove("animate__fadeInLeft");
    }
  }
}

