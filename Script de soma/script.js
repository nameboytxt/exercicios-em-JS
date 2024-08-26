var numeroInicial = prompt("Informe um número inicial... "); // var utilizado para definir uma varialvel
var sinal = prompt("Informe um sinal..."); // prompt utilizado para abrir um 'prompt' 

while(sinal != '+' && sinal != '-' && sinal != '/' && sinal != '*'){ // ( != ) esse sinal é para definir se é igual ou não ao que você está pedindo...  
    alert("Por favor informe um sinal válido!");
    var sinal = prompt("Informe um sinal...");
}

var numeroFinal = prompt("Informe um número final");

numeroInicial = parseInt(numeroInicial);
numeroFinal = parseInt(numeroFinal); // parseInt utilizado para converter uma 'string' para 'number'

var resultadoFinal = 0; 

if(sinal == '+'){
    resultadoFinal = numeroInicial + numeroFinal;
}else if(sinal == '-'){
    resultadoFinal = numeroInicial - numeroFinal;
}else if(sinal == '*'){
    resultadoFinal = numeroInicial * numeroFinal;
}else if(sinal == '/'){
    resultadoFinal = numeroInicial / numeroFinal;
}

alert("Valor final é: "+ resultadoFinal); // alert exibe um alerta na pagina