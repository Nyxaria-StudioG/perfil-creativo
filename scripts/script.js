/*
    =========================================================
    EFECTOS DE LOS BOTONES
    =========================================================

    - Funciona con mouse.
    - Funciona con pantalla táctil.
    - Funciona con teclado.
    - Agrega el efecto de pulsación.
*/


/* =========================================================
   PULSACIÓN DE LOS BOTONES
========================================================= */

document.querySelectorAll(".link-button").forEach(button => {


    /* ---------------------------------------------
       AL PRESIONAR
    --------------------------------------------- */

    button.addEventListener("pointerdown", () => {

        button.classList.add("pressed");

    });


    /* ---------------------------------------------
       AL SOLTAR
    --------------------------------------------- */

    button.addEventListener("pointerup", () => {

        button.classList.remove("pressed");

    });


    /* ---------------------------------------------
       SI EL PUNTERO SALE
    --------------------------------------------- */

    button.addEventListener("pointerleave", () => {

        button.classList.remove("pressed");

    });


    /* ---------------------------------------------
       SI SE CANCELA LA INTERACCIÓN
    --------------------------------------------- */

    button.addEventListener("pointercancel", () => {

        button.classList.remove("pressed");

    });

});



/* =========================================================
   ESTUDIO HYPNOS — PRÓXIMAMENTE
========================================================= */

const comingSoonButton =
    document.querySelector(".coming-soon");


if (comingSoonButton) {


    let comingSoonTimeout;


    comingSoonButton.addEventListener("click", function(event) {

        /*
            Evita que el enlace intente abrir "#".
        */

        event.preventDefault();


        /*
            Si ya estaba mostrando
            PRÓXIMAMENTE, reiniciamos el temporizador.
        */

        clearTimeout(comingSoonTimeout);


        /*
            Activa el estado.
        */

        comingSoonButton.classList.add("show-coming");


        /*
            Después de unos segundos
            vuelve al estado original.
        */

        comingSoonTimeout = setTimeout(() => {

            comingSoonButton.classList.remove("show-coming");

        }, 2500);

    });


    /* =====================================================
       ACCESIBILIDAD — TECLADO
    ===================================================== */

    comingSoonButton.addEventListener("keydown", function(event) {

        /*
            Permite activar el botón con
            Enter o barra espaciadora.
        */

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            clearTimeout(comingSoonTimeout);

            comingSoonButton.classList.add("show-coming");


            comingSoonTimeout = setTimeout(() => {

                comingSoonButton.classList.remove("show-coming");

            }, 2500);

        }

    });

}