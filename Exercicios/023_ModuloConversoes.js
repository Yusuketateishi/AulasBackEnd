const celciusFahrenheit = (celsius) => {
    const calculoFah = (celsius * 1.8) + 32;
    const returFah = {
        Fahrenheit: calculoFah,
        celsius: celsius
    }
    return returFah;
}

const QuilometrosMilhsd = (Km) => {
    const calculoMilh = Km / 1.6
    const returnMilh = {
        Milhas: calculoMilh,
        Quilometros: Km
    }
    return returnMilh;
}

module.exports = {celciusFahrenheit , QuilometrosMilhsd}