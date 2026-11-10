/* Videolar, tarifler, sözlük, sorunlar, kısayollar, araçlar, kaynaklar */

window.TOPICS = [
  ["temel", "Blender temeli"], ["kurulum", "Kurulum"], ["gta", "GTA ve CodeWalker"], ["prop", "Prop yapımı"],
  ["doku", "Doku ve malzeme"], ["collision", "Collision"], ["mlo", "MLO"], ["ileri", "İleri seviye"]
];

/* id, başlık, kanal, dil, süre, yıl, konular, not, seri */
window.VIDEOS = [
  { id: "OAVeWM9FPsw", t: "MLO Öğretici: Her Şey Tek Videoda", ch: "bazq", l: "tr", d: "1:08:57", y: 2026, tp: ["mlo"], star: 1, n: "Blender 5.1 ve Sollumz ile baştan sona MLO. Türkçe kaynakların en iyisi." },
  { id: "BwpWHqOrvnA", t: "Creating Multi Room MLO Interior (Sollumz 2.3+)", ch: "ook_3D", l: "en", d: "25:31", y: 2024, tp: ["mlo"], star: 1, n: "Çok odalı MLO, bölüm işaretli. Görevlerde parça parça kullanılıyor." },
  { id: "5TZFtA3s2NU", t: "Blender Başlangıç Kursu pt.1", ch: "Berkay Blender", l: "tr", d: "34:44", y: 2026, tp: ["temel", "kurulum"], star: 1, n: "Blender 5.2 LTS ile kurulum ve ekran kontrolleri. Hızlı ve teknik." },
  { id: "nA8b_yG6_bk", t: "Blender Başlangıç Kursu pt.2: Modifier, Edit Mode", ch: "Berkay Blender", l: "tr", d: "54:19", y: 2026, tp: ["temel"], n: "Solidify, Boolean, Mirror ve Edit Mode." },
  { id: "_8O3H1jjY4E", t: "UV Hakkında Her Şey", ch: "Berkay Blender", l: "tr", d: "27:12", y: 2026, tp: ["temel", "doku"], n: "UV açılımı ve paketleme. Sert yüzey kısmı bizim için." },
  { id: "DDAtTj5r-rY", t: "Sıfırdan Blender Dersleri #1", ch: "Ekin Yalgın", l: "tr", d: "12:06", y: 2022, tp: ["temel"], n: "Gezinme ve görünümler. Eski sürüm ama kısayollar aynı." },
  { id: "uoU6PSFuN4U", t: "Sıfırdan Blender Dersleri #2", ch: "Ekin Yalgın", l: "tr", d: "15:11", y: 2022, tp: ["temel"], n: "Edit Mode: nokta, kenar, yüz." },
  { id: "AKmwbSY2qBU", t: "Blender Mini Oda Modelleme", ch: "Tolga UZUN", l: "tr", d: "23:12", y: 2020, tp: ["temel"], n: "Küçük bir oda ve eşyaları. Eski sürüm, mantık aynı." },
  { id: "-tbSCMbJA6o", t: "Blender Donut Tutorial Part 1 (2026)", ch: "Blender Guru", l: "en", d: "28:30", y: 2025, tp: ["temel"], n: "Dünyanın en bilinen başlangıç serisi. Blender 5." },
  { id: "K1UyEdmSttQ", t: "Basic Modelling (Donut Part 2)", ch: "Blender Guru", l: "en", d: "30:51", y: 2025, tp: ["temel"], n: "Referansla kupa modelleme: extrude, inset, loop cut." },
  { id: "z-Xl9tGqH14", t: "Beginner Blender Tutorial (2026), tek video", ch: "Blender Guru", l: "en", d: "4:19:10", y: 2026, tp: ["temel"], n: "Bütün donut serisi tek videoda, bölüm işaretli." },
  { id: "kVcY7K-JA1Y", t: "Blender 5 Complete Beginners Guide, Part 1", ch: "Grant Abbitt", l: "en", d: "12:42", y: 2025, tp: ["temel"], n: "Arayüz. Sakin, yöntemli anlatım." },
  { id: "XleO7DBm1Us", t: "How to UV Unwrap Anything", ch: "On Mars 3D", l: "en", d: "7:36", y: 2024, tp: ["temel", "doku"], n: "Kısa ve net UV." },
  { id: "DJRBv917CI0", t: "How to Make an Interior in Blender (9 min)", ch: "Blender Guru", l: "en", d: "8:47", y: 2022, tp: ["temel"], n: "İç mekân döşeme fikirleri. İlham için." },

  { id: "pT6g4JM_v0E", t: "How To Install Sollumz 2.9 For Blender 5.2", ch: "GTA PLUG", l: "en", d: "2:13", y: 2026, tp: ["kurulum"], n: "Tam bizim sürümlerimizle kurulum." },
  { id: "4WQGKlmc0LQ", t: "How to install CodeWalker", ch: "GTA PLUG", l: "en", d: "3:53", y: 2026, tp: ["kurulum"], n: "CodeWalker kurulumu." },
  { id: "eiWzJbqM1L0", t: "txAdmin ile Local Host Kurulumu", ch: "TEZER", l: "tr", d: "13:33", y: 2026, tp: ["kurulum"], n: "Kendi bilgisayarında test sunucusu. XAMPP kısmı harita için gerekmez." },
  { id: "BOTrVqbSIYM", t: "CodeWalker: Nasıl İndirilir, Obje Nasıl Konur", ch: "Aybars39", l: "tr", d: "8:11", y: 2025, tp: ["kurulum", "gta"], n: "Türkçe CodeWalker başlangıcı." },

  { id: "GgZ82sue3kM", s: "ook", t: "Part 1/9: Araçlar ve kurulum", ch: "ook_3D", l: "en", d: "3:13", y: 2026, tp: ["kurulum"], n: "FiveM resmi rehberinin video hali." },
  { id: "fCQ5JlbWcSE", s: "ook", t: "Part 2/9: GTA dosyalarını keşfet, dışa aktar", ch: "ook_3D", l: "en", d: "3:56", y: 2026, tp: ["gta"], n: "Modeli Blender'a al, geri gönder." },
  { id: "FOBlazpGIhA", s: "ook", t: "Part 3/9: Blender'da GTA asset'i oluştur", ch: "ook_3D", l: "en", d: "4:02", y: 2026, tp: ["prop", "doku"], n: "Shader, doku, vertex color, ytyp, export." },
  { id: "dVBO3_ZGL_Q", s: "ook", t: "Part 4/9: Yerleştirme ve basit map", ch: "ook_3D", l: "en", d: "3:06", y: 2026, tp: ["gta", "prop"], n: "Ymap ve FiveM resource." },
  { id: "UN7iaK5ADpk", s: "ook", t: "Part 5/9: Collision düzenleme ve oluşturma", ch: "ook_3D", l: "en", d: "8:49", y: 2026, tp: ["collision"], n: "Dünya collision'ı ve gömülü collision." },
  { id: "dVkvYm4eDeI", s: "ook", t: "Part 6/9: LOD", ch: "ook_3D", l: "en", d: "6:13", y: 2026, tp: ["ileri"], n: "Uzak mesafe modelleri." },
  { id: "11EXhLYfJLs", s: "ook", t: "Part 7/9: Harita animasyonu", ch: "ook_3D", l: "en", d: "6:17", y: 2026, tp: ["ileri"], n: "Hareket eden harita parçaları." },
  { id: "ajqNHqB8mYw", s: "ook", t: "Part 8/9: Kapı yapımı", ch: "ook_3D", l: "en", d: "4:33", y: 2026, tp: ["ileri", "mlo"], n: "Menteşeli, sürgülü ve dikey kapılar." },
  { id: "GS-oTzWPREA", s: "ook", t: "Part 9/9: Asset library", ch: "ook_3D", l: "en", d: "2:53", y: 2026, tp: ["ileri"], n: "Hazır objeleri sürükle bırakla yerleştirmek." },

  { id: "DpzOXsbFF2M", t: "Introduction to Modding GTA V (CodeWalker Essentials 1)", ch: "ook_3D", l: "en", d: "4:05", y: 2023, tp: ["gta"], n: "CodeWalker'a giriş." },
  { id: "rm6QG6rLM3o", t: "Modifying and Creating YMAPs (CodeWalker Essentials 2)", ch: "ook_3D", l: "en", d: "4:09", y: 2023, tp: ["gta"], n: "Ymap düzenleme ve oluşturma." },
  { id: "z3QwE87YtDk", t: "Making Custom YMAPs Using CodeWalker", ch: "Twisle", l: "en", d: "6:25", y: 2022, tp: ["gta"], n: "Kısa ymap anlatımı." },
  { id: "PpsdK3A2Tfw", t: "GTA V haritasını Blender'a almak", ch: "GTA PLUG", l: "en", d: "6:35", y: 2026, tp: ["gta"], n: "Bir bölgenin modellerini ve ymap'ini Blender'a almak." },
  { id: "sgNiIce1JZg", t: "Modifying Models (Sollumz Essentials 3)", ch: "ook_3D", l: "en", d: "5:36", y: 2023, tp: ["gta"], n: "GTA modelini değiştirip geri göndermek. Eski arayüz." },
  { id: "3iP_UVc_SVI", t: "How To Install MLO Map Mods Into A FiveM Server", ch: "HighwayTrooper", l: "en", d: "4:13", y: 2026, tp: ["gta"], n: "Map resource'unu sunucuya kurmak." },

  { id: "BuhT0Y1CrAk", t: "How to Make Custom Props for FiveM (Full Tutorial)", ch: "Bady Design", l: "en", d: "10:29", y: 2025, tp: ["prop"], n: "Modelden oyuna kadar bütün prop süreci." },
  { id: "lF1SJxm_FfE", t: "How To Convert Textures To DDS Format", ch: "ook_3D", l: "en", d: "2:30", y: 2024, tp: ["doku"], n: "NVIDIA aracıyla `.dds`." },
  { id: "R_az2tpBhRw", t: "Shaders And Parameters (Sollumz Essentials 11)", ch: "ook_3D", l: "en", d: "2:41", y: 2023, tp: ["doku"], n: "Shader seçimi ve ayarları." },
  { id: "hc8x1mkS0Ws", t: "Improving Your Materials For GTA V", ch: "ook_3D", l: "en", d: "6:07", y: 2024, tp: ["doku", "ileri"], n: "Malzemeleri daha gerçekçi yapmak." },
  { id: "hBH1vZY8rWc", t: "Sollumz Quick Tips: Vertex Colors", ch: "Stumpy Mason", l: "en", d: "4:01", y: 2026, tp: ["doku"], n: "Vertex color neden gerekli, nasıl ayarlanır." },
  { id: "9e9e9S3hMMU", t: "Embedded Collisions (Sollumz Essentials 7)", ch: "ook_3D", l: "en", d: "2:26", y: 2023, tp: ["collision"], n: "Modele gömülü collision." },
  { id: "cP1f8h5RHtA", t: "Basic Collision Tutorial", ch: "Stumpy Mason", l: "en", d: "17:30", y: 2026, tp: ["collision"], n: "Collision temelleri, detaylı." },

  { id: "NN-fjCbPO1Q", t: "Creating custom MLO interior in Blender (Sollumz)", ch: "Desertos", l: "en", d: "1:39:32", y: 2026, tp: ["mlo"], n: "Uzun ve detaylı; fxmanifest dahil." },
  { id: "vl4MBzkYkaE", t: "GTA V/FiveM MLO Tutorial part 1", ch: "Bumpy86_x", l: "en", d: "23:48", y: 2025, tp: ["mlo"], n: "Kabuktan ışığa giden serinin ilk bölümü." },
  { id: "A8R7UW5YvDY", t: "Multi Room MLO: Creating YTYP and Portals", ch: "RoyalT Customz", l: "en", d: "38:37", y: 2025, tp: ["mlo"], n: "Ytyp, oda ve portala odaklı." },
  { id: "9F5dR2PNvZo", t: "Adding doors to portals with CodeWalker", ch: "Stumpy Mason", l: "en", d: "3:51", y: 2025, tp: ["mlo", "ileri"], n: "Portallara kapı eklemek." },
  { id: "BIcPKqaG0xQ", s: "bazq", t: "Mapping Öğretici 1: Sıfırdan detaylı", ch: "bazq", l: "tr", d: "34:27", y: 2025, tp: ["mlo"], n: "Gerçek bir MLO projesinin ilk bölümü (Blender 4.1)." },
  { id: "gMdb7OqbzLg", s: "bazq", t: "Mapping Öğretici 2: Shell yapmaya devam", ch: "bazq", l: "tr", d: "59:41", y: 2025, tp: ["mlo"], n: "Kabuk modelleme." },
  { id: "L1E3EXUMICQ", s: "bazq", t: "Mapping Öğretici 3: Shell bitiyor", ch: "bazq", l: "tr", d: "1:05:20", y: 2025, tp: ["mlo"], n: "Kabuğun bitişi." },
  { id: "rsUHIualZ9M", s: "bazq", t: "Mapping Öğretici 4: Texture ve Substance", ch: "bazq", l: "tr", d: "1:01:19", y: 2025, tp: ["mlo", "doku"], n: "Doku ve dikişsiz doku." },
  { id: "mRyBwlQC3JY", s: "bazq", t: "Mapping Öğretici 5: Exterior rework", ch: "bazq", l: "tr", d: "2:33:05", y: 2025, tp: ["mlo"], n: "Çok uzun; bazq da “geçerek izleyin” diyor." },
  { id: "0rE-xKr9Muo", s: "bazq", t: "Mapping Öğretici 6: Interior I", ch: "bazq", l: "tr", d: "1:48:16", y: 2025, tp: ["mlo"], n: "İç mekân." },
  { id: "wAmWcEgMASc", t: "FiveM Mapping: Basit MLO #3", ch: "bazq", l: "tr", d: "1:06:19", y: 2023, tp: ["mlo"], n: "Eski Sollumz dönemi. Mantığı anlamak için." },

  { id: "6MbS33jvYU0", t: "MLO Interior Lighting (Sollumz 2.4)", ch: "ook_3D", l: "en", d: "10:03", y: 2024, tp: ["ileri"], n: "MLO ışıkları." },
  { id: "nA2jKxaeCTc", t: "Interior Lights Tutorial (Blender/Sollumz)", ch: "Bumpy86_x", l: "en", d: "41:12", y: 2025, tp: ["ileri"], n: "İç mekân ışıkları, detaylı." },
  { id: "-wzqCxRrrUE", t: "Creating Custom Timecycles", ch: "ook_3D", l: "en", d: "7:12", y: 2023, tp: ["ileri"], n: "Oda atmosferi." },
  { id: "yJha_aZXGYI", t: "Create Audio Occlusion for custom MLOs", ch: "Anurag Verma", l: "en", d: "8:06", y: 2023, tp: ["ileri"], n: "Ses yalıtımı." },
  { id: "gWvvGdzO8Ak", t: "How to fix Occlusion conflicts (Flickering MLOs)", ch: "Bodhix", l: "en", d: "4:53", y: 2026, tp: ["ileri"], n: "Titreyen MLO'lar." },
  { id: "QQb1utnKFUs", t: "How to make a MLO (Collisions & Occlusions)", ch: "RIB SOSAY", l: "en", d: "13:38", y: 2023, tp: ["ileri"], n: "Collision ve occlusion." },
  { id: "c8gAgKEFDtw", t: "Embedded LODs (Sollumz Essentials 10)", ch: "ook_3D", l: "en", d: "2:35", y: 2023, tp: ["ileri"], n: "Gömülü LOD'lar." }
];

/* ---------- Nasıl yaparım? ---------- */
window.RECIPES = [
  { id: "origin", c: "Blender", q: "Pivotu (origin) objenin tabanına nasıl alırım?", s: ["{{Tab}} ile Edit Mode'a gir ve taban yüzünü seç.", "{{Shift+S}} → [Cursor to Selected].", "{{Tab}} ile çık → [Object] → [Set Origin] → [Origin to 3D Cursor]."], rel: "1-5" },
  { id: "merkez", c: "Blender", q: "Objeyi dünyanın ortasına nasıl alırım?", s: ["Objeyi seç → {{Alt+G}}: konum sıfırlanır.", "Dönüşü sıfırlamak için {{Alt+R}}.", "3D imleci de ortaya almak için {{Shift+S}} → [Cursor to World Origin]."] },
  { id: "olcek", c: "Blender", q: "Ölçeği nasıl uygularım, neden şart?", s: ["Objeyi seç → {{Ctrl+A}} → [Scale] (ya da [All Transforms]).", "{{N}} panelinde Scale değerleri 1.000 olmalı.", "Neden: Sollumz ve oyun, uygulanmamış ölçekte collision'ı ve dokuyu yanlış hesaplar."], rel: "1-2" },
  { id: "delik", c: "Blender", q: "Duvara kapı ya da pencere deliği nasıl açarım?", s: ["Deliğin şeklinde bir küp yap; duvardan kalın olsun.", "Duvarı seç → [Add Modifier] → [Generate] → [Boolean] → [Difference].", "[Object] kısmında küpü seç, küpü {{H}} ile gizle.", "Beğenince modifier'ı uygula (başlığın üstünde {{Ctrl+A}})."], rel: "1-7" },
  { id: "normal", c: "Blender", q: "Bir yüz oyunda görünmüyor, ters mi?", s: ["[Overlays] → [Face Orientation] aç; kırmızı yüzler ters.", "Edit Mode → {{A}} → {{Shift+N}} ile hepsini düzelt.", "Tek yüz için: seç → {{Alt+N}} → [Flip]."], rel: "1-6" },
  { id: "birlestir", c: "Blender", q: "Objeleri nasıl birleştirir ya da ayırırım?", s: ["Birleştir: objeleri seç → {{Ctrl+J}}. En son seçilenin adı kalır.", "Ayır: Edit Mode'da parçayı seç → {{P}} → [Selection].", "Bağlı olmayan bütün parçaları ayırmak için {{P}} → [By Loose Parts]."] },
  { id: "ayna", c: "Blender", q: "Simetrik bir şeyi yarısından nasıl yaparım?", s: ["Objenin yarısını sil.", "[Add Modifier] → [Generate] → [Mirror], ekseni seç.", "[Clipping]'i aç ki ortadaki noktalar ayrılmasın.", "Bitince modifier'ı uygula."] },
  { id: "dizi", c: "Blender", q: "Merdiven, çit, raf gibi tekrar eden şeyler", s: ["Tek bir basamak ya da çit direği modelle.", "[Add Modifier] → [Generate] → [Array]. [Count] ile adedi ayarla.", "Merdiven için [Relative Offset]'i kapat, [Constant Offset]'i aç: Y = 0.28, Z = 0.18 gibi basamak ölçüleri gir.", "Bitince uygula."] },
  { id: "snap", c: "Blender", q: "Bir şeyi köşeye ya da kenara tam oturtmak", s: ["Üst ortadaki mıknatısı aç ({{Shift+Tab}}).", "Yanındaki menüden [Vertex] seç.", "{{G}} ile taşırken fareyi hedef noktaya getir; daire belirince tıkla.", "Mıknatıs kapalıyken taşırken {{Ctrl}} basılı tutmak da geçici snap yapar."] },
  { id: "olcum", c: "Blender", q: "Uzunluk nasıl ölçerim?", s: ["Obje boyutu: {{N}} → [Item] → [Dimensions].", "Kenar uzunluğu: Edit Mode'da overlay menüsünden [Edge Length]'i aç.", "Serbest ölçüm: {{T}} araç çubuğunda [Measure] aracı; sürükleyerek ölç."], rel: "1-4" },
  { id: "dokuboy", c: "Blender", q: "Doku çok büyük ya da çok küçük görünüyor", s: ["[UV Editing] sekmesine geç.", "3D görünümde yüzleri seç, UV editöründe {{A}}.", "{{S}} ile UV'yi büyüt (doku küçülür) ya da küçült (doku büyür)."], rel: "1-8" },
  { id: "gizle", c: "Blender", q: "Önümdeki obje görüşümü kapatıyor", s: ["{{H}} gizle, {{Alt+H}} hepsini geri göster.", "Sadece seçili objeyle çalışmak için Numpad {{/}} (local view). Tekrar basınca çıkar.", "Arkadakini seçmek için {{Alt+Z}} ile röntgen (X-ray) modunu aç."] },
  { id: "cift", c: "Blender", q: "Üst üste binmiş çift noktaları temizlemek", s: ["Edit Mode → {{A}}.", "{{M}} → [By Distance].", "Sol altta kaç noktanın silindiği yazar."] },
  { id: "kayboldum", c: "Blender", q: "Kayboldum, sahne tuhaf görünüyor", s: ["{{Home}}: her şeyi ekrana sığdır.", "Numpad {{.}}: seçili objeye git.", "Yanlışlıkla bir şey sildiysen {{Ctrl+Z}}.", "Dosya bozulduysa [File] → [Revert] ile son kayda dön."] },
  { id: "yedek", c: "Blender", q: "Yedekli çalışmak", s: ["Sık sık {{Ctrl+S}}.", "[File] → [Save Incremental]: `oda_01.blend` → `oda_02.blend` diye yeni sürüm kaydeder.", "Büyük değişiklikten önce mutlaka yeni sürüm al."] },
  { id: "pembe", c: "Sollumz", q: "Dokular Blender'da pembe görünüyor", s: ["{{V}} → [Find Missing Textures] → dokuların olduğu klasör.", "Doku dosyası `.dds` mi bak.", "Material Preview modunda mısın? ({{Z}})"] },
  { id: "gom", c: "Sollumz", q: "Dokuyu modele nasıl gömerim?", s: ["Material → [Sollumz] → [Texture Parameters].", "Her dokuda [Embedded]'ı işaretle ya da [Set all Textures Embedded] de.", "Gömülmeyen dokular için ayrı bir `.ytd` gerekir."], rel: "3-2" },
  { id: "konum", c: "Sollumz", q: "Blender'daki konumu CodeWalker'a taşımak", s: ["Objeyi seç.", "[Sollumz Tools] → [General] → [Object Location & Rotation Tools].", "En soldaki butonla koordinatı kopyala, CodeWalker'da entity konumuna yapıştır."], rel: "5-7" },
  { id: "export", c: "Sollumz", q: "Hangi export ayarını seçeyim?", s: ["Oyuna gidecekse: **Native** + **Gen8**.", "CodeWalker'a XML olarak götüreceksen: **CodeWalker XML**.", "Gizli (göz kapalı) objeler export edilmez."], rel: "3-5" },
  { id: "objeadi", c: "CodeWalker", q: "Bir objenin adını nasıl bulurum?", s: ["CodeWalker'da [Select Object] ile objeye tıkla; sağ panelde adı yazar.", "Ya da [Forge](https://forge.plebmasters.de/)'da resimli ara."], rel: "2-1" },
  { id: "ymapbul", c: "CodeWalker", q: "Bir obje hangi ymap'te?", s: ["Objeyi seç; sağdaki bilgi panelinde ymap adı yazar.", "Büyük binalarda yeni bir proje açıp objeyi seçince ymap adı projede görünür."] },
  { id: "xml", c: "CodeWalker", q: "Bir dosyayı XML'e çevirmek ve geri çevirmek", s: ["XML'e: RPF Explorer'da dosyaya sağ tık → [Export XML].", "Geri: XML'i RPF Explorer'da bir `.rpf`'nin içine sürükle; CodeWalker otomatik çevirir."] },
  { id: "kopya", c: "CodeWalker", q: "CodeWalker'da obje kopyalamak", s: ["Entity'yi seç.", "{{Shift}} basılıyken gizmoyu sürükle: kopya oluşur."] },
  { id: "yenile", c: "FiveM", q: "Değişikliği oyunda nasıl görürüm?", s: ["Dosyaları `stream` klasöründe değiştir.", "Sunucu konsoluna `refresh` sonra `ensure benim_map`.", "Görünmüyorsa oyundan çık ve tekrar bağlan.", "Son çare: FiveM kapalıyken `FiveM Application Data\\data` içindeki `server-cache` ve `server-cache-priv` klasörlerini sil."] },
  { id: "isinlan", c: "FiveM", q: "Bir koordinata nasıl ışınlanırım?", s: ["Oyunda sohbete `/tx` yaz.", "[Teleport] → [Coords] seç.", "Koordinatı `x, y, z` şeklinde yapıştır."] },
  { id: "pos", c: "FiveM", q: "Oyunda bulunduğum konumu nasıl öğrenirim?", s: ["`konum` adında bir resource klasörü aç; içine aşağıdaki iki dosyayı koy.", "`server.cfg`'ye `ensure konum` ekle ve sunucuyu yenile.", "Oyunda `/pos` yaz; koordinat {{F8}} konsoluna yazılır."], code: "-- fxmanifest.lua\nfx_version 'cerulean'\ngame 'gta5'\nclient_script 'client.lua'\n\n-- client.lua\nRegisterCommand('pos', function()\n  local c = GetEntityCoords(PlayerPedId())\n  print(('%.2f, %.2f, %.2f'):format(c.x, c.y, c.z))\nend)" },
  { id: "f8", c: "FiveM", q: "F8 konsolunda işe yarayan komutlar", s: ["`connect localhost`: test sunucuna bağlan.", "`disconnect`: sunucudan çık. `quit`: oyunu kapat.", "Kırmızı satırlar hatadır; ekran görüntüsünü al."] }
];

/* ---------- Sözlük ---------- */
window.GLOSSARY = [
  { id: "ydr", c: "Dosyalar", t: "ydr", k: "Drawable", a: "Görünen 3D model.", l: "Modelin şekli, malzemeleri ve istersen gömülü dokuları ve collision'ı bu dosyadadır." },
  { id: "ytd", c: "Dosyalar", t: "ytd", k: "Texture Dictionary", a: "Doku paketi.", l: "Birden çok modelin ortak kullandığı dokular burada durur. Dokuları modele gömersen gerekmez." },
  { id: "ybn", c: "Dosyalar", t: "ybn", k: "Bounds", a: "Görünmez çarpışma modeli.", l: "Yürüdüğün zemin, çarptığın duvar. `hi@` ile başlayanlar mermi içindir, `ma@` ile başlayanlar çimen ve çöp gibi çevre süsleri içindir." },
  { id: "yft", c: "Dosyalar", t: "yft", k: "Fragment", a: "Kırılan ya da hareket eden obje.", l: "Camı kırılan pencere, devrilen direk. Başlangıçta ihtiyacın yok." },
  { id: "ytyp", c: "Dosyalar", t: "ytyp", k: "Archetype tanımları", a: "Objelerin kimlik kartı.", l: "Obje adı, hangi modeli ve dokuyu kullandığı, ne kadar uzaktan görüneceği. MLO'nun odaları, portalları ve eşyaları da burada tanımlanır." },
  { id: "ymap", c: "Dosyalar", t: "ymap", k: "Map", a: "Yerleşim planı.", l: "Hangi objenin haritada hangi koordinatta, hangi açıyla durduğunu tutar. Model içermez; isim + konum listesidir." },
  { id: "manifest", c: "Dosyalar", t: "_manifest.ymf", a: "İçindekiler listesi.", l: "Oyuna “bu ymap yüklenince şu ytyp'yi de yükle” der. Kendi ytyp'ini kullanan ymap'lerde gerekir." },
  { id: "rpf", c: "Dosyalar", t: "rpf", a: "GTA'nın arşiv dosyası.", l: "Zip gibi düşün. CodeWalker RPF Explorer bunları klasör gibi açar." },
  { id: "xml", c: "Dosyalar", t: "XML", k: "CodeWalker XML", a: "GTA dosyasının yazı hali.", l: "CodeWalker ve Sollumz dosyaları okunabilir XML'e çevirip geri dönüştürebilir. Native export bu ara adımı atlar." },
  { id: "dds", c: "Dosyalar", t: "dds", a: "GTA'nın doku biçimi.", l: "Ekran kartının doğrudan okuduğu sıkıştırılmış resim. Kenarları 2'nin katı olmalı (256, 512, 1024, 2048)." },
  { id: "mlo", c: "MLO", t: "MLO", a: "İçine girilen bina.", l: "Oda ve portallardan oluşan iç mekân. Oyun sadece gördüğün odaları çizerek performansı korur." },
  { id: "shell", c: "MLO", t: "Shell", k: "kabuk", a: "MLO'nun boş duvarları.", l: "Zemin, duvar, tavan. Eşyasız iç mekân." },
  { id: "room", c: "MLO", t: "Room", k: "oda", a: "MLO'nun bir bölümü.", l: "Sınır kutusu (bounds) olan alan. İçindeki eşyalar bu odaya atanır." },
  { id: "limbo", c: "MLO", t: "Limbo", a: "Dış dünya.", l: "Her MLO'nun ilk odası. Dışarı açılan portallar limboya gider." },
  { id: "portal", c: "MLO", t: "Portal", a: "Odalar arasındaki pencere.", l: "Kapı ve pencere boşluklarına konan dört köşeli düzlem. Oyun bir odadan diğerini sadece portaldan bakarak görür. Eksik ya da yanlışsa boşluk (void) görünür." },
  { id: "entity", c: "MLO", t: "Entity", a: "Haritaya konmuş bir obje.", l: "Bir archetype'ın belli bir konumdaki kopyası. Ymap'te ya da MLO'nun içinde durur." },
  { id: "archetype", c: "MLO", t: "Archetype", a: "Obje türü, şablon.", l: "`masa_01` bir archetype'tır; haritaya koyduğun her masa onun bir entity'sidir." },
  { id: "timecycle", c: "MLO", t: "Timecycle", a: "Odanın ışık havası.", l: "Renk tonu, sis, parlaklık. Her odaya ayrı atanabilir." },
  { id: "occlusion", c: "MLO", t: "Occlusion", a: "Görünmezlik hesabı.", l: "Oyunun arkada kalan şeyleri çizmemesi. Ses için ayrıca audio occlusion vardır." },
  { id: "void", c: "MLO", t: "Void", k: "boşluk", a: "İçeriden dışarı bakınca görülen boşluk.", l: "Neredeyse her zaman eksik ya da yanlış portal, ya da limbo hatasıdır." },
  { id: "mesh", c: "Blender", t: "Mesh", a: "Noktalardan oluşan 3D şekil." },
  { id: "vef", c: "Blender", t: "Vertex / Edge / Face", a: "Nokta / kenar / yüz.", l: "Modelin yapı taşları. Edit Mode'da 1, 2, 3 tuşlarıyla seçilir." },
  { id: "modes", c: "Blender", t: "Object / Edit Mode", a: "Bütün obje / objenin içi.", l: "Object Mode'da objeyi taşırsın, Edit Mode'da şeklini değiştirirsin. Tab ile geçilir." },
  { id: "origin", c: "Blender", t: "Origin", k: "pivot", a: "Objenin tutma noktası.", l: "Turuncu nokta. GTA objeyi bu noktadan haritaya koyar; propların origin'i genelde tabanın ortasındadır." },
  { id: "normal", c: "Blender", t: "Normal", a: "Yüzün baktığı yön.", l: "GTA yüzlerin sadece ön tarafını çizer. Ters normal = görünmez yüz." },
  { id: "modifier", c: "Blender", t: "Modifier", a: "Modeli bozmadan uygulanan işlem.", l: "Solidify (kalınlık), Boolean (oyma), Mirror (simetri), Array (tekrar). Uygulayana kadar geri alınabilir." },
  { id: "uv", c: "Blender", t: "UV", a: "Modelin açılmış kalıbı.", l: "Dokunun modele nasıl basılacağını belirler." },
  { id: "cursor", c: "Blender", t: "3D Cursor", a: "Sahnedeki nişan noktası.", l: "Kırmızı-beyaz halka. Yeni objeler buraya eklenir; origin'i buraya taşıyabilirsin." },
  { id: "outliner", c: "Blender", t: "Outliner", a: "Sahnedeki her şeyin listesi.", l: "Sağ üstteki ağaç. Objeleri sürükleyerek birbirinin altına (parent) koyabilirsin." },
  { id: "apply", c: "Blender", t: "Apply", k: "Ctrl+A", a: "Değişikliği kalıcı yapmak.", l: "Ölçeği uygulamak Scale'i 1'e çeker ama boyutu korur. Export öncesi şart." },
  { id: "shader", c: "Doku ve Sollumz", t: "Shader", a: "Malzeme türü.", l: "`default` sadece renk, `normal` renk + normal map, `normal_spec` + parlaklık, `emissive` kendinden ışıklı." },
  { id: "diffuse", c: "Doku ve Sollumz", t: "Diffuse", a: "Renk dokusu." },
  { id: "normalmap", c: "Doku ve Sollumz", t: "Normal map", a: "Sahte girinti çıkıntı.", l: "Mor-mavi görünen doku. Yüzeye poligon eklemeden derinlik hissi verir. GTA DirectX (DX) tipini kullanır." },
  { id: "specular", c: "Doku ve Sollumz", t: "Specular", a: "Parlaklık dokusu.", l: "Yüzeyin ne kadar parladığını belirler." },
  { id: "mipmap", c: "Doku ve Sollumz", t: "Mipmap", a: "Dokunun küçük kopyaları.", l: "Uzaktan bakınca oyun küçük kopyayı kullanır; titreşimi ve bulanıklığı önler." },
  { id: "embedded", c: "Doku ve Sollumz", t: "Embedded", a: "Modele gömülü doku.", l: "Ayrı bir ytd dosyası gerekmez." },
  { id: "vcolor", c: "Doku ve Sollumz", t: "Vertex color", a: "Noktalara boyanmış ışık bilgisi.", l: "Kırmızı: gece/gündüz ortam ışığı, yeşil: yapay ışık, mavi: ay ışığı yansıması." },
  { id: "drawable", c: "Doku ve Sollumz", t: "Drawable", a: "Sollumz'da GTA modeli.", l: "Blender'da GTA modeli olarak işaretlenmiş obje grubu. Export'ta `.ydr` olur." },
  { id: "lod", c: "Doku ve Sollumz", t: "LOD", k: "Level of Detail", a: "Uzaktan görülen sade model.", l: "High, Medium, Low, Very Low. Başlangıçta sadece High." },
  { id: "bvh", c: "Doku ve Sollumz", t: "Bound Composite / GeometryBVH", a: "Collision'ın kabı ve ayarı.", l: "Composite en üstteki kaptır; GeometryBVH neyin çarpacağını (flag) belirler. Altında asıl şekiller durur." },
  { id: "flag", c: "Doku ve Sollumz", t: "Flag preset", a: "Hazır çarpışma ayarı.", l: "GeometryBVH'ye uygulanır. Unutulursa collision çalışmaz." },
  { id: "colmat", c: "Doku ve Sollumz", t: "Collision materyali", a: "Yüzeyin cinsi.", l: "Beton, ahşap, metal… Ayak sesi, mermi izi ve sesi buna göre çıkar." },
  { id: "native", c: "Doku ve Sollumz", t: "Native / XML export", a: "Doğrudan oyun dosyası / yazı hali.", l: "Native doğrudan `.ydr` gibi dosyalar üretir. XML'i CodeWalker'da oyun biçimine çevirmen gerekir." },
  { id: "gen", c: "Doku ve Sollumz", t: "Gen8 / Gen9", a: "Klasik / Enhanced GTA V biçimi.", l: "FiveM sunucularının çoğu klasik GTA V (Gen8) kullanır. Gen9, GTA V Enhanced içindir." },
  { id: "pymateria", c: "Doku ve Sollumz", t: "pyMateria", a: "Sollumz'un yardımcısı.", l: "Native (doğrudan oyun biçiminde) okuma ve yazmayı sağlar." },
  { id: "nametables", c: "Doku ve Sollumz", t: "nametables", a: "CodeWalker'ın isim sözlüğü.", l: "GTA dosyalarının içindeki isimleri tanımasını sağlar." },
  { id: "resource", c: "FiveM", t: "Resource", a: "Sunucuya eklenen paket.", l: "Bir klasör + `fxmanifest.lua`. Map'ler, scriptler, araçlar hep resource'tur." },
  { id: "stream", c: "FiveM", t: "stream klasörü", a: "Oyun dosyalarının yeri.", l: "Resource içindeki `stream` klasörüne koyduğun ydr, ytyp, ymap dosyaları oyunculara otomatik gönderilir." },
  { id: "fxmanifest", c: "FiveM", t: "fxmanifest.lua", a: "Resource'un kimliği.", l: "Map'ler için `this_is_a_map 'yes'` satırı önemli." },
  { id: "ensure", c: "FiveM", t: "ensure", a: "Resource'u başlat ya da yeniden başlat.", l: "`server.cfg`'de ya da sunucu konsolunda kullanılır." },
  { id: "txadmin", c: "FiveM", t: "txAdmin", a: "Sunucu yönetim paneli.", l: "Tarayıcıdan sunucuyu başlatır, konsolu gösterir. Oyunda `/tx` ile menüsü açılır." },
  { id: "serverkey", c: "FiveM", t: "Server key", a: "Sunucu lisans anahtarı.", l: "portal.cfx.re'den alınır." }
];

/* ---------- Sorun çözücü: belirti → sırayla olası sebepler ---------- */
window.PROBLEMS = [
  { id: "gorunmuyor", g: "Oyunda", s: "Map hiç görünmüyor", c: [
    ["Resource başlamadı", "Sunucu konsoluna `ensure benim_map` yaz ve hata var mı bak."],
    ["Dosyalar `stream` klasöründe değil", "`benim_map/stream/…` yapısını kontrol et."],
    ["`this_is_a_map 'yes'` eksik", "`fxmanifest.lua`'yı kontrol et."],
    ["`_manifest.ymf` eksik", "CodeWalker → [Tools] → [Manifest Generator]."],
    ["Archetype adı yanlış", "Ymap'teki ad ytyp'dekiyle harfi harfine aynı olmalı."],
    ["{{F8}} konsolunda kırmızı hata", "Ekran görüntüsünü al, hata metnini aramada ya da toplulukta ara."]
  ] },
  { id: "dusuyorum", g: "Oyunda", s: "İçinden geçiyorum ya da yerden düşüyorum", c: [
    ["Collision yok", "Görev 3.4 ve 5.5."],
    ["Flag preset uygulanmamış", "GeometryBVH → {{V}} → [Apply Flag Preset]."],
    ["Collision export edilmemiş", "Collision objeleri gizli miydi? Gizli objeler export edilmez."],
    ["Ölçek uygulanmamış", "{{Ctrl+A}} → [Scale] ve yeniden export."]
  ] },
  { id: "void", g: "Oyunda", s: "Kapıdan bakınca boşluk (void) görünüyor", c: [
    ["Portal yok", "Kapı ve pencerelerin hepsinde portal olmalı."],
    ["Portal yönü ters", "İçeriden dışarıya olmalı; gerekirse [Flip Direction]."],
    ["Limbo yok ya da ilk oda değil", "Rooms sekmesinde ilk oda limbo olmalı."],
    ["Portal boşluğu tam kaplamıyor", "4 köşeyi kapı boşluğunun köşelerinden seç."]
  ] },
  { id: "kayboluyor", g: "Oyunda", s: "İçeri girince duvarlar ya da eşyalar kayboluyor", c: [
    ["Oda sınırı küçük", "[Set Bounds From Selection] ile odayı tamamen kapsa."],
    ["Entity yanlış odada", "Entities sekmesinde eşyanın odasını kontrol et."],
    ["Başka bir map ile çakışma", "Aynı bölgedeki diğer resource'u kapatıp dene."]
  ] },
  { id: "mermi", g: "Oyunda", s: "Mermi duvardan geçiyor", c: [
    ["`hi@` collision düzenlenmemiş", "Kapıyı `hi@isim.ybn`'de de aç ve stream et."],
    ["İç collision'da mermi ayarı yok", "Flag preset'i yeniden uygula."]
  ] },
  { id: "karanlik", g: "Oyunda", s: "İçerisi çok karanlık, gece simsiyah", c: [
    ["Vertex color yok ya da siyah", "`Color 1` ekle; iç mekân için yeşil kanal."],
    ["Işık yok", "Usta yolu: Işık ve atmosfer."],
    ["Timecycle uymuyor", "Odaya farklı bir timecycle dene."]
  ] },
  { id: "ses", g: "Oyunda", s: "Dışarının sesi içeride bağırıyor", c: [["Audio occlusion yok", "Usta yolu: Ses yalıtımı."]] },
  { id: "eski", g: "Oyunda", s: "Değiştirdim ama oyunda eskisi var", c: [
    ["Resource yeniden başlamadı", "`refresh` + `ensure benim_map`."],
    ["Önbellek", "Oyundan çık ve tekrar bağlan; olmazsa `server-cache` klasörlerini sil."],
    ["Yanlış dosyayı değiştirdin", "Sunucunun `resources` klasöründeki dosyayı değiştirdiğinden emin ol."]
  ] },
  { id: "titreme", g: "Oyunda", s: "Duvarlar titriyor ya da yanıp sönüyor", c: [
    ["İki yüzey aynı yerde (z-fighting)", "İç ve dış yüzeyleri birkaç santim ayır."],
    ["İki map çakışıyor", "Aynı yerdeki diğer resource'u kapatıp dene."],
    ["Occlusion verisi", "Usta yolu: Titreme ve çakışmalar."]
  ] },
  { id: "havada", g: "Oyunda", s: "Obje havada duruyor ya da yere gömülü", c: [
    ["Origin yanlış yerde", "Origin'i tabana al (Nasıl yaparım? → Pivot)."],
    ["Ymap'te yükseklik yanlış", "CodeWalker'da yüksekliği düzelt, extents hesapla."]
  ] },
  { id: "sollumzyok", g: "Blender", s: "Sollumz Tools sekmesi yok", c: [
    ["{{N}} paneli kapalı", "Fare 3D görünümdeyken {{N}}."],
    ["Eklenti kapalı", "[Preferences] → [Add-ons] → Sollumz işaretli mi?"],
    ["Blender eski", "Sollumz 2.9, Blender 4.2 ve sonrasını ister."]
  ] },
  { id: "kisayol", g: "Blender", s: "Bir kısayol çalışmıyor", c: [
    ["Fare yanlış panelde", "Kısayollar imlecin altındaki pencerede çalışır; fare 3D görünümde olsun."],
    ["Yanlış moddasın", "{{E}}, {{I}}, {{Ctrl+R}} gibi kısayollar sadece Edit Mode'da çalışır."],
    ["Numpad yok", "[Preferences] → [Input] → [Emulate Numpad]."],
    ["Türkçe klavye farkı", "Bazı tuşlar farklı yerde. [Preferences] → [Keymap]'ten değiştir ya da menüleri kullan."]
  ] },
  { id: "boolean", g: "Blender", s: "Boolean delik açmıyor", c: [
    ["Kesici duvarı tam delmiyor", "Kesiciyi kalınlaştır."],
    ["Ölçek uygulanmamış", "İki objede de {{Ctrl+A}} → [Scale]."],
    ["Solver", "Boolean'da [Exact] seçili olsun."]
  ] },
  { id: "dev", g: "Blender", s: "Model oyunda dev, minik ya da yamuk", c: [
    ["Ölçek ya da dönüş uygulanmamış", "{{Ctrl+A}} → [All Transforms]."],
    ["Birim ayarı değişmiş", "[Scene] → [Units] → Metric ve Unit Scale 1.0."]
  ] },
  { id: "exporthata", g: "Export", s: "Export hata veriyor", c: [
    ["Sollumz olmayan malzeme", "Her malzeme bir Sollumz shader'ı olmalı."],
    ["Doku `.dds` değil", "Dokuları `.dds`'e çevir (Görev 3.1)."],
    ["Obje Drawable değil", "{{V}} → [Convert to Drawable]."],
    ["UV adı yanlış", "`UVMap 0` olmalı."]
  ] },
  { id: "pembeoyun", g: "Export", s: "Dokular CodeWalker'da ya da oyunda pembe", c: [
    ["Doku gömülmemiş ve ytd yok", "[Embedded]'ı işaretle ya da ytd oluştur."],
    ["Boyut 2'nin katı değil", "1024 × 1024 gibi bir boyuta getir."],
    ["DDS ayarı", "BC1 ya da BC3 (DXT1/DXT5) seç ve mipmap ekle."]
  ] },
  { id: "gizli", g: "Export", s: "Bazı objeler export'ta çıkmadı", c: [["Obje gizli", "Outliner'da göz ikonu kapalıysa obje export edilmez; aç."]] },
  { id: "cwacilmiyor", g: "CodeWalker", s: "CodeWalker açılmıyor", c: [
    [".NET eksik", "Hata mesajındaki .NET Desktop Runtime'ı kur."],
    ["Ekran kartı sürücüsü", "Sürücüyü güncelle."],
    ["Yanlış GTA klasörü", "Doğru GTA V klasörünü göster."]
  ] },
  { id: "cwmodelyok", g: "CodeWalker", s: "Kendi modelim CodeWalker'da görünmüyor", c: [
    ["CodeWalker yeniden başlatılmadı", "Dosya ekledikten sonra kapatıp aç."],
    ["Ytyp eksik", "Ytyp'yi de `3dmods.rpf`'ye at."],
    ["Archetype adı yanlış", "Ymap'teki adı kontrol et."]
  ] },
  { id: "extents", g: "CodeWalker", s: "Obje uzaktan kayboluyor ya da geç yükleniyor", c: [["Extents hesaplanmadı", "[Calculate Extents] ve [Calculate All Flags], sonra kaydet."]] }
];

/* ---------- Kısayollar ---------- */
window.SHORTCUTS = [
  { p: "Blender", g: "Gezinme", k: "Orta tuş + sürükle", d: "Görünümü döndür", top: 1 },
  { p: "Blender", g: "Gezinme", k: "{{Shift}} + orta tuş", d: "Görünümü kaydır", top: 1 },
  { p: "Blender", g: "Gezinme", k: "Tekerlek", d: "Yakınlaş, uzaklaş" },
  { p: "Blender", g: "Gezinme", k: "Numpad {{1}} {{3}} {{7}}", d: "Önden, sağdan, üstten bak" },
  { p: "Blender", g: "Gezinme", k: "{{Ctrl}} + Numpad", d: "Ters taraftan bak" },
  { p: "Blender", g: "Gezinme", k: "Numpad {{5}}", d: "Perspektif / düz görünüm" },
  { p: "Blender", g: "Gezinme", k: "Numpad {{.}}", d: "Seçili objeye odaklan", top: 1 },
  { p: "Blender", g: "Gezinme", k: "{{Home}}", d: "Hepsini ekrana sığdır" },
  { p: "Blender", g: "Gezinme", k: "{{~}}", d: "Görüş açısı menüsü" },
  { p: "Blender", g: "Gezinme", k: "Numpad {{/}}", d: "Sadece seçiliyi göster (local view)" },
  { p: "Blender", g: "Gezinme", k: "{{N}}", d: "Yan panel (Sollumz burada)", top: 1 },
  { p: "Blender", g: "Gezinme", k: "{{T}}", d: "Araç çubuğu" },
  { p: "Blender", g: "Gezinme", k: "{{Z}}", d: "Görünüm modu (Solid, Material Preview)" },
  { p: "Blender", g: "Gezinme", k: "{{Alt+Z}}", d: "Röntgen (X-ray)", top: 1 },
  { p: "Blender", g: "Gezinme", k: "{{Ctrl+Space}}", d: "Paneli tam ekran yap" },
  { p: "Blender", g: "Gezinme", k: "{{F3}}", d: "Komut ara", top: 1 },
  { p: "Blender", g: "Obje", k: "{{Shift+A}}", d: "Obje ekle", top: 1 },
  { p: "Blender", g: "Obje", k: "{{G}} {{R}} {{S}}", d: "Taşı, döndür, ölçekle", top: 1 },
  { p: "Blender", g: "Obje", k: "sonra {{X}} {{Y}} {{Z}}", d: "Hareketi bir eksene kilitle", top: 1 },
  { p: "Blender", g: "Obje", k: "sonra sayı + {{Enter}}", d: "Tam değer (ör. G Z 2)" },
  { p: "Blender", g: "Obje", k: "{{Shift+D}}", d: "Kopyala", top: 1 },
  { p: "Blender", g: "Obje", k: "{{Alt+D}}", d: "Bağlı kopya" },
  { p: "Blender", g: "Obje", k: "{{X}}", d: "Sil" },
  { p: "Blender", g: "Obje", k: "{{A}} / {{Alt+A}}", d: "Hepsini seç / bırak" },
  { p: "Blender", g: "Obje", k: "{{Ctrl+A}}", d: "Uygula (ölçek, dönüş)", top: 1 },
  { p: "Blender", g: "Obje", k: "{{Alt+G}} {{Alt+R}} {{Alt+S}}", d: "Konum, dönüş, ölçek sıfırla" },
  { p: "Blender", g: "Obje", k: "{{Ctrl+J}}", d: "Birleştir" },
  { p: "Blender", g: "Obje", k: "{{H}} / {{Alt+H}}", d: "Gizle / göster" },
  { p: "Blender", g: "Obje", k: "{{Shift+S}}", d: "Snap ve 3D imleç menüsü" },
  { p: "Blender", g: "Obje", k: "{{Shift+Tab}}", d: "Snapping aç, kapa" },
  { p: "Blender", g: "Obje", k: "{{Ctrl+P}} / {{Alt+P}}", d: "Parent yap / kaldır" },
  { p: "Blender", g: "Obje", k: "{{F2}}", d: "Yeniden adlandır" },
  { p: "Blender", g: "Obje", k: "{{Ctrl+Z}} / {{Ctrl+Shift+Z}}", d: "Geri al / ileri al", top: 1 },
  { p: "Blender", g: "Obje", k: "{{Ctrl+S}}", d: "Kaydet", top: 1 },
  { p: "Blender", g: "Obje", k: "{{V}}", d: "Sollumz hızlı menüsü (Object Mode)", top: 1 },
  { p: "Blender", g: "Edit Mode", k: "{{Tab}}", d: "Edit Mode aç, kapa", top: 1 },
  { p: "Blender", g: "Edit Mode", k: "{{1}} {{2}} {{3}}", d: "Nokta, kenar, yüz seçimi", top: 1 },
  { p: "Blender", g: "Edit Mode", k: "{{Alt}} + tık", d: "Halka (loop) seç" },
  { p: "Blender", g: "Edit Mode", k: "{{L}}", d: "Bağlı parçayı seç" },
  { p: "Blender", g: "Edit Mode", k: "{{E}}", d: "Dışarı çek (extrude)", top: 1 },
  { p: "Blender", g: "Edit Mode", k: "{{I}}", d: "İçe yüz (inset)", top: 1 },
  { p: "Blender", g: "Edit Mode", k: "{{Ctrl+R}}", d: "Halka kesim (loop cut)", top: 1 },
  { p: "Blender", g: "Edit Mode", k: "{{Ctrl+B}}", d: "Pah kır (bevel)" },
  { p: "Blender", g: "Edit Mode", k: "{{K}}", d: "Bıçak" },
  { p: "Blender", g: "Edit Mode", k: "{{F}}", d: "Yüz doldur" },
  { p: "Blender", g: "Edit Mode", k: "{{M}}", d: "Noktaları birleştir (merge)" },
  { p: "Blender", g: "Edit Mode", k: "{{G}} {{G}}", d: "Kenar boyunca kaydır" },
  { p: "Blender", g: "Edit Mode", k: "{{P}}", d: "Ayrı objeye ayır" },
  { p: "Blender", g: "Edit Mode", k: "{{U}}", d: "UV aç (unwrap)" },
  { p: "Blender", g: "Edit Mode", k: "{{Shift+N}}", d: "Normalleri düzelt" },
  { p: "Blender", g: "Edit Mode", k: "{{Alt+N}}", d: "Normal menüsü (Flip)" },
  { p: "CodeWalker", g: "World View", k: "{{W}} {{A}} {{S}} {{D}}", d: "Hareket", top: 1 },
  { p: "CodeWalker", g: "World View", k: "Sol tık + sürükle", d: "Etrafa bak" },
  { p: "CodeWalker", g: "World View", k: "Tekerlek", d: "Hareket hızı" },
  { p: "CodeWalker", g: "World View", k: "{{T}}", d: "Araç çubuğu", top: 1 },
  { p: "CodeWalker", g: "World View", k: "{{Shift}} + gizmo sürükle", d: "Seçili entity'yi kopyala", top: 1 },
  { p: "FiveM", g: "Oyun", k: "{{F8}}", d: "Konsol", top: 1 },
  { p: "FiveM", g: "Oyun", k: "`/tx`", d: "txAdmin menüsü (ışınlanma)", top: 1 },
  { p: "FiveM", g: "Oyun", k: "`connect localhost`", d: "Test sunucusuna bağlan" },
  { p: "FiveM", g: "Sunucu konsolu", k: "`refresh` + `ensure isim`", d: "Resource'u yeniden yükle", top: 1 }
];

/* Klavye haritası: tuş → [kombinasyon, açıklama] */
window.KEYMAP = {
  "~": [["~", "Görüş açısı menüsü"]],
  "1": [["1", "Nokta seçimi (Edit)"], ["Numpad 1", "Önden bak"]],
  "2": [["2", "Kenar seçimi (Edit)"]],
  "3": [["3", "Yüz seçimi (Edit)"], ["Numpad 3", "Sağdan bak"]],
  "Tab": [["Tab", "Edit Mode aç, kapa"], ["Shift+Tab", "Snapping aç, kapa"]],
  "E": [["E", "Extrude (Edit)"]],
  "R": [["R", "Döndür"], ["Ctrl+R", "Loop cut (Edit)"], ["Alt+R", "Dönüşü sıfırla"]],
  "T": [["T", "Araç çubuğu"]],
  "U": [["U", "UV aç (Edit)"]],
  "I": [["I", "Inset (Edit)"]],
  "P": [["P", "Ayır (Edit)"], ["Ctrl+P", "Parent yap"], ["Alt+P", "Parent kaldır"]],
  "A": [["A", "Hepsini seç"], ["Alt+A", "Seçimi bırak"], ["Shift+A", "Obje ekle"], ["Ctrl+A", "Uygula (ölçek)"]],
  "S": [["S", "Ölçekle"], ["Shift+S", "Snap menüsü"], ["Ctrl+S", "Kaydet"], ["Alt+S", "Ölçeği sıfırla"]],
  "D": [["Shift+D", "Kopyala"], ["Alt+D", "Bağlı kopya"]],
  "F": [["F", "Yüz doldur (Edit)"], ["F2", "Yeniden adlandır"], ["F3", "Komut ara"]],
  "G": [["G", "Taşı"], ["G G", "Kenar boyunca kaydır (Edit)"], ["Alt+G", "Konumu sıfırla"]],
  "H": [["H", "Gizle"], ["Alt+H", "Hepsini göster"]],
  "J": [["Ctrl+J", "Birleştir"]],
  "K": [["K", "Bıçak (Edit)"]],
  "L": [["L", "Bağlı parçayı seç (Edit)"]],
  "Z": [["Z", "Görünüm modu"], ["Alt+Z", "Röntgen (X-ray)"], ["Ctrl+Z", "Geri al"]],
  "X": [["X", "Sil / X ekseni"]],
  "Y": [["Y", "Y ekseni (hareket sırasında)"]],
  "B": [["Ctrl+B", "Bevel (Edit)"]],
  "V": [["V", "Sollumz hızlı menüsü (Object Mode)"]],
  "N": [["N", "Yan panel (Sollumz)"], ["Shift+N", "Normalleri düzelt (Edit)"], ["Alt+N", "Normal menüsü"]],
  "M": [["M", "Birleştir (merge, Edit)"]],
  "Shift": [["Shift+A", "Ekle"], ["Shift+D", "Kopyala"], ["Shift+tık", "Seçime ekle"]],
  "Ctrl": [["Ctrl+A", "Uygula"], ["Ctrl+J", "Birleştir"], ["Ctrl+Z", "Geri al"]],
  "Alt": [["Alt+G/R/S", "Sıfırla"], ["Alt+Z", "X-ray"], ["Alt+tık", "Halka seç"]]
};
window.KEYSHORT = { "~": "görüş", "1": "nokta", "2": "kenar", "3": "yüz", Tab: "edit", E: "extrude", R: "döndür", T: "araçlar", U: "uv", I: "inset", P: "ayır", A: "seç", S: "ölçek", D: "kopya", F: "doldur", G: "taşı", H: "gizle", J: "birleş", K: "bıçak", L: "bağlı", Z: "görünüm", X: "sil", Y: "eksen", B: "bevel", V: "sollumz", N: "panel", M: "merge", Shift: "ekle", Ctrl: "uygula", Alt: "sıfırla" };

/* ---------- Araçlar ---------- */
window.TOOLS = [
  { g: "Zorunlu", n: "Blender 5.2 LTS", m: "B", c: "--c-b", req: 1, d: "Modelleme programı. Ücretsiz.", u: "https://www.blender.org/download/lts/", ul: "blender.org", mission: "0-3" },
  { g: "Zorunlu", n: "Sollumz 2.9", m: "S", c: "--c-s", req: 1, d: "Blender eklentisi. GTA dosyalarını okur ve yazar.", u: "https://docs.sollumz.org/", ul: "Blender içinden kurulur", mission: "0-4" },
  { g: "Zorunlu", n: "CodeWalker", m: "C", c: "--c-c", req: 1, d: "GTA haritasını gezer, dosya çıkarır, ymap ile yerleştirir.", u: "https://discord.gg/codewalker", ul: "CodeWalker Discord", mission: "0-5" },
  { g: "Zorunlu", n: "nametables.rpf", m: "N", c: "--c-c", req: 1, d: "CodeWalker'ın dosya isimlerini tanıması için.", u: "https://discord.gg/codewalker", ul: "Discord, #tips-documentation", mission: "0-5" },
  { g: "Zorunlu", n: "GTA V + FiveM", m: "V", c: "--c-f", req: 1, d: "Oyun dosyaları CodeWalker için, FiveM test için gerekli.", u: "https://fivem.net/", ul: "fivem.net" },
  { g: "Zorunlu", n: "FXServer + txAdmin", m: "F", c: "--c-f", req: 1, d: "Kendi bilgisayarında test sunucusu.", u: "https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/", ul: "Sunucu dosyaları", mission: "0-6" },
  { g: "Zorunlu", n: "Cfx.re server key", m: "K", c: "--c-f", req: 1, d: "Test sunucusunun lisans anahtarı. Ücretsiz.", u: "https://portal.cfx.re/", ul: "portal.cfx.re", mission: "0-6" },
  { g: "Doku", n: "Paint.NET", m: "P", c: "--c-d", d: "Doku düzenleme ve `.dds` kaydetme. En kolayı.", u: "https://www.getpaint.net/", ul: "getpaint.net", mission: "3-1" },
  { g: "Doku", n: "GIMP", m: "G", c: "--c-d", d: "Paint.NET'e ücretsiz alternatif; `.dds` dışa aktarır.", u: "https://www.gimp.org/", ul: "gimp.org" },
  { g: "Doku", n: "NVIDIA Texture Tools Exporter", m: "Nv", c: "--c-d", d: "Kaliteli `.dds` ve mipmap. Resmi rehberin önerdiği araç.", u: "https://developer.nvidia.com/texture-tools-exporter", ul: "developer.nvidia.com" },
  { g: "Doku", n: "Poly Haven", m: "PH", c: "--c-d", d: "Ücretsiz (CC0) yüksek kaliteli dokular.", u: "https://polyhaven.com/textures", ul: "polyhaven.com" },
  { g: "Doku", n: "ambientCG", m: "aC", c: "--c-d", d: "Ücretsiz (CC0) dokular; çok geniş arşiv.", u: "https://ambientcg.com/", ul: "ambientcg.com" },
  { g: "Doku", n: "Folder2YTD", m: "Y", c: "--c-d", d: "Bir klasördeki dokuları tek seferde `.ytd`'ye çevirir. İleride lazım olur.", u: "https://github.com/Hancapo/Folder2YTD", ul: "GitHub" },
  { g: "Yardımcı", n: "Pleb Masters: Forge", m: "Fo", c: "--c-w", d: "GTA obje, araç ve karakterlerini resimli arama. Mapping için en iyi katalog.", u: "https://forge.plebmasters.de/", ul: "forge.plebmasters.de" },
  { g: "Yardımcı", n: "7-Zip", m: "7z", c: "--c-w", d: "Sıkıştırılmış dosyaları açar.", u: "https://www.7-zip.org/", ul: "7-zip.org" },
  { g: "Yardımcı", n: "VS Code", m: "VS", c: "--c-w", d: "`fxmanifest.lua`, `server.cfg` ve XML dosyaları için.", u: "https://code.visualstudio.com/", ul: "code.visualstudio.com" },
  { g: "Yardımcı", n: "ShareX", m: "SX", c: "--c-w", d: "Ekran görüntüsü ve kısa kayıt. Yardım isterken çok işe yarar.", u: "https://getsharex.com/", ul: "getsharex.com" },
  { g: "Yardımcı", n: "Excalidraw", m: "Ex", c: "--c-w", d: "MLO'nun kat planını kabaca çizmek için. Kâğıt kalem de olur.", u: "https://excalidraw.com/", ul: "excalidraw.com" },
  { g: "İleri", n: "gtav-audio-occlusion", m: "AO", c: "--c-s", d: "MLO'lar için ses yalıtımı dosyası üretir.", u: "https://github.com/pedr0fontoura/gtav-audio-occlusion", ul: "GitHub", mission: "6-4" },
  { g: "İleri", n: "Substance Painter", m: "Sp", c: "--c-s", d: "Profesyonel doku boyama (ücretli). bazq'ın serisinde kullanılıyor; başlangıçta gerekmez.", u: "https://www.adobe.com/products/substance3d/apps/painter.html", ul: "adobe.com" }
];

/* ---------- Kaynaklar ---------- */
window.RESOURCES = [
  { g: "Resmi rehberler", items: [
    ["FiveM: Guides for 3D Assets (9 bölüm)", "https://docs.fivem.net/docs/assets-manual/", "Bu sitedeki görevlerin ana kaynağı. ook_3D'nin 9 bölümlük serisi bunun videosu."],
    ["Sollumz dokümanı", "https://docs.sollumz.org/", "Eklentinin bütün özellikleri."],
    ["Sollumz: Creating Interiors", "https://docs.sollumz.org/tutorials/creating-interiors", "MLO bölümünün kaynağı."],
    ["Sollumz: Collisions", "https://docs.sollumz.org/documentation/collisions.ybn.md", "Collision türleri ve flag'ler."],
    ["Sollumz: Texture Dictionaries", "https://docs.sollumz.org/documentation/texture-dictionaries.md", "Ytd oluşturma."],
    ["txAdmin ile sunucu kurulumu", "https://docs.fivem.net/docs/server-manual/setting-up-a-server-txadmin/", "Test sunucusu."]
  ] },
  { g: "Topluluk", items: [
    ["CodeWalker Discord", "https://discord.gg/codewalker", "İndirme, nametables ve en hızlı destek. Mapping'in merkezi."],
    ["Cfx.re forum", "https://forum.cfx.re/", "FiveM'in resmi forumu; map paylaşımları ve sorular."],
    ["Sollumz GitHub", "https://github.com/Sollumz/Sollumz", "Sürüm notları ve hata kayıtları."]
  ] },
  { g: "Türkçe kanallar", items: [
    ["bazq", "https://www.youtube.com/@bazq", "Türkçe FiveM mapping ve MLO. En önemli Türkçe kaynak."],
    ["Berkay Blender", "https://www.youtube.com/@berkayblender", "Güncel, hızlı ve teknik Blender kursu."],
    ["Ekin Yalgın", "https://www.youtube.com/@ekinyalgintr", "Sıfırdan Blender dersleri."],
    ["Tolga UZUN", "https://www.youtube.com/@tolgauzuncom", "Blender eğitim serisi, oda modelleme."]
  ] },
  { g: "İngilizce kanallar", items: [
    ["ook_3D", "https://www.youtube.com/@ook_3D", "Sollumz ve GTA modding. Kısa, öz, güncel."],
    ["Stumpy Mason", "https://www.youtube.com/@StumpyMason_", "Sollumz ipuçları, collision, kapı."],
    ["Bumpy86_x", "https://www.youtube.com/@Bumpy86_x86", "MLO serisi ve ışık."],
    ["Blender Guru", "https://www.youtube.com/@blenderguru", "Donut serisi; Blender'ın klasiği."],
    ["Grant Abbitt", "https://www.youtube.com/@grabbitt", "Blender 5 başlangıç kursu."]
  ] }
];

window.RULES = [
  "Her şey metre: Blender'da 1 birim = 1 metre.",
  "Export'tan önce {{Ctrl+A}} ile ölçeği uygula.",
  "Dokular `.dds` ve kenarları 2'nin katı.",
  "Collision'sız model, içinden geçilen modeldir.",
  "MLO'da önce limbo; portallar içeriden dışarıya.",
  "Değişiklikten sonra `refresh` + `ensure`; olmazsa yeniden bağlan.",
  "Sık kaydet, büyük değişiklikten önce yeni sürüm al.",
  "Takılınca 10 dakika dene, sonra sor. Sorarken ekran görüntüsü ekle."
];
