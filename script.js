//começo mapeando o botão e a seleção de moedas.
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    // o .value é para pegar somente o valor digitado no input.
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") //resultado da conversão.

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ARS-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const pesoArgentinoToday = data.ARSBRL.high
    const bitcoinToday = data.BTCBRL.high
    const realToday = 1.00


    /*Estrutura condicional: Agora, para cada valor de moeda, terá uma ação nesta função. */

    //de Real para Todas as moedas.
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoArgentinoToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    //de Todas as moedas para Real.
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }
    if (currencySelectToConvert.value == "ars" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * pesoArgentinoToday)
    }
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    // Dolar para todas as moedas 
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarToday / libraToday)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolarToday / libraToday)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * dolarToday / pesoArgentinoToday)
    }

    /* Euro para todas as moedas */
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / euroToday / bitcoinToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * euroToday / libraToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * euroToday / pesoArgentinoToday)
    }

    /* Bitcoin para todas as moedas */
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * bitcoinToday / dolarToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * bitcoinToday / euroToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * bitcoinToday / libraToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * bitcoinToday / pesoArgentinoToday)
    }

    //de Libra para todas as moedas.
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * libraToday / pesoArgentinoToday)
    }
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * libraToday / bitcoinToday)
    }
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * libraToday / euroToday)
    }
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday / dolarToday)
    }

    //de Peso Argentino para todas as moedas.
    if (currencySelectToConvert.value == "ars" && currencySelect.value == "peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "ars" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * pesoArgentinoToday / dolarToday)
    }
    if (currencySelectToConvert.value == "ars" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * pesoArgentinoToday / euroToday)
    }
    if (currencySelectToConvert.value == "ars" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * pesoArgentinoToday / bitcoinToday)
    }
    if (currencySelectToConvert.value == "ars" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * pesoArgentinoToday / libraToday)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameToConverter = document.querySelector(".currency")
    const currencyImageToConverter = document.getElementById("currency-image")


    //converter de
    if (currencySelectToConvert.value == "usd") {
        currencyNameToConverter.innerHTML = "Dólar"
        currencyImageToConverter.src = "./assets/usa.png"
    }
    if (currencySelectToConvert.value == "brl") {
        currencyNameToConverter.innerHTML = "Real"
        currencyImageToConverter.src = "./assets/brasil 2.png"
    }
    if (currencySelectToConvert.value == "eur") {
        currencyNameToConverter.innerHTML = "Euro"
        currencyImageToConverter.src = "./assets/euroCoin.png"
    }
    if (currencySelectToConvert.value == "ars") {
        currencyNameToConverter.innerHTML = "Peso Argentino"
        currencyImageToConverter.src = "./assets/pesoArgentino1.png"
    }
    if (currencySelectToConvert.value == "gbp") {
        currencyNameToConverter.innerHTML = "Libra"
        currencyImageToConverter.src = "./assets/libra 1.png"
    }
    if (currencySelectToConvert.value == "btc") {
        currencyNameToConverter.innerHTML = "Bitcoin"
        currencyImageToConverter.src = "./assets/bitcoin 1.png"
    }

    //converter para
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
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
convertButton.addEventListener("click", convertValues) //ouvinte de evento de clique no botão.
currencySelect.addEventListener("change", changeCurrency) //ouvinte de evento de mudanças de moeda e ícones.
currencySelectToConvert.addEventListener("change", changeCurrency)

