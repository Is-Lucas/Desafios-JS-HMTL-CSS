const nome = document.getElementById('fnome');
const idade = document.getElementById('idade');
const btn_enviar = document.getElementById('btn-enviar');
const mensagem1 = document.getElementById('mensagem1');
const mensagem2 = document.getElementById('mensagem2');
const mensagem3 = document.getElementById('mensagem3');

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const nomeUsuario = nome.value;
    const idadeUsuario = parseFloat(idade.value);

    let resultado = '';

    if (idadeUsuario <= 18) {
        resultado = 'menor de idade'
    } else{
        resultado = 'maior de idade'
    }
    mensagem1.textContent = `Olá, ${nomeUsuario}`
    mensagem2.textContent = `Você possui ${idadeUsuario}`
    mensagem3.textContent = `Você é ${resultado}`
    
})