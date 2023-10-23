let nome = prompt("Sejá bem-vindo. Como podemos te chamar?");
const perfil = document.querySelector(".boasvindas");

perfil.innerHTML = "Olá, " + nome;

const opc = document.querySelector(".opcoes");
let seletor = 0;
let limite = 0;

function deslizar(e){
    if(e == "right" && limite <= 2){
        limite = limite + 1
        seletor = seletor + 100;
        opc.style.transform = "translateX(-" + seletor + "px)";
    }
    if(e == "left" && seletor != 0){
        limite = limite - 1
        seletor = seletor - 100;
        opc.style.transform = "translateX(-" + seletor + "px)";
    }
};
