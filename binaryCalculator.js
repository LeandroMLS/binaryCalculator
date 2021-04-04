let result = document.querySelector('#res')
let operation = ""
let firstValor = ""
let secondValor = ""
let answer = ""

function showOnScreen(num) {
    if (num.innerHTML == 1) {
        result.innerHTML += "1"
    } else {
        result.innerHTML += "0"
    }
}

function cleanScreen() {
    result.innerHTML = ""
}

function setOperation(signal) {
    firstValor = result.innerHTML
    switch (signal.innerHTML) {
        case "+":
            operation = "Sum"
            break
        case "-":
            operation = "Sub"
            break
        case "*":
            operation = "Mul"
            break
        default:
            operation = "Div"
    }
    result.innerHTML += signal.innerHTML
}

function calculator() {
    secondValor = /[\*\/\+\-](\d+)/i.exec(result.innerHTML)[1]

    firstValor = firstValor.split("")
    secondValor = secondValor.split("")

    firstValor = firstValor.reverse()
    secondValor = secondValor.reverse()

    for (let i in firstValor) { firstValor[i] = firstValor[i] * (2 ** i) }
    let newFirstValor = firstValor.reduce((accumulator, currentValue) => accumulator + currentValue)

    for (let i in secondValor) { secondValor[i] = secondValor[i] * (2 ** i) }
    let newSecondValor = secondValor.reduce((accumulator, currentValue) => accumulator + currentValue)

    switch (operation) {
        case "Sum":
            answer = newFirstValor + newSecondValor
            break
        case "Sub":
            answer = newFirstValor - newSecondValor
            break
        case "Mul":
            answer = newFirstValor * newSecondValor
            break
        default:
            answer = newFirstValor / newSecondValor
    }
    let binaryAnswer = []
    binaryAnswer.push(parseInt(answer % 2))
    do {
        answer = answer / 2
        binaryAnswer.push(parseInt(answer % 2))
    } while (answer / 2 >= 1)

    binaryAnswer = binaryAnswer.reverse().join("")
    result.innerHTML = binaryAnswer
}