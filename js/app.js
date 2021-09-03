
let pontosCorinthians = 0, pontosPalmeiras = 0;

let btnVitoriaCorinthians = document.querySelector("#vitoria-corinthians");
let btnVitoriaPalmeiras = document.querySelector("#vitoria-palmeiras");
let btnEmpateCorinthians = document.querySelector("#empate-corinthians");
let btnEmpatePalmeiras = document.querySelector("#empate-Palmeiras");
let btnDerrotaCorinthians = document.querySelector("#derrota-corinthians");
let btnDerrotaPalmeiras = document.querySelector("#derrota-palmeiras");



btnVitoriaCorinthians.onclick = () => {
    pontosCorinthians += (CalcularPontos("vitória"));
    AtualizarTabelaPontos("Corinthians");

};

let btnEmpatesCorinthians = document.querySelector("#empate-corinthians");

btnEmpateCorinthians.onclick = () => {
    pontosCorinthians += (CalcularPontos("empate"));
    AtualizarTabelaPontos("Corinthians");

};

let btnDerrotasCorinthians = document.querySelector("#derrota-corinthians");

btnDerrotasCorinthians.onclick = () => {
    pontosCorinthians += (CalcularPontos("derrota"));
    

    AtualizarTabelaPontos("Corinthians");

   
};

let btnVitoriasPalmeiras = document.querySelector("#vitoria-palmeiras");

btnVitoriasPalmeiras.onclick = () => {
    pontosPalmeiras += (CalcularPontos("vitória"));
    
    AtualizarTabelaPontos("Palmeiras");

};

let btnEmpatesPalmeiras = document.querySelector("#empate-palmeiras");
btnEmpatesPalmeiras.onclick = () => {
    pontosPalmeiras += (CalcularPontos("empate"));
    AtualizarTabelaPontos("Palmeiras");
    Empates();
   

};
let btnDerrotasPalmeiras = document.querySelector("#derrota-palmeiras");

btnDerrotasPalmeiras.onclick = () => {
    pontosPalmeiras += (CalcularPontos("derrota"));
    

    AtualizarTabelaPontos("Palmeiras");

   
};



function CalcularPontos(resultado) {
    if (resultado == "vitória") {
        return 3;

    }
    else 
    if (resultado == "empate") {
        return 1;
    }

    else {
        return 0;
    }
}
function AtualizarTabelaPontos(time) {
    if (time == "Corinthians") {

        document.querySelector(".pontos-corinthians").innerText = pontosCorinthians;

    } else 
    
    if (time == "Palmeiras") {
        document.querySelector(".pontos-palmeiras").innerText = pontosPalmeiras;

       
        
    }
}