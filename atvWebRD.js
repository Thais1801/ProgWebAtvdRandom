function gerarTabelinha(){

    const numAle = parseInt(document.getElementById("numAle").value);
    const colunas = parseInt(document.getElementById("colunas").value);
    const numMax = parseInt(document.getElementById("numMax").value);
    const numMin = parseInt(document.getElementById("numMin").value);
    let numeros = [];
    tabelinha.innerHTML = "";

for(let i=1; i<=numAle; i++){
    numeros[i]= Math.trunc(Math.random() * (numMax - numMin + 1) + numMin);
    let item = document.querySelector("#tabelinha");

if (i % colunas === 0) {
    item.insertAdjacentHTML("beforeend", numeros[i] + "\n");
}
else{
    item.insertAdjacentHTML("beforeend", numeros[i] + "\t");
}}}