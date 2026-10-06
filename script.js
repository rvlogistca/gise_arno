/* =========================================================
   GISELI ARNO — BELEZA & PROGRESSIVA
   SCRIPT.JS — VERSÃO 2
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
    ====================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Fecha o menu ao clicar em um link */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =====================================================
       HEADER AO ROLAR A PÁGINA
    ====================================================== */

    const header = document.getElementById("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       ANIMAÇÃO SUAVE DAS SEÇÕES
    ====================================================== */

    const animatedElements = document.querySelectorAll(
        ".benefit-card, .service, .about-content, .gallery-placeholder"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        animatedElements.forEach((element) => {

            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(element);

        });

    }


    /* =====================================================
       ANO AUTOMÁTICO DO RODAPÉ
    ====================================================== */

    const copyright = document.querySelector(".footer-bottom span");

    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} Giseli Arno`;

    }


    /* =====================================================
       PROTEÇÃO CONTRA CLIQUE DUPLO NOS BOTÕES
    ====================================================== */

    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappLinks.forEach((link) => {

        link.addEventListener("click", () => {

            link.style.transform = "scale(0.98)";

            setTimeout(() => {

                link.style.transform = "";

            }, 150);

        });

    });

});
