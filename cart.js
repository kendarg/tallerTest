function calcularTotoal(precio) {
    let total = 0;
    for (let i = 0; i < precio.length; i++) {
        total += precio[i];
    }
    return total;
}

function descuento(precio, porcentaje){
    return precio - (precio * porcentaje / 100);
}
module.exports = {calcularTotoal, descuento};
