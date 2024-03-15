var tablero = {
    "00": 0,
    "01": 0,
    "02": 0,
    "03": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "20": 0,
    "21": 0,
    "22": 0,
    "23": 0,
    "30": 0,
    "31": 0,
    "32": 0,
    "33": 0,
};

//array para que ponga las celdas vacías -> por cada celda vacía lo meto en el array
function celdasVacias() {
    let arrayCeldasVacias = [];
    for (const key in tablero) {
        //si el objeto está vacío, me devuelve las keys de las celdas que están vacías
        if (tablero[key] == 0) {
            arrayCeldasVacias.push(key);
        }
    }
    return arrayCeldasVacias;
}

//le paso un array de celdas y me va a devolver 2 de forma aleatoria
function celdaAleatorias(celdas) {
    //pos es posición
    let pos = Math.random() * celdasVacias.length;
    //entre 0 y 16 devuelve en consola, una posición aleatoria
    return celdas[pos];
}

function nuevoNumero() {
    //devuelve el array de celdas vacías
    let celdasLibres = celdasVacias();
    //va a devolver una celda libre
    let nuevaPos = celdaAleatorias(celdasLibres);
    tablero[nuevaPos] = valorAleatorio();
}

//generamos 2 o 4, y el 2 tiene el 90% de la probabilidad
function valorAleatorio() {
    //el ? es un operador ternario. El 90 que sea 2, sino 4.
    return Math.random() < 0.9 ? 2 : 4;
}
function rellenarTablero() {
    for (const key in tablero) {
        if (tablero[key] != 0) {
            //aquí pilla el html
            document.getElementById(key).innerHTML = tablero[key];
        }
    }
}
//funciones flechas
function desplazarArriba() {
    //Posición = UP, DOWN
    let posU="", posD="";
    for (let index = 0; index < 2; index++) {
        posU="0"+index;
        posD="0"+index+1;


        if (tablero['03'] == tablero['02']) {
            tablero['02'] += tablero['03'];
            tablero['03'] = 0;
        }
    }
}
//teclas parriba pa bajo
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            desplazarArriba();
            console.log("Tecla arriba presionada");
            // Agrega aquí el código para el evento de tecla arriba
            break;
        case "ArrowDown":
            console.log("Tecla abajo presionada");
            // Agrega aquí el código para el evento de tecla abajo
            break;
        case "ArrowLeft":
            console.log("Tecla izquierda presionada");
            // Agrega aquí el código para el evento de tecla izquierda
            break;
        case "ArrowRight":
            console.log("Tecla derecha presionada");
            // Agrega aquí el código para el evento de tecla derecha
            break;
    }
});

// EMPIEZA EL JUEGO
nuevoNumero();
nuevoNumero();
rellenarTablero();