/* AVISO DE COOKIES Y REGISTRO DE ACEPTACIÓN (va en todas las páginas)
 * - La página no usa cookies de rastreo ni de publicidad. Solo guarda en SU navegador (almacenamiento local) los
 *   datos del formulario y el pedido, para no tener que escribirlos otra vez, y SOLO si el visitante lo acepta.
 * - registrar(): cuando alguien acepta términos y privacidad en un formulario, se guarda en la nube de SSING (Cloudflare)
 *   la fecha, la hora, la IP, el navegador, la versión de los textos aceptados y su nombre y contacto: es la prueba de
 *   la autorización (Ley 1581 de 2012, art. 9; Decreto 1074 de 2015, art. 2.2.2.25.2.5).
 * Si cambian los textos legales, cambie VERSION (y la fecha que se ve en legal.html).
 */
(function () {
    const VERSION = "2026-10-31";
    const NUBE = "https://ssing-obra.ssingbuildcodes.workers.dev/api/aceptacion";
    const CLAVE = "ssing-consentimiento";
    const MIOS = ["ssing-solicitud", "ssing-pedido", "ssing-cliente"];

    function leer() { try { return localStorage.getItem(CLAVE); } catch (e) { return null; } }
    function puedeGuardar() { return leer() === "si"; }
    function decidir(v) {
        try {
            localStorage.setItem(CLAVE, v);                       // la decisión misma sí se guarda (es necesaria)
            if (v !== "si") MIOS.forEach(k => localStorage.removeItem(k));
        } catch (e) {}
        const b = document.getElementById("ssing-cookies");
        if (b) b.remove();
    }

    function registrar(formulario, datos) {
        const cuerpo = {
            formulario, version: VERSION, pagina: location.pathname,
            acepta: { terminos: true, privacidad: true },
            nombre: (datos.nombre || "").slice(0, 120), correo: (datos.correo || "").slice(0, 120),
            telefono: (datos.telefono || "").slice(0, 40)
        };
        try {
            return fetch(NUBE, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(cuerpo),
                                 keepalive: true }).catch(() => null);
        } catch (e) { return Promise.resolve(null); }
    }

    function aviso() {
        if (leer() !== null || document.getElementById("ssing-cookies")) return;
        const b = document.createElement("div");
        b.id = "ssing-cookies";
        b.setAttribute("role", "dialog");
        b.setAttribute("aria-label", "Aviso de cookies");
        b.innerHTML = '<p>No usamos cookies de rastreo ni publicidad. Si acepta, su navegador recuerda los datos que escriba ' +
            'en los formularios y su pedido, para que no tenga que escribirlos de nuevo. ' +
            '<a href="legal.html#cookies">Más información</a></p>' +
            '<div><button type="button" data-si>Aceptar</button><button type="button" data-no>Solo lo necesario</button></div>';
        b.querySelector("[data-si]").onclick = () => decidir("si");
        b.querySelector("[data-no]").onclick = () => decidir("no");
        document.body.appendChild(b);
    }

    window.SSING_LEGAL = { VERSION, puedeGuardar, registrar, decidir };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", aviso); else aviso();
})();
