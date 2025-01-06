const parrafo = document.getElementById('color');
const btn = document.getElementById('btn');

/* Manejar el evento */

btn.addEventListener('click', cambiarColor)

/* Definimos la función */

function cambiarColor() {

    /* Código que se ejecuta */

    /* Función anidada */

    function colores() {

        /* Código que se ejecuta */

        const opciones = "0123456789ABCDEF";
        let colorHex = "#";
    
        /* Recoremos el string opciones */

        for (let i = 0; i < 6; i++) {
            colorHex += opciones[Math.floor(Math.random() * opciones.length)];
        }
    
        return colorHex;
    }
    
    let colorAleatorio = colores();

    /* Este texto actualiza el texto */

    color.textContent = colorAleatorio

    /* Este texto actualiza el fondo */

    document.body.style.backgroundColor = colorAleatorio;    
}   