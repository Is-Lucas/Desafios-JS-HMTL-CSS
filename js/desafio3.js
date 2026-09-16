const pontuacao = document.getElementById('pontuacao')
const btn_enviar = document.getElementById('btn-enviar')
const mensagem1 = document.getElementById('mensagem1')

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const pontuacaoUsuario = parseFloat(pontuacao.value);

    let resultado = '';
    if (pontuacaoUsuario >= 1000) {
        resultado = 'Diamante';
    } else if (pontuacaoUsuario >= 700 && pontuacaoUsuario < 1000) {
        resultado = 'Ouro';
    } else if (pontuacaoUsuario >= 400 && pontuacaoUsuario < 699) {
        resultado = 'Prata';
    } else if (pontuacaoUsuario >= 0 && pontuacaoUsuario < 399) {
        resultado = 'Bronze';

    } else {
        resultado = 'Pontuação inválida';
    }

    mensagem1.textContent = `Sua pontuação é ${pontuacaoUsuario} e sua classificação é ${resultado}`;
})