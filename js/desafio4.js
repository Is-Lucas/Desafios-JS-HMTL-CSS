const mensagem = document.getElementById("mensagem");
const mensagem1 = document.getElementById("mensagem1");

const radios = document.querySelectorAll('input[name="tipo-veiculo"]');

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        let preco = 0;

        switch (radio.value) {
            case "Moto":
                preco = 5;
                break;
            case "Carro":
                preco = 12;
                break;
            case "Caminhao":
                preco = 30;
                break;
        }

        mensagem1.textContent = `R$ ${preco.toFixed(2)}`;
    });
});