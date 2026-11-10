/* Şemalar: düz HTML ya da tema renklerini kullanan SVG */
(function () {
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const T = 'font-family="Inter,system-ui,sans-serif"';
  const num = (x, y, n) => `<g><circle cx="${x}" cy="${y}" r="11" fill="var(--accent)"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--accent-ink)" ${T}>${n}</text></g>`;
  const legend = items => `<ol class="legend">${items.map((t, i) => `<li><i>${i + 1}</i><span>${t}</span></li>`).join("")}</ol>`;

  const node = (name, role, color, text, files) => `<div class="node" style="--nc:var(${color})">
    <div class="nm"><i></i>${name}</div><div class="rl">${role}</div><p>${text}</p>
    <div class="files">${files.map(f => `<code>${f}</code>`).join("")}</div></div>`;

  window.DIAGRAMS = {
    pipeline: () => `<div class="flow">
      ${node("Blender", "1 · Modelle", "--c-b", "Masa, duvar, oda… 3D şekli burada yaparsın.", [".blend"])}
      <div class="arr">${arrow}</div>
      ${node("Sollumz", "2 · GTA'ya çevir", "--c-s", "Blender'ın içinde çalışır. Modeli GTA biçimine çevirir, collision ve kimlik kartı ekler.", [".ydr", ".ybn", ".ytyp"])}
      <div class="arr">${arrow}</div>
      ${node("CodeWalker", "3 · Yerleştir", "--c-c", "Objeni GTA haritasında yerine koyar, kontrol edersin.", [".ymap", "_manifest.ymf"])}
      <div class="arr">${arrow}</div>
      ${node("Resource", "4 · Paketle", "--c-f", "Dosyaları bir klasöre koyup sunucuya verirsin.", ["fxmanifest.lua", "stream/"])}
      <div class="arr">${arrow}</div>
      ${node("Oyun", "5 · Test et", "--c-d", "Sunucuya gir, gez, dene. Sorun varsa geri dön, düzelt.", ["ensure"])}
    </div>`,

    files: () => `<figure class="dg"><div class="fmap">
      <div class="col"><div class="fbox hl"><div class="fn">benim_map.ymap</div><div class="fd">Yerleşim planı: ne, nerede?</div>
        <div class="row">masa_01 · 215.4, -810.2, 30.7</div><div class="row">masa_01 · 218.0, -812.6, 30.7</div><div class="row">prop_bench_01a · 220.1, -809.0, 30.6</div></div></div>
      <div class="ar">${arrow}</div>
      <div class="col"><div class="fbox"><div class="fn">benim_proplar.ytyp</div><div class="fd">Kimlik kartı: bu isim hangi modeli kullanır?</div>
        <div class="row">masa_01 → model masa_01</div><div class="row">doku: gömülü · collision: gömülü</div></div>
        <div class="fbox"><div class="fn">prop_bench_01a</div><div class="fd">GTA'nın kendi objesi. Kimlik kartı oyunda zaten var.</div></div></div>
      <div class="ar">${arrow}</div>
      <div class="col">
        <div class="fbox"><div class="fn">masa_01.ydr</div><div class="fd">Görünen model. Dokular ve collision içine gömülebilir.</div></div>
        <div class="fbox"><div class="fn">masa_01.ytd</div><div class="fd">Dokular. Sadece gömmediysen gerekir.</div></div>
        <div class="fbox"><div class="fn">masa_01.ybn</div><div class="fd">Collision. Sadece gömmediysen ayrı dosyadır.</div></div></div>
      <div class="mf"><b>_manifest.ymf</b> → oyuna “benim_map.ymap yüklenirken benim_proplar.ytyp'yi de yükle” der.</div>
    </div><figcaption>Ymap objeyi isimle çağırır, ytyp ismi modele bağlar. Aynı masayı yüz kere koysan da model dosyası bir tanedir.</figcaption></figure>`,

    mlo: () => `<figure class="dg"><svg viewBox="0 0 640 430" role="img" aria-label="MLO kat planı">
      <defs>
        <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="var(--line2)"/></pattern>
        <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
      </defs>
      <rect x="0" y="0" width="640" height="430" fill="url(#dots)"/>
      <text x="40" y="40" font-size="15" font-weight="800" fill="var(--muted)" letter-spacing="1.5" ${T}>LIMBO · DIŞ DÜNYA</text>
      ${num(26, 35, 4)}
      <rect x="100" y="80" width="232" height="262" rx="4" fill="var(--c-b)" fill-opacity=".09" stroke="var(--c-b)" stroke-width="2" stroke-dasharray="7 5"/>
      <rect x="348" y="80" width="204" height="262" rx="4" fill="var(--c-s)" fill-opacity=".09" stroke="var(--c-s)" stroke-width="2" stroke-dasharray="7 5"/>
      <polygon points="180,350 240,350 332,295 332,122" fill="var(--accent)" fill-opacity=".16"/>
      <g stroke="var(--text2)" stroke-width="8" stroke-linecap="square" fill="none">
        <path d="M90 70H560M90 70V350M90 350H180M240 350H560M560 70V150M560 215V350M340 70V190M340 245V350"/>
      </g>
      <line x1="560" y1="152" x2="560" y2="213" stroke="var(--c-c)" stroke-width="3"/>
      <text x="116" y="108" font-size="15" font-weight="800" fill="var(--c-b)" ${T}>ODA 1 · Salon</text>
      <text x="364" y="108" font-size="15" font-weight="800" fill="var(--c-s)" ${T}>ODA 2 · Ofis</text>
      ${num(300, 103, 5)}
      <rect x="118" y="276" width="96" height="40" rx="8" fill="var(--surface)" stroke="var(--text2)" stroke-width="2"/>
      <text x="166" y="301" text-anchor="middle" font-size="12" fill="var(--text2)" ${T}>koltuk</text>
      <rect x="236" y="160" width="52" height="52" rx="6" fill="var(--surface)" stroke="var(--text2)" stroke-width="2"/>
      <text x="262" y="190" text-anchor="middle" font-size="12" fill="var(--text2)" ${T}>masa</text>
      <rect x="410" y="128" width="112" height="42" rx="6" fill="var(--surface)" stroke="var(--text2)" stroke-width="2"/>
      <text x="466" y="154" text-anchor="middle" font-size="12" fill="var(--text2)" ${T}>çalışma masası</text>
      ${num(118, 274, 6)}
      <line x1="182" y1="350" x2="238" y2="350" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
      <line x1="210" y1="322" x2="210" y2="384" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah)"/>
      ${num(258, 372, 1)}
      <line x1="340" y1="192" x2="340" y2="243" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
      <line x1="314" y1="217" x2="366" y2="217" stroke="var(--accent)" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
      ${num(340, 268, 2)}
      <line x1="560" y1="154" x2="560" y2="211" stroke="var(--accent)" stroke-width="6" stroke-linecap="round" opacity=".9"/>
      <line x1="534" y1="182" x2="600" y2="182" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ah)"/>
      ${num(588, 150, 3)}
      <g transform="translate(140 404)"><path d="M-17 0C-9-9 9-9 17 0C9 9-9 9-17 0z" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/><circle r="4.5" fill="var(--text)"/></g>
      <text x="166" y="409" font-size="12.5" fill="var(--muted)" ${T}>göz: kapıdan içeri bakıyor</text>
    </svg>
    ${legend([
      "<b>Portal 1 · ön kapı.</b> Oda 1 → Limbo. Yön içeriden dışarıya.",
      "<b>Portal 2 · iç kapı.</b> Oda 1 ↔ Oda 2.",
      "<b>Portal 3 · pencere.</b> Dışarı bakan her açıklık portal ister. Oda 2 → Limbo.",
      "<b>Limbo.</b> Binanın dışı. MLO'nun her zaman ilk odası.",
      "<b>Oda sınırı</b> (kesikli kutu). Odayı tamamen kapsamalı.",
      "<b>Entity.</b> Odasına atanmış eşya. Yanlış odadaysa kaybolur."
    ])}
    <figcaption>Turuncu alan, gözün kapıdan gördüğü kısım. Oyun önce Portal 1'in arkasındaki Oda 1'i çizer; oradan Portal 2 görünüyorsa Oda 2'yi de çizer. Portal yoksa arkası çizilmez ve boşluk (void) görürsün.</figcaption></figure>`,

    portal: () => `<figure class="dg"><svg viewBox="0 0 560 200" role="img" aria-label="Portal yönü">
      <defs><marker id="ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker>
      <pattern id="dots2" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="var(--line2)"/></pattern></defs>
      <rect x="290" y="0" width="270" height="200" fill="url(#dots2)"/>
      <rect x="30" y="30" width="250" height="140" rx="4" fill="var(--c-b)" fill-opacity=".09" stroke="var(--c-b)" stroke-width="2" stroke-dasharray="7 5"/>
      <text x="50" y="62" font-size="16" font-weight="800" fill="var(--c-b)" ${T}>ODA (iç)</text>
      <text x="400" y="62" font-size="16" font-weight="800" fill="var(--muted)" ${T}>LIMBO (dış)</text>
      <g stroke="var(--text2)" stroke-width="8" stroke-linecap="square"><path d="M290 20V72M290 128V180"/></g>
      <line x1="290" y1="74" x2="290" y2="126" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
      <line x1="200" y1="100" x2="384" y2="100" stroke="var(--accent)" stroke-width="3" marker-end="url(#ah2)"/>
      <text x="300" y="150" font-size="13" fill="var(--text2)" ${T}>portal = kapı boşluğunun 4 köşesi</text>
      <text x="62" y="125" font-size="13.5" font-weight="700" fill="var(--text)" ${T}>yön: içeriden dışarıya</text>
    </svg><figcaption>Dışarı açılan portal odadan limboya gider. Sollumz'da ok ters görünüyorsa [Flip Direction] ile çevir.</figcaption></figure>`,

    blenderui: () => `<figure class="dg"><svg viewBox="0 0 720 430" role="img" aria-label="Blender ekranı">
      <rect x="0.5" y="0.5" width="719" height="429" rx="10" fill="var(--surface2)" stroke="var(--line2)"/>
      <rect x="1" y="1" width="718" height="30" rx="9" fill="var(--surface)"/>
      <text x="14" y="21" font-size="12" fill="var(--muted)" ${T}>File  Edit  Render  Window  Help</text>
      <rect x="236" y="7" width="58" height="18" rx="5" fill="var(--accent)" fill-opacity=".25"/>
      <text x="245" y="20" font-size="12" font-weight="700" fill="var(--text)" ${T}>Layout</text>
      <text x="306" y="20" font-size="12" fill="var(--muted)" ${T}>Modeling   UV Editing   Shading</text>
      ${num(530, 16, 1)}
      <rect x="1" y="31" width="499" height="329" fill="var(--bg)"/>
      <g stroke="var(--line)" stroke-width="1">${Array.from({ length: 9 }, (_, i) => `<path d="M${40 + i * 50} 60V360"/>`).join("")}${Array.from({ length: 6 }, (_, i) => `<path d="M1 ${80 + i * 50}H380"/>`).join("")}</g>
      <rect x="1" y="31" width="499" height="26" fill="var(--surface)"/>
      <rect x="10" y="36" width="96" height="17" rx="5" fill="var(--surface2)" stroke="var(--line2)"/>
      <text x="18" y="48.5" font-size="11.5" fill="var(--text)" ${T}>Object Mode ▾</text>
      ${num(122, 44, 3)}
      ${Array.from({ length: 5 }, (_, i) => `<rect x="${388 + i * 21}" y="37" width="16" height="15" rx="4" fill="var(--surface2)" stroke="var(--line2)"/>`).join("")}
      ${num(372, 44, 4)}
      <rect x="10" y="68" width="26" height="160" rx="7" fill="var(--surface)" stroke="var(--line)"/>
      ${Array.from({ length: 6 }, (_, i) => `<rect x="16" y="${76 + i * 25}" width="14" height="14" rx="3" fill="var(--surface2)"/>`).join("")}
      ${num(52, 82, 2)}
      <g transform="translate(205 205)">
        <polygon points="0,-62 66,-30 0,2 -66,-30" fill="var(--surface2)" stroke="var(--accent)" stroke-width="2"/>
        <polygon points="-66,-30 0,2 0,74 -66,42" fill="var(--line2)" stroke="var(--accent)" stroke-width="2"/>
        <polygon points="66,-30 0,2 0,74 66,42" fill="var(--line)" stroke="var(--accent)" stroke-width="2"/>
        <circle cx="0" cy="6" r="4" fill="var(--accent)"/>
      </g>
      <rect x="378" y="62" width="104" height="290" rx="6" fill="var(--surface)" stroke="var(--line)"/>
      <text x="388" y="82" font-size="11.5" font-weight="800" fill="var(--c-s)" ${T}>Sollumz Tools</text>
      ${Array.from({ length: 8 }, (_, i) => `<rect x="388" y="${94 + i * 22}" width="${i % 3 ? 82 : 60}" height="11" rx="3" fill="var(--surface2)"/>`).join("")}
      ${["Item", "Tool", "View", "Sollumz"].map((t, i) => `<rect x="483" y="${64 + i * 58}" width="15" height="54" rx="3" fill="${t === "Sollumz" ? "var(--c-s)" : "var(--surface)"}" fill-opacity="${t === "Sollumz" ? ".35" : "1"}" stroke="var(--line)"/><text transform="translate(494 ${116 + i * 58}) rotate(-90)" font-size="10" fill="var(--text)" ${T}>${t}</text>`).join("")}
      ${num(430, 334, 5)}
      <rect x="500" y="31" width="219" height="150" fill="var(--surface)" stroke="var(--line)"/>
      <text x="512" y="52" font-size="11.5" fill="var(--muted)" ${T}>Scene Collection</text>
      <text x="522" y="72" font-size="11.5" fill="var(--text2)" ${T}>▾ Collection</text>
      <text x="540" y="92" font-size="11.5" fill="var(--accent)" font-weight="700" ${T}>▣ Cube</text>
      <text x="540" y="112" font-size="11.5" fill="var(--text2)" ${T}>◉ Camera</text>
      <text x="540" y="132" font-size="11.5" fill="var(--text2)" ${T}>✦ Light</text>
      ${num(690, 52, 6)}
      <rect x="500" y="181" width="219" height="248" fill="var(--surface)" stroke="var(--line)"/>
      <rect x="500" y="181" width="26" height="248" fill="var(--surface2)"/>
      ${[["var(--c-b)", "Object"], ["var(--c-c)", "Modifier"], ["var(--c-d)", "Data"], ["var(--c-f)", "Material"]].map((c, i) => `<rect x="506" y="${196 + i * 26}" width="14" height="14" rx="${i === 3 ? 7 : 3}" fill="${c[0]}"/>`).join("")}
      <text x="538" y="207" font-size="11.5" fill="var(--text2)" ${T}>Object</text>
      <text x="538" y="233" font-size="11.5" fill="var(--text2)" ${T}>Modifier</text>
      <text x="538" y="259" font-size="11.5" fill="var(--text2)" ${T}>Data · Color Attributes, UV</text>
      <text x="538" y="285" font-size="11.5" fill="var(--text2)" ${T}>Material · Sollumz shader</text>
      ${Array.from({ length: 4 }, (_, i) => `<rect x="538" y="${306 + i * 24}" width="${i % 2 ? 150 : 120}" height="11" rx="3" fill="var(--surface2)"/>`).join("")}
      ${num(690, 200, 7)}
      <rect x="1" y="360" width="499" height="69" fill="var(--surface)" stroke="var(--line)"/>
      <path d="M20 400H480" stroke="var(--line2)" stroke-width="2"/>
      ${Array.from({ length: 10 }, (_, i) => `<path d="M${30 + i * 48} 392V408" stroke="var(--line2)"/>`).join("")}
      ${num(470, 380, 8)}
    </svg>
    ${legend([
      "Üst menü ve çalışma alanı sekmeleri: Layout, Modeling, UV Editing…",
      "Araç çubuğu ({{T}}).",
      "Mod seçici: Object Mode / Edit Mode ({{Tab}}).",
      "Görünüm ayarları: Overlays (Face Orientation burada), X-ray, görünüm modu.",
      "Yan panel ({{N}}): Item sekmesi ve <b>Sollumz Tools</b>.",
      "Outliner: sahnedeki her şeyin listesi.",
      "Properties: Object, Modifier, Data (Color Attributes, UV Maps), Material.",
      "Timeline: bu işte pek kullanılmaz."
    ])}</figure>`,

    editops: () => {
      const box = (svg, k, t) => `<div class="op"><svg viewBox="0 0 160 110">${svg}</svg><b>${k}</b><span>${t}</span></div>`;
      const st = 'stroke="var(--text2)" stroke-width="2" fill="none" stroke-linejoin="round"';
      const ac = 'stroke="var(--accent)" stroke-width="2.5" fill="var(--accent)" fill-opacity=".18" stroke-linejoin="round"';
      return `<figure class="dg"><div class="ops">
        ${box(`<polygon points="30,92 92,92 128,72 66,72" ${st}/><polygon points="30,46 92,46 128,26 66,26" ${ac}/><path d="M30 92V46M92 92V46M128 72V26" stroke="var(--text2)" stroke-width="2" stroke-dasharray="4 3"/><path d="M146 80V40M140 48l6-9 6 9" stroke="var(--accent)" stroke-width="2.5" fill="none"/>`, "<kbd>E</kbd> Extrude", "Yüzü dışarı çeker")}
        ${box(`<rect x="28" y="14" width="104" height="82" rx="2" ${st}/><rect x="56" y="36" width="48" height="38" ${ac}/><path d="M28 14L56 36M132 14L104 36M28 96L56 74M132 96L104 74" stroke="var(--text2)" stroke-width="1.5"/>`, "<kbd>I</kbd> Inset", "İçe yeni bir yüz açar")}
        ${box(`<rect x="22" y="22" width="116" height="66" rx="2" ${st}/><path d="M80 14V96" stroke="var(--accent)" stroke-width="3"/><path d="M62 55h-14M98 55h14" stroke="var(--accent)" stroke-width="2"/>`, "<kbd>Ctrl</kbd>+<kbd>R</kbd> Loop cut", "Halka şeklinde kesim ekler")}
        ${box(`<path d="M28 96V22H100L136 58V96Z" ${st}/><path d="M100 22L136 58" stroke="var(--accent)" stroke-width="4"/><path d="M100 22H136V58" stroke="var(--text2)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>`, "<kbd>Ctrl</kbd>+<kbd>B</kbd> Bevel", "Köşeyi pahlar, yumuşatır")}
        ${box(`<rect x="22" y="16" width="116" height="78" rx="2" ${st}/><path d="M22 60L56 34L84 70L112 30L138 50" stroke="var(--accent)" stroke-width="3" fill="none" stroke-linejoin="round"/>`, "<kbd>K</kbd> Knife", "Yüzü serbestçe keser")}
        ${box(`<path d="M20 70H140" stroke="var(--text2)" stroke-width="2"/><circle cx="34" cy="70" r="6" fill="var(--text2)"/><circle cx="126" cy="70" r="6" fill="var(--text2)"/><circle cx="80" cy="34" r="9" fill="var(--accent)"/><path d="M42 62L70 40M118 62L90 40" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>`, "<kbd>M</kbd> Merge", "Noktaları tek noktada birleştirir")}
      </div></figure>`;
    },

    scale: () => {
      const dim = (x1, y1, x2, y2, label, lx, ly, anchor = "middle") => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="var(--accent)" stroke-width="1.5"/><path d="M${x1 - (y1 === y2 ? 0 : 5)} ${y1 - (y1 === y2 ? 5 : 0)}l${y1 === y2 ? 0 : 10} ${y1 === y2 ? 10 : 0}M${x2 - (y1 === y2 ? 0 : 5)} ${y2 - (y1 === y2 ? 5 : 0)}l${y1 === y2 ? 0 : 10} ${y1 === y2 ? 10 : 0}" stroke="var(--accent)" stroke-width="1.5"/><text x="${lx}" y="${ly}" text-anchor="${anchor}" font-size="13" font-weight="700" fill="var(--text)" ${T}>${label}</text>`;
      const g = 262;
      return `<figure class="dg"><svg viewBox="0 0 660 300" role="img" aria-label="GTA ölçüleri">
        <path d="M14 ${g}H646" stroke="var(--text2)" stroke-width="2"/>
        <rect x="50" y="${g - 180}" width="14" height="180" fill="var(--line2)"/>
        ${dim(36, g - 180, 36, g, "3 m", 30, g - 186, "start")}
        <text x="72" y="${g - 168}" font-size="12" fill="var(--muted)" ${T}>tavan</text>
        <rect x="116" y="${g - 129}" width="66" height="129" fill="var(--c-b)" fill-opacity=".12" stroke="var(--c-b)" stroke-width="2"/>
        <circle cx="172" cy="${g - 62}" r="3" fill="var(--c-b)"/>
        ${dim(116, g + 14, 182, g + 14, "1.1 m", 149, g + 32)}
        ${dim(196, g - 129, 196, g, "2.15 m", 204, g - 60, "start")}
        <text x="149" y="${g - 136}" text-anchor="middle" font-size="12" fill="var(--muted)" ${T}>kapı</text>
        <g fill="var(--c-c)" fill-opacity=".85">
          <circle cx="292" cy="${g - 99}" r="9"/>
          <rect x="280" y="${g - 87}" width="24" height="44" rx="9"/>
          <rect x="282" y="${g - 46}" width="8" height="46" rx="4"/><rect x="294" y="${g - 46}" width="8" height="46" rx="4"/>
        </g>
        ${dim(320, g - 108, 320, g, "1.8 m", 328, g - 50, "start")}
        <text x="292" y="${g - 116}" text-anchor="middle" font-size="12" fill="var(--muted)" ${T}>karakter</text>
        <rect x="384" y="${g - 45}" width="84" height="5" fill="var(--text2)"/>
        <rect x="388" y="${g - 40}" width="4" height="40" fill="var(--text2)"/><rect x="460" y="${g - 40}" width="4" height="40" fill="var(--text2)"/>
        ${dim(476, g - 45, 476, g, "0.75 m", 484, g - 18, "start")}
        <text x="426" y="${g - 54}" text-anchor="middle" font-size="12" fill="var(--muted)" ${T}>masa</text>
        <path d="M548 ${g}V${g - 11}H566V${g - 22}H584V${g - 33}H602V${g - 44}H620V${g}" fill="var(--line2)" stroke="var(--text2)" stroke-width="1.5"/>
        <text x="584" y="${g - 56}" text-anchor="middle" font-size="12" fill="var(--muted)" ${T}>merdiven</text>
        <text x="584" y="${g + 24}" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--text)" ${T}>basamak 0.18 m</text>
      </svg><figcaption>Blender'da 1 birim = 1 metre. Şemadaki her şey aynı ölçekte.</figcaption></figure>`;
    },

    normals: () => `<figure class="dg"><svg viewBox="0 0 560 190" role="img" aria-label="Normal yönü">
      <defs><marker id="ah3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>
      <g transform="translate(40 0)">
        <rect x="120" y="30" width="12" height="110" fill="#3d8bfd" fill-opacity=".55"/>
        <path d="M120 85H64" stroke="#3d8bfd" stroke-width="3" marker-end="url(#ah3)"/>
        <g transform="translate(26 85)"><path d="M-14 0C-7-8 7-8 14 0C7 8-7 8-14 0z" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/><circle r="3.5" fill="var(--text)"/></g>
        <text x="80" y="170" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)" ${T}>Ön yüz görüyor → çizilir</text>
      </g>
      <g transform="translate(300 0)">
        <rect x="120" y="30" width="12" height="110" fill="#e5484d" fill-opacity=".55" stroke="#e5484d" stroke-dasharray="4 4"/>
        <path d="M132 85H188" stroke="#e5484d" stroke-width="3" marker-end="url(#ah3)"/>
        <g transform="translate(26 85)"><path d="M-14 0C-7-8 7-8 14 0C7 8-7 8-14 0z" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/><circle r="3.5" fill="var(--text)"/></g>
        <text x="100" y="170" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)" ${T}>Arka yüz görüyor → GTA'da görünmez</text>
      </g>
    </svg><figcaption>Ok, yüzün normal yönü. Face Orientation açıkken ters yüzler kırmızı görünür.</figcaption></figure>`,

    uv: () => `<figure class="dg"><svg viewBox="0 0 560 210" role="img" aria-label="UV açılımı">
      <defs><pattern id="chk" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="var(--surface2)"/><rect width="8" height="8" fill="var(--accent)" fill-opacity=".45"/><rect x="8" y="8" width="8" height="8" fill="var(--accent)" fill-opacity=".45"/></pattern>
      <marker id="ah4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--text2)"/></marker></defs>
      <g transform="translate(120 105)">
        <polygon points="0,-70 70,-35 0,0 -70,-35" fill="url(#chk)" stroke="var(--text2)" stroke-width="2"/>
        <polygon points="-70,-35 0,0 0,72 -70,37" fill="url(#chk)" stroke="var(--text2)" stroke-width="2"/>
        <polygon points="70,-35 0,0 0,72 70,37" fill="url(#chk)" stroke="var(--text2)" stroke-width="2"/>
      </g>
      <path d="M220 105H290" stroke="var(--text2)" stroke-width="2.5" marker-end="url(#ah4)"/>
      <text x="255" y="94" text-anchor="middle" font-size="12.5" fill="var(--muted)" ${T}>aç (U)</text>
      ${[[350, 25], [310, 65], [350, 65], [390, 65], [430, 65], [350, 105]].map(([x, y]) => `<rect x="${x}" y="${y}" width="40" height="40" fill="url(#chk)" stroke="var(--text2)" stroke-width="2"/>`).join("")}
      <text x="390" y="180" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text)" ${T}>UV: kutunun düz kâğıda açılmış hali</text>
    </svg><figcaption>Doku bu açılmış kalıbın üstüne basılır. Karelerin kare kalması, dokunun gerilmediği anlamına gelir.</figcaption></figure>`,

    collision: () => `<figure class="dg"><div class="tree">masa_01 <span class="c">(Drawable)</span>
├─ masa_01_mesh <span class="c">görünen model</span>
└─ Bound Composite <span class="c">collision'ın kabı</span>
   └─ <span class="hl">Bound GeometryBVH</span> <span class="c">← flag preset buraya</span>
      ├─ tabla_col <span class="c">Bound Poly Box · WOOD…</span>
      └─ ayak_col <span class="c">Bound Poly Box · WOOD…</span></div>
      <div class="chips" style="margin-top:12px"><span class="chip"><code>isim.ybn</code> yürüme, çarpışma</span><span class="chip"><code>hi@isim.ybn</code> mermi</span><span class="chip"><code>ma@isim.ybn</code> çimen, çöp gibi süsler</span></div>
      <figcaption>Gömülü collision modelin içinde durur. Dünyadaki binaların collision'ı ise ayrı <code>.ybn</code> dosyalarıdır.</figcaption></figure>`,

    vcolor: () => `<figure class="dg"><div class="vc">
      <div style="--vcc:#e5484d"><b>Kırmızı (R)</b><span>Doğal ortam ışığı ve gece kararması. Dış mekân objelerinde genelde tam (1).</span></div>
      <div style="--vcc:#30a46c"><b>Yeşil (G)</b><span>Yapay ışık etkisi. İç mekân yüzeylerinde kullanılır.</span></div>
      <div style="--vcc:#3d8bfd"><b>Mavi (B)</b><span>Ay ışığı yansıması. Başlangıçta 0 bırak.</span></div>
    </div><figcaption>Vertex color adı <code>Color 1</code>, Domain Face Corner, Data Type Byte Color olmalı.</figcaption></figure>`,

    texsize: () => {
      const sq = (w, h, l, bad) => `<div class="sq${bad ? " bad" : ""}"><i style="width:${w}px;height:${h}px"></i>${l}</div>`;
      return `<figure class="dg"><div class="pot">
        ${sq(28, 28, "256", 0)}${sq(42, 42, "512", 0)}${sq(60, 60, "1024", 0)}${sq(82, 82, "2048", 0)}${sq(60, 30, "1024×512", 0)}${sq(58, 40, "1000×700 ✗", 1)}${sq(50, 50, "800×800 ✗", 1)}
      </div><figcaption>Yeşil çerçeveliler olur, kırmızılar olmaz. Kenarın biri 1024, diğeri 512 olabilir; ikisi de 2'nin katı olduğu sürece sorun yok.</figcaption></figure>`;
    },

    shaders: () => `<figure class="dg"><div class="tbl-wrap"><table class="shtable">
      <tr><th>Elinde ne var?</th><th>Shader Tools'ta seç</th></tr>
      <tr><td>Sadece renk dokusu</td><td><code>default</code></td></tr>
      <tr><td>Renk + normal map</td><td><code>normal</code> <span class="muted">← başlangıç için bu</span></td></tr>
      <tr><td>Renk + normal + parlaklık</td><td><code>normal_spec</code></td></tr>
      <tr><td>Kendinden ışıklı (tabela, ekran)</td><td><code>emissive</code></td></tr>
      <tr><td>Sticker, kir, yazı</td><td><code>decal</code></td></tr>
      <tr><td>Tel çit, ızgara (delikli)</td><td><code>cutout_fence</code></td></tr>
      <tr><td>Cam</td><td><code>glass</code> ile başlayanlar</td></tr>
    </table></div></figure>`,

    resource: () => `<figure class="dg"><div class="tree">resources/
└─ <span class="hl">benim_map/</span>
   ├─ fxmanifest.lua   <span class="c">this_is_a_map 'yes'</span>
   └─ stream/          <span class="c">oyun dosyaları buraya</span>
      ├─ masa_01.ydr
      ├─ benim_proplar.ytyp
      ├─ benim_map.ymap
      └─ _manifest.ymf</div>
      <figcaption><code>stream</code> içindeki dosyalar sunucuya bağlanan herkese otomatik gönderilir.</figcaption></figure>`
  };
})();
