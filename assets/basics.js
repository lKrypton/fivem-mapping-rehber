/* Temel kavramlar sayfası: sitedeki işaretler + resimli kavram kartları */
(function () {
  const T = 'font-family="Inter,system-ui,sans-serif"';
  const txt = (x, y, s, fill = "var(--text2)", size = 11.5, extra = "") => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${T} ${extra}>${s}</text>`;
  const eye = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-13 0C-6-7 6-7 13 0C6 7-6 7-13 0z" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/><circle r="3.2" fill="var(--text)"/></g>`;
  const chk = id => `<defs><pattern id="${id}" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="var(--surface2)"/><rect width="6" height="6" fill="var(--accent)" fill-opacity=".5"/><rect x="6" y="6" width="6" height="6" fill="var(--accent)" fill-opacity=".5"/></pattern></defs>`;
  const svg = body => `<svg viewBox="0 0 160 110" role="img">${body}</svg>`;

  /* [örnek, açıklama] — örnek "prog:" ile başlarsa program etiketleri çizilir */
  window.SIGNS = [
    ["prog:b,s,c,f", "Adımın hangi programda yapılacağını gösterir. **BLENDER** yazıyorsa Blender'dasın, **CODEWALKER** yazıyorsa CodeWalker'dasın. SOLLUMZ, Blender'ın içindeki Sollumz paneli demektir."],
    ["{{Ctrl+A}}", "**Birlikte bas:** Ctrl'yi basılı tut, A'ya bas, sonra ikisini bırak."],
    ["{{G}} {{Z}} {{2}} {{Enter}}", "**Sırayla bas:** önce G, sonra Z, sonra 2, en son Enter. Hiçbirini basılı tutma."],
    ["Numpad {{1}}", "Klavyenin **sağındaki** sayı tuşlarından 1. Laptopta yoksa Görev 0.3'teki ayarı yap."],
    ["Orta tuş", "Fare **tekerleğine basmak**. Çevirmek değil, tuş gibi basmak."],
    ["[Edit] → [Preferences]", "**Renkli kutular** programdaki menü ve buton adlarıdır. Program İngilizce olduğu için aynen öyle yazılır; yanındaki gri yazı Türkçesidir. **Ok** “sırayla tıkla” demek: önce Edit'e, açılan listede Preferences'a."],
    ["`masa_01`", "**Gri kutu:** aynen yazacağın ya da ekranda aynen göreceğin şey. Dosya adı, klasör adı, komut ya da kod."],
    ["term:portal", "**Noktalı altı çizili kelime:** tıkla, ne demek olduğu küçük bir pencerede çıkar."],
    ["Sol tık / sağ tık", "Sol tık seçer ve onaylar. Blender'da bir şeyi taşırken **sağ tık iptal eder** (vazgeç)."],
    ["Sürükle", "Fare tuşuna basılı tut, fareyi oynat, sonra bırak."]
  ];

  window.BASICS = [
    { g: "3D'nin temeli", id: "eksen", t: "Eksenler: X, Y, Z",
      a: "3D dünyada üç yön vardır: **X** sağ-sol (kırmızı), **Y** ileri-geri (yeşil), **Z** yukarı-aşağı (mavi). Blender'da da GTA'da da **Z yukarıdır**.",
      w: "Taşırken {{G}} {{Z}} = sadece yukarı-aşağı. Koordinatlar da bu sırayla yazılır: X, Y, Z.",
      s: svg(`<g stroke-width="3.5" stroke-linecap="round"><path d="M50 80H136" stroke="#e5484d"/><path d="M50 80L108 46" stroke="#30a46c"/><path d="M50 80V16" stroke="#3d8bfd"/></g>
        <circle cx="50" cy="80" r="4.5" fill="var(--text)"/>${txt(142, 85, "X", "#e5484d", 15, 'font-weight="800"')}${txt(112, 42, "Y", "#30a46c", 15, 'font-weight="800"')}${txt(44, 12, "Z", "#3d8bfd", 15, 'font-weight="800"')}
        ${txt(60, 100, "sağ-sol · ileri-geri · yukarı", "var(--muted)", 9.5)}`) },
    { g: "3D'nin temeli", id: "vef", t: "Nokta, kenar, yüz",
      a: "Her model üç parçadan kurulur: **nokta** (vertex), iki noktayı birleştiren **kenar** (edge) ve kenarların çevrelediği **yüz** (face).",
      w: "Edit Mode'da bunları tek tek seçip şekil verirsin (Görev 1.3).",
      s: svg(`<polygon points="80,16 124,38 80,60 36,38" fill="var(--accent)" fill-opacity=".3" stroke="var(--text2)" stroke-width="2"/>
        <polygon points="36,38 80,60 80,96 36,74" fill="var(--surface2)" stroke="var(--text2)" stroke-width="2"/>
        <polygon points="124,38 80,60 80,96 124,74" fill="var(--line)" stroke="var(--text2)" stroke-width="2"/>
        <path d="M124 38V74" stroke="var(--c-c)" stroke-width="4"/><circle cx="36" cy="74" r="5" fill="var(--c-f)"/>
        ${txt(66, 42, "yüz", "var(--text)", 11, 'font-weight="700"')}${txt(128, 60, "kenar", "var(--c-c)", 11, 'font-weight="700"')}${txt(6, 92, "nokta", "var(--c-f)", 11, 'font-weight="700"')}`) },
    { g: "3D'nin temeli", id: "obje", t: "Obje ve mesh",
      a: "**Obje** sahnede taşıdığın, döndürdüğün şeydir. İçindeki **mesh** ise şeklin kendisi. Object Mode'da objeyle, Edit Mode'da mesh'le çalışırsın.",
      w: "{{Tab}} ile ikisi arasında geçersin.",
      s: svg(`<rect x="16" y="12" width="128" height="86" rx="10" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 4"/>${txt(24, 28, "obje", "var(--muted)", 11, 'font-weight="700"')}
        <polygon points="58,40 102,40 110,82 50,82" fill="var(--surface2)" stroke="var(--text2)" stroke-width="2"/>${txt(68, 66, "mesh", "var(--text)", 12, 'font-weight="700"')}
        <circle cx="80" cy="82" r="4.5" fill="var(--accent)"/>`) },
    { g: "3D'nin temeli", id: "origin", t: "Origin (pivot)",
      a: "Objenin tutma noktası: küçük turuncu nokta. Obje bu noktanın etrafında döner ve GTA objeyi bu noktadan haritaya koyar.",
      w: "Propların origin'i tabanın ortasında olmalı (Görev 1.5).",
      s: svg(`<rect x="28" y="38" width="104" height="8" rx="2" fill="var(--text2)"/><rect x="36" y="46" width="6" height="42" fill="var(--text2)"/><rect x="118" y="46" width="6" height="42" fill="var(--text2)"/>
        <path d="M10 88H150" stroke="var(--line2)" stroke-width="2" stroke-dasharray="5 4"/>
        <circle cx="80" cy="88" r="9" fill="none" stroke="var(--accent)" stroke-width="2"/><circle cx="80" cy="88" r="4" fill="var(--accent)"/>${txt(94, 104, "origin", "var(--accent)", 11.5, 'font-weight="700"')}`) },
    { g: "3D'nin temeli", id: "olcu", t: "Ölçü: 1 birim = 1 metre",
      a: "Blender'daki her sayı metredir. 3 yazdığın duvar oyunda da 3 metredir. Ölçü yanlışsa karakter kapıdan geçemez, masa dizine gelir.",
      w: "Kapı 1.1 × 2.15 m, karakter 1.8 m, tavan 3 m (Görev 1.4).",
      s: svg(`<path d="M24 100V10" stroke="var(--text2)" stroke-width="2"/>${[0, 1, 2, 3].map(i => `<path d="M18 ${100 - i * 30}H30" stroke="var(--text2)" stroke-width="2"/>${txt(32, 104 - i * 30, i ? i + " m" : "0", "var(--muted)", 9.5)}`).join("")}
        <path d="M14 100H152" stroke="var(--text2)" stroke-width="2"/>
        <g fill="var(--c-c)"><circle cx="78" cy="53" r="6"/><rect x="70" y="61" width="16" height="22" rx="6"/><rect x="71" y="81" width="6" height="19" rx="3"/><rect x="79" y="81" width="6" height="19" rx="3"/></g>
        <rect x="104" y="35.5" width="33" height="64.5" fill="var(--c-b)" fill-opacity=".15" stroke="var(--c-b)" stroke-width="2"/>${txt(108, 30, "kapı", "var(--c-b)", 10, 'font-weight="700"')}`) },
    { g: "3D'nin temeli", id: "normal", t: "Yüzün önü ve arkası",
      a: "Her yüzün bir ön tarafı vardır. GTA yüzlerin sadece ön tarafını çizer; ters dönmüş bir duvar arkadan bakınca görünmez.",
      w: "Face Orientation ile kırmızı (ters) yüzleri bulursun (Görev 1.6).",
      s: svg(`<rect x="96" y="16" width="12" height="78" fill="#3d8bfd" fill-opacity=".55"/><path d="M96 55H58" stroke="#3d8bfd" stroke-width="3"/><path d="M58 55l8-5v10z" fill="#3d8bfd"/>
        ${eye(30, 55)}${txt(16, 104, "ön yüzü görüyor → görünür", "var(--muted)", 9.5)}`) },
    { g: "3D'nin temeli", id: "doku", t: "Malzeme, doku ve UV",
      a: "**Doku** yüzeye basılan resimdir (ahşap, beton…). **Malzeme** o resmin nasıl görüneceğini söyler. **UV** ise resmin modele nasıl yapıştırılacağını belirleyen açılmış kalıptır.",
      w: "Görev 1.8, 3.1 ve 3.2.",
      s: svg(`${chk("bchk")}<rect x="10" y="30" width="50" height="50" fill="url(#bchk)" stroke="var(--text2)" stroke-width="2"/>${txt(16, 96, "doku", "var(--muted)", 10)}
        <path d="M66 55H88" stroke="var(--text2)" stroke-width="2"/><path d="M88 55l-7-5v10z" fill="var(--text2)"/>
        <g transform="translate(122 56)"><polygon points="0,-30 28,-16 0,-2 -28,-16" fill="url(#bchk)" stroke="var(--text2)" stroke-width="2"/><polygon points="-28,-16 0,-2 0,30 -28,16" fill="url(#bchk)" stroke="var(--text2)" stroke-width="2"/><polygon points="28,-16 0,-2 0,30 28,16" fill="url(#bchk)" stroke="var(--text2)" stroke-width="2"/></g>`) },
    { g: "3D'nin temeli", id: "modifier", t: "Modifier",
      a: "Modelin üstüne takılan otomatik işlem. Modeli bozmaz; beğenince **uygularsın** (apply). Örnek: Solidify kalınlık verir, Boolean delik açar.",
      w: "İlk oda görevinde (1.7) iki modifier kullanırsın.",
      s: svg(`<polygon points="8,70 52,70 66,56 22,56" fill="var(--surface2)" stroke="var(--text2)" stroke-width="2"/>
        <path d="M72 62H92" stroke="var(--accent)" stroke-width="2.5"/><path d="M92 62l-7-5v10z" fill="var(--accent)"/>${txt(64, 50, "Solidify", "var(--accent)", 10, 'font-weight="700"')}
        <polygon points="98,58 140,58 154,44 112,44" fill="var(--surface2)" stroke="var(--text2)" stroke-width="2"/><polygon points="98,58 140,58 140,74 98,74" fill="var(--line2)" stroke="var(--text2)" stroke-width="2"/><polygon points="140,58 154,44 154,60 140,74" fill="var(--line)" stroke="var(--text2)" stroke-width="2"/>`) },
    { g: "Oyuna giden yol", id: "export", t: "İçe ve dışa aktarma",
      a: "**Import** (içe aktar): başka bir dosyayı Blender'a almak. **Export** (dışa aktar): Blender'daki işi oyunun anlayacağı dosyaya çevirip kaydetmek.",
      w: "Sollumz'un Import ve Export butonları (Görev 2.2 ve 3.5).",
      s: svg(`<rect x="8" y="34" width="62" height="42" rx="9" fill="var(--c-b)" fill-opacity=".18" stroke="var(--c-b)" stroke-width="2"/>${txt(17, 60, "Blender", "var(--text)", 12, 'font-weight="700"')}
        <path d="M76 55H100" stroke="var(--text2)" stroke-width="2.5"/><path d="M100 55l-7-5v10z" fill="var(--text2)"/>${txt(72, 44, "export", "var(--muted)", 10)}
        <path d="M110 22H140L152 34V90H110Z" fill="var(--surface)" stroke="var(--text2)" stroke-width="2"/><path d="M140 22V34H152" fill="none" stroke="var(--text2)" stroke-width="2"/>${txt(116, 64, ".ydr", "var(--accent)", 13, 'font-weight="800"')}`) },
    { g: "Oyuna giden yol", id: "collision", t: "Collision (çarpışma)",
      a: "Gördüğün model ile çarptığın şey ayrıdır. Collision görünmez ve sade bir kopyadır. Yoksa karakter içinden geçer ya da yerden düşer.",
      w: "Görev 3.4 ve 5.5.",
      s: svg(`<rect x="52" y="22" width="8" height="46" rx="2" fill="var(--text2)"/><rect x="52" y="60" width="52" height="8" rx="2" fill="var(--text2)"/><rect x="56" y="68" width="6" height="28" fill="var(--text2)"/><rect x="94" y="68" width="6" height="28" fill="var(--text2)"/>
        <rect x="44" y="14" width="68" height="86" rx="6" fill="var(--accent)" fill-opacity=".08" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/>${txt(118, 30, "görünmez", "var(--accent)", 10, 'font-weight="700"')}${txt(118, 43, "kutu", "var(--accent)", 10, 'font-weight="700"')}`) },
    { g: "Oyuna giden yol", id: "dosyalar", t: "GTA dosyaları",
      a: "Bir objenin görüntüsü `ydr`, dokuları `ytd`, çarpışması `ybn`, kimlik kartı `ytyp`, haritadaki yeri `ymap` dosyasındadır.",
      w: "Görev 0.1'deki dosya şeması ve [Sözlük](#/sozluk).",
      s: svg(`${[["ymap", "nerede", "var(--c-c)"], ["ytyp", "ne", "var(--c-s)"], ["ydr", "görüntü", "var(--c-b)"], ["ybn", "çarpışma", "var(--c-f)"]].map((f, i) => `<rect x="14" y="${8 + i * 24}" width="132" height="20" rx="6" fill="var(--surface2)" stroke="${f[2]}" stroke-width="1.5"/>${txt(22, 22 + i * 24, f[0], f[2], 11.5, 'font-weight="800"')}${txt(70, 22 + i * 24, f[1], "var(--text2)", 10.5)}`).join("")}`) },
    { g: "Oyuna giden yol", id: "sunucu", t: "Sunucu ve localhost",
      a: "FiveM'de oyuncular bir **sunucuya** bağlanır. Test sunucun kendi bilgisayarında çalışır; bilgisayarının kendine verdiği ad **localhost**'tur.",
      w: "Görev 0.6. Bağlanmak için: `connect localhost`.",
      s: svg(`<rect x="22" y="10" width="116" height="70" rx="8" fill="var(--surface)" stroke="var(--text2)" stroke-width="2"/><path d="M70 80V92M56 94H104" stroke="var(--text2)" stroke-width="3"/>
        ${[0, 1, 2].map(i => `<rect x="58" y="${22 + i * 16}" width="44" height="12" rx="3" fill="var(--surface2)" stroke="var(--c-f)" stroke-width="1.5"/><circle cx="94" cy="${28 + i * 16}" r="2" fill="var(--ok)"/>`).join("")}
        ${txt(46, 106, "localhost", "var(--accent)", 11, 'font-family="JetBrains Mono,monospace" font-weight="700"')}`) },
    { g: "Oyuna giden yol", id: "resource", t: "Resource ve stream",
      a: "Sunucuya eklenen her şey bir **resource**'tur: bir klasör ve içinde `fxmanifest.lua`. Haritanın oyun dosyaları bu klasörün içindeki **stream** klasörüne konur.",
      w: "Görev 4.2.",
      s: svg(`<path d="M14 26H56L64 34H146V96H14Z" fill="var(--accent)" fill-opacity=".18" stroke="var(--accent)" stroke-width="2"/>${txt(22, 50, "benim_map", "var(--text)", 11.5, 'font-weight="700"')}
        <path d="M30 62H58L63 67H96V88H30Z" fill="var(--surface)" stroke="var(--text2)" stroke-width="1.5"/>${txt(38, 81, "stream", "var(--text2)", 10.5)}${txt(102, 81, "fxmanifest", "var(--muted)", 9)}`) },
    { g: "Oyuna giden yol", id: "konsol", t: "Konsol",
      a: "Komut yazdığın ve hataların göründüğü pencere. Oyunda {{F8}} ile açılır; sunucunun konsolu txAdmin'dedir.",
      w: "Bir şey çalışmazsa önce konsoldaki kırmızı satırlara bak.",
      s: svg(`<rect x="8" y="14" width="144" height="82" rx="8" fill="#101114" stroke="var(--line2)" stroke-width="2"/>
        ${txt(18, 40, "> ensure benim_map", "#46d38a", 11, 'font-family="JetBrains Mono,monospace"')}${txt(18, 58, "Started resource", "#9aa0aa", 10, 'font-family="JetBrains Mono,monospace"')}${txt(18, 76, "! hata: dosya yok", "#ff6b7c", 10, 'font-family="JetBrains Mono,monospace"')}`) }
  ];
})();
