/* =========================================================
   TEMAS FESTIVOS — interruptores del dueño
   ---------------------------------------------------------
   MODO:
     "auto"     -> cada tema se enciende solo en sus fechas (recomendado)
     "apagado"  -> nunca se muestra ningún tema
     "halloween", "navidad", "anio_nuevo", "amor_amistad",
     "ingeniero", "independencia" -> fuerza ese tema todo el tiempo

   Cada tema tiene "activo: true/false" (encendido o apagado)
   y sus fechas "desde" / "hasta" en formato "MM-DD".

   Para VER un tema sin esperar la fecha, abra la página así:
     index.html?tema=navidad      (solo en su navegador, no cambia nada)
     index.html?tema=ninguno      (ver la página sin tema)
   ========================================================= */
const TEMAS_CONFIG = {
    modo: "auto",

    halloween:     { activo: true, desde: "10-15", hasta: "11-01", mensaje: "Feliz Halloween · Diseños que no dan miedo, cálculos que sí cumplen" },
    navidad:       { activo: true, desde: "12-01", hasta: "12-27", mensaje: "Felices fiestas · Gracias por construir con nosotros este año" },
    anio_nuevo:    { activo: true, desde: "12-28", hasta: "01-06", mensaje: "Feliz Año Nuevo · Nuevos proyectos, la misma solidez" },
    amor_amistad:  { activo: true, desde: "09-13", hasta: "09-21", mensaje: "Feliz Amor y Amistad · Las mejores estructuras se construyen en equipo" },
    ingeniero:     { activo: true, desde: "08-15", hasta: "08-18", mensaje: "17 de agosto · Feliz Día del Ingeniero Colombiano" },
    independencia: { activo: true, desde: "07-19", hasta: "07-21", mensaje: "20 de julio · Feliz Día de la Independencia de Colombia" }
};

/* ---------------- A partir de aquí no necesita editar ---------------- */
(function () {
    const C = TEMAS_CONFIG;
    const nombres = ["halloween", "navidad", "anio_nuevo", "amor_amistad", "ingeniero", "independencia"];

    function enRango(hoy, desde, hasta) {
        const n = (hoy.getMonth() + 1) * 100 + hoy.getDate();
        const a = parseInt(desde.replace("-", ""), 10), b = parseInt(hasta.replace("-", ""), 10);
        return a <= b ? (n >= a && n <= b) : (n >= a || n <= b);   // rango que cruza el 31 de diciembre
    }

    function temaDeHoy() {
        let prueba = null;
        try { prueba = new URLSearchParams(location.search).get("tema"); } catch (e) {}
        if (prueba) return nombres.includes(prueba) ? prueba : null;
        if (C.modo === "apagado") return null;
        if (nombres.includes(C.modo)) return C.modo;
        const hoy = new Date();
        return nombres.find(t => C[t] && C[t].activo && enRango(hoy, C[t].desde, C[t].hasta)) || null;
    }

    let apagadoPorVisitante = false;
    try { apagadoPorVisitante = localStorage.getItem("ssing-efectos") === "off"; } catch (e) {}

    const tema = temaDeHoy();
    if (!tema) return;
    document.documentElement.dataset.tema = tema;

    const css = `
    :root[data-tema="halloween"]    { --accent:#ff9a3c; --accent-2:#c8641e; --accent-glow:rgba(255,154,60,.3); --accent-ink:#1a0b00; }
    :root[data-tema="navidad"]      { --accent:#e9c46a; --accent-2:#c0392b; --accent-glow:rgba(233,196,106,.3); --accent-ink:#1a1200; }
    :root[data-tema="anio_nuevo"]   { --accent:#f2d27a; --accent-2:#b8963e; --accent-glow:rgba(242,210,122,.3); --accent-ink:#1a1200; }
    :root[data-tema="amor_amistad"] { --accent:#ff7a9c; --accent-2:#c94a6b; --accent-glow:rgba(255,122,156,.3); --accent-ink:#1f0610; }
    :root[data-tema="independencia"]{ --accent:#ffd23f; --accent-2:#1f4fa3; --accent-glow:rgba(255,210,63,.28); --accent-ink:#1a1400; }
    .fest-bar { position:fixed; top:0; left:0; right:0; z-index:1100; height:34px; display:flex; align-items:center; justify-content:center; gap:12px;
        padding:0 48px 0 16px; font:600 .82rem var(--font); color:var(--text); background:rgba(7,13,18,.92); border-bottom:1px solid var(--line-strong);
        backdrop-filter:blur(10px); text-align:center; overflow:hidden; white-space:nowrap; }
    .fest-bar span.t { overflow:hidden; text-overflow:ellipsis; }
    .fest-bar .ic { font-size:1rem; line-height:1; }
    .fest-bar::after { content:""; position:absolute; left:0; right:0; bottom:-1px; height:2px; background:var(--fest-line, var(--accent)); }
    .fest-bar button { position:absolute; right:8px; top:50%; transform:translateY(-50%); width:28px; height:28px; border-radius:8px; border:1px solid var(--line-strong);
        background:transparent; color:var(--muted); cursor:pointer; font-size:.8rem; }
    .fest-bar button:hover { color:var(--text); border-color:var(--accent); }
    html.con-fest .navbar { top:34px; }
    html.con-fest { scroll-padding-top: calc(var(--nav-h) + 44px); }
    html.con-fest .nav-links { top: calc(var(--nav-h) + 34px); }
    .fest-capa { position:fixed; inset:0; pointer-events:none; z-index:980; overflow:hidden; }
    .fest-p { position:absolute; top:-40px; will-change:transform; opacity:.85; }
    @keyframes caer { to { transform: translate(var(--dx,0), 110vh) rotate(var(--rot,0deg)); } }
    @keyframes subir { from { transform: translate(0, 0); opacity:0; } 10% { opacity:.8; } to { transform: translate(var(--dx,0), -110vh); opacity:0; } }
    @keyframes volar { 0% { transform: translate(-10vw, 0) scale(var(--s,1)); } 25% { transform: translate(25vw, -30px) scale(var(--s,1)); } 50% { transform: translate(55vw, 20px) scale(var(--s,1)); } 75% { transform: translate(85vw, -20px) scale(var(--s,1)); } 100% { transform: translate(115vw, 10px) scale(var(--s,1)); } }
    @keyframes aleteo { 50% { transform: scaleY(.55); } }
    .murcielago svg { animation: aleteo .28s ease-in-out infinite; transform-origin:center; }
    .luces { position:absolute; left:0; right:0; bottom:-7px; height:12px; display:flex; justify-content:space-around; pointer-events:none; }
    .luces i { width:7px; height:10px; border-radius:50% 50% 45% 45%; background:var(--c); box-shadow:0 0 8px var(--c); animation: titilar 1.6s infinite alternate; }
    .luces i:nth-child(3n) { animation-delay:.5s } .luces i:nth-child(3n+1) { animation-delay:1s }
    @keyframes titilar { from { opacity:.35 } to { opacity:1 } }
    .telarana { position:absolute; top:0; right:0; width:170px; opacity:.22; pointer-events:none; color:var(--silver); }
    @media (max-width:640px){ .fest-bar{font-size:.74rem} .telarana{width:110px} }
    @media (prefers-reduced-motion: reduce){ .fest-capa{display:none} }
    `;
    const st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);

    const ICONOS = { halloween: "🎃", navidad: "🎄", anio_nuevo: "✨", amor_amistad: "💛", ingeniero: "📐", independencia: "🇨🇴" };
    const LINEA = { navidad: "linear-gradient(90deg,#c0392b,#e9c46a,#2e8b57,#e9c46a,#c0392b)",
                    independencia: "linear-gradient(90deg,#ffd23f 0 50%,#1f4fa3 50% 75%,#d62828 75%)",
                    halloween: "linear-gradient(90deg,#ff9a3c,#7b2cbf,#ff9a3c)" };

    function montar() {
        document.documentElement.classList.add("con-fest");
        if (LINEA[tema]) document.documentElement.style.setProperty("--fest-line", LINEA[tema]);

        const bar = document.createElement("div");
        bar.className = "fest-bar";
        bar.innerHTML = `<span class="ic">${ICONOS[tema]}</span><span class="t">${C[tema].mensaje}</span>` +
            `<button type="button" title="${apagadoPorVisitante ? "Encender animación" : "Apagar animación"}" aria-label="Encender o apagar animación festiva">` +
            `<i class="fa-solid ${apagadoPorVisitante ? "fa-play" : "fa-pause"}"></i></button>`;
        document.body.prepend(bar);
        bar.querySelector("button").addEventListener("click", () => {
            apagadoPorVisitante = !apagadoPorVisitante;
            try { localStorage.setItem("ssing-efectos", apagadoPorVisitante ? "off" : "on"); } catch (e) {}
            bar.querySelector("i").className = "fa-solid " + (apagadoPorVisitante ? "fa-play" : "fa-pause");
            if (apagadoPorVisitante) quitarEfectos(); else efectos();
        });

        const nav = document.querySelector(".navbar");
        if (tema === "navidad" && nav) {
            const l = document.createElement("div");
            l.className = "luces fest-deco";
            const cols = ["#e63946", "#e9c46a", "#2a9d8f", "#4ea8de"];
            l.innerHTML = Array.from({ length: 24 }, (_, i) => `<i style="--c:${cols[i % 4]}"></i>`).join("");
            nav.appendChild(l);
        }
        if (tema === "halloween") {
            const h = document.querySelector(".hero, .page-hero");
            if (h) {
                const w = document.createElement("div");
                w.className = "telarana fest-deco";
                w.innerHTML = `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M200 0L40 160M200 0L0 110M200 0L90 200M200 0L150 200M200 0L0 40"/>
                <path d="M160 0q8 30 20 40q-30 10-40 25M115 0q10 40 35 60q-40 15-55 45q-30-5-60-5M70 0q15 60 60 95q-30 35-30 80q-45-25-100-20"/></svg>`;
                h.appendChild(w);
            }
        }
        if (!apagadoPorVisitante) efectos();
    }

    let capa = null;
    function quitarEfectos() { if (capa) { capa.remove(); capa = null; } }

    function particula(html, estilo) {
        const p = document.createElement("div");
        p.className = "fest-p";
        p.innerHTML = html;
        Object.assign(p.style, estilo);
        capa.appendChild(p);
        return p;
    }
    const r = (a, b) => a + Math.random() * (b - a);

    function efectos() {
        if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        quitarEfectos();
        capa = document.createElement("div");
        capa.className = "fest-capa";
        document.body.appendChild(capa);
        const movil = innerWidth < 700;

        if (tema === "halloween") {
            const bat = `<svg width="38" height="18" viewBox="0 0 64 30" fill="#1b1022"><path d="M32 10c2-4 4-5 4-5l1 4c3-1 5 0 5 0-2 2-1 6 2 7 4-6 12-8 20-6-5 2-8 7-8 12-4-3-8-3-11 0-1-3-4-4-7-2-2-3-4-4-6-4s-4 1-6 4c-3-2-6-1-7 2-3-3-7-3-11 0 0-5-3-10-8-12 8-2 16 0 20 6 3-1 4-5 2-7 0 0 2-1 5 0l1-4s2 1 4 5z"/></svg>`;
            const n = movil ? 3 : 6;
            for (let i = 0; i < n; i++) {
                const p = particula(`<div class="murcielago">${bat}</div>`, {
                    top: r(12, 70) + "vh", left: "0", animation: `volar ${r(16, 26)}s linear ${r(-20, 4)}s infinite`
                });
                p.style.setProperty("--s", r(0.6, 1.3).toFixed(2));
                p.style.filter = "drop-shadow(0 0 6px rgba(255,154,60,.45))";
            }
            const calabaza = `<svg width="26" height="24" viewBox="0 0 26 24"><path d="M13 5c-1-3 1-5 3-5-1 2-1 3-1 5" fill="#3a5a2a"/><ellipse cx="13" cy="15" rx="12" ry="9" fill="#ff8a1f"/><path d="M8 7c-2 3-2 13 0 16M18 7c2 3 2 13 0 16M13 6v18" stroke="#d1640c" fill="none"/><path d="M7 13l3-2 1 3zM19 13l-3-2-1 3zM8 18q5 4 10 0l-2 1-1-1-2 1-1-1-2 1z" fill="#2a1200"/></svg>`;
            for (let i = 0; i < (movil ? 2 : 4); i++) {
                const p = particula(calabaza, { left: r(5, 95) + "vw", animation: `caer ${r(18, 30)}s linear ${r(-30, 0)}s infinite` });
                p.style.setProperty("--rot", r(-180, 180) + "deg");
                p.style.setProperty("--dx", r(-60, 60) + "px");
                p.style.opacity = ".55";
            }
        }

        if (tema === "navidad" || tema === "anio_nuevo") {
            const n = movil ? 22 : 45;
            for (let i = 0; i < n; i++) {
                const s = r(3, 7);
                const color = tema === "navidad" ? "#fff" : (Math.random() < .5 ? "#f2d27a" : "#fff");
                const p = particula("", {
                    left: r(0, 100) + "vw", width: s + "px", height: s + "px", borderRadius: "50%",
                    background: color, boxShadow: `0 0 ${s * 2}px ${color}`, opacity: r(0.3, 0.85).toFixed(2),
                    animation: `caer ${r(12, 24)}s linear ${r(-24, 0)}s infinite`
                });
                p.style.setProperty("--dx", r(-80, 80) + "px");
            }
        }

        if (tema === "amor_amistad") {
            for (let i = 0; i < (movil ? 6 : 12); i++) {
                const s = r(12, 22);
                const p = particula(`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ff7a9c"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/></svg>`, {
                    top: "auto", bottom: "-30px", left: r(0, 100) + "vw", animation: `subir ${r(12, 20)}s ease-in ${r(-20, 0)}s infinite`
                });
                p.style.setProperty("--dx", r(-60, 60) + "px");
            }
        }

        if (tema === "independencia") {
            const cols = ["#ffd23f", "#1f4fa3", "#d62828"];
            for (let i = 0; i < (movil ? 18 : 36); i++) {
                const p = particula("", {
                    left: r(0, 100) + "vw", width: r(5, 9) + "px", height: r(9, 14) + "px", background: cols[i % 3],
                    borderRadius: "2px", animation: `caer ${r(10, 18)}s linear ${r(-18, 0)}s infinite`
                });
                p.style.setProperty("--rot", r(360, 900) + "deg");
                p.style.setProperty("--dx", r(-100, 100) + "px");
            }
        }
        /* "ingeniero": solo la franja con el mensaje (sobrio a propósito) */
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar);
    else montar();
})();
