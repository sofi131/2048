
var tablero={
    "00":0,
    "01":0,
    "02":0,
    "03":0,
    "10":0,
    "11":0,
    "12":0,
    "13":0,
    "20":0,
    "21":0,
    "22":0,
    "23":0,
    "30":0,
    "31":0,
    "32":0,
    "33":0,
};

//array para que ponga las celdas vacías -> por cada celda vacía lo meto en el array
function celdasVacias() {
    let arrayCeldasVacias=[];
    for (const key in tablero) {
        //si el objeto está vacío, me devuelve las keys de las celdas que están vacías
        if (tablero[key]==0) {
            arrayCeldasVacias.push(key);
        }
    }
    return arrayCeldasVacias;
}

//le paso un array de celdas y me va a devolver 2 de forma aleatoria
