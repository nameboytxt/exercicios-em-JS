function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}

var testes = Array.apply(null, Array(10)).map(gerarPassword);
console.log(JSON.stringify(testes));