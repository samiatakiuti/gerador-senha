const campoSenha = document.getElementById("senha");
const tamanho = document.getElementById("tamanho");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const especiais = document.getElementById("especiais");

const botaoGerar = document.getElementById("gerar");
const botaoLimpar = document.getElementById("limpar");

const mensagem = document.getElementById("mensagem");

function gerarSenha() {

    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumericos = "0123456789";
    const caracteresEspeciais = "!@#$%&*+-?";

    let caracteres = [];

    if (maiusculas.checked) {
        caracteres.push(letrasMaiusculas);
    }

    if (minusculas.checked) {
        caracteres.push(letrasMinusculas);
    }

    if (numeros.checked) {
        caracteres.push(caracteresNumericos);
    }

    if (especiais.checked) {
        caracteres.push(caracteresEspeciais);
    }

    if (caracteres.length === 0) {
        mensagem.textContent = "Selecione pelo menos uma categoria!";
        mensagem.style.color = "red";
        campoSenha.value = "";
        return;
    }

    let quantidade = Number(tamanho.value);

    if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > 50) {
        mensagem.textContent = "Escolha um tamanho entre 1 e 50!";
        mensagem.style.color = "red";
        return;
    }

    caracteres = caracteres.join("");

    let senha = "";

    for (let i = 0; i < quantidade; i++) {

        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;

    mensagem.textContent = "Senha gerada com sucesso!";
    mensagem.style.color = "green";

}

function limparSenha() {

    campoSenha.value = "";
    mensagem.textContent = "";

}

botaoGerar.addEventListener("click", gerarSenha);

botaoLimpar.addEventListener("click", limparSenha);
