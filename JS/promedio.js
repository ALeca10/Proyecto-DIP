function promedio(v1,v2,v3,v4,v5) {
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var v4 = document.getElementById("n4").value;
    var v5 = document.getElementById("n5").value;
    var prom = Math.round((parseFloat(v1) + parseFloat(v2) + parseFloat(v3) + parseFloat(v4) + parseFloat(v5))/5);
    document.getElementById("calcular").value = prom;
    
}

function enviar(){
    location.reload(true);
}