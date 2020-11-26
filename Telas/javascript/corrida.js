function redirecionar(evt) {
    if (evt.target.value === "Cadastrar Veiculo") {
        window.location.href = "../Cadastrar_veiculo/cadastrov.html";
    }
}

function handleKeyPress(e){
    var key=e.keyCode || e.which;
     if (key==13){
        window.location.href = "consultar corrida.html";
     }
}