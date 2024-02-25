const form = document.querySelector(".fale-conosco")
    const mascara = document.querySelector(".marcara-form")


  
    function mostrarForm() {
        form.style.left = "50%"
        form.style.transform = "translatex(-50%)"
        mascara.style.visibility = "visible"
    }

    function esconderForm(){
        form.style.left = "-420px"
        form.style.transform = "translatex(0)"
        mascara.style.visibility = "hidden"
    }