function modificaform(tipo) {
    if (tipo == "profesional"){
        document.getElementById("bloqueprof").className = "d-block";
    } else{
        document.getElementById("bloqueprof").className = "d-none";
    }
}