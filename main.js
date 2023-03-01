// Se declaran las variables.
const OPC0 = 0;
const OPC1 = 1;
const OPC2 = 2;
const OPC3 = 3;
const OPC4 = 4;
let menu = true;
let saldo = 27000;
let interes = 84;

//se declaran las funciones.

//funciones extraer tiene como parametros la variable saldo y la variable extraccion que se obtiene por medio del prompt.
//por lo que la funcion extrar crea una nueva variable llamada nuevosaldo que restara el saldo por el valor ingresado por el usuario.
function extraer(saldo, extraccion) {
    let nuevoSaldo = saldo - extraccion;
    return nuevoSaldo;
}

//funciones depositar tiene como parametros la variable saldo y la variable deposito que se obtiene por medio del prompt.
//por lo que la funcion extrar crea una nueva variable llamada nuevosaldo que sumara el saldo por el valor ingresado por el usuario.
function depositar(saldo, deposito) {
    let nuevoSaldo = saldo + deposito;
    return nuevoSaldo;
}
function prestar(prestamo, interes) {
    let prestamoInteres = (prestamo * interes) / 100;
    return prestamoInteres;
}

function totalPrestamo (prestamoInteres,prestamo){
    let total = prestamoInteres+prestamo;
    return total;
}

function cuotaMes (total){
    let cuota = total/12;
    return cuota.toFixed(2);
}

let nombre = prompt("Ingrese su Nombre");
while (menu == true) {
    if (nombre) {
        let opcion = prompt("Bienvenido, " + nombre + "\nELIJE UNA OPCION PARA CONTINUAR" + "\n1-consulta tu saldo" + "\n2-Extraccion" + "\n3-Depositar" + "\n4-Prestamo" + "\n0-Salir");

        switch (parseInt(opcion)) {
            case OPC1:
                alert("Tu saldo es de: $" + saldo);
                break;
            case OPC2:
                let extraccion = parseInt(prompt("Ingrese el valor que desea retirar"));
                saldo = extraer(saldo, extraccion);
                alert("Tu saldo actual es de: $" + saldo);
                break;
            case OPC3:
                let deposito = parseInt(prompt("Ingrese el valor que desea depositar"));
                saldo = depositar(saldo, deposito);
                alert("Tu saldo actual es de: $" + saldo);
                break;
            case OPC4:
                let prestamo = parseInt(prompt("Hola " + nombre + "\nIngrese el valor que desea solicitar"));
                prestamoInteres = prestar(prestamo, interes);
                total = totalPrestamo (prestamoInteres,prestamo);
                cuota = cuotaMes (total);
                alert("Se Solicito: $" + prestamo + "\nLa tasa de interes Anual es de " + interes + "%" + "\nSu interes sera de un total Anual de: $" + prestamoInteres + "\nSu total es de: $" + total + "\nSu cuota mensual sera de un total de: $" + cuota);
                break;
            case OPC0: menu = false;
                alert("Gracias por elegirnos, hasta la proxima "+nombre);
                break;

            default:

                alert("La opcion es incorrecta");
        }

    
} else {
    alert("No ingreso su nombre");
}

}
