
const calcular= document.getElementById("calcular");


function imc(){
    
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("Altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorimc = (peso / (altura * altura)).toFixed(2); //tofixed usado para arredondar
        let classificacao = "";
        if(valorimc < 18.5){
            classificacao = "Você está abaixo do peso";
        }else if (valorimc < 25){
            classificacao = "com o peso ideal, parabéns!";
        }else if(valorimc < 30){
            classificacao = "levemente acima do peso";
        }
        else if(valorimc < 35){
            classificacao = "obesidade grau 1";
        }
        else if(valorimc < 40){
            classificacao = "obesidade grau 2";
        }else{
            classificacao = "obesidade grau 3, cuidado!!";
        }

    resultado.textContent = `${nome} seu imc é ${valorimc} e você está ${classificacao}`

    }else{
        resultado.textContent = "Preencha todos os campos!!!";
    }

}


calcular.addEventListener('click', imc);