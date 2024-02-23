export const IMC = (weight, height) => {
    let ImcCalc= weight / ((height / 100) ** 2)
    return ImcCalc
}

export function notNumber(value){
    return isNaN(value)
}