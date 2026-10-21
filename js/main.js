/* Funciones comunes de todas las páginas: menú, animaciones y año del pie de página */
(function () {
    const nav = document.querySelector(".navbar");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    function alDesplazar() {
        if (nav && !nav.classList.contains("solid")) nav.classList.toggle("scrolled", scrollY > 30);
    }
    addEventListener("scroll", alDesplazar, { passive: true });
    alDesplazar();

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            const abierto = links.classList.toggle("open");
            toggle.setAttribute("aria-expanded", abierto);
            toggle.innerHTML = abierto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
        links.addEventListener("click", e => {
            if (e.target.closest("a")) {
                links.classList.remove("open");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    }

    // Aparición suave de los bloques al bajar
    window.activarReveal = function () {
        const items = document.querySelectorAll(".reveal:not(.visible)");
        if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("visible")); return; }
        const io = new IntersectionObserver(entradas => {
            entradas.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        items.forEach(el => io.observe(el));
    };
    activarReveal();

    document.querySelectorAll("[data-anio]").forEach(el => el.textContent = new Date().getFullYear());
})();
