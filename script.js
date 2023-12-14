//começo mapeando o botão e a seleção de moedas.
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    // o .value é para pegar somente o valor digitado no input.
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") //resultado da conversão.

    const dolarToday = 4.90
    const euroToday = 5.30
    const libraToday = 6.21
    const pesoArgentinoToday = 0.013
    const bitcoinToday = 211.460

    /*Estrutura condicional: Agora, para cada valor de moeda, terá uma ação nesta função. */

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) //resultado da conversão sendo exibido na section (dolar neste caso)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoArgentinoToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { // o valor a ser convertido será mostrado na section com o valor digitado no input.
        style: "currency", //moeda
        currency: "BRL" //real br
    }).format(inputCurrencyValue) //aqui, resulta a moeda brasileira convertida na section (moeda estilizada)

}

function changeCurrency() {
    currencyName = document.getElementById("currency-name")
    currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euroCoin.png" //alterando valor e caminho da imagem com o ".src"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/pesoArgentino1.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }
    convertValues() //chamando a função inicial novamente para mudar automaticamente (e adequadamente) o valor convertido.
}

currencySelect.addEventListener("change", changeCurrency) //ouvinte de evento de mudanças de moeda e ícones.
convertButton.addEventListener("click", convertValues) //ouvinte de evento de clique no botão.

