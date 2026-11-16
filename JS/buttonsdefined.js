document.getElementById("continuar").addEventListener("click", continuar);
function continuar() {
    localStorage.setItem("advertenciaAceptada", "true");
    document.querySelector(".advertencia").classList.add("cerrar");
    document.querySelector(".advertencia").addEventListener("transitionend", function closeBlur(){
        document.querySelector(".advertencia-container").classList.add("cerrar");
    })
    document.querySelector(".advertencia-container").addEventListener("transitionend", function triggerAnimations(){
        setTimeout(function delay() {
            document.body.classList.remove("pausado");
        }, 100);
    });
}
if (localStorage.getItem("advertenciaAceptada") == "true"){
    document.querySelector(".advertencia-container").style.display = "none";
}
else {
    document.body.classList.add("pausado");
}