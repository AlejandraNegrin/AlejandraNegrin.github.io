document.querySelector("#boton-calcular").addEventListener("click", function(){
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;  
    const imc = calcularIMC(peso, altura);
    let evaluacion;

    if (imc >= 18.5 && resultado <= 24.9){
       evalucion="normal";
    } else if (imc >= 25.0 && resultado <= 29.9){
        evalucion="sobrepeso";
    } else if (imc >= 30.0){
        evaluacion="obesidad";
    } else {
        evaluacion="bajo peso";
    }
    
    document.querySelector("#resultado").innerHTML=`${imc.toFixed(1)} (${evaluacion})`;

});

function calcularIMC(peso, altura){
    const imc = peso / (altura**2);
    return imc; 
}

