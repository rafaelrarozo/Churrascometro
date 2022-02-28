/*
carne - 400gr  por pessoa se duracao >6 será 650gr
cerva - 1200ml por pessoa se duracao >6 será 2000ml
refri - 1000ml por pessoa se duracao >6 será 1500ml*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");
function caucular() {
     let adultos = inputAdultos.value;
     let criancas = inputCriancas.value;
     let duracao = inputDuracao.value;

     if (duracao <= 6) {
          quantaCarne = adultos * 400+criancas*200;
          quantaCerva = adultos * 1200;
          quantoRefri = criancas * 1000;
     } else {
          quantaCarne = adultos * 650+criancas*200;
          quantaCerva = adultos * 2000;
          quantoRefri = criancas * 1500;
     }
     resultado.innerHTML = `<p>${quantaCarne / 1000} Kg de carne</p>`;
     resultado.innerHTML += `<p>${quantaCerva / 1000} Litros de ceveja</p`;
     resultado.innerHTML += `<p>${quantoRefri / 1000} Litros de Bebida não alcoólica</p`;
}


