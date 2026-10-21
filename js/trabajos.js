/* =========================================================
   GALERÍA DE TRABAJOS (sección "Trabajos" del inicio)
   ---------------------------------------------------------
   Solo copie las fotos en la carpeta de su categoría, numeradas:
     img/trabajos/cimentaciones/1.jpg, 2.jpg, 3.jpg ...
     img/trabajos/calculos/1.jpg, 2.jpg ...
   La página las encuentra sola (hasta "maximo" fotos por carpeta).
   Use siempre .jpg y números seguidos (1, 2, 3...).

   Para una categoría nueva: cree la carpeta y agregue una línea abajo.
   "titulos" es opcional: texto que sale sobre cada foto, por número.
     Ejemplo:  titulos: { 1: "Zapata aislada Z-1", 2: "Viga de amarre" }
   ========================================================= */
const TRABAJOS = {
    maximo: 60,
    categorias: [
        { carpeta: "cimentaciones", nombre: "Cimentaciones", titulos: {} },
        { carpeta: "calculos",      nombre: "Cálculos y memorias", titulos: {} },
        { carpeta: "estructuras",   nombre: "Estructuras", titulos: {} },
        { carpeta: "obras",         nombre: "Obras", titulos: {} },
        { carpeta: "bim",           nombre: "BIM y renders", titulos: {} },
        { carpeta: "otros",         nombre: "Otros", titulos: {} }
    ]
};

/* ---------------- A partir de aquí no necesita editar ---------------- */
(function () {
    const grid = document.getElementById("trabajos-grid");
    const filtros = document.getElementById("trabajos-filtros");
    const seccion = document.getElementById("trabajos");
    if (!grid) return;

    function existe(src) {
        return new Promise(ok => { const i = new Image(); i.onload = () => ok(true); i.onerror = () => ok(false); i.src = src; });
    }

    async function fotosDe(cat) {
        const lista = [];
        for (let n = 1; n <= TRABAJOS.maximo; n++) {
            const src = `img/trabajos/${cat.carpeta}/${n}.jpg`;
            if (!(await existe(src))) break;
            lista.push({ src, cat: cat.carpeta, nombre: cat.nombre, titulo: (cat.titulos || {})[n] || cat.nombre });
        }
        return lista;
    }

    Promise.all(TRABAJOS.categorias.map(fotosDe)).then(grupos => {
        const fotos = grupos.flat();
        if (!fotos.length) { seccion.style.display = "none"; return; }
        const usadas = TRABAJOS.categorias.filter((c, i) => grupos[i].length);

        filtros.innerHTML = `<button class="chip activo" data-f="*">Todos <small>${fotos.length}</small></button>` +
            usadas.map(c => `<button class="chip" data-f="${c.carpeta}">${c.nombre} <small>${grupos[TRABAJOS.categorias.indexOf(c)].length}</small></button>`).join("");

        grid.innerHTML = fotos.map(f => `<figure data-cat="${f.cat}"><img src="${f.src}" alt="${f.titulo}" loading="lazy"><figcaption><span>${f.nombre}</span>${f.titulo !== f.nombre ? f.titulo : ""}</figcaption></figure>`).join("");

        filtros.addEventListener("click", e => {
            const b = e.target.closest("button");
            if (!b) return;
            filtros.querySelectorAll("button").forEach(x => x.classList.toggle("activo", x === b));
            grid.querySelectorAll("figure").forEach(fig => fig.hidden = !(b.dataset.f === "*" || fig.dataset.cat === b.dataset.f));
        });

        const lb = document.getElementById("lightbox");
        grid.addEventListener("click", e => {
            const img = e.target.closest("img");
            if (!img) return;
            lb.querySelector("img").src = img.src;
            lb.classList.add("open");
        });
        lb.addEventListener("click", () => lb.classList.remove("open"));
        addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
    });
})();
