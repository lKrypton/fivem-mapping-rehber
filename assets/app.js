(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const M = window.MISSIONS, CH = window.CHAPTERS, V = window.VIDEOS, DG = window.DIAGRAMS;
  const VID = Object.fromEntries(V.map(v => [v.id, v]));
  const main = $("#main");

  /* ---------- kayıt ---------- */
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const S = store.get("mloa-v1") || { c: {} };
  if (!S.c) S.c = {};
  const save = () => store.set("mloa-v1", S);
  const checks = m => S.c[m.id] || [];
  const doneCount = m => m.done.filter((_, i) => checks(m)[i]).length;
  const isDone = m => doneCount(m) === m.done.length;
  const code = id => id.replace("-", ".");

  /* ---------- biçim ---------- */
  const keys = k => k.split("+").map(x => `<kbd>${x}</kbd>`).join('<span class="kplus">+</span>');
  function fmt(s) {
    if (!s) return "";
    return String(s)
      .replace(/&(?![a-zA-Z#0-9]+;)/g, "&amp;")
      .replace(/`([^`]+)`/g, (_, c) => `<code>${c.replace(/</g, "&lt;")}</code>`)
      .replace(/\{\{(.+?)\}\}/g, (_, k) => keys(k))
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a class="lnk" href="${u}"${/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : ""}>${t}</a>`)
      .replace(/\[([^\]]+)\]/g, '<span class="ui">$1</span>')
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  }
  const plain = s => String(s || "").replace(/<[^>]+>/g, "").replace(/\{\{|\}\}|`|\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[\[\]]/g, "");

  /* ---------- ikonlar ---------- */
  const P = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    play: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>',
    kb: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    life: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5"/>',
    alert: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17h.01"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
  };
  const ic = (n, sw = 1.8) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[n]}</svg>`;
  const playSolid = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';

  const PROG = { b: ["BLENDER", "p-b"], s: ["SOLLUMZ", "p-s"], c: ["CODEWALKER", "p-c"], f: ["OYUN", "p-f"], w: ["DOSYA", "p-w"], d: ["DOKU", "p-d"], x: ["OKU / WEB", "p-w"] };
  const prog = k => `<span class="prog ${PROG[k][1]}">${PROG[k][0]}</span>`;
  const lvl = n => `<span class="lvl" title="Zorluk ${n}/3">${[1, 2, 3].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;
  const dg = id => (DG[id] ? fmt(DG[id]()) : "");

  /* ---------- menü ---------- */
  const NAV = [
    ["Öğren"], ["/", "home", "Başla"], ["/gorevler", "flag", "Görevler", "missions"], ["/videolar", "play", "Videolar", "videos"],
    ["Başvuru"], ["/tarifler", "bulb", "Nasıl yaparım?"], ["/kisayollar", "kb", "Kısayollar"], ["/sozluk", "book", "Sözlük"], ["/sorunlar", "life", "Sorun çözücü"],
    ["Hazırlık"], ["/araclar", "tool", "İndirilecekler"], ["/kaynaklar", "link", "Kaynaklar"]
  ];
  function renderNav(path) {
    const base = "/" + (path.split("/")[1] || "");
    const done = M.filter(isDone).length;
    $("#nav").innerHTML = NAV.map(n => {
      if (n.length === 1) return `<div class="grp">${n[0]}</div>`;
      const on = n[0] === base || (n[0] === "/gorevler" && base === "/gorev");
      const cnt = n[3] === "missions" ? `<span class="cnt">${done}/${M.length}</span>` : n[3] === "videos" ? `<span class="cnt">${V.length}</span>` : "";
      return `<a href="#${n[0]}" class="${on ? "on" : ""}">${ic(n[1])}${n[2]}${cnt}</a>`;
    }).join("");
    renderRank();
  }
  function renderRank() {
    const core = M.filter(m => !m.adv), d = core.filter(isDone).length, all = M.filter(isDone).length;
    const R = [[0, "Çaylak"], [3, "Çırak"], [10, "Kalfa"], [18, "Mapper"], [core.length, "MLO Ustası"]];
    let cur = R[0], next = null;
    for (let i = 0; i < R.length; i++) if (d >= R[i][0]) { cur = R[i]; next = R[i + 1] || null; }
    const name = all === M.length ? "Usta Mapper" : cur[1];
    const sub = all === M.length ? "Bütün görevler bitti." : next ? `${next[1]} rütbesine ${next[0] - d} görev` : "Usta yolu görevleri kaldı.";
    $("#rank").innerHTML = `<div class="top"><b>${name}</b><span class="muted">${all}/${M.length}</span></div><div class="bar"><i style="width:${(all / M.length) * 100}%"></i></div><div class="sub">${sub}</div>`;
  }

  /* ---------- video kartı ---------- */
  function vcard(id, start, note) {
    const v = VID[id];
    if (!v) return "";
    return `<button class="vcard" data-vid="${id}" data-start="${start || 0}">
      <div class="vthumb"><img loading="lazy" src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt="">
        <span class="lang ${v.l}">${v.l === "tr" ? "TR" : "EN"}</span><span class="dur">${v.d}</span>
        <div class="play"><span>${playSolid}</span></div></div>
      <div class="vbody"><b>${fmt(v.t)}</b><span class="ch">${v.ch} · ${v.y}${start ? ` · ${Math.floor(start / 60)}:${String(start % 60).padStart(2, "0")}'dan başlar` : ""}</span>
      <span class="nt">${fmt(note || v.n)}</span></div></button>`;
  }

  /* ---------- sayfalar ---------- */
  function firstOpen() { return M.find(m => !isDone(m)) || null; }

  function pHome() {
    const nx = firstOpen();
    const started = M.some(m => doneCount(m) > 0);
    const cont = nx ? `<a class="continue" href="#/gorev/${nx.id}"><span class="ic">${ic("flag", 2)}</span><span><small>${started ? "Kaldığın yer" : "İlk görev"}</small><b>${code(nx.id)} · ${nx.title}</b></span><span class="go">${ic("arrow", 2)}</span></a>` : "";
    const chapters = CH.map(c => {
      const ms = M.filter(m => m.ch === c.id), d = ms.filter(isDone).length;
      return `<a class="chcard" href="#/gorevler#b${c.id}"><span class="n">BÖLÜM ${c.id}</span><h3>${c.title}</h3><p>${c.sub}</p>
        <div class="pb"><i style="width:${(d / ms.length) * 100}%"></i></div><div class="pc">${d}/${ms.length} görev</div></a>`;
    }).join("");
    return `<div class="page wide">
      <section class="hero"><div class="eyebrow">Sıfırdan FiveM map ve MLO</div>
        <h1>Blender'ı hiç açmamış birinden <em>ilk MLO'ya</em>.</h1>
        <p class="plead">Görev görev ilerleyen bir atölye. Her görevde ne yapacağın, hangi programda olduğun, hangi videoyu izleyeceğin ve takılırsan ne yapacağın yazıyor.</p>
        ${cont}
        <div class="btns"><a class="btn pri" href="#/gorevler">${ic("flag", 2)}Görevlere bak</a><button class="btn" data-search>${ic("search", 2)}Nasıl yaparım? Ara</button></div>
      </section>
      <section class="sec"><h2>Bu iş nasıl çalışır?</h2><p class="sub">Dört program, tek bir yol. Görevlerdeki her adımın başında hangi programda olduğun renkli etiketle yazar.</p>
        ${dg("pipeline")}
        <div class="chips" style="margin-top:14px">${Object.keys(PROG).filter(k => k !== "x").map(prog).join("")}${prog("x")}</div></section>
      <section class="sec"><h2>Dosyalar birbirine nasıl bağlanır?</h2><p class="sub">Bir masayı haritaya koyduğunda arka planda olan şey bu.</p>${dg("files")}</section>
      <section class="sec"><h2>Yol haritası</h2><p class="sub">${CH.length} bölüm, ${M.length} görev. Sırayla git; her görev bir öncekinin üstüne kurulu. Son bölüm temel bitince.</p>
        <div class="grid g3">${chapters}</div></section>
      <section class="sec"><h2>Altın kurallar</h2><p class="sub">Hataların çoğu bu sekiz kuraldan birinin unutulmasından çıkar.</p>
        <div class="rules">${window.RULES.map(r => `<div>${fmt(r)}</div>`).join("")}</div></section>
      <section class="sec"><h2>Takılınca</h2><p class="sub">Merak ettiğin ya da takıldığın her şey için üç yol var.</p>
        <div class="grid g3">
          <button class="chcard" data-search style="text-align:left;cursor:pointer"><span class="n">{{Ctrl+K}}</span><h3>Ara</h3><p>“kapı aç”, “doku pembe”, “ışınlan” gibi yaz. Görev, tarif, sözlük ve sorunlarda arar.</p></button>
          <a class="chcard" href="#/sorunlar"><span class="n">SORUN ÇÖZÜCÜ</span><h3>Belirtiyi seç</h3><p>“Kapıdan bakınca boşluk var” gibi belirtiye göre olası sebepler sırayla.</p></a>
          <a class="chcard" href="#/sorunlar#yardim"><span class="n">YARDIM İSTE</span><h3>Doğru soru sor</h3><p>Hazır şablonu kopyala, ekran görüntüsüyle gönder. Cevap çok daha hızlı gelir.</p></a>
        </div></section>
    </div>`.replace("{{Ctrl+K}}", "CTRL + K");
  }

  function pMissions() {
    return `<div class="page"><div class="eyebrow">Görevler</div><h1 class="ptitle">Adım adım ilerle</h1>
      <p class="plead">Her görevin sonunda elinde somut bir şey olur. “Bitti sayılır” listesini işaretleyince görev tamamlanır; ilerlemen bu tarayıcıda saklanır.</p>
      ${CH.map(c => {
        const ms = M.filter(m => m.ch === c.id), d = ms.filter(isDone).length, p = Math.round((d / ms.length) * 100);
        return `<section class="chap" id="b${c.id}"><div class="chap-h"><div class="ring" style="--p:${p}"><span>${d}/${ms.length}</span></div>
          <div><h2>Bölüm ${c.id} · ${c.title}</h2><p>${c.sub}</p></div></div>
          <div class="mlist">${ms.map(m => {
            const dc = doneCount(m), st = isDone(m) ? "done" : dc ? "half" : "";
            return `<a class="mrow" href="#/gorev/${m.id}"><span class="st ${st}">${isDone(m) ? ic("check", 3) : ""}</span><span class="id">${code(m.id)}</span>
              <span class="tt">${m.title}<small>${fmt(m.goal)}</small></span>
              <span class="mt">${m.adv ? '<span class="adv">İLERİ</span>' : ""}${ic("clock")}<span>${m.time}</span>${lvl(m.lvl)}</span></a>`;
          }).join("")}</div></section>`;
      }).join("")}</div>`;
  }

  function pMission(id) {
    const i = M.findIndex(m => m.id === id);
    if (i < 0) return pNotFound();
    const m = M[i], c = CH[m.ch], prev = M[i - 1], next = M[i + 1];
    const progs = [...new Set((m.steps || []).filter(s => s.in).map(s => s.in))];
    const steps = (m.steps || []).map(s => s.h ? `<li class="sh">${s.h}</li>` : `<li><div><div class="st-main">${prog(s.in)}${fmt(s.t)}</div>
      ${s.d ? `<div class="st-d">${fmt(s.d)}</div>` : ""}
      ${s.code ? `<div class="copyable"><pre>${s.code.replace(/</g, "&lt;")}</pre><button class="copy" data-copy>Kopyala</button></div>` : ""}
      ${s.tip ? `<div class="st-tip">${fmt(s.tip)}</div>` : ""}${s.warn ? `<div class="st-warn">${fmt(s.warn)}</div>` : ""}</div></li>`).join("");
    const ck = checks(m);
    return `<div class="page">
      <div class="crumb"><a href="#/gorevler">Görevler</a><span>›</span><a href="#/gorevler#b${c.id}">Bölüm ${c.id} · ${c.title}</a></div>
      <div class="mhead"><span class="code">GÖREV ${code(m.id)}</span>${m.adv ? ' <span class="adv">İLERİ</span>' : ""}<h1>${m.title}</h1>
        <div class="mmeta"><span class="chip">${ic("clock")}${m.time}</span><span class="chip">Zorluk ${lvl(m.lvl)}</span>${progs.map(prog).join("")}</div></div>
      <div class="goal"><div class="card g1"><h4>Hedef</h4><p>${fmt(m.goal)}</p></div><div class="card"><h4>Sonunda elinde</h4><p>${fmt(m.out)}</p></div></div>
      ${m.concept ? `<section class="sec"><h2>Önce mantığı anla</h2><div class="concept">${m.concept.map(p => `<p>${fmt(p)}</p>`).join("")}</div>${(m.dg || []).map(dg).join("")}</section>`
        : (m.dg || []).length ? `<section class="sec"><h2>Şema</h2>${m.dg.map(dg).join("")}</section>` : ""}
      ${m.table ? `<section class="sec"><h2>Ölçü tablosu</h2><div class="tbl-wrap"><table class="shtable"><tr><th>Ne</th><th>Ölçü</th></tr>${m.table.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table></div></section>` : ""}
      <section class="sec"><h2>Adımlar</h2><p class="sub">Etiket, o adımı hangi programda yaptığını gösterir.</p><ol class="steps">${steps}</ol></section>
      ${m.keys ? `<section class="sec"><h2>Bu görevin kısayolları</h2><div class="keyrow">${m.keys.map(k => `<span class="k">${fmt(k[0])}<span class="muted">${k[1]}</span></span>`).join("")}</div></section>` : ""}
      ${m.vids ? `<section class="sec"><h2>İzle</h2><p class="sub">Video site içinde açılır. Türkçe olanlar TR etiketli.</p><div class="vgrid">${m.vids.map(v => vcard(v[0], v[1], v[2])).join("")}</div></section>` : ""}
      ${m.stuck ? `<section class="sec"><h2>Takılırsan</h2>${m.stuck.map(s => `<details class="acc"><summary>${fmt(s[0])}</summary><div><p>${fmt(s[1])}</p></div></details>`).join("")}</section>` : ""}
      ${m.docs ? `<section class="sec"><h2>Kaynak</h2><div class="docs">${m.docs.map(d => `<a href="${d[1]}" target="_blank" rel="noopener">${ic("ext")}${d[0]}</a>`).join("")}</div></section>` : ""}
      <section class="sec"><h2>Bitti sayılır, eğer…</h2><p class="sub">Hepsini işaretleyince görev tamamlanır.</p>
        <div class="card"><div class="check" data-mid="${m.id}">${m.done.map((d, j) => `<label><input type="checkbox" data-i="${j}"${ck[j] ? " checked" : ""}><span>${fmt(d)}</span></label>`).join("")}</div>
        <div class="donebox${isDone(m) ? " show" : ""}" id="donebox"><span class="big">${ic("check", 3)}</span><div><b>Görev tamam.</b><span>${next ? `Sıradaki: ${code(next.id)} ${next.title}` : "Bütün görevleri bitirdin."}</span></div>
          ${next ? `<a class="btn pri" href="#/gorev/${next.id}" style="margin-left:auto">Devam ${ic("arrow", 2)}</a>` : ""}</div></div></section>
      <nav class="mnav">${prev ? `<a href="#/gorev/${prev.id}"><small>← Önceki</small><b>${code(prev.id)} ${prev.title}</b></a>` : "<span></span>"}
        ${next ? `<a class="nx" href="#/gorev/${next.id}"><small>Sonraki →</small><b>${code(next.id)} ${next.title}</b></a>` : ""}</nav>
    </div>`;
  }

  let vf = { l: "all", t: "all" };
  function pVideos() {
    const list = V.filter(v => (vf.l === "all" || v.l === vf.l) && (vf.t === "all" || v.tp.includes(vf.t)));
    const sorted = list.slice().sort((a, b) => (b.star || 0) - (a.star || 0));
    const fb = (k, v, l) => `<button class="fbtn${vf[k] === v ? " on" : ""}" data-f="${k}" data-v="${v}">${l}</button>`;
    return `<div class="page wide"><div class="eyebrow">Videolar</div><h1 class="ptitle">İzle, sonra yap</h1>
      <p class="plead">${V.length} video, hepsi kontrol edildi. Tıklayınca site içinde açılır. Videoyu izledikten sonra aynı şeyi kendin yapmadan bir sonrakine geçme.</p>
      <div class="filters" style="margin-top:22px">${fb("l", "all", "Hepsi")}${fb("l", "tr", "Türkçe")}${fb("l", "en", "İngilizce")}</div>
      <div class="filters">${fb("t", "all", "Bütün konular")}${window.TOPICS.map(t => fb("t", t[0], t[1])).join("")}</div>
      ${sorted.length ? `<div class="vgrid">${sorted.map(v => vcard(v.id)).join("")}</div>` : `<p class="muted">Bu filtrede video yok.</p>`}
      <section class="sec"><h2>İki seri, baştan sona</h2><p class="sub">Sırayla izlenecek iki seri. ook_3D'ninki FiveM'in resmi rehberinin videosu; bazq'ınki Türkçe gerçek bir proje.</p>
        <h3 style="margin:18px 0 10px">ook_3D · Beginner Tutorial Series (9 bölüm, İngilizce)</h3><div class="vlist">${V.filter(v => v.s === "ook").map(v => vcard(v.id)).join("")}</div>
        <h3 style="margin:26px 0 10px">bazq · Mapping Öğretici (6 bölüm, Türkçe)</h3><div class="vlist">${V.filter(v => v.s === "bazq").map(v => vcard(v.id)).join("")}</div></section>
    </div>`;
  }

  let rf = { c: "all", q: "" };
  function pRecipes() {
    const cats = ["Blender", "Sollumz", "CodeWalker", "FiveM"];
    const fb = c => `<button class="fbtn${rf.c === c ? " on" : ""}" data-rc="${c}">${c === "all" ? "Hepsi" : c}</button>`;
    return `<div class="page"><div class="eyebrow">Nasıl yaparım?</div><h1 class="ptitle">Kısa tarifler</h1>
      <p class="plead">“Şunu nasıl yapıyordum?” dediğin anlar için. Her tarif 2–4 adım.</p>
      <div class="searchline" style="margin-top:22px">${ic("search")}<input id="rq" placeholder="Tariflerde ara: origin, kapı, ışınlan…" value="${rf.q.replace(/"/g, "&quot;")}"></div>
      <div class="filters">${fb("all")}${cats.map(fb).join("")}</div><div id="rlist">${recipeList()}</div></div>`;
  }
  function recipeList() {
    const q = norm(rf.q);
    const list = window.RECIPES.filter(r => (rf.c === "all" || r.c === rf.c) && (!q || norm(r.q + " " + r.s.join(" ")).includes(q)));
    if (!list.length) return `<p class="muted">Bulunamadı. Üstteki büyük aramayı ({{Ctrl+K}}) dene.</p>`.replace("{{Ctrl+K}}", "Ctrl + K");
    return list.map(r => {
      const rel = r.rel ? M.find(m => m.id === r.rel) : null;
      return `<details class="recipe" id="r-${r.id}"><summary><span class="q">${r.q}</span><span class="chip pv">${r.c}</span></summary><div>
        <ol>${r.s.map(s => `<li>${fmt(s)}</li>`).join("")}</ol>
        ${r.code ? `<div class="copyable"><pre>${r.code.replace(/</g, "&lt;")}</pre><button class="copy" data-copy>Kopyala</button></div>` : ""}
        ${rel ? `<div class="rel">Ayrıntısı: <a class="lnk" href="#/gorev/${rel.id}">Görev ${code(rel.id)} · ${rel.title}</a></div>` : ""}</div></details>`;
    }).join("");
  }

  let kf = { p: "Blender", q: "" };
  const KROWS = [
    [["~"], ["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"], ["9"], ["0"], ["-"], ["="], ["⌫", "w2"]],
    [["Tab", "w15"], ["Q"], ["W"], ["E"], ["R"], ["T"], ["Y"], ["U"], ["I"], ["O"], ["P"], ["["], ["]"], ["\\", "w15"]],
    [["Caps", "w175"], ["A"], ["S"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], [";"], ["'"], ["Enter", "w2"]],
    [["Shift", "w2"], ["Z"], ["X"], ["C"], ["V"], ["B"], ["N"], ["M"], [","], ["."], ["/"], ["Shift", "w2"]],
    [["Ctrl", "w15"], ["Alt", "w15"], ["Space", "w6"], ["Alt", "w15"], ["Ctrl", "w15"]]
  ];
  function pShortcuts() {
    const kb = KROWS.map(r => `<div class="r">${r.map(([k, w]) => {
      const on = window.KEYMAP[k];
      return on ? `<button class="key on ${w || ""}" data-key="${k}">${k}<small>${window.KEYSHORT[k] || ""}</small></button>` : `<span class="key ${w || ""}">${k}</span>`;
    }).join("")}</div>`).join("");
    const fb = p => `<button class="fbtn${kf.p === p ? " on" : ""}" data-kp="${p}">${p}</button>`;
    return `<div class="page wide"><div class="eyebrow">Kısayollar</div><h1 class="ptitle">Klavye haritası</h1>
      <p class="plead">Turuncu tuşlar Blender'da iş yapar. Üstüne gel ya da tıkla: ne işe yaradığı aşağıda yazar.</p>
      <div class="card" style="margin-top:22px"><div class="kb">${kb}</div><div class="kinfo" id="kinfo"><span class="muted">Bir tuşun üstüne gel…</span></div></div>
      <section class="sec"><h2>Liste</h2><p class="sub">★ işaretliler en çok kullanacakların. Kısayollar farenin altındaki pencerede çalışır.</p>
        <div class="filters">${["Blender", "CodeWalker", "FiveM"].map(fb).join("")}</div>
        <div class="searchline">${ic("search")}<input id="kq" placeholder="Kısayol ara: kopyala, sil, kenar…" value="${kf.q.replace(/"/g, "&quot;")}"></div>
        <div id="klist">${shortcutList()}</div></section></div>`;
  }
  function shortcutList() {
    const q = norm(kf.q);
    const list = window.SHORTCUTS.filter(s => s.p === kf.p && (!q || norm(s.d + " " + s.k).includes(q)));
    const groups = [...new Set(list.map(s => s.g))];
    if (!list.length) return `<p class="muted">Bulunamadı.</p>`;
    return groups.map(g => `<div class="cat-h">${g}</div><div class="ktable">${list.filter(s => s.g === g).map(s => `<div class="kr${s.top ? " top" : ""}"><span class="kd">${s.d}</span><span class="kk">${fmt(s.k)}</span></div>`).join("")}</div>`).join("");
  }

  let gq = "";
  function pGlossary() {
    return `<div class="page wide"><div class="eyebrow">Sözlük</div><h1 class="ptitle">Abi bu ne?</h1>
      <p class="plead">Videolarda ve dokümanlarda geçen her kelimenin tek cümlelik açıklaması.</p>
      <div class="searchline" style="margin-top:22px">${ic("search")}<input id="gq" placeholder="Terim ara: portal, ytyp, normal…" value="${gq.replace(/"/g, "&quot;")}"></div>
      <div id="glist">${glossaryList()}</div></div>`;
  }
  function glossaryList() {
    const q = norm(gq);
    const list = window.GLOSSARY.filter(g => !q || norm([g.t, g.k, g.a, g.l].join(" ")).includes(q));
    const cats = [...new Set(list.map(g => g.c))];
    if (!list.length) return `<p class="muted">Bulunamadı.</p>`;
    return cats.map(c => `<div class="cat-h">${c}</div><div class="gloss">${list.filter(g => g.c === c).map(g => `<div class="term" id="g-${g.id}">
      <h3>${g.c === "Dosyalar" ? `<code>${g.t}</code>` : g.t}${g.k ? `<span class="chip">${g.k}</span>` : ""}</h3><p class="abi">${fmt(g.a)}</p>${g.l ? `<p class="long">${fmt(g.l)}</p>` : ""}</div>`).join("")}</div>`).join("");
  }

  const HELP = "Ne yapmaya çalışıyordum:\nHangi görev / adım:\nNe oldu (ne bekliyordum):\nHata mesajı (varsa):\nBlender ve Sollumz sürümü:\nEkran görüntüsü: Outliner + Sollumz paneli + F8 konsolu";
  function pProblems() {
    const groups = [...new Set(window.PROBLEMS.map(p => p.g))];
    return `<div class="page"><div class="eyebrow">Sorun çözücü</div><h1 class="ptitle">Ne oluyor?</h1>
      <p class="plead">Belirtiyi bul ve aç. Olası sebepler en sık görülenden başlayarak sıralı; yukarıdan aşağı kontrol et.</p>
      ${groups.map(g => `<div class="cat-h">${g}</div>${window.PROBLEMS.filter(p => p.g === g).map(p => `<details class="prob" id="p-${p.id}"><summary><span class="sy">${fmt(p.s)}</span><span class="chip">${p.c.length} sebep</span></summary>
        <div><ol>${p.c.map(c => `<li><div><b>${fmt(c[0])}</b><span>${fmt(c[1])}</span></div></li>`).join("")}</ol></div></details>`).join("")}`).join("")}
      <section class="sec" id="yardim"><h2>Hâlâ çözülmediyse: yardım iste</h2><p class="sub">10 dakika kendin dene. Olmadıysa bu şablonu doldur ve ekran görüntüsüyle gönder.</p>
        <div class="copyable"><pre>${HELP}</pre><button class="copy" data-copy>Kopyala</button></div>
        <div class="call"><span class="ic">${ic("info", 2)}</span><p><b class="h">Ekran görüntüsünde ne görünsün?</b>Blender'da Outliner (sağ üst) ve Sollumz paneli açık; oyundaysa {{F8}} konsolu. Hata mesajını yazıyla da yapıştır.</p></div>
      </section></div>`.replace("{{F8}}", "<kbd>F8</kbd>");
  }

  function pTools() {
    const groups = [...new Set(window.TOOLS.map(t => t.g))];
    const sub = { "Zorunlu": "Bunlar olmadan başlayamazsın.", "Doku": "Doku indirmek ve `.dds`'e çevirmek için.", "Yardımcı": "Hayatı kolaylaştıranlar.", "İleri": "Temel bitince." };
    return `<div class="page wide"><div class="eyebrow">İndirilecekler</div><h1 class="ptitle">Programlar ve siteler</h1>
      <p class="plead">Hepsi ücretsiz (biri hariç, o da opsiyonel). Kurulumu olanların yanında ilgili görevin linki var.</p>
      ${groups.map(g => `<section class="sec"><h2>${g}</h2><p class="sub">${fmt(sub[g] || "")}</p><div class="grid g2">${window.TOOLS.filter(t => t.g === g).map(t => `<div class="tool">
        <span class="mono" style="--tc:var(${t.c})">${t.m}</span><div><h3>${t.n}${t.req ? '<span class="tag req">ŞART</span>' : ""}</h3><p>${fmt(t.d)}</p>
        <div class="meta"><a class="lnk" href="${t.u}" target="_blank" rel="noopener">${t.ul} ↗</a>${t.mission ? `<a class="chip" href="#/gorev/${t.mission}" style="text-decoration:none">Görev ${code(t.mission)}</a>` : ""}</div></div></div>`).join("")}</div></section>`).join("")}
    </div>`;
  }

  function pResources() {
    return `<div class="page"><div class="eyebrow">Kaynaklar</div><h1 class="ptitle">Daha derine inmek için</h1>
      <p class="plead">Bu sitedeki her şeyin geldiği yerler. Takıldığında asıl cevap genelde buralardadır.</p>
      ${window.RESOURCES.map(r => `<section class="sec"><h2>${r.g}</h2><div class="grid">${r.items.map(i => `<a class="tool" href="${i[1]}" target="_blank" rel="noopener" style="text-decoration:none">
        <span class="mono" style="--tc:var(--c-w)">${ic("ext", 2)}</span><div><h3>${i[0]}</h3><p>${fmt(i[2])}</p></div></a>`).join("")}</div></section>`).join("")}
    </div>`;
  }

  function pNotFound() {
    return `<div class="page"><h1 class="ptitle">Sayfa bulunamadı</h1><p class="plead"><a class="lnk" href="#/">Başa dön</a></p></div>`;
  }

  /* ---------- yönlendirme ---------- */
  const TITLES = { "": "Başla", gorevler: "Görevler", videolar: "Videolar", tarifler: "Nasıl yaparım?", kisayollar: "Kısayollar", sozluk: "Sözlük", sorunlar: "Sorun çözücü", araclar: "İndirilecekler", kaynaklar: "Kaynaklar" };
  function route() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, anchor] = raw.split("#");
    const parts = path.split("/").filter(Boolean);
    const p = parts[0] || "";
    let html;
    switch (p) {
      case "": html = pHome(); break;
      case "gorevler": html = pMissions(); break;
      case "gorev": html = pMission(parts[1]); break;
      case "videolar": html = pVideos(); break;
      case "tarifler": html = pRecipes(); break;
      case "kisayollar": html = pShortcuts(); break;
      case "sozluk": html = pGlossary(); break;
      case "sorunlar": html = pProblems(); break;
      case "araclar": html = pTools(); break;
      case "kaynaklar": html = pResources(); break;
      default: html = pNotFound();
    }
    main.innerHTML = html;
    renderNav(path);
    document.body.classList.remove("menu");
    const m = p === "gorev" ? M.find(x => x.id === parts[1]) : null;
    document.title = (m ? `${code(m.id)} ${m.title}` : TITLES[p] || "MLO Atölyesi") + " · MLO Atölyesi";
    const target = anchor ? document.getElementById(anchor) : parts[1] ? document.getElementById({ tarifler: "r-", sozluk: "g-", sorunlar: "p-" }[p] + parts[1]) : null;
    if (target) {
      if (target.tagName === "DETAILS") target.open = true;
      target.style.outline = "2px solid var(--accent)";
      setTimeout(() => (target.style.outline = ""), 1800);
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    } else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ---------- etkileşim ---------- */
  function toast(t) {
    const el = $("#toast");
    el.textContent = t;
    el.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  main.addEventListener("change", e => {
    const box = e.target.closest(".check");
    if (!box) return;
    const m = M.find(x => x.id === box.dataset.mid);
    const was = isDone(m);
    const arr = checks(m).slice();
    arr[+e.target.dataset.i] = e.target.checked;
    S.c[m.id] = arr;
    save();
    $("#donebox").classList.toggle("show", isDone(m));
    renderNav("/gorev");
    if (!was && isDone(m)) toast(`Görev ${code(m.id)} tamam!`);
  });

  main.addEventListener("input", e => {
    if (e.target.id === "rq") { rf.q = e.target.value; $("#rlist").innerHTML = recipeList(); }
    if (e.target.id === "gq") { gq = e.target.value; $("#glist").innerHTML = glossaryList(); }
    if (e.target.id === "kq") { kf.q = e.target.value; $("#klist").innerHTML = shortcutList(); }
  });

  function showKey(k, sel) {
    const items = window.KEYMAP[k];
    if (!items) return;
    $("#kinfo").innerHTML = `<div class="chips">${items.map(i => `<span class="chip">${keys(i[0].replace(/ /g, "+").replace("G+G", "G G"))} ${i[1]}</span>`).join("")}</div>`;
    if (sel) { $$(".kb .key").forEach(x => x.classList.toggle("sel", x.dataset.key === k)); }
  }
  main.addEventListener("mouseover", e => { const k = e.target.closest(".key.on"); if (k) showKey(k.dataset.key); });

  document.addEventListener("click", e => {
    const t = e.target;
    const v = t.closest("[data-vid]");
    if (v) { openVideo(v.dataset.vid, +v.dataset.start || 0); return; }
    const s = t.closest("[data-search]");
    if (s) { openSearch(); return; }
    const cp = t.closest("[data-copy]");
    if (cp) {
      const txt = cp.parentElement.querySelector("pre").textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast("Kopyalandı"), () => toast("Kopyalanamadı; elle seç"));
      return;
    }
    const f = t.closest("[data-f]");
    if (f) { vf[f.dataset.f] = f.dataset.v; main.innerHTML = pVideos(); return; }
    const rc = t.closest("[data-rc]");
    if (rc) { rf.c = rc.dataset.rc; const q = rf.q; main.innerHTML = pRecipes(); rf.q = q; return; }
    const kp = t.closest("[data-kp]");
    if (kp) { kf.p = kp.dataset.kp; $$("[data-kp]").forEach(x => x.classList.toggle("on", x === kp)); $("#klist").innerHTML = shortcutList(); return; }
    const key = t.closest(".key.on");
    if (key) { showKey(key.dataset.key, true); return; }
    const sr = t.closest("#sres a");
    if (sr && sr.dataset.vid) { e.preventDefault(); closeSearch(); openVideo(sr.dataset.vid, 0); return; }
    if (sr) closeSearch();
  });

  /* video */
  const vm = $("#vmodal");
  function openVideo(id, start) {
    const v = VID[id];
    $("#vframe").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start ? "&start=" + start : ""}" title="${(v && v.t) || "Video"}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    $("#vtitle").textContent = v ? `${v.t} · ${v.ch}` : "";
    $("#vyt").href = `https://www.youtube.com/watch?v=${id}${start ? "&t=" + start + "s" : ""}`;
    vm.classList.add("show");
  }
  function closeVideo() { vm.classList.remove("show"); $("#vframe").innerHTML = ""; }
  $("#vclose").addEventListener("click", closeVideo);
  vm.addEventListener("click", e => { if (e.target === vm) closeVideo(); });

  /* ---------- arama ---------- */
  function norm(s) {
    return String(s || "").toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").replace(/[{}\[\]`*]/g, " ");
  }
  let IDX = null;
  function buildIndex() {
    const e = [];
    M.forEach(m => e.push({ ty: "Görev", t: `${code(m.id)} ${m.title}`, s: plain(m.goal), x: [m.goal, m.out, ...(m.concept || []), ...(m.steps || []).map(s => s.t || s.h || ""), ...(m.steps || []).map(s => s.d || "")].join(" "), h: `#/gorev/${m.id}` }));
    window.RECIPES.forEach(r => e.push({ ty: "Nasıl yaparım?", t: r.q, s: plain(r.s[0]), x: r.s.join(" "), h: `#/tarifler/${r.id}` }));
    window.PROBLEMS.forEach(p => e.push({ ty: "Sorun", t: plain(p.s), s: plain(p.c[0][0]), x: p.c.flat().join(" "), h: `#/sorunlar/${p.id}` }));
    window.GLOSSARY.forEach(g => e.push({ ty: "Sözlük", t: g.t, s: plain(g.a), x: [g.k, g.a, g.l].join(" "), h: `#/sozluk/${g.id}` }));
    window.SHORTCUTS.forEach(k => e.push({ ty: "Kısayol", t: k.d, s: `${k.p} · ${plain(k.k)}`, x: k.k, h: "#/kisayollar" }));
    V.forEach(v => e.push({ ty: "Video", t: v.t, s: `${v.ch} · ${v.l === "tr" ? "Türkçe" : "İngilizce"} · ${v.d}`, x: v.n + " " + v.ch, h: "#/videolar", vid: v.id }));
    window.TOOLS.forEach(t => e.push({ ty: "İndirilecek", t: t.n, s: plain(t.d), x: t.d, h: "#/araclar" }));
    const words = s => " " + norm(s).replace(/[^a-z0-9@_.]+/g, " ").trim() + " ";
    e.forEach(x => { x.nt = words(x.t); x.nx = words(plain(x.x)); });
    return e;
  }
  /* Türkçe ekleri tolere etmek için kelimenin sonunu kırp, sadece kelime başında ara */
  const stem = t => " " + (t.length >= 4 ? t.slice(0, Math.max(3, t.length - 3)) : t);
  function doSearch(q) {
    IDX = IDX || buildIndex();
    const raw = norm(q).replace(/[^a-z0-9@_.]+/g, " ").split(" ").filter(Boolean);
    const toks = raw.map(stem);
    if (!toks.length) return [];
    const order = ["Görev", "Nasıl yaparım?", "Sorun", "Sözlük", "Kısayol", "Video", "İndirilecek"];
    return IDX.map(e => {
      let sc = 0;
      for (let i = 0; i < toks.length; i++) {
        const t = toks[i];
        if (e.nt.includes(t)) sc += e.nt.includes(" " + raw[i]) ? 7 : 4;
        else if (e.nx.includes(t)) sc += e.nx.includes(" " + raw[i]) ? 2 : 1;
        else return null;
      }
      return { e, sc };
    }).filter(Boolean).sort((a, b) => b.sc - a.sc || order.indexOf(a.e.ty) - order.indexOf(b.e.ty)).slice(0, 16).map(r => r.e);
  }
  const sm = $("#smodal"), si = $("#sinput"), sres = $("#sres");
  let sel = 0;
  const HINTS = ["kapı aç", "doku pembe", "portal", "ölçek", "collision", "ışınlan", "origin", "void", "ensure"];
  function renderResults() {
    const q = si.value.trim();
    if (!q) {
      sres.innerHTML = `<div class="gh">Örnek aramalar</div><div class="hint">${HINTS.map(h => `<button class="fbtn" data-hint="${h}">${h}</button>`).join("")}</div>`;
      return;
    }
    const r = doSearch(q);
    if (!r.length) { sres.innerHTML = `<div class="empty">“${q.replace(/</g, "&lt;")}” için bir şey bulunamadı. Daha kısa bir kelime dene.</div>`; return; }
    sel = Math.min(sel, r.length - 1);
    let last = "";
    sres.innerHTML = r.map((e, i) => {
      const gh = e.ty !== last ? `<div class="gh">${e.ty}</div>` : "";
      last = e.ty;
      return `${gh}<a href="${e.h}"${e.vid ? ` data-vid="${e.vid}"` : ""} class="${i === sel ? "sel" : ""}" data-idx="${i}"><b>${e.t}</b><small>${e.s}</small></a>`;
    }).join("");
  }
  function openSearch() { sm.classList.add("show"); si.value = ""; sel = 0; renderResults(); setTimeout(() => si.focus(), 20); }
  function closeSearch() { sm.classList.remove("show"); }
  si.addEventListener("input", () => { sel = 0; renderResults(); });
  si.addEventListener("keydown", e => {
    const items = $$("#sres a");
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, items.length - 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); }
    else if (e.key === "Enter") {
      const a = items[sel];
      if (a) { e.preventDefault(); closeSearch(); if (a.dataset.vid) openVideo(a.dataset.vid, 0); else location.hash = a.getAttribute("href"); }
      return;
    } else return;
    items.forEach((a, i) => a.classList.toggle("sel", i === sel));
    if (items[sel]) items[sel].scrollIntoView({ block: "nearest" });
  });
  sres.addEventListener("click", e => { const h = e.target.closest("[data-hint]"); if (h) { si.value = h.dataset.hint; sel = 0; renderResults(); si.focus(); } });
  sm.addEventListener("click", e => { if (e.target === sm) closeSearch(); });

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); sm.classList.contains("show") ? closeSearch() : openSearch(); return; }
    if (e.key === "Escape") { closeSearch(); closeVideo(); document.body.classList.remove("menu"); return; }
    if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  });

  /* tema ve menü */
  $("#themeBtn").addEventListener("click", () => {
    const r = document.documentElement, cur = r.getAttribute("data-theme");
    const dark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const nx = dark ? "light" : "dark";
    r.setAttribute("data-theme", nx);
    try { localStorage.setItem("mloa-theme", nx); } catch (e) {}
  });
  $("#menuBtn").addEventListener("click", () => document.body.classList.toggle("menu"));
  $("#scrim").addEventListener("click", () => document.body.classList.remove("menu"));

  route();
})();
