/* =========================================================
   SERVICIOS — aquí se editan los textos e imágenes de cada servicio.
   Cada servicio aparece como tarjeta en el inicio y tiene su propia
   página: servicio.html?id=<id>

   Para agregar fotos a la galería de un servicio:
     1. Copie la foto en la carpeta  img/servicios/
     2. Agregue una línea en "galeria":  ["img/servicios/mi-foto.jpg", "Descripción corta"],
   ========================================================= */
const SERVICIOS = [
    {
        id: "estructural",
        icono: "fa-building",
        titulo: "Diseño y Análisis Estructural",
        corto: "Análisis sísmico y diseño de estructuras en concreto y acero bajo NSR-10, ACI 318 y AISC 360.",
        imagen: "img/imagen1.jpg",
        dibujo: "portico",
        lead: "Diseñamos estructuras seguras, económicas y construibles. Cada proyecto se modela, analiza y verifica elemento por elemento bajo el Reglamento Colombiano de Construcción Sismo Resistente NSR-10.",
        texto: [
            "Partimos del estudio de suelos y del proyecto arquitectónico para definir el sistema estructural más conveniente: pórticos de concreto, muros estructurales, sistemas combinados o estructuras metálicas. El modelo se construye en software de análisis (ETABS, SAFE, MIDAS Gen NX) con las cargas del Título B y el espectro de diseño del Título A según la zona de amenaza sísmica y el perfil de suelo del sitio.",
            "Verificamos derivas, irregularidades, cortante basal y efectos P-Delta. Luego diseñamos vigas, columnas, losas, muros, escaleras y cimentaciones con el Título C (concreto estructural, basado en ACI 318) o el Título F (acero, basado en AISC 360), con las exigencias de disipación de energía DMI o DES que correspondan.",
            "El resultado es una memoria de cálculo completa y planos estructurales listos para licencia de construcción y revisión independiente, según la Ley 1796 de 2016."
        ],
        incluye: [
            "Predimensionamiento y selección del sistema estructural",
            "Modelo 3D y análisis sísmico (FHE y modal espectral)",
            "Control de derivas e irregularidades (Título A)",
            "Diseño de vigas, columnas, losas y muros (Título C)",
            "Diseño de cimentaciones: zapatas, vigas de amarre, pilas y losas",
            "Estructuras metálicas y conexiones (Título F / AISC 360)",
            "Memorias de cálculo y planos estructurales",
            "Acompañamiento en la revisión independiente"
        ],
        normas: [
            ["NSR-10 Título A", "Requisitos generales de diseño y construcción sismo resistente: espectro, métodos de análisis y derivas."],
            ["NSR-10 Título B", "Cargas muertas, vivas, de viento y combinaciones de carga."],
            ["NSR-10 Título C", "Concreto estructural. Adopta los criterios del ACI 318 adaptados a Colombia."],
            ["ACI 318-19", "Building Code Requirements for Structural Concrete — referencia para diseño a flexión, cortante, punzonamiento y anclaje."],
            ["NSR-10 Título F / AISC 360", "Estructuras metálicas: diseño de miembros y conexiones en acero."],
            ["Ley 1796 de 2016", "Revisión independiente de diseños estructurales y supervisión técnica."]
        ],
        herramientas: ["ETABS", "SAFE", "MIDAS Gen NX", "SAP2000", "Revit", "AutoCAD", "CalculosSSING"],
        entregables: [
            ["Memoria de cálculo", "Hipótesis, cargas, análisis y diseño de cada elemento."],
            ["Planos estructurales", "Plantas, despieces, secciones y detalles constructivos."],
            ["Modelo digital", "Archivo del modelo de análisis para revisión."]
        ],
        galeria: [
            ["img/imagen1.jpg", "Modelado estructural de edificación"],
            ["img/fondo-hero.jpg", "Estructura en ejecución"],
            ["img/imagen7.jpg", "Coordinación del modelo"],
            ["img/imagen6.jpg", "Cimentaciones"]
        ],
        preguntas: [
            ["¿Qué necesito para iniciar el diseño?", "Planos arquitectónicos (DWG o PDF), el estudio de suelos y la ubicación del proyecto. Si no tiene estudio de suelos, también lo podemos gestionar."],
            ["¿Los diseños sirven para licencia de construcción?", "Sí. Entregamos memorias y planos firmados por ingeniero con matrícula profesional vigente, como lo exige la curaduría o la oficina de planeación."],
            ["¿Diseñan casas de uno y dos pisos?", "Sí. Aplicamos el Título E de la NSR-10 o, cuando conviene, un diseño estructural completo."]
        ]
    },
    {
        id: "software",
        icono: "fa-code",
        titulo: "Desarrollo de Software de Cálculo",
        corto: "Herramientas a medida que automatizan cálculos y memorias de ingeniería con trazabilidad normativa.",
        imagen: "img/imagen2.jpg",
        dibujo: "codigo",
        lead: "Convertimos procedimientos de ingeniería en programas confiables. Menos horas repitiendo hojas de cálculo, más tiempo para el criterio técnico.",
        texto: [
            "Somos ingenieros que programan. Por eso cada herramienta que desarrollamos sigue paso a paso la norma: cada fórmula indica su numeral de la NSR-10 o del ACI 318, cada constante normativa queda identificada y cada resultado se puede revisar a mano.",
            "Nuestro producto principal es CalculosSSING, un programa de escritorio para generar memorias de cálculo de cimentaciones, losas, escaleras, muros, pilas, pilotes, tanques y piscinas: 32 cálculos en 11 categorías, con memoria en PDF y planos en DXF.",
            "También desarrollamos herramientas a la medida de su empresa: automatización de hojas de Excel, generación de reportes, lectura de resultados de ETABS/SAFE y aplicaciones con interfaz gráfica en Python."
        ],
        incluye: [
            "Programas de escritorio con interfaz gráfica",
            "Memorias de cálculo automáticas (Word / PDF)",
            "Generación de planos DXF",
            "Automatización de hojas de cálculo existentes",
            "Lectura y post-proceso de resultados de ETABS / SAFE",
            "Licenciamiento y actualizaciones",
            "Pruebas de validación contra ejemplos resueltos",
            "Capacitación y soporte"
        ],
        normas: [
            ["NSR-10", "Cada fórmula referencia su numeral del Reglamento."],
            ["ACI 318", "Procedimientos de diseño a flexión, cortante y punzonamiento."],
            ["Validación", "Resultados comparados con ejemplos de libros y cálculos manuales."]
        ],
        herramientas: ["Python", "PySide / Qt", "Tkinter", "JavaScript", "Excel", "Word", "DXF"],
        entregables: [
            ["Programa instalable", "Instalador para Windows con licencia."],
            ["Manual de usuario", "Guía paso a paso con ejemplos."],
            ["Soporte", "Actualizaciones y corrección de errores."]
        ],
        galeria: [
            ["img/imagen2.jpg", "Desarrollo de software de ingeniería"],
            ["img/imagen7.jpg", "Integración con modelos"]
        ],
        preguntas: [
            ["¿Cómo obtengo CalculosSSING?", "Llene la solicitud en la sección Software de Cálculo. Le enviamos el programa y su licencia (prueba gratis o licencia completa)."],
            ["¿Pueden programar mi propia hoja de cálculo?", "Sí. Revisamos su procedimiento, lo validamos y lo convertimos en una herramienta segura y fácil de usar."]
        ]
    },
    {
        id: "renders",
        icono: "fa-cube",
        titulo: "Modelado Arquitectónico y Renders 3D",
        corto: "Modelos BIM y visualizaciones fotorrealistas para presentar, vender y coordinar su proyecto.",
        imagen: "img/imagen3.jpg",
        dibujo: "edificio",
        lead: "Mostramos su proyecto antes de construirlo. Imágenes y recorridos que ayudan a tomar decisiones, vender y aprobar.",
        texto: [
            "Desarrollamos el modelo arquitectónico tridimensional a partir de sus planos o bocetos, con materiales, iluminación y entorno reales. El mismo modelo sirve para documentar el proyecto y para coordinarlo con la estructura.",
            "Entregamos renders fotorrealistas de fachadas e interiores, vistas aéreas, plantas amobladas y recorridos virtuales en video, ideales para preventas, licencias y presentaciones a clientes."
        ],
        incluye: [
            "Modelo arquitectónico 3D (BIM)",
            "Renders exteriores e interiores",
            "Plantas y cortes ambientados",
            "Recorridos virtuales en video",
            "Imágenes para preventa y publicidad",
            "Planos arquitectónicos de presentación"
        ],
        normas: [
            ["NSR-10 Título K", "Requisitos complementarios: circulaciones, salidas y ocupación."],
            ["Norma urbana local", "Índices, retiros y alturas según el POT del municipio."]
        ],
        herramientas: ["Revit", "SketchUp", "Lumion", "Twinmotion", "Enscape", "D5 Render", "AutoCAD"],
        entregables: [
            ["Renders HD / 4K", "Imágenes listas para impresión y redes."],
            ["Video recorrido", "Animación del proyecto."],
            ["Modelo 3D", "Archivo nativo para coordinación."]
        ],
        galeria: [
            ["img/imagen3.jpg", "Render arquitectónico"],
            ["img/photo-1503387762-592deb58ef4ex.avif", "Visualización de proyecto"],
            ["img/imagen7.jpg", "Modelo 3D"]
        ],
        preguntas: [
            ["¿Qué necesito para un render?", "Planos o un boceto con medidas, y referencias de materiales y estilo."],
            ["¿Cuánto tarda?", "Depende del tamaño del proyecto; normalmente de 5 a 15 días hábiles."]
        ]
    },
    {
        id: "drones",
        icono: "fa-satellite",
        titulo: "Fotogrametría y Levantamientos con Drones",
        corto: "Ortomosaicos, modelos digitales de terreno, curvas de nivel y nubes de puntos de alta precisión.",
        imagen: "img/imagen4.jpg",
        dibujo: "terreno",
        lead: "Información precisa del terreno en una fracción del tiempo de un levantamiento tradicional.",
        texto: [
            "Planificamos el vuelo según el área y la precisión requerida, instalamos puntos de control en tierra (GCP) georreferenciados y capturamos imágenes aéreas de alta resolución con traslapo controlado.",
            "Las imágenes se procesan para obtener ortomosaicos, modelos digitales de superficie (MDS) y de terreno (MDT), nubes de puntos, curvas de nivel y modelos 3D, que se integran directamente al diseño vial, urbanístico, de movimientos de tierra o al seguimiento de obra.",
            "Las operaciones se realizan conforme al reglamento aeronáutico colombiano para aeronaves no tripuladas (RAC 100 de la Aerocivil)."
        ],
        incluye: [
            "Planificación de vuelo y apoyo topográfico",
            "Ortomosaicos georreferenciados",
            "Modelos digitales de superficie y de terreno",
            "Curvas de nivel y perfiles",
            "Nubes de puntos y modelos 3D",
            "Cálculo de volúmenes (cortes y rellenos)",
            "Seguimiento periódico de avance de obra",
            "Inspección visual de estructuras y cubiertas"
        ],
        normas: [
            ["RAC 100 (Aerocivil)", "Reglamento para la operación de aeronaves no tripuladas en Colombia."],
            ["MAGNA-SIRGAS", "Sistema de referencia oficial de Colombia (IGAC) para la georreferenciación."]
        ],
        herramientas: ["DJI", "Agisoft Metashape", "Pix4D", "DJI Terra", "Civil 3D", "QGIS", "GPS / RTK"],
        entregables: [
            ["Ortomosaico", "Imagen georreferenciada del terreno."],
            ["Topografía", "Curvas de nivel y MDT en DWG / LandXML."],
            ["Informe", "Áreas, volúmenes y precisión obtenida."]
        ],
        galeria: [
            ["img/imagen4.jpg", "Levantamiento aéreo"],
            ["img/imagen5.jpg", "Seguimiento de obra"]
        ],
        preguntas: [
            ["¿Qué precisión se obtiene?", "Con puntos de control bien distribuidos se logran precisiones del orden de centímetros, según la altura de vuelo y el equipo."],
            ["¿Sirve para calcular volúmenes?", "Sí. Comparando dos vuelos o el terreno contra el diseño se obtienen volúmenes de corte y relleno."]
        ]
    },
    {
        id: "obras",
        icono: "fa-helmet-safety",
        titulo: "Gestión y Ejecución de Obras",
        corto: "Planificación, presupuesto, programación y dirección de obra con control de calidad y seguridad.",
        imagen: "img/imagen5.jpg",
        dibujo: "gantt",
        lead: "Construimos lo que diseñamos: con presupuesto claro, cronograma realista y calidad verificada en cada etapa.",
        texto: [
            "Elaboramos el presupuesto con análisis de precios unitarios (APU), la programación de obra y el flujo de caja. Durante la construcción coordinamos personal, materiales, equipos y subcontratistas para cumplir el diseño y las especificaciones técnicas.",
            "Llevamos control de calidad de materiales (ensayos de concreto y acero según la NSR-10), registro de avance, bitácora y gestión de la seguridad y salud en el trabajo."
        ],
        incluye: [
            "Presupuesto y análisis de precios unitarios",
            "Programación de obra y flujo de caja",
            "Dirección y residencia de obra",
            "Control de calidad de materiales",
            "Control de cantidades y cortes de obra",
            "Gestión de seguridad y salud en el trabajo",
            "Informes periódicos de avance",
            "Entrega y liquidación"
        ],
        normas: [
            ["NSR-10 Título C", "Control de calidad del concreto: muestreo y ensayo de cilindros (C.5)."],
            ["NSR-10 Título I", "Supervisión técnica independiente."],
            ["Resolución 0312 de 2019", "Estándares mínimos del SG-SST."],
            ["Resolución 4272 de 2021", "Requisitos para trabajo seguro en alturas."]
        ],
        herramientas: ["MS Project", "Excel / APU", "AutoCAD", "Revit", "Drones"],
        entregables: [
            ["Presupuesto", "APU, cantidades y valor total."],
            ["Cronograma", "Programación y ruta crítica."],
            ["Informes", "Avance, calidad y seguridad."]
        ],
        galeria: [
            ["img/imagen5.jpg", "Ejecución de obra"],
            ["img/fondo-hero.jpg", "Estructura en construcción"],
            ["img/imagen8.jpg", "Control en campo"]
        ],
        preguntas: [
            ["¿Ejecutan obras completas?", "Sí, desde la cimentación hasta la entrega, o por etapas (estructura, obra gris, acabados)."]
        ]
    },
    {
        id: "geotecnia",
        icono: "fa-earth-americas",
        titulo: "Estudios Geotécnicos y de Suelos",
        corto: "Exploración, ensayos de laboratorio y recomendaciones de cimentación según NSR-10 Título H.",
        imagen: "img/imagen6.jpg",
        dibujo: "suelo",
        lead: "Una buena estructura empieza por conocer el suelo. Entregamos parámetros confiables para diseñar la cimentación correcta.",
        texto: [
            "Definimos el número y la profundidad de las exploraciones según la categoría de la unidad de construcción (NSR-10, H.3). Realizamos sondeos con ensayo de penetración estándar (SPT), apiques y toma de muestras para laboratorio.",
            "Con los resultados de humedad, límites de Atterberg, granulometría, peso unitario, compresión y consolidación clasificamos el suelo (USCS) y calculamos la capacidad portante, los asentamientos esperados y el perfil de suelo para el espectro sísmico (Título A.2).",
            "El informe incluye recomendaciones de tipo y profundidad de cimentación, excavaciones, estabilidad de taludes y manejo de aguas."
        ],
        incluye: [
            "Programa de exploración (NSR-10 H.3)",
            "Sondeos con SPT y apiques",
            "Ensayos de laboratorio",
            "Clasificación del suelo (USCS)",
            "Capacidad portante y asentamientos",
            "Perfil de suelo para diseño sísmico",
            "Recomendaciones de cimentación",
            "Estabilidad de taludes y excavaciones"
        ],
        normas: [
            ["NSR-10 Título H", "Estudios geotécnicos: exploración, cimentaciones, excavaciones y estabilidad."],
            ["NSR-10 A.2.4", "Tipos de perfil de suelo (A a F) para definir el espectro de diseño."],
            ["INV E-111 / ASTM D1586", "Ensayo de penetración estándar (SPT)."],
            ["ASTM D2487", "Sistema Unificado de Clasificación de Suelos (USCS)."]
        ],
        herramientas: ["Equipo SPT", "Laboratorio de suelos", "GeoStudio", "Excel", "CalculosSSING"],
        entregables: [
            ["Informe geotécnico", "Exploración, ensayos y análisis."],
            ["Perfiles estratigráficos", "Registro de cada sondeo."],
            ["Recomendaciones", "Cimentación, capacidad y asentamientos."]
        ],
        galeria: [
            ["img/imagen6.jpg", "Exploración de suelos"],
            ["img/imagen4.jpg", "Reconocimiento del terreno"]
        ],
        preguntas: [
            ["¿Cuántos sondeos necesita mi proyecto?", "Depende de la categoría de la construcción (número de pisos y cargas) y del área. La NSR-10 fija mínimos en la tabla H.3.2-1."],
            ["¿Es obligatorio para la licencia?", "Sí. La NSR-10 exige estudio geotécnico para toda edificación, con la excepción de algunas viviendas de uno y dos pisos según el Título E."]
        ]
    },
    {
        id: "bim",
        icono: "fa-cubes",
        titulo: "Modelado y Coordinación BIM",
        corto: "Información paramétrica centralizada para coordinar estructura, arquitectura e instalaciones.",
        imagen: "img/imagen7.jpg",
        dibujo: "bim",
        lead: "Un solo modelo, toda la información. Detectamos interferencias en la pantalla, no en la obra.",
        texto: [
            "Implementamos flujos de trabajo BIM que integran arquitectura, estructura e instalaciones en un modelo federado. Cada elemento lleva su geometría y sus propiedades: materiales, cantidades, fases y costos.",
            "Con la detección de interferencias (clash detection) resolvemos los cruces entre vigas, ductos y tuberías antes de construir, y obtenemos cantidades de obra directamente del modelo.",
            "Trabajamos bajo los principios de la norma ISO 19650 para la gestión de la información, alineados con la Estrategia Nacional BIM de Colombia."
        ],
        incluye: [
            "Modelado estructural y arquitectónico",
            "Modelo federado multidisciplinario",
            "Detección y solución de interferencias",
            "Cantidades de obra desde el modelo",
            "Planos coordinados",
            "Plan de ejecución BIM (BEP)",
            "Simulación 4D (cronograma)",
            "Modelos as-built"
        ],
        normas: [
            ["ISO 19650", "Gestión de la información en proyectos con BIM."],
            ["Estrategia Nacional BIM", "Hoja de ruta de adopción BIM en Colombia."],
            ["LOD / LOIN", "Niveles de desarrollo e información de los elementos."]
        ],
        herramientas: ["Revit", "Navisworks", "Tekla", "Dynamo", "BIM 360 / ACC", "IFC"],
        entregables: [
            ["Modelo BIM", "Archivos nativos e IFC."],
            ["Informe de interferencias", "Cruces detectados y solución."],
            ["Cantidades", "Tablas extraídas del modelo."]
        ],
        galeria: [
            ["img/imagen7.jpg", "Modelo BIM coordinado"],
            ["img/imagen1.jpg", "Modelo estructural"],
            ["img/imagen3.jpg", "Modelo arquitectónico"]
        ],
        preguntas: [
            ["¿Qué ventaja tiene BIM frente a planos 2D?", "Las interferencias y cantidades se obtienen del modelo, se reducen los cambios en obra y todos trabajan sobre la misma información."]
        ]
    },
    {
        id: "interventoria",
        icono: "fa-clipboard-check",
        titulo: "Interventoría y Supervisión Técnica",
        corto: "Control técnico, administrativo y de calidad en campo para que la obra cumpla lo diseñado.",
        imagen: "img/imagen8.jpg",
        dibujo: "control",
        lead: "Vigilamos que lo construido sea lo diseñado: calidad, plazos, costos y seguridad bajo control.",
        texto: [
            "Ejercemos la supervisión técnica que exige la NSR-10 (Título I) y la Ley 1796 de 2016, verificando que la construcción cumpla los planos, las especificaciones y el Reglamento.",
            "En contratos de obra pública realizamos interventoría integral: seguimiento técnico, administrativo, financiero, ambiental y de seguridad, conforme a la Ley 80 de 1993 y la Ley 1474 de 2011.",
            "Revisamos materiales y ensayos, aprobamos cortes de obra y documentamos todo en informes y bitácora."
        ],
        incluye: [
            "Supervisión técnica (NSR-10 Título I)",
            "Verificación de planos y especificaciones",
            "Control de calidad de materiales y ensayos",
            "Revisión de cantidades y actas de obra",
            "Seguimiento de cronograma y presupuesto",
            "Control de seguridad en obra",
            "Informes periódicos y bitácora",
            "Recibo final y liquidación"
        ],
        normas: [
            ["NSR-10 Título I", "Supervisión técnica independiente de la construcción."],
            ["Ley 1796 de 2016", "Supervisión técnica independiente obligatoria."],
            ["Ley 80 de 1993", "Estatuto general de contratación pública."],
            ["Ley 1474 de 2011", "Funciones y responsabilidades de la interventoría."]
        ],
        herramientas: ["Bitácora", "Ensayos de laboratorio", "Drones", "MS Project", "Excel"],
        entregables: [
            ["Informes", "Técnicos, administrativos y financieros."],
            ["Actas", "Avance, cortes y recibo de obra."],
            ["Certificación", "Constancia de supervisión técnica."]
        ],
        galeria: [
            ["img/imagen8.jpg", "Supervisión en campo"],
            ["img/imagen5.jpg", "Control de obra"]
        ],
        preguntas: [
            ["¿Cuándo es obligatoria la supervisión técnica?", "La Ley 1796 de 2016 y la NSR-10 la exigen para edificaciones que superan ciertos límites de área o que pertenecen a grupos de uso especiales."]
        ]
    }
];

/* Dibujos técnicos de cada servicio (líneas tipo plano). No necesita editarlos. */
const DIBUJOS = {
    portico: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.6">
        <g opacity=".35" stroke-width="1"><path d="M40 250H370M60 250V40M160 250V40M260 250V40M360 250V40" stroke-dasharray="4 5"/></g>
        <path d="M60 250V60M160 250V60M260 250V60M360 250V60" stroke-width="5"/>
        <path d="M60 190H360M60 125H360M60 60H360" stroke-width="5"/>
        <path d="M45 250h30v14h-30zM145 250h30v14h-30zM245 250h30v14h-30zM345 250h30v14h-30z" fill="currentColor" fill-opacity=".15"/>
        <g stroke-width="1"><path d="M30 60v190M26 60h8M26 125h8M26 190h8M26 250h8"/></g>
        <g fill="currentColor" stroke="none" font-family="IBM Plex Mono, monospace" font-size="10"><text x="8" y="96">h=3.0</text><text x="8" y="161">h=3.0</text><text x="8" y="224">h=3.5</text><text x="96" y="276">L = 5.00 m</text></g>
        <path d="M60 60c30 22 70 22 100 0M160 60c30 22 70 22 100 0M260 60c30 22 70 22 100 0" stroke-dasharray="3 3" opacity=".7"/>
        <path d="M372 60h18m-18 65h12m-12 65h8" opacity=".8"/><path d="M386 54l6 6-6 6" opacity=".8"/>
    </svg>`,
    codigo: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="30" y="30" width="340" height="220" rx="12"/><path d="M30 60h340"/>
        <circle cx="50" cy="45" r="4"/><circle cx="64" cy="45" r="4"/><circle cx="78" cy="45" r="4"/>
        <g fill="currentColor" stroke="none" font-family="IBM Plex Mono, monospace" font-size="11">
        <text x="50" y="90" opacity=".55"># NSR-10 C.11.11 — punzonamiento</text>
        <text x="50" y="112">vc = 0.33 * λ * √f'c * bo * d</text>
        <text x="50" y="134">φVc = 0.75 * vc</text>
        <text x="50" y="156" opacity=".55"># verificación</text>
        <text x="50" y="178">if Vu &lt;= φVc:</text>
        <text x="70" y="200">estado = "CUMPLE"</text></g>
        <rect x="250" y="190" width="100" height="40" rx="8" fill="currentColor" fill-opacity=".12"/>
        <path d="M270 210l10 10 20-20"/>
    </svg>`,
    edificio: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M20 250h360" opacity=".5"/>
        <path d="M90 250V80l90-40 90 40v170"/><path d="M180 40v210M270 80l60 25v145"/>
        <g opacity=".75"><path d="M105 100h60v25h-60zM105 140h60v25h-60zM105 180h60v25h-60zM195 100h60v25h-60zM195 140h60v25h-60zM195 180h60v25h-60z"/>
        <path d="M285 115l30 12v18l-30-12zM285 155l30 12v18l-30-12zM285 195l30 12v18l-30-12z"/></g>
        <path d="M160 250v-30h40v30"/>
        <g opacity=".3" stroke-dasharray="3 5"><path d="M180 40L20 150M180 40l200 110"/></g>
    </svg>`,
    terreno: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.4">
        <g opacity=".85"><path d="M20 230c60-30 110 10 170-20s120-40 190-10"/><path d="M20 205c60-30 110 5 170-25s120-35 190-10" opacity=".8"/>
        <path d="M30 180c55-28 100 0 160-28s110-30 180-10" opacity=".65"/><path d="M50 155c50-24 90-2 140-26s100-24 160-8" opacity=".5"/>
        <path d="M80 132c40-18 75-4 115-22s80-18 125-6" opacity=".35"/></g>
        <g transform="translate(200 50)"><path d="M-30 0h60M-18 -6h36"/><circle cx="-34" cy="-4" r="9"/><circle cx="34" cy="-4" r="9"/><rect x="-10" y="-4" width="20" height="12" rx="3"/></g>
        <path d="M200 62L130 200M200 62l70 130" stroke-dasharray="4 4" opacity=".6"/>
        <g fill="currentColor" stroke="none"><path d="M120 190l6 10h-12zM280 182l6 10h-12zM60 220l6 10h-12z"/></g>
        <g fill="currentColor" stroke="none" font-family="IBM Plex Mono, monospace" font-size="10" opacity=".7"><text x="300" y="250">GCP · RTK</text><text x="22" y="40">GSD 2.1 cm/px</text></g>
    </svg>`,
    gantt: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.4">
        <path d="M40 40v210h340" /><g opacity=".25"><path d="M100 40v210M160 40v210M220 40v210M280 40v210M340 40v210" stroke-dasharray="3 4"/></g>
        <g fill="currentColor" fill-opacity=".18"><rect x="45" y="60" width="90" height="18" rx="4"/><rect x="110" y="95" width="110" height="18" rx="4"/><rect x="190" y="130" width="90" height="18" rx="4"/><rect x="250" y="165" width="80" height="18" rx="4"/><rect x="300" y="200" width="70" height="18" rx="4"/></g>
        <rect x="45" y="60" width="90" height="18" rx="4"/><rect x="110" y="95" width="110" height="18" rx="4"/><rect x="190" y="130" width="90" height="18" rx="4"/><rect x="250" y="165" width="80" height="18" rx="4"/><rect x="300" y="200" width="70" height="18" rx="4"/>
        <path d="M135 69h-10v35M220 104h-10v35M280 139h-15v35M330 174h-15v35" opacity=".7"/>
        <g fill="currentColor" stroke="none" font-family="IBM Plex Mono, monospace" font-size="9" opacity=".75"><text x="50" y="270">S1</text><text x="110" y="270">S4</text><text x="170" y="270">S8</text><text x="230" y="270">S12</text><text x="290" y="270">S16</text></g>
    </svg>`,
    suelo: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.4">
        <path d="M20 70h360"/><g opacity=".9"><path d="M20 130c80 8 160-6 360 4"/><path d="M20 195c100-10 200 8 360-4"/></g>
        <g fill="currentColor" fill-opacity=".05"><path d="M20 70h360v64c-200-10-280 4-360-4z"/></g>
        <g opacity=".4" fill="currentColor" stroke="none"><circle cx="60" cy="160" r="2"/><circle cx="90" cy="175" r="2"/><circle cx="130" cy="155" r="2"/><circle cx="300" cy="170" r="2"/><circle cx="340" cy="150" r="2"/><circle cx="250" cy="180" r="2"/><circle cx="80" cy="225" r="3"/><circle cx="150" cy="240" r="3"/><circle cx="320" cy="230" r="3"/></g>
        <path d="M150 70v40M130 110h40v14h-40z" stroke-width="2.4"/><path d="M128 124h44" />
        <path d="M150 124l-40 60M150 124l40 60" stroke-dasharray="3 4" opacity=".6"/>
        <path d="M270 40v200" stroke-width="2.4"/><g stroke-width="1"><path d="M262 90h16M262 140h16M262 190h16"/></g>
        <g fill="currentColor" stroke="none" font-family="IBM Plex Mono, monospace" font-size="10"><text x="285" y="94">N=8</text><text x="285" y="144">N=17</text><text x="285" y="194">N=32</text><text x="24" y="100" opacity=".7">CL</text><text x="24" y="165" opacity=".7">SM</text><text x="24" y="230" opacity=".7">GP</text><text x="250" y="30">SPT-1</text></g>
    </svg>`,
    bim: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.5">
        <g opacity=".35"><path d="M200 230l-130-60 130-60 130 60z"/></g>
        <path d="M200 190l-110-50 110-50 110 50z"/><path d="M200 150l-110-50 110-50 110 50z" opacity=".75"/><path d="M200 110l-110-50 110-50 110 50z" opacity=".5"/>
        <path d="M90 140V60M310 140V60M200 190V10" stroke-dasharray="3 4" opacity=".6"/>
        <path d="M150 130l90-40" stroke-width="3"/><path d="M160 85l90 40" stroke-width="3" opacity=".6"/>
        <circle cx="200" cy="108" r="12" stroke-width="2"/><path d="M193 101l14 14M207 101l-14 14"/>
        <g fill="currentColor" stroke="none" font-family="IBM Plex Mono, monospace" font-size="10" opacity=".75"><text x="20" y="262">ARQ · EST · MEP</text><text x="300" y="262">ISO 19650</text></g>
    </svg>`,
    control: `<svg viewBox="0 0 400 280" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="70" y="30" width="200" height="230" rx="10"/><rect x="130" y="20" width="80" height="24" rx="6" fill="currentColor" fill-opacity=".12"/>
        <g><path d="M95 85l8 8 16-16"/><path d="M135 85h110"/><path d="M95 130l8 8 16-16"/><path d="M135 130h110"/><path d="M95 175l8 8 16-16"/><path d="M135 175h90"/><rect x="95" y="210" width="20" height="20" rx="4"/><path d="M135 220h70"/></g>
        <circle cx="300" cy="190" r="45"/><path d="M332 222l40 40" stroke-width="4"/>
        <g opacity=".6"><path d="M280 200v-25h40v25M275 175l25-18 25 18"/></g>
    </svg>`
};
