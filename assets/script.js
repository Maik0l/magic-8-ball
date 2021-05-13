function frase() {
    switch (Math.floor((Math.random() * 14) + 1)) {
        case 1:
            return "Certamente que sim."
        case 2:
            return "Sem dúvidas."
        case 3:
            return "Você pode contar com isso."
        case 4:
            return "Pelo que estou vendo, sim."
        case 5:
            return "Certamente."
        case 6:
            return "Sim."
        case 7:
            return "Os sinais apontam que sim."
        case 8:
            return "Pergunte novamente mais tarde."
        case 9:
            return "Não posso te contar isso agora."
        case 10:
            return "Concentre-se e pergunte novamente."
        case 11:
            return "Não conte com isso."
        case 12:
            return "Minha resposta é não."
        case 13:
            return "Muito difícil de acontecer."
        case 14:
            return "Minhas fontes dizem que não"
    }
}

function revelarFuturo() {
    let main = document.getElementById("main")
    let div = document.getElementById("divMae");
    let resultado = document.createElement("div");
    resultado.classList.add("futuro");
    const divs = document.getElementsByClassName("futuro");
        if (divs.length < 1) {
            let texto = document.createElement("p");
            texto.innerText = frase();
            resultado.appendChild(texto);
            divMae.appendChild(resultado);
            main.appendChild(div);
        }
}

const limpar = () => {
    document.getElementById("duvida").value = '';
    let divlimpar = document.getElementById("divMae");
    divlimpar.innerHTML = "";
    
}

botao = document.getElementById("btn");
botao.addEventListener("click", revelarFuturo)

resetar = document.getElementById("resetar");
resetar.addEventListener("click", limpar)