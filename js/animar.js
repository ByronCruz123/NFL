let animado = document.querySelectorAll(".animado");
function mostrarscroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
        let alturanimado = animado[i].offsetTop;



        if(alturanimado - 500 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}


window.addEventListener('scroll', mostrarscroll);