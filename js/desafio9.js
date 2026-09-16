const clima = document.getElementById('temperatura')
const btn_analisar = document.getElementById('btn-analisar')
const mensagem1 = document.getElementById('mensagem1')
const mensagem2 = document.getElementById('mensagem2')

btn_analisar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const temp = parseFloat(clima.value);

    let resultado = ''
    if (temp < 15) {
        resultado = 'Frio'
    } else if (temp >= 15 && temp < 29) {
        resultado = 'Agradável'
    } else if (temp >= 30) {
        resultado = 'Quente'
    } 

    mensagem1.textContent = `Temperatura informada: ${temp}°C `
    mensagem2.textContent = `Situação: ${resultado} `
})