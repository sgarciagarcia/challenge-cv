
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


function reverseScroll() {
   
  for (let i = 1; i<30; i++){
    let main = document.getElementById("main");
    let mainStyle = window.getComputedStyle(main);
    let mainBottom = mainStyle.getPropertyValue('bottom');
    let numero = Number(mainBottom.slice(0,-2));
    let finalBottom = numero - [i];
    let stringBottom = finalBottom.toString();
    main.style.bottom = stringBottom + "px";
    console.log(mainBottom - [i])
  }
    
    
    
}
