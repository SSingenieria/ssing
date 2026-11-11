/* =========================================================
   ASESOR SSING — chat de preguntas frecuentes con botones (sin IA, gratis).
   - Responde sobre programas, precios, prueba gratis, otros países, construcción, diseño y BIM.
   - Los precios de los programas salen de js/tienda.js (con la promoción del día si la hay).
   - Para cotizar pide los datos y los manda a WhatsApp ya escritos. No guarda ni envía nada a otro lado.
   Para cambiar textos: edite RESPUESTAS y COTIZAR más abajo.
   ========================================================= */
(function () {
    const WHATSAPP = "573116619341";
    const T = typeof TIENDA !== "undefined" ? TIENDA : null;

    const pesos = n => "$" + Number(n).toLocaleString("es-CO");
    function precio(id) {
        const p = T && T.producto(id);
        if (!p || !p.precio) return "";
        const fin = T.precioFinal ? T.precioFinal(p) : p.precio;
        const u = /mes/.test(p.unidad) ? "/mes" : /único/.test(p.unidad) ? " pago único" : "/año";
        return fin !== p.precio ? `<s>${pesos(p.precio)}</s> <b>${pesos(fin)}</b>${u}` : `<b>${pesos(p.precio)}</b>${u}`;
    }
    const promoRevit = () => {
        const p = T && T.producto("rev-base-anual");
        const pr = p && T.promoDe ? T.promoDe(p) : null;
        return pr ? `<p class="as-promo">🎉 ${pr.titulo}: ${pr.descuento} % de descuento.</p>` : "";
    };
    const NOTA_PRECIO = "Los precios varían según el lugar y las cantidades de obra. Escríbanos y le damos el valor exacto de su proyecto.";

    /* ---------------- Respuestas fijas ---------------- */
    const RESPUESTAS = {
        menu: () => ({ texto: "¿En qué le ayudamos?", botones: MENU }),
        programas: () => ({
            texto: `<p>Tenemos 3 programas para ingenieros, con norma NSR-10:</p>
                <p>🧮 <b>CalculosSSING</b>: 32 cálculos (zapatas, losas, muros, pilas, tanques…) con memoria en PDF y plano DXF.</p>
                <p>🏢 <b>SSING-DETALLES</b>: arma el modelo en ETABS o SAP2000, revisa derivas y cortante y saca detalles de refuerzo y memoria.</p>
                <p>🏗️ <b>SSING para Revit</b>: acero en cualquier modelo, planos de arquitectura a 3D, topografía, entorno, IA y QR de obra.</p>
                <p>🎁 Puede <b>probarlos gratis</b> antes de comprar.</p>`,
            botones: [["CalculosSSING", "calculos"], ["SSING-DETALLES", "detalles"], ["SSING para Revit", "revit"], ["Precios", "precios"], ["Prueba gratis", "prueba"], ["Menú", "menu"]]
        }),
        calculos: () => ({
            texto: `<p>🧮 <b>CalculosSSING</b>: 32 cálculos en 11 categorías (zapatas, vigas de cimentación, losas, escaleras, muros, muros de contención, pilas, pilotes, tanques, piscinas…) con memoria en PDF, plano DXF y el artículo NSR-10 de cada fórmula.</p>
                <p>TODO: ${precio("todo-anual")} · ${precio("todo-mensual")}</p>
                <p>También por categoría suelta o por paquete de obra (Casa, Edificio, Contención…). Perpetua: ${precio("perp-calc")}.</p>
                <p>🌎 ¿Es de otro país? Adaptamos los cálculos a su norma bajo pedido.</p>`,
            botones: [["Ver precios por categoría", "@tienda.html"], ["Prueba gratis", "prueba"], ["Soy de otro país", "pais"], ["Otros programas", "programas"], ["Menú", "menu"]]
        }),
        detalles: () => ({
            texto: `<p>🏢 <b>SSING-DETALLES</b> (ETABS 18+ o SAP2000 v25+): arma el modelo, revisa cortante basal, derivas y torsión, saca la memoria en Word y PDF y los detalles de refuerzo en DXF.</p>
                <p>TODO: ${precio("det-todo-anual")} · ${precio("det-todo-mensual")}</p>
                <p>Por paquete: modelo + memoria ${precio("det-modelo-memoria")} · detalles de refuerzo ${precio("det-dxf")}.</p>
                <p>🌎 ¿Es de otro país? Lo adaptamos a su norma bajo pedido.</p>`,
            botones: [["Ver la tienda", "@tienda.html"], ["Prueba gratis", "prueba"], ["Soy de otro país", "pais"], ["Otros programas", "programas"], ["Menú", "menu"]]
        }),
        precios: () => ({
            texto: `<p>Precios principales:</p><ul>
                <li>🏗️ Revit TODO (sin ETABS ni SAP2000): ${precio("rev-base-anual")} · ${precio("rev-base-mensual")}</li>
                <li>🏗️ Revit TODO + modelos ETABS y SAP2000: ${precio("rev-todo-anual")} · ${precio("rev-todo-mensual")}</li>
                <li>🧮 CalculosSSING TODO: ${precio("todo-anual")} · ${precio("todo-mensual")}</li>
                <li>🏢 SSING-DETALLES TODO: ${precio("det-todo-anual")} · ${precio("det-todo-mensual")}</li>
                <li>🔥 TOTAL (todo junto): ${precio("total-anual")} · ${precio("total-mensual")}</li></ul>
                ${promoRevit()}
                <p>También hay licencia perpetua (pago único) y compra por categoría o por módulo.</p>
                <p>¿Busca precio de construcción o de un diseño? Eso se cotiza según el proyecto.</p>`,
            botones: [["Ver la tienda", "@tienda.html"], ["Licencia perpetua", "perpetua"], ["Prueba gratis", "prueba"],
                      ["Cotizar construcción", "cot:construccion"], ["Cotizar diseño o BIM", "cot:diseno"], ["Menú", "menu"]]
        }),
        perpetua: () => ({
            texto: `<p>Licencia perpetua: paga una vez y no vence. Incluye 1 año de actualizaciones.</p><ul>
                <li>Revit TODO (sin ETABS ni SAP2000): ${precio("perp-rev-base")}</li>
                <li>Revit TODO + ETABS y SAP2000: ${precio("perp-rev")}</li>
                <li>CalculosSSING TODO: ${precio("perp-calc")}</li>
                <li>SSING-DETALLES TODO: ${precio("perp-det")}</li>
                <li>TOTAL: ${precio("perp-total")}</li></ul>`,
            botones: [["Ver la tienda", "@tienda.html"], ["Hablar con un asesor real", "real"], ["Menú", "menu"]]
        }),
        revit: () => ({
            texto: `<p>🏗️ <b>SSING para Revit</b> (Revit 2023 a 2027): acero manual en cualquier modelo, revisión de choques, planos automáticos, arquitectura a 3D, topografía, entorno, asistente IA y QR de obra.</p>
                <p>Con el plan <b>+ ETABS y SAP2000</b> además trae sus modelos a Revit con todo el acero.</p>
                <p>Desde ${precio("rev-base-mensual")}.</p>${promoRevit()}`,
            botones: [["Ver SSING para Revit", "@revit.html"], ["Prueba gratis", "prueba"], ["Precios", "precios"], ["Menú", "menu"]]
        }),
        prueba: () => ({
            texto: `<p>🎁 ¡Sí! Puede <b>probarlo gratis</b> antes de comprar.</p>
                <p>1. Descárguelo en la página de software.<br>2. Al abrirlo le sale un código del equipo.<br>3. Envíenos ese código por WhatsApp y le activamos la prueba.</p>`,
            botones: [["Descargar", "@software.html"], ["Enviar mi código por WhatsApp", "wa:Hola, quiero la prueba gratis. Mi código del equipo es: "], ["Menú", "menu"]]
        }),
        norma: () => ({
            texto: `<p>✅ Todo con <b>NSR-10</b>: cada fórmula de la memoria dice de qué artículo de la norma sale. En tanques y piscinas también ACI 350 y AIS 180-13.</p>
                <p>¿Es de otro país? Lo ajustamos a su norma bajo pedido.</p>`,
            botones: [["Soy de otro país", "pais"], ["Prueba gratis", "prueba"], ["Menú", "menu"]]
        }),
        humano: () => ({
            texto: "Con gusto. Le atendemos por WhatsApp: <b>311 661 9341</b>.",
            botones: [["Abrir WhatsApp", "wa:Hola, quiero hablar con un asesor de SSING"], ["Menú", "menu"]]
        })
    };

    /* ---------------- Cotizaciones (preguntas y mensaje para WhatsApp) ---------------- */
    const SI_NO = ["Sí", "No", "No sé"];
    const COTIZAR = {
        construccion: {
            titulo: "Cotización de construcción", pide: "quiero cotizar una obra",
            intro: "Para cotizar su obra le hago unas preguntas cortas.",
            pasos: [
                ["tipo", "¿Qué necesita?", ["Construcción de vivienda", "Remodelación", "Ampliación o segundo piso", "Estructura y obra gris", "Acabados", "Cubiertas y techos", "Reforzamiento estructural", "Tanques y piscinas", "Placas, andenes y cerramientos", "Redes hidrosanitarias y eléctricas", "Otro"]],
                ["ciudad", "¿En qué ciudad o municipio es la obra?"],
                ["area", "¿Cuántos m² aproximadamente? (si no sabe, escriba «no sé»)"],
                ["planos", "¿Ya tiene planos?", SI_NO],
                ["detalle", "Cuéntenos en pocas palabras qué quiere hacer (o escriba «no»)."]
            ]
        },
        diseno: {
            titulo: "Cotización de diseño e ingeniería", pide: "quiero cotizar un diseño",
            intro: "Para cotizar el diseño le hago unas preguntas cortas.",
            pasos: [
                ["tipo", "¿Qué necesita?", ["Diseño estructural", "Modelo BIM (Revit)", "Paquete licencia de construcción", "Estudio de suelos", "Planos y renders 3D", "Levantamiento con dron", "Presupuesto y APU", "Peritaje o evaluación", "Interventoría", "Otro"]],
                ["uso", "¿Qué uso tiene la edificación?", ["Vivienda", "Edificio de apartamentos", "Comercial u oficinas", "Bodega o industrial", "Institucional", "Otro"]],
                ["pisos", "¿Cuántos pisos?"],
                ["area", "¿Cuántos m² construidos aproximadamente?"],
                ["ciudad", "¿En qué ciudad o municipio?"],
                ["arq", "¿Tiene planos de arquitectura?", SI_NO],
                ["suelos", "¿Tiene estudio de suelos?", SI_NO]
            ]
        },
        pais: {
            titulo: "Programa para otro país", pide: "soy de otro país y quiero el programa con mi norma",
            intro: "Nuestros programas vienen con NSR-10 (Colombia), pero bajo pedido los ajustamos a la norma de su país 🌎. SSING para Revit sirve en cualquier país tal como viene.",
            pasos: [
                ["pais", "¿De qué país es?"],
                ["norma", "¿Qué norma usa? (por ejemplo ACI 318, E.060, NEC, NTC… o «no sé»)"],
                ["que", "¿Qué necesita?", ["CalculosSSING", "SSING-DETALLES", "SSING para Revit", "Todo", "No sé aún"]]
            ]
        }
    };
    const NOMBRES = { tipo: "Servicio", ciudad: "Ciudad", area: "Área (m²)", planos: "Tiene planos", detalle: "Detalle",
                      uso: "Uso", pisos: "Pisos", arq: "Planos de arquitectura", suelos: "Estudio de suelos",
                      pais: "País", norma: "Norma", que: "Programa" };

    const MENU = [
        ["Programas para ingenieros", "programas"], ["Precios", "precios"], ["Prueba gratis", "prueba"],
        ["Construcción y remodelación", "cot:construccion"], ["Diseño estructural y BIM", "cot:diseno"],
        ["Soy de otro país", "pais"], ["Hablar con un asesor real", "real"]
    ];

    /* ---------------- Palabras que reconoce si el visitante escribe ---------------- */
    //   El orden importa: gana la primera que coincida. Los textos llegan en minúscula y sin tildes.
    const PRECIO = /precio|cuesta|cuanto|valor|costo|tarifa/;
    const PROGRAMA = /programa|software|aplicacion|\bapp\b|plugin|complemento|licencia|calculosssing|ssing-detalles|descarga|instal/;
    function cualPrograma(n) {                    // de qué programa habla
        if (/revit/.test(n)) return "revit";
        if (/detalle|etabs|\bsap/.test(n)) return "detalles";
        if (/calculo|zapata|losa|muro|pila|pilote|tanque|piscina|escalera|cimentac/.test(n)) return "calculos";
        return null;
    }
    const CLAVES = [
        [n => PRECIO.test(n) && (PROGRAMA.test(n) || cualPrograma(n) === "revit"), "precios"],     // «precio de los programas»
        [/prueba|gratis|demo|probar|trial/, "prueba"],
        [/perpetu|para siempre|pago unico/, "perpetua"],
        [/pais|extranjero|mi norma|otra norma|peru|ecuador|mexico|chile|bolivia|argentina|venezuela|panama|guatemala|honduras|salvador|nicaragua|costa rica|dominicana|espana|estados unidos/, "cot:pais"],   // «soy de Perú, ¿tienen programa con mi norma?»
        [n => PROGRAMA.test(n), n => cualPrograma(n) || "programas"],                             // «programa de cálculo»
        [/revit/, "revit"],
        [/etabs|\bsap\b|sap2000/, "detalles"],
        [/constru|remodel|casa|obra|ampliac|segundo piso|acabad|cubierta|techo|enchape|pintur|placa|anden|cerramiento|hidrosanit|electric/, "cot:construccion"],
        [/diseno|estructural|bim|suelo|plano|render|dron|presupuesto|apu|peritaj|interventor|curaduria|licencia de constru/, "cot:diseno"],
        [/nsr|norma|\baci\b|codigo/, "norma"],
        [PRECIO, "precios"],
        [/asesor|persona|humano|llamar|whatsapp|telefono|contacto|celular/, "real"],
        [/hola|buenas|buenos|menu|ayuda|opciones/, "menu"]
    ];
    function detectar(n) {
        for (const [prueba, acc] of CLAVES)
            if (typeof prueba === "function" ? prueba(n) : prueba.test(n)) return typeof acc === "function" ? acc(n) : acc;
        return null;
    }
    function opcionParecida(ops, n) {             // «diseño estructural» → «Diseño estructural»; «construir» → «Construcción…»
        if (!ops) return null;
        return ops.find(o => sinTildes(o) === n) || ops.find(o => {
            const raiz = sinTildes(o).split(/[^a-z]+/).find(p => p.length >= 5);
            return raiz && n.includes(raiz.slice(0, 6));
        }) || null;
    }
    const PAISES = ["peru", "ecuador", "mexico", "chile", "bolivia", "argentina", "venezuela", "panama", "guatemala",
                    "honduras", "salvador", "nicaragua", "costa rica", "dominicana", "espana", "estados unidos"];
    const NOMBRE_PAIS = { peru: "Perú", mexico: "México", panama: "Panamá", espana: "España", "costa rica": "Costa Rica",
                          "estados unidos": "Estados Unidos", salvador: "El Salvador", dominicana: "República Dominicana" };
    const NUMERICO = ["pisos", "area"];           // estas preguntas esperan un número
    const LIBRE = ["detalle", "norma"];           // aquí acepta cualquier texto
    const sinTildes = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

    /* ---------------- Interfaz ---------------- */
    const css = `
    .as-fab{position:fixed;right:22px;bottom:158px;z-index:991;width:56px;height:56px;border-radius:50%;border:0;cursor:pointer;
      display:grid;place-items:center;background:var(--surface-2,#13232f);color:var(--accent,#6cb0e6);font-size:1.35rem;
      box-shadow:0 10px 30px -8px rgba(0,0,0,.7);outline:1px solid var(--line-strong,rgba(160,195,225,.24));transition:transform .25s}
    .as-fab:hover{transform:scale(1.08)}
    .as-fab .as-lbl{position:absolute;right:66px;top:50%;transform:translateY(-50%);white-space:nowrap;padding:6px 12px;border-radius:8px;
      background:var(--text,#e9eff4);color:var(--bg,#070d12);font:700 .8rem var(--font,sans-serif);opacity:0;transition:opacity .2s;pointer-events:none}
    .as-fab:hover .as-lbl{opacity:1}
    .as-win{position:fixed;right:22px;bottom:22px;z-index:3300;width:min(380px,calc(100vw - 32px));height:min(580px,calc(100vh - 44px));
      display:none;flex-direction:column;background:var(--bg-2,#0a131a);border:1px solid var(--line-strong,rgba(160,195,225,.24));
      border-radius:18px;box-shadow:0 24px 60px -18px rgba(0,0,0,.85);font-family:var(--font,sans-serif);color:var(--text,#e9eff4);overflow:hidden}
    .as-win.abierto{display:flex}
    .as-head{display:flex;align-items:center;gap:12px;padding:14px 16px;background:var(--surface,#0e1a23);border-bottom:1px solid var(--line,rgba(160,195,225,.12))}
    .as-head i.fa-helmet-safety{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--accent,#6cb0e6);color:var(--accent-ink,#03111b)}
    .as-head b{display:block;font-size:.98rem}.as-head span{font-size:.76rem;color:var(--muted,#93a7b6)}
    .as-head button{margin-left:auto;background:none;border:0;color:var(--muted,#93a7b6);font-size:1.1rem;cursor:pointer;padding:6px}
    .as-body{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;font-size:.9rem;line-height:1.45}
    .as-msg{max-width:90%;padding:10px 13px;border-radius:14px}
    .as-msg p{margin:0 0 6px}.as-msg p:last-child{margin:0}.as-msg ul{margin:4px 0 6px 18px;padding:0}.as-msg li{margin:3px 0}
    .as-msg s{color:var(--muted,#93a7b6)}
    .as-bot{background:var(--surface-2,#13232f);border-top-left-radius:4px;align-self:flex-start}
    .as-yo{background:var(--accent,#6cb0e6);color:var(--accent-ink,#03111b);border-top-right-radius:4px;align-self:flex-end;font-weight:600}
    .as-promo{color:#ffd166;font-weight:700}
    .as-nota{font-size:.8rem;color:var(--soft,#b9c7d2);border-left:3px solid var(--accent,#6cb0e6);padding-left:8px}
    .as-ops{display:flex;flex-wrap:wrap;gap:6px}
    .as-ops button,.as-ops a{font:600 .8rem var(--font,sans-serif);padding:7px 11px;border-radius:999px;cursor:pointer;text-decoration:none;
      background:transparent;color:var(--accent,#6cb0e6);border:1px solid var(--accent-2,#3f7fb3)}
    .as-ops button:hover,.as-ops a:hover{background:var(--accent,#6cb0e6);color:var(--accent-ink,#03111b)}
    .as-ops button:disabled{opacity:.45;cursor:default;background:transparent;color:var(--accent,#6cb0e6)}
    .as-ops .as-wa{background:#1fae5b;border-color:#1fae5b;color:#fff}
    .as-form{display:flex;gap:8px;padding:10px;border-top:1px solid var(--line,rgba(160,195,225,.12));background:var(--surface,#0e1a23)}
    .as-form input{flex:1;min-width:0;padding:10px 12px;border-radius:10px;border:1px solid var(--line-strong,rgba(160,195,225,.24));
      background:var(--bg,#070d12);color:var(--text,#e9eff4);font:inherit;font-size:16px}
    .as-form button{width:42px;border-radius:10px;border:0;background:var(--accent,#6cb0e6);color:var(--accent-ink,#03111b);cursor:pointer}
    @media (max-width:560px){.as-win{right:8px;bottom:8px;width:calc(100vw - 16px);height:calc(100vh - 16px)}.as-fab{right:16px}}`;
    document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);

    const fab = document.createElement("button");
    fab.type = "button";
    fab.className = "as-fab";
    fab.setAttribute("aria-label", "Abrir el asesor SSING");
    fab.innerHTML = '<i class="fa-solid fa-comments"></i><span class="as-lbl">¿Preguntas? Asesor SSING</span>';
    const win = document.createElement("div");
    win.className = "as-win";
    win.setAttribute("role", "dialog");
    win.setAttribute("aria-label", "Asesor SSING");
    win.innerHTML = `<div class="as-head"><i class="fa-solid fa-helmet-safety"></i><div><b>Asesor SSING</b>
        <span>Programas, precios, obras y diseños</span></div><button type="button" aria-label="Cerrar">✕</button></div>
        <div class="as-body" aria-live="polite"></div>
        <form class="as-form"><input type="text" placeholder="Escriba su pregunta o respuesta…" aria-label="Mensaje" maxlength="300">
        <button type="submit" aria-label="Enviar"><i class="fa-solid fa-paper-plane"></i></button></form>`;
    document.body.append(fab, win);
    const body = win.querySelector(".as-body");
    const input = win.querySelector("input");

    const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const waUrl = texto => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
    function bajar() { body.scrollTop = body.scrollHeight; }
    const historial = [];                         // para el resumen que llega a WhatsApp y para la IA
    function yo(texto) { historial.push({ yo: true, t: texto }); body.insertAdjacentHTML("beforeend", `<div class="as-msg as-yo">${esc(texto)}</div>`); bajar(); }
    function resumenChat() {
        const preg = historial.filter(x => x.yo && !/asesor real|^men[uú]$/i.test(x.t)).map(x => "• " + x.t).slice(-15);
        return "Hola SSING, quiero hablar con un asesor.\n" + (preg.length ? "Lo que pregunté en el chat de la página:\n" + preg.join("\n") : "");
    }
    function bot(html, botones) {
        historial.push({ yo: false, t: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 300) });
        const d = document.createElement("div");
        d.className = "as-msg as-bot";
        d.innerHTML = html.trim().startsWith("<") ? html : `<p>${html}</p>`;
        body.appendChild(d);
        if (botones && botones.length) {
            const ops = document.createElement("div");
            ops.className = "as-ops";
            botones.forEach(([txt, acc]) => {
                let el;
                if (acc.startsWith("@") || acc.startsWith("wa:")) {
                    el = document.createElement("a");
                    el.href = acc.startsWith("@") ? acc.slice(1) : waUrl(acc.slice(3));
                    if (acc.startsWith("wa:")) { el.target = "_blank"; el.rel = "noopener"; el.className = "as-wa"; el.innerHTML = '<i class="fa-brands fa-whatsapp"></i> ' + esc(txt); }
                    else el.textContent = txt;
                } else {
                    el = document.createElement("button");
                    el.type = "button";
                    el.textContent = txt;
                    el.addEventListener("click", () => {
                        if (acc.startsWith("resp:")) ops.querySelectorAll("button").forEach(b => b.disabled = true);   // ya respondió esa pregunta
                        yo(txt); responder(acc, txt);
                    });
                }
                ops.appendChild(el);
            });
            body.appendChild(ops);
        }
        bajar();
    }

    /* Cotización en curso: { clave, paso, datos } */
    let cot = null;
    function preguntar() {
        const c = COTIZAR[cot.clave];
        while (cot.paso < c.pasos.length && cot.datos[c.pasos[cot.paso][0]]) cot.paso++;   // salta lo que ya dijo
        if (cot.paso >= c.pasos.length) return terminar();
        const [, texto, ops] = c.pasos[cot.paso];
        bot(texto, ops ? ops.map(o => [o, "resp:" + o]) : null);
        if (!ops) input.focus();
    }
    function terminar() {
        const c = COTIZAR[cot.clave];
        const lineas = c.pasos.map(([k]) => `${NOMBRES[k] || k}: ${cot.datos[k]}`);
        const msg = `Hola SSING, ${c.pide}.\n` + lineas.join("\n");
        bot(`<p>¡Listo! Este es su resumen:</p><ul>${lineas.map(l => `<li>${esc(l)}</li>`).join("")}</ul>` +
            (cot.clave === "pais" ? "<p>Le respondemos con el tiempo y el precio de la adaptación. Mientras tanto puede probarlo gratis.</p>"
                                  : `<p class="as-nota">${NOTA_PRECIO}</p>`) +
            "<p>Pulse el botón y se abre WhatsApp con el mensaje ya escrito.</p>",
            [["Enviar por WhatsApp", "wa:" + msg], ["Menú", "menu"]]);
        cot = null;
    }

    function responder(acc, texto, escrito) {
        if (acc.startsWith("resp:") && cot) acc = "resp";
        if (acc === "resp") {
            const c = COTIZAR[cot.clave];
            cot.datos[c.pasos[cot.paso][0]] = texto;
            cot.paso++;
            return preguntar();
        }
        if (acc === "pais") acc = "cot:pais";
        if (acc.startsWith("cot:") && cot && cot.clave === acc.slice(4)) return preguntar();   // ya está en esa cotización
        if (acc.startsWith("cot:")) {
            const clave = acc.slice(4);
            cot = { clave, paso: 0, datos: {} };
            bot(COTIZAR[clave].intro + (clave !== "pais" ? `<p class="as-nota">${NOTA_PRECIO}</p>` : ""));
            if (escrito) {                                               // lo que ya dijo no se vuelve a preguntar
                const n = sinTildes(texto), [k0, , ops0] = COTIZAR[clave].pasos[0];
                if (clave === "pais") {
                    const p = PAISES.find(x => n.includes(x));
                    if (p) cot.datos.pais = NOMBRE_PAIS[p] || p[0].toUpperCase() + p.slice(1);
                    const prog = cualPrograma(n);
                    if (prog) cot.datos.que = { calculos: "CalculosSSING", detalles: "SSING-DETALLES", revit: "SSING para Revit" }[prog];
                } else {
                    const ya = opcionParecida(ops0, n);
                    if (ya) cot.datos[k0] = ya;
                }
            }
            return preguntar();
        }
        if (acc === "real")
            return bot("Con gusto 🙌. Pulse el botón: se abre WhatsApp con el resumen de lo que preguntó y le responde una persona.",
                       [["Abrir WhatsApp", "wa:" + resumenChat()], ["Menú", "menu"]]);
        cot = null;
        if (!T && (acc === "precios" || acc === "perpetua"))       // página sin tienda.js
            return bot("Todos los precios, con la promoción del día, están en la tienda.", [["Ver la tienda", "@tienda.html"], ["Menú", "menu"]]);
        const r = (RESPUESTAS[acc] || RESPUESTAS.menu)();
        bot(r.texto, r.botones);
    }

    win.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
        const t = input.value.trim();
        if (!t) return;
        input.value = "";
        yo(t);
        const n = sinTildes(t);
        const tema = detectar(n);
        if (cot) {
            const [clave, , ops] = COTIZAR[cot.clave].pasos[cot.paso];
            const propia = !tema || tema.startsWith("cot:") || tema === "menu";   // «casa», «vivienda»… son respuestas, no otro tema
            const opcion = opcionParecida(ops, n);
            if (opcion) return responder("resp", opcion);
            if (LIBRE.includes(clave)) return responder("resp", t);
            if (/\?|^(que|como|cuando|donde|por ?que|puedo|pueden|tienen|hacen|manejan|sirve)\b/.test(n)) {   // hizo otra pregunta
                cot = null;
                return tema && !tema.startsWith("cot:") ? responder(tema, t, true) : preguntarIA(t);
            }
            if (NUMERICO.includes(clave)) {
                if (/\d|no se|nose|ni idea|no tengo/.test(n)) return responder("resp", t);
                if (propia) return bot("Escríbalo con número, por ejemplo «3» o «120». Si no sabe, escriba «no sé».");
            } else if (propia) return responder("resp", t);
            cot = null;                                                  // preguntó otra cosa: deja la cotización
            return responder(tema, t, true);
        }
        if (tema) return responder(tema, t, true);
        preguntarIA(t);
    });

    /* IA gratis (Cloudflare). Si no responde, se acabó la cuota o falla: sigue el bot normal. */
    const IA = "https://ssing-obra.ssingbuildcodes.workers.dev/api/asesor";
    async function preguntarIA(t) {
        const espera = document.createElement("div");
        espera.className = "as-msg as-bot";
        espera.textContent = "Escribiendo…";
        body.appendChild(espera); bajar();
        let texto = "";
        try {
            const ctl = new AbortController(), reloj = setTimeout(() => ctl.abort(), 12000);
            const r = await fetch(IA, { method: "POST", headers: { "content-type": "application/json" }, signal: ctl.signal,
                                        body: JSON.stringify({ pregunta: t, historial: historial.slice(-7, -1) }) });
            clearTimeout(reloj);
            const d = r.ok ? await r.json() : null;
            texto = d && d.ok ? String(d.texto || "") : "";
        } catch (e) {}
        espera.remove();
        if (texto) return bot(`<p>${esc(texto).replace(/\n+/g, "</p><p>")}</p>`,
                              [["Hablar con un asesor real", "real"], ["Menú", "menu"]]);
        bot("No le entendí bien 🤔. Escoja una opción o hable con un asesor real por WhatsApp.",
            [...MENU.slice(0, 6), ["Hablar con un asesor real", "real"]]);
    }

    let iniciado = false;
    function abrir() {
        win.classList.add("abierto");
        fab.style.display = "none";
        if (!iniciado) {
            iniciado = true;
            const pr = T && T.promosActivas ? T.promosActivas()[0] : null;
            bot(`<p>¡Hola! 👋 Soy el asesor de <b>SSING BUILD CODES</b>.</p><p>Le ayudo con nuestros programas para ingenieros, la prueba gratis y cotizaciones de construcción, diseño estructural y BIM.</p>` +
                (pr ? `<p class="as-promo">🎉 ${esc(pr.titulo)}: ${esc(pr.mensaje)}</p>` : ""), MENU);
        }
        setTimeout(() => input.focus({ preventScroll: true }), 50);
    }
    function cerrar() { win.classList.remove("abierto"); fab.style.display = ""; }
    fab.addEventListener("click", abrir);
    win.querySelector(".as-head button").addEventListener("click", cerrar);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && win.classList.contains("abierto")) cerrar(); });
})();
