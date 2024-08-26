//var anoAtual = prompt("Informe o ano atual:");
var anoAtual = 2024
var anoNascimento = prompt("Informe a sua data de nascimento:");

while(anoNascimento >= 2024){
    alert("Por favor informe um ano valido!")
    var anoNascimento = prompt("Informe a sua data de nascimento:");
}

alert("A idade é: "+(anoAtual-anoNascimento));

 