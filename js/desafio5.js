const pontuacao = document.getElementById('balanca')
const btn_enviar = document.getElementById('btn-enviar')
const mensagem1 = document.getElementById('mensagem1')

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const pesobalanca = parseFloat(pontuacao.value);

    let resultado = '';
    if (pesobalanca <= 1) {
        resultado = '10';
    } else if (pesobalanca >= 1.01 && pesobalanca <= 5) {
        resultado = '25';
    } else if (pesobalanca >= 5.01) {
        resultado = '50'
    }
    mensagem1.textContent = ` ${pesobalanca}Kg total a ser pago R$${resultado}.00`;
})