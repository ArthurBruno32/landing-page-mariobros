const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}
function esconderForm(){
    form.style.top = "30%"
    form.style.left = "-315px"
    mascara.style.visibility = "hidden"
}