document.querySelectorAll("main article").forEach((elemento) => {
    elemento.classList.add("elementosOcultos");
});
const observador = new IntersectionObserver((resultados) => {
    resultados.forEach((resultado) => {
        if (resultado.isIntersecting){
            resultado.target.classList.add("elementosVisibles");
            resultado.target.classList.remove("elementosOcultos");
        }
        else {
            resultado.target.classList.remove("elementosVisibles");
            resultado.target.classList.add("elementosOcultos");
        }
    })
});
document.querySelectorAll("main article").forEach((elemento) => {
    observador.observe(elemento);
});