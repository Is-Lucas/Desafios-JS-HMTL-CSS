const nome = document.getElementById('fnome');
const idade = document.getElementById('idade');
const btn_enviar = document.getElementById('btn-enviar');
const mensagem1 = document.getElementById('mensagem1');

btn_enviar.addEventListener('click', (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    const NomeUsuario = nome.value;
    const idadeUsuario = parseFloat(idade.value);

    let resultado = '';

    if (idadeUsuario <= 12 ) {
        resultado = 'Pediátrico'
    } else if (idadeUsuario >=13 && idadeUsuario <=59){
        resultado = 'Normal'
    } else if (idadeUsuario >=60){
        resultado = 'Prioritário'
    }

    mensagem1.textContent = `Paciente: ${NomeUsuario}
    Tipo de atendimento: ${resultado}`;
});