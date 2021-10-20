const calcularAhorro = (valorNeto) => valorNeto*0.25

const calcularDeuda = (valorNeto) => valorNeto*0.40

const calculoResultados = () =>{
    var sueldoMensual = parseInt(document.getElementById("InputSM").value)
    var gastoFijo = parseInt(document.getElementById("InputGF").value)

    if(sueldoMensual < gastoFijo) alert("El Gasto Fijo no puede ser menor al Sueldo Mensual")

    var valorNeto = sueldoMensual-gastoFijo
    var ahorroSug = calcularAhorro(valorNeto)
    valorNeto -= ahorroSug
    var deudaSug = calcularDeuda(valorNeto)
    valorNeto -= deudaSug

    var inputAS= document.getElementById("InputAS")
    var inputES= document.getElementById("InputES")
    var inputLG= document.getElementById("InputLG")

    inputAS.value = `🤑 $${ahorroSug}`
    inputES.value = `☠ $${deudaSug}`
    inputLG.value = `😎 $${valorNeto}`
}