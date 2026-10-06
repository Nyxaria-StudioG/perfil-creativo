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
   ESTUDIO HYPNOS — ESTRELLITAS + PRÓXIMAMENTE
========================================================= */

const comingSoonButton =
    document.querySelector(".coming-soon");


if (comingSoonButton) {


    /* =====================================================
       VARIABLES
    ===================================================== */

    let comingSoonTimeout;


    const starsContainer =
        comingSoonButton.querySelector(".stars-container");



    /* =====================================================
       ESTRELLAS
    ===================================================== */

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✦",
        "·"
    ];


    const starCount = 18;



    /* =====================================================
       CREAR LAS ESTRELLAS
    ===================================================== */

    for (let i = 0; i < starCount; i++) {


        const star =
            document.createElement("span");


        star.classList.add("star");


        /* ---------------------------------------------
           Símbolo aleatorio
        --------------------------------------------- */

        star.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];



        /* ---------------------------------------------
           POSICIÓN
        --------------------------------------------- */

        star.style.left =
            `${Math.random() * 94 + 3}%`;


        star.style.top =
            `${Math.random() * 70 + 15}%`;



        /* ---------------------------------------------
           TAMAÑO
        --------------------------------------------- */

        star.style.fontSize =
            `${Math.random() * 7 + 7}px`;



        /* ---------------------------------------------
           MOVIMIENTO
        --------------------------------------------- */

        star.style.setProperty(
            "--x1",
            `${Math.random() * 10 - 5}px`
        );


        star.style.setProperty(
            "--y1",
            `${Math.random() * 8 - 4}px`
        );


        star.style.setProperty(
            "--x2",
            `${Math.random() * 20 - 10}px`
        );


        star.style.setProperty(
            "--y2",
            `${Math.random() * 14 - 7}px`
        );


        star.style.setProperty(
            "--x3",
            `${Math.random() * 10 - 5}px`
        );


        star.style.setProperty(
            "--y3",
            `${Math.random() * 8 - 4}px`
        );



        /* ---------------------------------------------
           ESCALA
        --------------------------------------------- */

        star.style.setProperty(
            "--scale",
            `${Math.random() * 0.55 + 0.65}`
        );



        /* ---------------------------------------------
           BRILLO / OPACIDAD
        --------------------------------------------- */

        star.style.setProperty(
            "--opacity-min",
            `${Math.random() * 0.20 + 0.35}`
        );


        star.style.setProperty(
            "--opacity-mid",
            `${Math.random() * 0.25 + 0.55}`
        );


        star.style.setProperty(
            "--opacity-max",
            `${Math.random() * 0.25 + 0.75}`
        );



        /* ---------------------------------------------
           VELOCIDAD
        --------------------------------------------- */

        star.style.setProperty(
            "--duration",
            `${Math.random() * 3 + 3}s`
        );



        /* ---------------------------------------------
           DESFASE
        --------------------------------------------- */

        star.style.setProperty(
            "--delay",
            `${Math.random() * -6}s`
        );



        /* ---------------------------------------------
           AGREGAR AL BOTÓN
        --------------------------------------------- */

        starsContainer.appendChild(star);

    }



    /* =====================================================
       FUNCIÓN PARA MOSTRAR PRÓXIMAMENTE
    ===================================================== */

    function showComingSoon() {


        /* Cancela temporizador anterior */

        clearTimeout(comingSoonTimeout);


        /* Activa el estado */

        comingSoonButton.classList.add(
            "show-coming"
        );


        /* ---------------------------------------------
           Después de 2,5 segundos
           vuelve a las estrellas
        --------------------------------------------- */

        comingSoonTimeout =
            setTimeout(() => {

                comingSoonButton.classList.remove(
                    "show-coming"
                );

            }, 2500);

    }



    /* =====================================================
       CLICK / TOQUE
    ===================================================== */

    comingSoonButton.addEventListener(
        "click",
        function(event) {


            /*
                Evita que href="#"
                lleve la página hacia arriba.
            */

            event.preventDefault();


            showComingSoon();

        }
    );



    /* =====================================================
       ACCESIBILIDAD — TECLADO
    ===================================================== */

    comingSoonButton.addEventListener(
        "keydown",
        function(event) {


            /*
                Enter o barra espaciadora.
            */

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {


                event.preventDefault();


                showComingSoon();

            }

        }
    );

}