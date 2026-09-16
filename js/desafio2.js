const nome = document.getElementById('fnome');
const idade = document.getElementById('idade');
const salario = document.getElementById('salario');
const btn_enviar = document.getElementById('btn-enviar');
const mensagem1 = document.getElementById('mensagem1');

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const NomeUsuario = nome.value;
    const idadeUsuario = parseFloat(idade.value);
    const salarioUsuario = parseFloat(salario.value);

    let resultado = '';

    if (idadeUsuario >= 21 && idadeUsuario<=65 && salarioUsuario >= 5000) {
        resultado = 'aprovado';
    } else {
        resultado = 'negado, pois seu perfil não atende aos requisitos do financiamento.';
    }

    mensagem1.textContent = `Prezado ${NomeUsuario}  o resultado da solicitação do seu financiamento foi ${resultado}`;
});