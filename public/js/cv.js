
function nextScreen (){ //Transiciones y animaciones al pulsar Start
    let start = document.getElementById("start");
    let intro = document.getElementById("intro");
    start.classList.remove("animate__animated");
    start.classList.remove("animate__fadeIn");
    start.innerHTML="";
    start.classList.add("animate__start"); //Se modifican los estilos del botón para la transición
    intro.classList.add("animate__shrinkUp"); //se encoge la pantalla de bienvenida y desaparece
    intro.addEventListener("animationend", function() {
        intro.style.display="none";
        document.getElementById("main").style.display="block";
    });
}


//Función para el reverse scroll 
//Inside onScroll function of window, increase the bottom value but in negative

$(window).on("scroll", function () {
  $(".main").css("bottom", $(window).scrollTop() * -1);

});

