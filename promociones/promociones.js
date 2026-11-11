/* =========================================================
   PROMOCIONES Y TEMAS FESTIVOS DE LA PÁGINA
   Archivo creado con el GENERADOR DE PROMOCIONES (2026-10-22; actualizado 2026-11-10).
   No lo edite a mano: ábralo con el generador, cambie y vuelva a guardarlo.
   Para publicar: en GitHub arrastre la carpeta "promociones" de "2 ACTUALIZACION - subir solo esto".
   ========================================================= */
const PROMOCIONES = [
  {
    "id": "lanzamiento-revit",
    "activo": true,
    "titulo": "Lanzamiento SSING para Revit",
    "mensaje": "25 % en los módulos de SSING para Revit, el Revit TODO (con o sin ETABS y SAP2000), el Paquete BIM y Exportar a Revit.",
    "tipo": "descuento",
    "dias": ["2026-11-15:2026-12-15"],
    "descuento": 25,
    "aplica": ["revit", "rev-todo-anual", "rev-todo-mensual", "rev-base-anual", "rev-base-mensual", "bim-anual", "bim-mensual", "det-revit"]
  },
  {
    "id": "black-friday",
    "activo": true,
    "titulo": "Black Friday",
    "mensaje": "20 % de descuento en todas las licencias de CalculosSSING, SSING-DETALLES y SSING para Revit. Solo hoy.",
    "tipo": "descuento",
    "dias": ["black_friday"],
    "descuento": 20,
    "aplica": ["combos", "obra", "software", "calculos", "detalles", "revit", "adicionales"]
  },
  {
    "id": "navidad",
    "activo": true,
    "titulo": "Regalo de Navidad",
    "mensaje": "Compre CalculosSSING TODO anual y reciba gratis los Reportes en Word con su logo.",
    "tipo": "regalo",
    "dias": ["12-24", "12-25"],
    "compra": ["todo-anual"],
    "regalo": ["word-logo"]
  },
  {
    "id": "fin-de-anio",
    "activo": true,
    "titulo": "Paquete Casa de fin de año",
    "mensaje": "Por $400.000 lleve Zapatas, Vigas de cimentación, Losas y Escaleras por un año.",
    "tipo": "paquete",
    "dias": ["12-30", "12-31"],
    "precio": 400000,
    "unidad": "por año",
    "productos": ["cat-zapatas", "cat-vigas", "cat-losas", "cat-escaleras"]
  },
  {
    "id": "enero",
    "activo": true,
    "titulo": "Arranque de año",
    "mensaje": "15 % en remodelaciones y acabados para empezar el año con su casa renovada.",
    "tipo": "descuento",
    "dias": ["01-02:01-06"],
    "descuento": 15,
    "aplica": ["remodelacion", "acabados"]
  },
  {
    "id": "dia-ingeniero",
    "activo": true,
    "titulo": "Día del Ingeniero",
    "mensaje": "17 % en todas las licencias de CalculosSSING, SSING-DETALLES y SSING para Revit para celebrar a los ingenieros.",
    "tipo": "descuento",
    "dias": ["08-17"],
    "descuento": 17,
    "aplica": ["combos", "obra", "software", "calculos", "detalles", "revit", "adicionales"]
  },
  {
    "id": "amor-amistad",
    "activo": true,
    "titulo": "Amor y Amistad",
    "mensaje": "Compre Zapatas y reciba gratis Vigas de cimentación.",
    "tipo": "regalo",
    "dias": ["amor_amistad"],
    "compra": ["cat-zapatas"],
    "regalo": ["cat-vigas"]
  }
];

const AJUSTES_TEMAS = {
  "modo": "auto",
  "halloween": { "activo": true, "desde": "10-01", "hasta": "10-31" },
  "navidad": { "activo": true, "desde": "12-01", "hasta": "12-31" },
  "anio_nuevo": { "activo": true, "desde": "01-01", "hasta": "01-06" },
  "amor_amistad": { "activo": true, "desde": "09-01", "hasta": "09-30" },
  "ingeniero": { "activo": true, "desde": "08-10", "hasta": "08-17" },
  "independencia": { "activo": true, "desde": "07-18", "hasta": "07-20" }
};
