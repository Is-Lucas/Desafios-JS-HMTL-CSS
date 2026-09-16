const aluno = document.getElementById('aluno');
const media = document.getElementById('media');
const frequencia = document.getElementById('frequencia');
const btn_enviar = document.getElementById('btn-enviar');
const mensagem1 = document.getElementById('mensagem1');

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const nomeAluno = aluno.value;
    const mediaAluno = parseFloat(media.value);
    const frequenciaAluno = parseFloat(frequencia.value);

    let resultado = '';

    if (mediaAluno >= 9 && frequenciaAluno >= 90) {
        resultado = 'Aprovado para bolsa integral';
    } else if (mediaAluno >= 7 && frequenciaAluno >= 75) {
        resultado = 'Aprovado para bolsa parcial';
    } else if (mediaAluno < 7 && frequenciaAluno >= 75) {
        resultado = 'Sem bolsa';
    } else {
        resultado = 'Reprovado por frequência';
    }

    mensagem1.textContent = `Aluno: ${nomeAluno}  Média: ${mediaAluno}  Resultado: ${resultado}`;
});