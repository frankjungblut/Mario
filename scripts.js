const form = document.querySelector(".formulario-fale-conosco")
const background = document.querySelector(".mascara-formulario")

function showform(){
    form.style.left = "50%"
    form.style.transform = "TranslateX(-50%)"
    background.style.visibility = "visible"
}

function hideform(){
    form.style.left = "-300px"
    form.style.transform = "TranslateX(0)"
    background.style.visibility = "hidden"
}