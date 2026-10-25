/* =========================================================
   TIENDA — productos y servicios (página tienda.html)
   ---------------------------------------------------------
   Cada producto:
     categoria : "software" | "construccion" | "ingenieria"
     nombre, descripcion
     precio    : número en pesos (ej. 350000)  ·  0 = "Gratis"  ·  null = "Cotizar"
     antes     : (opcional) precio anterior tachado, para ofertas
     unidad    : (opcional) texto pequeño junto al precio: "desde", "por m²", "6 meses"...
     imagen    : (opcional) foto en img/tienda/ ; si no hay, sale el ícono
     icono     : ícono (fontawesome.com, versión gratis)
     incluye   : lista corta de lo que incluye
     etiqueta  : (opcional) cinta: "Más vendido", "Nuevo", "Oferta"...
     enlace    : (opcional) página con más información
     activo    : false = se oculta sin borrarlo
   El cliente arma su pedido y lo envía por WhatsApp. No se cobra en la página.

   LAS PROMOCIONES NO SE EDITAN AQUÍ: se hacen con el GENERADOR DE PROMOCIONES
   (carpeta "PAGINA WEB SSING\3 HERRAMIENTAS - no subir") y quedan en promociones/promociones.js
   ========================================================= */
const TIENDA = {
    whatsapp: "573116619341",

    // Beneficios fijos de las licencias (salen como franja en la tienda)
    beneficios: [
        ["fa-desktop", "Segundo equipo de la misma persona", "50 % del precio"],
        ["fa-rotate", "Renovación antes de vencer", "20 % de descuento"],
        ["fa-plug-circle-plus", "Agregar otro programa o sección a su licencia", "Sin reinstalar: se activa por internet"],
        ["fa-flask", "Prueba de 1 día (CalculosSSING, solo Zapatas, con marca de agua)", "Gratis"]
    ],

    // Orden de las secciones cuando el cliente pulsa "Todo" (las que no estén aquí salen al final)
    ordenTodo: ["promos", "combos", "calculos", "detalles", "adicionales", "construccion", "ingenieria", "software"],

    categorias: [
        // El orden de esta lista es el de los botones de arriba (el orden en "Todo" está en ordenTodo)
        { id: "construccion", nombre: "Construcción y remodelación", icono: "fa-trowel-bricks" },
        { id: "ingenieria",   nombre: "Diseño e ingeniería",     icono: "fa-compass-drafting" },
        { id: "combos",       nombre: "Combos (más ahorro)",     icono: "fa-boxes-stacked" },
        { id: "calculos",     nombre: "CalculosSSING por categoría", icono: "fa-calculator" },
        { id: "detalles",     nombre: "SSING-DETALLES por sección", icono: "fa-diagram-project" },
        { id: "adicionales",  nombre: "Paquetes adicionales", icono: "fa-puzzle-piece" },
        { id: "software",     nombre: "Prueba gratis y otros programas", icono: "fa-laptop-code" }
    ],
    productos: [
        /* ---------------- COMBOS (MÁS AHORRO) ---------------- */
        { id: "completo-anual", categoria: "combos", nombre: "SSING BUILD CODE COMPLETO · anual", precio: 1490000, antes: 1700000, unidad: "por año", etiqueta: "Todo incluido",
          icono: "fa-cubes",
          descripcion: "Los dos programas con todo: CalculosSSING TODO + SSING-DETALLES TODO. Una sola licencia; inicia sesión una vez en SSING Inicio y abre el que necesite. Ahorra $210.000.",
          incluye: ["Las 12 categorías y 33 cálculos de CalculosSSING", "Las 3 secciones de SSING-DETALLES", "Un solo instalador y una sola licencia por equipo", "Actualizaciones y soporte"] },
        { id: "completo-mensual", categoria: "combos", nombre: "SSING BUILD CODE COMPLETO · mensual", precio: 170000, unidad: "por mes",
          icono: "fa-cubes",
          descripcion: "Los dos programas con todo, pagando mes a mes. (12 meses suman $2.040.000: el pago anual le ahorra $550.000.)",
          incluye: ["CalculosSSING TODO", "SSING-DETALLES TODO", "Actualizaciones y soporte"] },
        { id: "todo-anual", categoria: "combos", nombre: "CalculosSSING TODO · anual", precio: 1150000, antes: 2255000, unidad: "por año", etiqueta: "Mejor valor",
          icono: "fa-calculator", imagen: "img/imagen2.jpg", enlace: "software.html",
          descripcion: "Las 12 categorías y los 33 cálculos, con planos DXF, y todo lo que salga después sin costo adicional. Ahorra $1.105.000.",
          incluye: ["33 cálculos en 12 categorías", "Memoria en PDF con fórmulas y verificaciones", "Plano DXF en todas las categorías", "Cálculos nuevos sin costo durante la vigencia", "Soporte por WhatsApp y correo"] },
        { id: "todo-mensual", categoria: "combos", nombre: "CalculosSSING TODO · mensual", precio: 140000, unidad: "por mes",
          icono: "fa-calendar-days", imagen: "img/imagen2.jpg", enlace: "software.html",
          descripcion: "Todo CalculosSSING pagando mes a mes. (12 meses suman $1.680.000: el pago anual le ahorra $530.000.)",
          incluye: ["33 cálculos en 12 categorías", "Memoria en PDF y plano DXF", "Actualizaciones y soporte"] },
        { id: "det-todo-anual", categoria: "combos", nombre: "SSING-DETALLES TODO · anual", precio: 550000, antes: 720000, unidad: "por año", etiqueta: "Nuevo",
          icono: "fa-diagram-project",
          descripcion: "Las 3 secciones: crear el modelo ETABS, leerlo para DXF y la memoria de cálculo. Ahorra $170.000.",
          incluye: ["Crear modelo ETABS", "Leer ETABS para DXF", "Memoria de cálculo con su empresa y su logo", "Requiere ETABS 18 o más nuevo"] },
        { id: "det-todo-mensual", categoria: "combos", nombre: "SSING-DETALLES TODO · mensual", precio: 65000, unidad: "por mes",
          icono: "fa-diagram-project",
          descripcion: "Las 3 secciones pagando mes a mes. (12 meses suman $780.000: el pago anual le ahorra $230.000.)",
          incluye: ["Crear modelo ETABS", "Leer ETABS para DXF", "Memoria de cálculo", "Requiere ETABS 18 o más nuevo"] },

        /* ---------------- SSING-DETALLES POR SECCIÓN (precio por 1 año) ---------------- */
        { id: "det-modelo", categoria: "detalles", nombre: "Crear modelo ETABS", precio: 280000, unidad: "por año", icono: "fa-building",
          descripcion: "Pórticos de concreto, pórticos metálicos y cerchas metálicas: ejes, niveles, secciones, losas, cargas, espectro NSR-10 y combinaciones, listo para correr. NSR-10 Títulos A y B.",
          incluye: ["Pórticos de concreto y metálicos", "Cerchas metálicas", "Cargas, espectro NSR-10 y combinaciones", "Requiere ETABS 18 o más nuevo"] },
        { id: "det-dxf", categoria: "detalles", nombre: "Leer ETABS para DXF", precio: 240000, unidad: "por año", icono: "fa-compass-drafting",
          descripcion: "Reacciones en la base (para sus cimentaciones en CalculosSSING) y detalles de refuerzo de vigas y columnas en DXF. NSR-10 Título C.",
          incluye: ["Reacciones en la base", "Despiece de vigas y columnas en DXF", "Listo para AutoCAD"] },
        { id: "det-memoria", categoria: "detalles", nombre: "Memoria de cálculo ETABS", precio: 200000, unidad: "por año", icono: "fa-file-lines",
          descripcion: "Cortante basal (ajuste dinámico, FHE, derivas y torsión) y memoria completa en Word y PDF con las tablas de ETABS. NSR-10 A.3, A.5 y A.6.",
          incluye: ["Cortante basal, derivas y torsión", "Memoria en Word y PDF", "INCLUYE su empresa, su logo y su portada"] },

        { id: "calc-prueba", categoria: "software", nombre: "CalculosSSING · Prueba 1 día", precio: 0, unidad: "1 día · solo Zapatas",
          icono: "fa-flask", enlace: "software.html",
          descripcion: "Pruebe el programa antes de comprar: cálculos de Zapatas durante 1 día, con marca de agua.",
          incluye: ["7 cálculos de zapatas", "Memoria en PDF con marca de agua", "Soporte por WhatsApp"] },
        { id: "word-logo", categoria: "adicionales", nombre: "Paquete adicional · Reportes en Word con su logo", precio: 250000, unidad: "por año · se suma a su licencia",
          icono: "fa-file-word", etiqueta: "Adicional",
          descripcion: "Se agrega a cualquier licencia de CalculosSSING (Paquete TODO o por categoría): además del PDF, reciba la memoria en Word editable con el nombre y el logo de su empresa.",
          incluye: ["Memoria en Word editable", "Su empresa y su logo en los encabezados", "Para todas las categorías que tenga", "Requiere una licencia de CalculosSSING"] },
        { id: "det-memoria-medida", categoria: "adicionales", nombre: "SSING-DETALLES · Memoria a su medida", precio: 300000, unidad: "pago único", etiqueta: "Adicional",
          icono: "fa-wand-magic-sparkles",
          descripcion: "Ajustamos la memoria a su gusto: capítulos, textos, orden, formato y estilo de su empresa. Queda lista dentro de su programa.",
          incluye: ["Capítulos y textos a su gusto", "Formato y estilo de su empresa", "Queda instalada en su programa", "Requiere SSING-DETALLES"] },
        { id: "memorias", categoria: "software", nombre: "MemoriasSSING · Generador de memorias de cálculo", precio: null, unidad: "licencia", etiqueta: "Nuevo",
          icono: "fa-file-lines",
          descripcion: "Arma la memoria de cálculo completa de su proyecto en Word y PDF (concreto y estructura metálica): usted pone los datos y las imágenes, el programa hace el documento.",
          incluye: ["Portada con su empresa y su logo", "Índice y tabla de figuras automáticos", "Exporta a Word y PDF", "Textos con referencias NSR-10", "Licencia para 1 computador"] },
        { id: "software-medida", categoria: "software", nombre: "Software a la medida", precio: null,
          icono: "fa-code", enlace: "servicio.html?id=software",
          descripcion: "Convertimos su hoja de cálculo o procedimiento en un programa propio de su empresa.",
          incluye: ["Revisión y validación del cálculo", "Interfaz fácil de usar", "Reportes automáticos"] },

        /* ---------------- CALCULOSSSING POR CATEGORÍA (precio por 1 año) ---------------- */
        { id: "cat-zapatas", categoria: "calculos", nombre: "Zapatas", precio: 200000, unidad: "por año · 7 cálculos", icono: "fa-cubes-stacked",
          descripcion: "NSR-10 C.15 y Título H. Memoria en PDF y plano DXF.",
          incluye: ["Céntrica y rectangular con momento", "Esquinera y combinada", "Corrida", "Excéntrica con viga y con columna rígida"] },
        { id: "cat-vigas", categoria: "calculos", nombre: "Vigas de cimentación", precio: 90000, unidad: "por año · 2 cálculos", icono: "fa-grip-lines",
          descripcion: "NSR-10 C.15 y A.3.6. Memoria en PDF y plano DXF.",
          incluye: ["Viga de amarre", "Viga de contrapeso"] },
        { id: "cat-losas", categoria: "calculos", nombre: "Losas", precio: 130000, unidad: "por año · 3 cálculos", icono: "fa-layer-group",
          descripcion: "NSR-10 C.8, C.9 y C.13. Memoria en PDF y plano DXF.",
          incluye: ["Losa nervada en 1 dirección", "Losa nervada en 2 direcciones", "Losa maciza en dos direcciones"] },
        { id: "cat-escaleras", categoria: "calculos", nombre: "Escaleras", precio: 110000, unidad: "por año · 4 cálculos", icono: "fa-stairs",
          descripcion: "NSR-10 C.9 y C.10. Memoria en PDF y plano DXF.",
          incluye: ["Un tramo y dos tramos", "Con descanso", "Anclada en muro"] },
        { id: "cat-muros-est", categoria: "calculos", nombre: "Muros estructurales", precio: 130000, unidad: "por año · 1 cálculo", icono: "fa-square-full",
          descripcion: "NSR-10 C.21.9. Memoria en PDF y plano DXF.",
          incluye: ["Muro con elementos de borde"] },
        { id: "cat-contencion", categoria: "calculos", nombre: "Muros de contención", precio: 220000, unidad: "por año · 3 cálculos", icono: "fa-mountain",
          descripcion: "NSR-10 (C, D y H) · CCP-14. Memoria en PDF y plano DXF.",
          incluye: ["En voladizo", "Con contrafuertes", "Muro de sótano en bloque"] },
        { id: "cat-tierra", categoria: "calculos", nombre: "Muros de tierra reforzada", precio: 165000, unidad: "por año · 2 cálculos", icono: "fa-bars-staggered",
          descripcion: "NSR-10 Título H. Memoria en PDF y plano DXF.",
          incluye: ["Con geomallas", "Con tiras metálicas"] },
        { id: "cat-pilas", categoria: "calculos", nombre: "Pilas", precio: 240000, unidad: "por año · 4 cálculos", icono: "fa-arrows-down-to-line",
          descripcion: "NSR-10 C.15.11 y Título H. Memoria en PDF y plano DXF.",
          incluye: ["Perforadas en arcilla", "Perforadas en arena (con campana)", "Por asentamiento"] },
        { id: "cat-pilotes", categoria: "calculos", nombre: "Pilotes con cabezal", precio: 240000, unidad: "por año · 2 cálculos", icono: "fa-grip-vertical",
          descripcion: "NSR-10 C.15 y Título H. Memoria en PDF y plano DXF.",
          incluye: ["Grupo de pilotes en arcilla", "Grupo de pilotes en arena"] },
        { id: "cat-tanques", categoria: "calculos", nombre: "Tanques de agua", precio: 290000, unidad: "por año · 3 cálculos", icono: "fa-glass-water",
          descripcion: "ACI 350 · ACI 350.3 · AIS 180 · NSR-10. Memoria en PDF y plano DXF.",
          incluye: ["Rectangular", "Circular (PTAR)", "Elevado"] },
        { id: "cat-piscinas", categoria: "calculos", nombre: "Piscinas", precio: 220000, unidad: "por año · 1 cálculo", icono: "fa-person-swimming",
          descripcion: "ACI 350 · ACI 350.3 · AIS 180 · NSR-10. Memoria en PDF y plano DXF.",
          incluye: ["Rectangular con zona baja, rampa y zona honda"] },
        { id: "cat-boxculvert", categoria: "calculos", nombre: "Box culvert", precio: 220000, unidad: "por año · 1 cálculo", etiqueta: "Nuevo", icono: "fa-archway",
          descripcion: "CCP-14 · NSR-10 C y Título H. Alcantarilla de cajón en concreto reforzado: relleno, carga vehicular y empuje de tierras. Memoria en PDF y plano DXF.",
          incluye: ["Cajón en concreto reforzado", "Cargas de relleno, vehículo y empuje", "Memoria en PDF y plano DXF"] },

        /* ---------------- CONSTRUCCIÓN ---------------- */
        { id: "casa", categoria: "construccion", nombre: "Construcción de vivienda", precio: null, unidad: "por m²",
          icono: "fa-house", imagen: "img/fondo-hero.jpg", etiqueta: "Llave en mano",
          descripcion: "Construimos su casa desde la cimentación hasta los acabados, con diseño, licencia y presupuesto claro.",
          incluye: ["Presupuesto detallado (APU)", "Cronograma de obra", "Dirección técnica", "Entrega con acabados"] },
        { id: "remodelacion", categoria: "construccion", nombre: "Remodelaciones", precio: null,
          icono: "fa-paint-roller", imagen: "img/imagen3.jpg",
          descripcion: "Cocinas, baños, fachadas, pisos y espacios completos. Renovamos sin poner en riesgo la estructura.",
          incluye: ["Visita y diagnóstico", "Propuesta con render", "Ejecución con personal propio"] },
        { id: "ampliacion", categoria: "construccion", nombre: "Ampliaciones y segundo piso", precio: null,
          icono: "fa-building-circle-arrow-right", imagen: "img/imagen1.jpg",
          descripcion: "Antes de subir un piso revisamos cimentación y columnas. Diseñamos, reforzamos si hace falta y construimos.",
          incluye: ["Evaluación de la estructura existente", "Diseño estructural NSR-10", "Construcción"] },
        { id: "obra-gris", categoria: "construccion", nombre: "Estructura y obra gris", precio: null, unidad: "por m²",
          icono: "fa-trowel-bricks", imagen: "img/imagen5.jpg",
          descripcion: "Cimentación, columnas, vigas, placas, muros y escaleras con control de calidad del concreto.",
          incluye: ["Cimentaciones y placas", "Mampostería", "Ensayos de concreto"] },
        { id: "acabados", categoria: "construccion", nombre: "Acabados", precio: null, unidad: "por m²",
          icono: "fa-brush",
          descripcion: "Pisos, enchapes, pañetes, estuco, pintura, drywall, cielos rasos y carpintería.",
          incluye: ["Pisos y enchapes", "Pintura y estuco", "Drywall y cielos"] },
        { id: "cubiertas", categoria: "construccion", nombre: "Cubiertas y techos", precio: null,
          icono: "fa-house-chimney",
          descripcion: "Estructura metálica o de madera, tejas, impermeabilización y canales.",
          incluye: ["Diseño de la estructura", "Instalación", "Impermeabilización"] },
        { id: "reforzamiento", categoria: "construccion", nombre: "Reforzamiento estructural", precio: null,
          icono: "fa-shield-halved",
          descripcion: "Reforzamos viviendas y edificaciones existentes para que cumplan la NSR-10.",
          incluye: ["Evaluación (NSR-10 Título A.10)", "Diseño del reforzamiento", "Ejecución"] },
        { id: "tanques", categoria: "construccion", nombre: "Tanques y piscinas", precio: null,
          icono: "fa-water-ladder",
          descripcion: "Diseño y construcción de tanques de agua y piscinas en concreto reforzado, estancos y durables.",
          incluye: ["Diseño estructural", "Impermeabilización", "Prueba de estanqueidad"] },
        { id: "exteriores", categoria: "construccion", nombre: "Placas, andenes y cerramientos", precio: null, unidad: "por m²",
          icono: "fa-road",
          descripcion: "Contrapisos, andenes, parqueaderos, muros de cerramiento y obras exteriores.",
          incluye: ["Nivelación y base", "Concreto o adoquín", "Muros de cerramiento"] },
        { id: "hidro", categoria: "construccion", nombre: "Redes hidrosanitarias y eléctricas", precio: null,
          icono: "fa-faucet-drip",
          descripcion: "Instalación y reparación de tuberías, desagües y redes eléctricas en obra nueva o remodelación.",
          incluye: ["Diseño de redes", "Instalación", "Pruebas"] },

        /* ---------------- DISEÑO E INGENIERÍA ---------------- */
        { id: "pack-licencia", categoria: "ingenieria", nombre: "Paquete licencia de construcción", precio: null, etiqueta: "Más vendido",
          icono: "fa-folder-open", imagen: "img/imagen7.jpg",
          descripcion: "Todo lo que pide la curaduría o planeación para su vivienda: planos y memorias firmadas.",
          incluye: ["Planos arquitectónicos", "Diseño estructural y memorias", "Estudio de suelos", "Acompañamiento en el trámite"] },
        { id: "estructural", categoria: "ingenieria", nombre: "Diseño estructural", precio: null, unidad: "por m²",
          icono: "fa-building", imagen: "img/imagen1.jpg", enlace: "servicio.html?id=estructural",
          descripcion: "Análisis sísmico y diseño en concreto o acero bajo NSR-10 y ACI 318.",
          incluye: ["Modelo y análisis", "Memoria de cálculo", "Planos estructurales"] },
        { id: "suelos", categoria: "ingenieria", nombre: "Estudio de suelos", precio: null,
          icono: "fa-earth-americas", imagen: "img/imagen6.jpg", enlace: "servicio.html?id=geotecnia",
          descripcion: "Exploración, laboratorio y recomendaciones de cimentación según NSR-10 Título H.",
          incluye: ["Sondeos SPT / apiques", "Ensayos de laboratorio", "Informe geotécnico"] },
        { id: "planos", categoria: "ingenieria", nombre: "Planos y renders 3D", precio: null,
          icono: "fa-cube", imagen: "img/imagen3.jpg", enlace: "servicio.html?id=renders",
          descripcion: "Diseño arquitectónico, planos y renders fotorrealistas de su proyecto.",
          incluye: ["Planos arquitectónicos", "Renders", "Recorrido virtual (opcional)"] },
        { id: "dron", categoria: "ingenieria", nombre: "Levantamiento con dron", precio: null, unidad: "por hectárea",
          icono: "fa-satellite", imagen: "img/imagen4.jpg", enlace: "servicio.html?id=drones",
          descripcion: "Ortomosaico, curvas de nivel y volúmenes de su lote o proyecto.",
          incluye: ["Vuelo y puntos de control", "Ortomosaico", "Curvas de nivel en DWG"] },
        { id: "presupuesto", categoria: "ingenieria", nombre: "Presupuesto y APU", precio: null,
          icono: "fa-file-invoice-dollar",
          descripcion: "Cantidades de obra, análisis de precios unitarios y presupuesto de su proyecto.",
          incluye: ["Cantidades de obra", "APU", "Cronograma"] },
        { id: "peritaje", categoria: "ingenieria", nombre: "Peritaje y evaluación estructural", precio: null,
          icono: "fa-magnifying-glass",
          descripcion: "Fisuras, asentamientos, humedades o compra de inmueble: evaluamos y le decimos qué hacer.",
          incluye: ["Visita técnica", "Informe con fotografías", "Recomendaciones"] },
        { id: "interventoria", categoria: "ingenieria", nombre: "Interventoría y supervisión técnica", precio: null,
          icono: "fa-clipboard-check", imagen: "img/imagen8.jpg", enlace: "servicio.html?id=interventoria",
          descripcion: "Supervisión técnica NSR-10 Título I e interventoría de obra pública o privada.",
          incluye: ["Control de calidad", "Informes periódicos", "Actas y recibo de obra"] }
    ]
};

/* ---------------- A partir de aquí no necesita editar ---------------- */
TIENDA.promociones = typeof PROMOCIONES !== "undefined" ? PROMOCIONES : [];

/* ¿La promoción está activa en esta fecha? "dias" se repite cada año:
   "11-27" un día · "12-24:12-31" un rango · "black_friday" · "amor_amistad" (3er sábado de septiembre)
   · "2027-01-15" una fecha de un solo año · "2026-11-15:2026-11-20" un rango de un solo año */
TIENDA.fechaEspecial = function (regla, anio) {
    if (regla === "black_friday") {              // viernes después del 4.º jueves de noviembre
        const d = new Date(anio, 10, 1);
        const jueves1 = 1 + ((4 - d.getDay() + 7) % 7);
        return new Date(anio, 10, jueves1 + 21 + 1);
    }
    if (regla === "amor_amistad") {              // tercer sábado de septiembre (Colombia)
        const d = new Date(anio, 8, 1);
        const sabado1 = 1 + ((6 - d.getDay() + 7) % 7);
        return new Date(anio, 8, sabado1 + 14);
    }
    return null;
};
TIENDA.activaEn = function (promo, f) {
    const md = (f.getMonth() + 1) * 100 + f.getDate();
    const num = s => parseInt(s.replace("-", ""), 10);
    const iso = `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, "0")}-${String(f.getDate()).padStart(2, "0")}`;
    return (promo.dias || []).some(t => {
        t = String(t).trim();
        const esp = TIENDA.fechaEspecial(t, f.getFullYear());
        if (esp) return esp.toDateString() === f.toDateString();
        if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t === iso;
        if (/^\d{4}-\d{2}-\d{2}:\d{4}-\d{2}-\d{2}$/.test(t)) {     // rango de un solo año (promoción especial)
            const [a, b] = t.split(":");
            return iso >= a && iso <= b;
        }
        if (t.includes(":")) {
            const [a, b] = t.split(":").map(num);
            return a <= b ? (md >= a && md <= b) : (md >= a || md <= b);
        }
        return /^\d{2}-\d{2}$/.test(t) && num(t) === md;
    });
};
TIENDA.promosActivas = function () {
    let ver = null;
    try { ver = new URLSearchParams(location.search).get("promo"); } catch (e) {}
    const hoy = new Date();
    return TIENDA.promociones.filter(p => p.id === ver || (p.activo && TIENDA.activaEn(p, hoy)));
};
TIENDA.proximaFecha = function (promo, desde) {
    const f = new Date(desde || new Date());
    for (let i = 0; i < 800; i++) { if (TIENDA.activaEn(promo, f)) return f; f.setDate(f.getDate() + 1); }
    return null;
};
TIENDA.diasRestantes = function (promo) {        // días que le quedan a la promoción (1 = solo hoy)
    const f = new Date(); let n = 0;
    while (n < 400 && TIENDA.activaEn(promo, f)) { n++; f.setDate(f.getDate() + 1); }
    return Math.max(1, n);
};
TIENDA.producto = id => TIENDA.productos.find(p => p.id === id);
TIENDA.aplicaA = function (promo, prod) {
    const a = promo.aplica;
    const lista = Array.isArray(a) ? a : [a];
    return lista.includes("todos") || lista.includes(prod.categoria) || lista.includes(prod.id);
};
TIENDA.promoDe = function (prod) {               // mayor descuento activo para ese producto
    return TIENDA.promosActivas().filter(p => (p.tipo || "descuento") === "descuento" && TIENDA.aplicaA(p, prod))
        .sort((a, b) => b.descuento - a.descuento)[0] || null;
};
TIENDA.precioFinal = function (prod) {
    const pr = TIENDA.promoDe(prod);
    return prod.precio && pr ? Math.round(prod.precio * (1 - pr.descuento / 100) / 100) * 100 : prod.precio;
};
TIENDA.etiquetaPromo = function (promos) {       // texto corto para insignias: "-20%" o "PROMO"
    const d = promos.filter(p => (p.tipo || "descuento") === "descuento").map(p => p.descuento);
    return d.length ? `-${Math.max(...d)}%` : "PROMO";
};
