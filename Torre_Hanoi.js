var discos = [1, 2, 3];
var torreInicial = "Torre A";
var torreFinal = "Torre B";
var torreAuxiliar = "Torre C";
mueve(discos.length, torreInicial, torreFinal, torreAuxiliar, discos);
function mueve(numeroDiscos, torreInicial, torreFinal, torreAuxiliar, discos) {
    if (numeroDiscos === 1) {
        console.log("Se mueve el disco" + discos[numeroDiscos - 1] + " desde " + torreInicial + " hacia " + torreFinal);
    }
    else {
        mueve(numeroDiscos - 1, torreInicial, torreAuxiliar, torreFinal, discos);
        console.log("Se mueve el disco" + discos[numeroDiscos - 1] + " desde " + torreInicial + " hacia " + torreFinal);
        mueve(numeroDiscos - 1, torreAuxiliar, torreFinal, torreInicial, discos);
    }
}
