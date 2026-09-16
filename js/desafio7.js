const nome = document.getElementById('fnome');
const idade = document.getElementById('nota');
const btn_enviar = document.getElementById('btn-enviar');
const mensagem1 = document.getElementById('mensagem1');

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const nomeFilme = nome.value;
    const notaFilme = parseFloat(nota.value);

    let resultado = '';

    if (notaFilme >= 0 && notaFilme <=4) {
        resultado = 'Ruim'
    } else if (notaFilme >=5 && notaFilme <=6){
        resultado = 'Regular'
    } else if (notaFilme >=7 && notaFilme <=8){
        resultado = 'Bom'
    } else if (notaFilme >=9 && notaFilme <=10){
        resultado = 'Exelente'
    }
    mensagem1.textContent = `${nomeFilme}
    é um filme com a classificação: ${resultado}`;
});