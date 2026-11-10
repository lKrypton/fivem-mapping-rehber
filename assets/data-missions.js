/* Görevler. Biçim: [[Buton]]  {{Tuş+Tuş}}  `kod`  **kalın**  [yazı](link)
   Adım programı (in): b Blender, s Sollumz, c CodeWalker, f Oyun/FiveM, w Windows/dosya, d Doku programı, x Okuma/Web */

window.CHAPTERS = [
  { id: 0, title: "Atölyeyi kur", sub: "Programlar, klasörler ve test sunucusu. Bir kere yapılır." },
  { id: 1, title: "Blender'a alış", sub: "Arayüz, temel hareketler, ölçü, ilk masa ve ilk oda." },
  { id: 2, title: "Oyunun içine bak", sub: "CodeWalker ile GTA dünyasını gez, bir modeli Blender'a al ve geri gönder." },
  { id: 3, title: "İlk propun", sub: "Kendi objene doku, collision ve kimlik kartı ver." },
  { id: 4, title: "Haritaya koy", sub: "Ymap ile yerleştir, resource yap, oyunda gör." },
  { id: 5, title: "İlk MLO", sub: "İçine girilen bina: oda, portal, limbo, eşya." },
  { id: 6, title: "Usta yolu", sub: "Işık, kapı, LOD, ses, titreme ve büyük proje. Temel bitince." }
];

window.MISSIONS = [

/* ---------------- BÖLÜM 0 ---------------- */
{
  id: "0-1", ch: 0, title: "Büyük resmi anla", time: "10 dk", lvl: 1,
  goal: "Bir map'in oyuna nasıl girdiğini kafanda oturt. Program kurmadan önce ne yapacağını bil.",
  out: "Hangi programın ne iş yaptığını ve dosyaların birbirine nasıl bağlandığını biliyorsun.",
  concept: [
    "FiveM'de gördüğün her bina, masa, kapı aslında birkaç dosyadan oluşur. Sen bu dosyaları **Blender**'da üretir, **CodeWalker**'da yerleştirir, bir **resource** içinde sunucuya verirsin.",
    "Blender tek başına GTA dosyası yazamaz. Araya **Sollumz** eklentisi girer ve modeli GTA'nın anladığı biçime çevirir."
  ],
  dg: ["pipeline", "files"],
  steps: [
    { in: "x", t: "Yukarıdaki akışı soldan sağa oku. Her kutu bir program, altındaki kodlar o adımda çıkan dosyalar." },
    { in: "x", t: "Dosya şemasında bir masa düşün: `ymap` masanın **nerede** durduğunu, `ytyp` masanın **ne** olduğunu, `ydr` **görüntüsünü**, `ybn` **çarpışmasını** tutar." },
    { in: "x", t: "[Sözlük](#/sozluk) sayfasına bir göz at. Ezberlemene gerek yok, takıldıkça döneceksin." },
    { in: "x", t: "Sitenin her yerinde aramayı ({{Ctrl+K}}) kullanabilirsin. “kapı”, “doku pembe”, “ölçek” gibi şeyler yaz." }
  ],
  vids: [["GgZ82sue3kM", 0, "Serinin ilk bölümü: araçlar ve genel akış. FiveM'in resmi rehberinin video hali."]],
  done: [
    "Blender, Sollumz, CodeWalker ve FiveM'in ne iş yaptığını birer cümleyle söyleyebiliyorum.",
    "ymap, ytyp, ydr ve ybn arasındaki farkı biliyorum.",
    "Aramayı açmayı biliyorum."
  ]
},
{
  id: "0-2", ch: 0, title: "Bilgisayarı hazırla", time: "10 dk", lvl: 1,
  goal: "Dosya uzantılarını görünür yap, çalışma klasörünü kur, yardımcı programları indir.",
  out: "Düzenli bir `Mapping` klasörü ve uzantıları görünen bir Windows.",
  steps: [
    { h: "Dosya uzantılarını göster" },
    { in: "w", t: "Dosya Gezgini'ni aç → üstte [Görünüm] → [Göster] → [Dosya adı uzantıları]'nı işaretle.", d: "Artık `masa.ydr`, `fxmanifest.lua` gibi dosyaların gerçek uzantısını görürsün. `fxmanifest.lua.txt` gibi gizli hataları bu sayede yakalarsın." },
    { h: "Çalışma klasörü" },
    { in: "w", t: "Bir disk seç ve şu klasörleri aç: `Mapping\\projeler`, `Mapping\\dokular`, `Mapping\\export`, `Mapping\\sunucu`.", d: "projeler = .blend dosyaların, dokular = indirdiğin ve dönüştürdüğün resimler, export = Sollumz çıktıları, sunucu = test sunucun.", tip: "<b>Kural:</b> klasör ve dosya adlarında Türkçe karakter ve boşluk kullanma. `masa_01` iyi, `Masa Çalışma 1` kötü." },
    { h: "Yardımcı programlar" },
    { in: "x", t: "[7-Zip](https://www.7-zip.org/) kur. CodeWalker ve sunucu dosyaları sıkıştırılmış gelir." },
    { in: "x", t: "[VS Code](https://code.visualstudio.com/) kur. `fxmanifest.lua` ve `server.cfg` dosyalarını bununla düzenleyeceksin." },
    { in: "x", t: "İstersen [ShareX](https://getsharex.com/) kur. Takıldığında ekran görüntüsü almak ve paylaşmak çok kolaylaşır.", d: "Windows'un kendi aracı da iş görür: {{Win+Shift+S}}." }
  ],
  done: ["Dosya uzantıları görünüyor.", "`Mapping` klasörü ve alt klasörleri hazır.", "7-Zip ve VS Code kurulu."]
},
{
  id: "0-3", ch: 0, title: "Blender'ı kur ve ayarla", time: "15 dk", lvl: 1,
  goal: "Blender 5.2 LTS'i kur ve kendi klavyene, farene göre ayarla.",
  out: "Rahat çalışacağın, ayarları yapılmış bir Blender.",
  concept: [
    "**LTS** uzun süre desteklenen, sürprizsiz sürüm demek. Sollumz 2.9, Blender 4.2 ve sonrasını destekliyor. Biz en yeni LTS olan **5.2**'yi kullanıyoruz.",
    "FiveM'in resmi rehberi 4.5 ile çekildi. Menüler neredeyse aynı; videoda küçük bir fark görürsen takılma."
  ],
  steps: [
    { in: "x", t: "[blender.org/download/lts](https://www.blender.org/download/lts/) adresinden **Blender 5.2 LTS** Windows Installer'ı indir ve kur." },
    { in: "b", t: "Blender'ı aç. Dil **English** kalsın.", d: "Bütün videolar ve dokümanlar İngilizce menüyle. Türkçe arayüz takip etmeyi zorlaştırır." },
    { in: "b", t: "[Edit] → [Preferences] → [Input] bölümüne gir." },
    { in: "b", t: "Laptopsan ya da klavyende sağda sayı tuşları (numpad) yoksa [Emulate Numpad]'i işaretle.", d: "Üstteki 1, 3, 7 tuşları görüş açısını değiştirir hale gelir. Bu durumda Edit Mode'da nokta/kenar/yüz seçimini 3D görünümün sol üstündeki üç küçük butondan yaparsın." },
    { in: "b", t: "Farenin orta tuşu yoksa ya da touchpad kullanıyorsan [Emulate 3 Button Mouse]'u işaretle.", d: "Bu ayar açıkken {{Alt}} + sol tık, orta tuş gibi çalışır." },
    { in: "b", t: "Yazılar küçükse [Interface] → [Resolution Scale] değerini büyüt (ör. 1.15)." },
    { in: "b", t: "Sol alttaki ☰ menüsünden [Save Preferences] de. (Auto-Save açıksa gerek yok.)" },
    { in: "b", t: "[File] → [Save As] ile boş sahneyi `projeler\\deneme.blend` olarak kaydet. Bundan sonra {{Ctrl+S}} elinin alışkanlığı olsun." }
  ],
  vids: [
    ["5TZFtA3s2NU", 0, "Türkçe. Blender 5.2 LTS ile kurulum ve ekran kontrolleri."],
    ["kVcY7K-JA1Y", 0, "İngilizce. Grant Abbitt'in Blender 5 serisi: arayüz, sakin ve yöntemli."]
  ],
  stuck: [
    ["Blender açılmıyor ya da ekran siyah", "Ekran kartı sürücünü güncelle. Laptopta Blender'ın güçlü ekran kartıyla açıldığından emin ol (Windows → Ayarlar → Ekran → Grafik)."],
    ["Menüler Türkçe açıldı", "[Edit] → [Preferences] → [Interface] → [Translation] kısmından **English** seç."]
  ],
  done: ["Blender 5.2 LTS kurulu ve açılıyor.", "Numpad ve fare ayarlarını kendi donanımıma göre yaptım.", "İlk .blend dosyamı kaydettim."]
},
{
  id: "0-4", ch: 0, title: "Sollumz'u kur", time: "10 dk", lvl: 1,
  goal: "Blender'a GTA dosyalarını okuyup yazmayı öğreten eklentiyi kur.",
  out: "Blender'ın sağ panelinde **Sollumz Tools** sekmesi.",
  steps: [
    { in: "b", t: "[Edit] → [Preferences] → [Get Extensions] aç." },
    { in: "b", t: "Sağ üstteki [Repositories] açılır menüsünden [+] → [Add Remote Repository] seç." },
    { in: "b", t: "Adres olarak `https://repo.sollumz.org/` yaz ve onayla." },
    { in: "b", t: "Arama kutusuna **Sollumz** yaz. İki tane çıkar: **Sollumz** ve **Sollumz (Development)**. Sadece **Sollumz**'u kur.", warn: "<b>Dikkat:</b> Development sürümü test sürümüdür, hata çıkarabilir." },
    { in: "b", t: "Kurulumda **pyMateria** kurmak isteyip istemediğini sorarsa [Install] de.", d: "pyMateria, dosyaları XML'e çevirmeden doğrudan oyun biçiminde (native) yazmayı sağlar. İşini kısaltır." },
    { in: "b", t: "Preferences'ı kapat. Fare 3D görünümün üstündeyken {{N}}'ye bas. Sağda açılan panelin sekmelerinde **Sollumz Tools**'u gör." },
    { in: "b", t: "Yeni sürüm çıktığında aynı [Get Extensions] ekranında [Update] butonu belirir." }
  ],
  vids: [["pT6g4JM_v0E", 0, "Sollumz 2.9'u Blender 5.2'ye kurmak. Tam bizim sürümlerimiz."]],
  stuck: [
    ["Repo eklenmiyor ya da internet hatası veriyor", "Alternatif: [GitHub'dan Sollumz.zip](https://github.com/Sollumz/Sollumz/releases/latest) indir → [Get Extensions] → sağ üst ⌄ → [Install from Disk] → zip'i seç."],
    ["Sollumz Tools sekmesi yok", "{{N}} paneli kapalı olabilir. Açıksa [Preferences] → [Add-ons] içinde Sollumz'un işaretli olduğuna bak."]
  ],
  done: ["Sollumz (Development değil) kurulu.", "{{N}} panelinde Sollumz Tools sekmesini görüyorum."]
},
{
  id: "0-5", ch: 0, title: "CodeWalker'ı kur", time: "20 dk", lvl: 1,
  goal: "GTA haritasını açan ve düzenleyen programı kur.",
  out: "Haritayı gezen bir CodeWalker ve denemeler için kendi `3dmods.rpf` arşivin.",
  concept: [
    "CodeWalker iki programdan oluşur: **CodeWalker.exe** haritayı 3D gösterir (World View), **CodeWalker RPF Explorer.exe** GTA'nın arşiv dosyalarını klasör gibi açar."
  ],
  steps: [
    { h: "İndir" },
    { in: "x", t: "[CodeWalker Discord](https://discord.gg/codewalker)'una katıl. [#releases] kanalından en son sürümü indir.", d: "Daha kolay yol: [gta5-mods sayfası](https://www.gta5-mods.com/tools/codewalker-gtav-interactive-3d-map). En güncel sürüm ise her zaman Discord'da." },
    { in: "x", t: "Aynı Discord'da [#tips-documentation] kanalında “updated nametables” mesajını bul ve `nametables.rpf` dosyasını indir.", d: "Bu dosya CodeWalker'ın GTA içindeki dosya isimlerini tanımasını sağlar." },
    { in: "w", t: "CodeWalker zip'ini 7-Zip ile bir klasöre çıkar (ör. `D:\\Araclar\\CodeWalker`).", warn: "<b>Dikkat:</b> GTA klasörünün içine çıkarma." },
    { h: "RPF Explorer ayarı" },
    { in: "c", t: "`CodeWalker RPF Explorer.exe`'yi aç. GTA V klasörünü sorarsa göster." },
    { in: "c", t: "Üstte [Options] → [Start in Edit Mode]'u işaretle. İstersen [View] → [Theme] → [Dark]." },
    { in: "c", t: "GTA kök klasöründe boş bir yere sağ tık → [New] → [RPF Archive]. Adını `3dmods` yap.", d: "Kendi denemelerini buraya atacaksın; CodeWalker onları oyunun dosyalarıyla birlikte gösterir.", warn: "<b>Kural:</b> GTA'nın orijinal dosyalarını asla değiştirme. Hep kendi `3dmods.rpf`'ine çalış." },
    { in: "c", t: "İndirdiğin `nametables.rpf`'yi RPF Explorer penceresinde GTA kök klasörüne sürükle bırak." },
    { h: "World View ayarı" },
    { in: "c", t: "`CodeWalker.exe`'yi aç ve yüklenmesini bekle. İlk açılış birkaç dakika sürebilir." },
    { in: "c", t: "{{T}} ile araç çubuğunu aç. Sağ paneldeki [DLC Level] listesinden **en alttakini** seç ve [Enable DLCs]'i işaretle." },
    { in: "c", t: "[Options] → [Save Settings]. Artık her açılışta DLC'ler yüklü gelir." }
  ],
  vids: [
    ["4WQGKlmc0LQ", 0, "CodeWalker kurulumu, 2026."],
    ["BOTrVqbSIYM", 0, "Türkçe. CodeWalker nasıl indirilir, obje nasıl konur."]
  ],
  stuck: [
    ["CodeWalker açılmıyor ya da hemen kapanıyor", "Hata mesajında bir .NET sürümü geçiyorsa Microsoft'un sitesinden o sürümün **Desktop Runtime**'ını kur. Ekran kartı sürücünü de güncelle."],
    ["Harita gri ya da boş görünüyor", "Yükleme bitmemiş olabilir; sol alttaki durum yazısını bekle. DLC Level ayarını kaydettiğinden emin ol."],
    ["RPF Explorer'a dosya sürükleyemiyorum", "[Options] menüsünde Edit Mode işaretli mi bak. Programı kapatıp aç."]
  ],
  done: ["CodeWalker haritayı açıyor ve DLC'ler açık.", "RPF Explorer Edit Mode'da açılıyor.", "GTA klasöründe `3dmods.rpf` ve `nametables.rpf` var."]
},
{
  id: "0-6", ch: 0, title: "Test sunucusu kur", time: "30 dk", lvl: 2,
  goal: "Kendi bilgisayarında, sadece senin girdiğin bir FiveM sunucusu aç.",
  out: "`localhost`'a bağlanabildiğin bir test sunucusu.",
  concept: [
    "Haritanı canlı sunucuda denemek hem riskli hem yavaş. Kendi bilgisayarında bir **test sunucusu** açarsın: değiştir, yeniden başlat, saniyeler içinde gör.",
    "**txAdmin**, sunucuyu tarayıcıdan yönettiğin paneldir. Sunucu dosyalarıyla birlikte gelir."
  ],
  steps: [
    { h: "Lisans anahtarı" },
    { in: "x", t: "[portal.cfx.re](https://portal.cfx.re/) adresine Cfx.re hesabınla gir ve yeni bir **server key** (lisans anahtarı) oluştur. Bir kenara kopyala." },
    { h: "Sunucuyu indir" },
    { in: "x", t: "[Sunucu dosyaları](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) sayfasından **recommended** (önerilen) sürümü indir. Dosya adı `server.7z`." },
    { in: "w", t: "İçini `Mapping\\sunucu\\server` klasörüne çıkar." },
    { h: "txAdmin kurulumu" },
    { in: "w", t: "`FXServer.exe`'ye çift tıkla. Tarayıcıda txAdmin açılır; PIN dolu gelir. [Link Account] de ve Cfx.re hesabınla izin ver." },
    { in: "x", t: "Panel için şifre belirle → sunucuya bir isim ver → [Popular Recipes] → **CFX Default FiveM** seç.", d: "Diğer şablonlar (ESX, QBCore) veritabanı ister. Harita denemek için en sade olanı yeter." },
    { in: "x", t: "Kayıt yerini onayla → [Recipe Deployer]'da [Next] → lisans anahtarını yapıştır → [Run Recipe] → [Save & Run Server]." },
    { h: "Bağlan" },
    { in: "f", t: "FiveM'i aç, {{F8}} ile konsolu aç ve `connect localhost` yaz.", d: "Sunucunun konsolu txAdmin'de [Live Console] sekmesinde. Komutları oraya yazacaksın." },
    { in: "f", t: "Oyunda sohbete `/tx` yaz. txAdmin menüsü açılırsa admin yetkin var demektir.", d: "Bu menüdeki ışınlanma (Teleport) özelliğini sık kullanacaksın." }
  ],
  vids: [["eiWzJbqM1L0", 0, "Türkçe. Yerel sunucu kurulumu. XAMPP ve veritabanı kısmı harita için gerekmez, CFX Default yeter."]],
  stuck: [
    ["`connect localhost` çalışmıyor", "Sunucu açık mı bak (txAdmin'de yeşil Online). Olmazsa `connect 127.0.0.1:30120` dene."],
    ["Lisans anahtarı hatası", "Anahtarı portal.cfx.re'den yeniden kopyala; başında ya da sonunda boşluk kalmasın."],
    ["Windows Güvenlik Duvarı uyarısı çıktı", "FXServer'a özel ağlar için izin ver."]
  ],
  docs: [["txAdmin ile sunucu kurulumu (resmi)", "https://docs.fivem.net/docs/server-manual/setting-up-a-server-txadmin/"]],
  done: ["txAdmin paneli açılıyor.", "`connect localhost` ile kendi sunucuma girdim.", "Oyunda `/tx` menüsü açılıyor."]
},

/* ---------------- BÖLÜM 1 ---------------- */
{
  id: "1-1", ch: 1, title: "Arayüzü tanı, gezin", time: "20 dk", lvl: 1,
  goal: "Blender ekranında kaybolmadan bakmayı öğren.",
  out: "Kamerayı istediğin gibi çeviriyor, her paneli nerede bulacağını biliyorsun.",
  concept: [
    "Blender ilk açılışta kalabalık görünür ama bu işte kullanacağın yerler belli: ortadaki **3D görünüm**, sağ üstte **Outliner**, sağ altta **Properties** ve {{N}} ile açılan **yan panel**."
  ],
  dg: ["blenderui"],
  steps: [
    { h: "Gezinme" },
    { in: "b", t: "Farenin orta tuşu basılıyken sürükle: görünüm döner." },
    { in: "b", t: "{{Shift}} + orta tuş sürükle: görünüm kayar. Tekerlek: yakınlaşır, uzaklaşır." },
    { in: "b", t: "Numpad {{1}} önden, {{3}} sağdan, {{7}} üstten bakar. {{Ctrl}} ile basarsan tersinden.", d: "Numpad {{5}} perspektif ve düz (ortografik) görünüm arasında geçer. Ölçülü modellerken düz görünüm işini kolaylaştırır." },
    { in: "b", t: "Küpe tıkla ve Numpad {{.}} bas: kamera seçili objeye odaklanır. Kaybolursan {{Home}}: her şeyi ekrana sığdırır." },
    { in: "b", t: "{{~}} (Esc'in altındaki tuş) ile görüş açısı menüsünü aç ve fareyle yönü seç.", d: "Numpad yoksa en rahat yöntem budur." },
    { h: "Paneller" },
    { in: "b", t: "{{N}} ile sağ paneli aç, kapat. [Item] sekmesinde seçili objenin konumu, dönüşü ve ölçüsü yazar." },
    { in: "b", t: "{{T}} ile soldaki araç çubuğunu aç, kapat." },
    { in: "b", t: "Sağ alttaki Properties'te dikey ikonların üstüne gel; her ikonun adı çıkar. **Modifier** (anahtar), **Data** (yeşil üçgen) ve **Material** (küre) en çok kullanacakların." },
    { in: "b", t: "Üstteki [Layout], [Modeling], [UV Editing] sekmeleri hazır ekran düzenleridir. Şimdilik [Layout]'ta kal." },
    { in: "b", t: "Bir şeyleri bozduysan [File] → [New] → [General] ile temiz bir sahne aç." }
  ],
  keys: [["Orta tuş", "Döndür"], ["{{Shift}} + orta tuş", "Kaydır"], ["Numpad {{1}} {{3}} {{7}}", "Önden, sağdan, üstten"], ["Numpad {{.}}", "Seçiliye odaklan"], ["{{Home}}", "Hepsini göster"], ["{{~}}", "Görüş menüsü"], ["{{N}}", "Yan panel"], ["{{T}}", "Araç çubuğu"]],
  vids: [
    ["-tbSCMbJA6o", 0, "İngilizce. Dünyanın en bilinen başlangıç serisinin 1. bölümü (Blender 5). İlk 15 dakika yeter."],
    ["DDAtTj5r-rY", 0, "Türkçe. Gezinme ve görünümler. Eski sürümle çekildi ama kısayollar aynı."]
  ],
  done: ["Küpe 6 farklı yönden bakabiliyorum.", "Seçili objeye odaklanmayı ve kaybolunca geri dönmeyi biliyorum.", "N panelini ve Properties'teki Modifier, Data, Material sekmelerini buluyorum."]
},
{
  id: "1-2", ch: 1, title: "Taşı, döndür, ölçekle", time: "20 dk", lvl: 1,
  goal: "Objeleri fareyle değil, sayıyla ve milimetrik hareket ettir.",
  out: "Tam istediğin yerde ve boyutta duran objeler.",
  concept: [
    "Blender'da **tuş + eksen + sayı** yazmak hem hızlı hem kesindir. Örnek: {{G}} {{Z}} {{2}} {{Enter}} = 2 metre yukarı taşı."
  ],
  steps: [
    { in: "b", t: "Küpü seç. {{G}} bas, fareyi oynat, sol tıkla bırak. Vazgeçmek için sağ tık ya da {{Esc}}." },
    { in: "b", t: "Şimdi {{G}} {{Z}} {{2}} {{Enter}} yaz: küp tam 2 m yukarı çıkar.", d: "Eksen harfi hareketi kilitler: {{X}} kırmızı, {{Y}} yeşil, {{Z}} mavi eksen." },
    { in: "b", t: "{{R}} {{Z}} {{45}} {{Enter}}: Z ekseninde 45° döndür. {{S}} {{2}} {{Enter}}: iki kat büyüt." },
    { in: "b", t: "{{N}} panelinde [Dimensions] alanlarına doğrudan değer yaz: X `1`, Y `2`, Z `0.5`.", d: "Dimensions gerçek boyuttur (metre). Scale ise bir çarpandır." },
    { in: "b", t: "Şimdi {{Ctrl+A}} → [Scale] de. Scale değerleri 1'e döner ama boyut aynı kalır.", warn: "<b>Altın kural:</b> export'tan önce her objede ölçeği uygula. Uygulanmamış ölçek, oyunda kayık collision ve gerilmiş dokuların bir numaralı sebebidir." },
    { in: "b", t: "{{Shift+D}} kopyala (sonra hareket ettir), {{X}} sil, {{Shift+A}} yeni obje ekle." },
    { in: "b", t: "Sıfırlamak için: {{Alt+G}} konum, {{Alt+R}} dönüş, {{Alt+S}} ölçek." }
  ],
  keys: [["{{G}} {{R}} {{S}}", "Taşı, döndür, ölçekle"], ["{{X}} {{Y}} {{Z}}", "Eksen kilidi (hareket sırasında)"], ["{{Ctrl+A}}", "Uygula (Scale)"], ["{{Shift+D}}", "Kopyala"], ["{{Shift+A}}", "Ekle"], ["{{Alt+G}} {{Alt+R}} {{Alt+S}}", "Sıfırla"]],
  vids: [["kVcY7K-JA1Y", 0, "İngilizce. Arayüz ve temel hareketler."]],
  done: ["{{G}} {{Z}} {{2}} gibi sayılı hareket yapabiliyorum.", "Dimensions ile boyut verip {{Ctrl+A}} ile ölçeği uyguladım.", "Kopyalama, silme ve ekleme kısayollarını biliyorum."]
},
{
  id: "1-3", ch: 1, title: "Edit Mode: nokta, kenar, yüz", time: "30 dk", lvl: 1,
  goal: "Objenin içine gir ve şeklini değiştir.",
  out: "İçi oyulmuş bir sandık.",
  concept: [
    "Her model **nokta** (vertex), **kenar** (edge) ve **yüz** (face) ile kurulur. {{Tab}} ile **Edit Mode**'a girer ve bunları tek tek düzenlersin. Object Mode'da ise objeyi bütün olarak taşırsın."
  ],
  dg: ["editops"],
  steps: [
    { in: "b", t: "Küpü seç, {{Tab}} ile Edit Mode'a gir. {{1}} nokta, {{2}} kenar, {{3}} yüz seçimi.", d: "Emulate Numpad açıksa seçim modunu 3D görünümün sol üstündeki üç küçük butondan değiştir." },
    { in: "b", t: "Seçim: tıkla. {{Shift}} + tıkla ekle. {{A}} hepsi, {{Alt+A}} hiçbiri. {{Alt}} + tık bir halkayı (loop) seçer." },
    { in: "b", t: "Yüz moduna geç ve küpün **üst yüzünü** seç." },
    { in: "b", t: "{{I}} bas ve fareyi içe doğru çek: içte yeni bir yüz oluşur (inset). Tıkla." },
    { in: "b", t: "{{E}} {{-0.8}} {{Enter}} yaz: yüz 0.8 m içeri gömülür (extrude). İçi oyuk bir sandığın oldu." },
    { in: "b", t: "Fareyi bir yan yüze getir ve {{Ctrl+R}}: sarı bir çizgi görürsün. Tıkla ve bırak: kenar halkası (loop cut) eklenir.", d: "Tıklamadan önce tekerleği çevirirsen birden fazla kesim eklersin." },
    { in: "b", t: "Kenar modunda sandığın dış üst kenarını {{Alt}} + tık ile seç ve {{Ctrl+B}} ile pah kır (bevel)." },
    { in: "b", t: "{{Tab}} ile Object Mode'a dön ve `projeler\\sandik.blend` olarak kaydet." }
  ],
  keys: [["{{Tab}}", "Edit Mode aç/kapa"], ["{{1}} {{2}} {{3}}", "Nokta, kenar, yüz"], ["{{E}}", "Extrude"], ["{{I}}", "Inset"], ["{{Ctrl+R}}", "Loop cut"], ["{{Ctrl+B}}", "Bevel"], ["{{K}}", "Bıçak"], ["{{M}}", "Birleştir (merge)"]],
  vids: [
    ["uoU6PSFuN4U", 0, "Türkçe. Edit Mode: nokta, kenar, yüz."],
    ["nA8b_yG6_bk", 0, "Türkçe. Edit Mode ve modifier'lar (54 dk). İlk yarısı yeter."],
    ["K1UyEdmSttQ", 0, "İngilizce. Referansla kupa modelleme: extrude, inset, loop cut'ı gerçek bir objede görürsün."]
  ],
  stuck: [
    ["Extrude'u iptal ettim ama yüz üst üste kaldı", "{{E}}'ye basıp sağ tıkla iptal edersen kopya yüz yerinde kalır. {{Ctrl+Z}} ile geri al ya da {{M}} → [By Distance] ile çift noktaları temizle."],
    ["Tıkladığım şey seçilmiyor", "Object Mode'da mısın, Edit Mode'da mı? Sol üstteki mod yazısına bak."]
  ],
  done: ["Nokta, kenar ve yüz modları arasında geçebiliyorum.", "Inset ve extrude ile içi oyuk sandık yaptım.", "Loop cut ve bevel'i denedim."]
},
{
  id: "1-4", ch: 1, title: "Gerçek ölçüyle çalış", time: "15 dk", lvl: 1,
  goal: "GTA dünyasının ölçülerini öğren ve modellerini ona göre kur.",
  out: "Sahnende 1.8 m'lik bir “insan kutusu” ve aklında bir ölçü tablosu.",
  concept: [
    "Blender'da **1 birim = 1 metre**. GTA da metre kullanır: Blender'da 3 m olan duvar oyunda da 3 m'dir.",
    "Ölçü tutmazsa karakter kapıdan geçemez, masa diz hizasında kalır, merdiven çıkılmaz."
  ],
  dg: ["scale"],
  table: [
    ["Kapı", "1.0–1.2 m genişlik, 2.1–2.2 m yükseklik"],
    ["Tavan", "2.8–3.2 m (dükkân, ofis 3.5 m'ye çıkabilir)"],
    ["Duvar kalınlığı", "0.15–0.3 m"],
    ["Karakter boyu", "yaklaşık 1.8 m"],
    ["Masa", "0.75 m yükseklik"],
    ["Tezgâh", "0.9–1.0 m"],
    ["Merdiven basamağı", "0.15–0.18 m yükseklik, 0.28–0.30 m derinlik"],
    ["Koridor", "en az 1.2 m; kamera rahat etsin diye 1.5 m ve üstü"],
    ["Pencere alt kenarı", "yerden yaklaşık 0.9 m"]
  ],
  steps: [
    { in: "b", t: "{{Shift+A}} → [Mesh] → [Cube]. {{N}} panelinde Dimensions'ı `0.5 × 0.5 × 1.8` yap. {{F2}} ile adını `ref_insan` koy." },
    { in: "b", t: "Kutuyu yere oturt: {{G}} {{Z}} {{0.9}} {{Enter}} (boyunun yarısı kadar yukarı).", d: "Sahnede zemin Z = 0 kabul edilir." },
    { in: "b", t: "Üst ortadaki mıknatıs ikonu snapping'dir; {{Shift+Tab}} ile aç, kapat. Kapalıyken taşırken {{Ctrl}} basılı tutmak da geçici snap yapar." },
    { in: "b", t: "Edit Mode'dayken sağ üstteki overlay menülerinde [Edge Length]'i aç: seçili kenarların uzunluğu ekranda yazar." },
    { in: "x", t: "Aşağıdaki ölçü tablosunu bir kenara not et. Modellerken hep buna bakacaksın." }
  ],
  done: ["`ref_insan` kutusu sahnede ve yere oturuyor.", "Kapı, tavan ve duvar ölçülerini biliyorum.", "Snapping'i açıp kapatabiliyorum."]
},
{
  id: "1-5", ch: 1, title: "İlk masa", time: "30 dk", lvl: 1,
  goal: "Basit parçalardan, ölçülü bir masa yap.",
  out: "Pivotu tabanında olan, tek parça `masa_01`.",
  concept: [
    "GTA bir objeyi **origin** (turuncu nokta, pivot) noktasından haritaya koyar. Origin'i masanın tabanının ortasına alırsan oyunda yere koyduğunda tam oturur."
  ],
  steps: [
    { h: "Tabla" },
    { in: "b", t: "Yeni sahne aç. Küpü seç, Dimensions: `1.4 × 0.8 × 0.05`. Konum Z: `0.725`.", d: "Tablanın üstü 0.75 m'de bitsin diye: 0.75 − (0.05 ÷ 2) = 0.725." },
    { in: "b", t: "{{Ctrl+A}} → [Scale]. Adını `masa_01` yap." },
    { h: "Ayaklar" },
    { in: "b", t: "{{Shift+A}} → [Cube]. Dimensions: `0.06 × 0.06 × 0.70`. Konum: X `0.62`, Y `0.32`, Z `0.35`. {{Ctrl+A}} → [Scale]." },
    { in: "b", t: "Ayağı kopyala ve yerine koy: {{Shift+D}} {{X}} {{-1.24}} {{Enter}}. Sonra iki ayağı birden seçip {{Shift+D}} {{Y}} {{-0.64}} {{Enter}}. Dört ayak tamam." },
    { h: "Birleştir ve pivotu ayarla" },
    { in: "b", t: "Önce dört ayağı, en son tablayı seç ({{Shift}} + tık). {{Ctrl+J}}: hepsi tek obje olur.", d: "En son seçtiğin (aktif) objenin adı kalır: `masa_01`." },
    { in: "b", t: "{{Shift+S}} → [Cursor to World Origin]. Sonra [Object] → [Set Origin] → [Origin to 3D Cursor].", d: "Masanın tabanı Z = 0'da ve tam ortada olduğu için pivot tabana gelir." },
    { in: "b", t: "Yanına `ref_insan` kutusunu koy ve oranlara bak. `projeler\\masa_01.blend` olarak kaydet." }
  ],
  vids: [["K1UyEdmSttQ", 0, "İngilizce. Referansa bakarak gerçek ölçülü obje modelleme mantığı."]],
  stuck: [
    ["{{Ctrl+J}} yapınca masa garip bir yere kaydı", "Ölçeği uygulamadan birleştirmiş olabilirsin. {{Ctrl+Z}} ile geri al, her parçada {{Ctrl+A}} → [Scale] yapıp tekrar dene."],
    ["Origin'in turuncu noktasını göremiyorum", "Object Mode'da ol ve 3D görünümün sağ üstündeki [Overlays] açık olsun."]
  ],
  done: ["Masa 1.4 × 0.8 × 0.75 m ve tek obje.", "Origin (pivot) tabanın ortasında, Z = 0'da.", "Dosyayı kaydettim."]
},
{
  id: "1-6", ch: 1, title: "Normaller: görünmez duvar sorunu", time: "10 dk", lvl: 1,
  goal: "Yüzlerin hangi tarafa baktığını görmeyi ve düzeltmeyi öğren.",
  out: "Ters yüzü olmayan modeller.",
  concept: [
    "Her yüzün bir **ön** tarafı vardır (normal yönü). GTA performans için yüzlerin sadece ön tarafını çizer. Ters dönmüş bir duvar oyunda bir taraftan **görünmez**.",
    "İç mekânda (MLO) duvarların ön yüzü **odanın içine** bakmalıdır."
  ],
  dg: ["normals"],
  steps: [
    { in: "b", t: "3D görünümün sağ üstündeki [Overlays] açılır menüsünü aç ve [Face Orientation]'ı işaretle." },
    { in: "b", t: "Kırmızı görünen yüzler **ters**. Düzgün yüzler mavi ya da renksiz görünür.", d: "Yeni Blender sürümlerinde düzgün yüzler renk almayabilir. Sen sadece kırmızıyı ara." },
    { in: "b", t: "Dene: Edit Mode → bir yüz seç → {{Alt+N}} → [Flip]. Kırmızıya döner. Tekrar Flip ile düzelt." },
    { in: "b", t: "Toplu düzeltme: Edit Mode → {{A}} → {{Shift+N}}. Bütün yüzler dışa döner.", d: "İçe bakmalarını istiyorsan {{Shift+N}} sonrası sol altta açılan panelde [Inside]'ı işaretle." },
    { in: "b", t: "Bu kontrolü her export öncesi yap. Face Orientation'ı açık bırakabilirsin." }
  ],
  done: ["Face Orientation ile ters yüzleri görebiliyorum.", "{{Shift+N}} ve {{Alt+N}} → Flip ile düzeltmeyi biliyorum."]
},
{
  id: "1-7", ch: 1, title: "İlk oda", time: "45 dk", lvl: 2,
  goal: "Kalın duvarlı, kapısı ve penceresi olan bir oda modelle.",
  out: "6 × 5 × 3 m, 0.2 m duvarlı, 1 kapılı, 1 pencereli `oda_01`.",
  concept: [
    "Bu oda, MLO'ya geçmeden önceki provan. İki **modifier** kullanacaksın: **Solidify** yüzeye kalınlık verir, **Boolean** bir objeyi diğerinden oyar (kapı ve pencere deliği).",
    "Modifier'lar modeli bozmadan çalışır. Beğenince **uygularsın** (apply), o zaman kalıcı olur."
  ],
  steps: [
    { h: "Kutu ve duvar kalınlığı" },
    { in: "b", t: "Yeni sahne aç. Küpü seç, Dimensions: `6 × 5 × 3`, Konum Z: `1.5`. {{Ctrl+A}} → [Scale]. Adını `oda_01` yap.", d: "Bu kapalı bir kutu: zemin, dört duvar ve tavan hazır." },
    { in: "b", t: "Properties → [Modifier] (anahtar ikonu) → [Add Modifier] → [Generate] → [Solidify]. [Thickness]: `0.2`.", d: "[Offset] −1 kalsın: kalınlık içeri doğru eklenir, dış ölçü 6 × 5 × 3 olarak kalır." },
    { h: "Kapı" },
    { in: "b", t: "{{Shift+A}} → [Cube]. Adı `kesici_kapi`. Dimensions: `1.1 × 0.4 × 2.15`. Konum: X `0`, Y `-2.4`, Z `1.3`.", d: "0.4 m kalınlık, 0.2 m'lik duvarı rahatça delsin diye. Z = 1.3 ile kapının altı iç zeminin hizasında kalır." },
    { in: "b", t: "`oda_01`'i seç → [Add Modifier] → [Generate] → [Boolean]. [Difference] seçili kalsın; [Object] kısmında damlalıkla `kesici_kapi`'ya tıkla." },
    { in: "b", t: "Kesiciyi seç ve {{H}} ile gizle. Duvarda kapı deliğini gör." },
    { h: "Pencere" },
    { in: "b", t: "Aynı yöntemle `kesici_pencere` yap: Dimensions `0.4 × 1.2 × 1.0`, Konum X `2.9`, Y `0`, Z `1.6`. Odaya ikinci bir Boolean ekle ve bu kesiciyi seç." },
    { h: "Bitir" },
    { in: "b", t: "Modifier'ları yukarıdan aşağıya sırayla uygula: fareyi modifier başlığının üstüne getir ve {{Ctrl+A}}.", d: "Uyguladıktan sonra kesicileri silebilirsin." },
    { in: "b", t: "Face Orientation ile kontrol et: kamerayı odanın içine sok, içeriden kırmızı yüz görünmesin." },
    { in: "b", t: "`projeler\\oda_01.blend` olarak kaydet." }
  ],
  vids: [
    ["nA8b_yG6_bk", 0, "Türkçe. Solidify ve Boolean dahil en çok kullanılan modifier'lar."],
    ["AKmwbSY2qBU", 0, "Türkçe. Küçük bir oda ve eşyaları. Eski sürüm, mantık aynı."]
  ],
  stuck: [
    ["Boolean delik açmadı", "Kesici duvarı tam delip geçiyor mu? Kalınlığını artır. İki objenin de ölçeği uygulanmış mı? Boolean'da [Solver] → **Exact** seçili olsun."],
    ["Duvar içeriden görünmüyor", "Face Orientation'a bak; içeriden kırmızıysa o yüzleri çevir ({{Alt+N}} → Flip)."],
    ["Kapı zemini de oydu", "Kesicinin alt kenarı iç zeminin üstünde kalsın; Z değerini biraz artır."]
  ],
  done: ["Oda 6 × 5 × 3 m ve duvarlar 0.2 m kalın.", "Kapı ve pencere deliği var, modifier'lar uygulandı.", "İçeriden bakınca kırmızı (ters) yüz yok."]
},
{
  id: "1-8", ch: 1, title: "UV ve doku mantığı", time: "30 dk", lvl: 2,
  goal: "Bir resmin modele nasıl oturduğunu anla.",
  out: "Odanda gerilmeden, düzgün tekrar eden bir test dokusu.",
  concept: [
    "**UV**, 3D modelin düz kâğıda açılmış kalıbıdır. Bir karton kutuyu açıp düzleştirdiğini düşün. Doku bu kalıbın üstüne basılır.",
    "UV kötüyse doku gerilir, kayar ya da dev görünür. İyi bir UV'de test dokusundaki kareler **kare** görünür."
  ],
  dg: ["uv"],
  steps: [
    { in: "b", t: "`oda_01.blend`'i aç. Üstteki [UV Editing] sekmesine geç: solda UV editörü, sağda 3D görünüm." },
    { in: "b", t: "Sol panelde [Image] → [New] → [Generated Type]: **UV Grid** → [OK]. Bu bir test resmi." },
    { in: "b", t: "Odayı seç, Properties → [Material] → [New]. [Base Color]'ın yanındaki küçük noktaya tıkla → [Image Texture] → oluşturduğun test resmini seç." },
    { in: "b", t: "3D görünümde {{Z}} → [Material Preview]. Doku görünür." },
    { in: "b", t: "3D görünümde {{Tab}} → {{A}} → {{U}} → [Cube Projection].", d: "Duvar ve zemin gibi düz yüzeyler için en sade yöntem. Karmaşık objelerde [Smart UV Project] dene." },
    { in: "b", t: "Kareler çok büyük ya da küçükse UV editöründe {{A}} → {{S}} ile UV'yi büyüt veya küçült.", d: "UV'yi büyütmek dokuyu **küçültür** (daha çok tekrar eder). Ters gibi gelir, alışırsın." },
    { in: "b", t: "Duvarlarda ve zeminde karelerin kare durduğunu kontrol et." }
  ],
  vids: [
    ["_8O3H1jjY4E", 0, "Türkçe ve yeni. UV hakkında her şey. Karakter kısmını atla, sert yüzey (hard surface) kısmı bizim için."],
    ["XleO7DBm1Us", 0, "İngilizce. Kısa ve net UV anlatımı."]
  ],
  done: ["UV Grid test dokusu odamda görünüyor.", "{{U}} → Cube Projection ile UV açtım.", "Kareler gerilmeden, kare görünüyor."]
},

/* ---------------- BÖLÜM 2 ---------------- */
{
  id: "2-1", ch: 2, title: "CodeWalker'da şehri gez", time: "20 dk", lvl: 1,
  goal: "Haritada dolaş; objelerin adını ve hangi dosyada olduğunu bulmayı öğren.",
  out: "Not defterinde 3 GTA objesinin adı ve bulunduğu ymap.",
  steps: [
    { in: "c", t: "`CodeWalker.exe`'yi aç. {{W}} {{A}} {{S}} {{D}} ile hareket et, sol tık basılı sürükleyerek etrafa bak, tekerlekle hızı ayarla." },
    { in: "c", t: "Araç çubuğunda ({{T}}) [Select Object] modunu aç ve bir banka tıkla." },
    { in: "c", t: "Sağ paneldeki bilgilerde objenin adını (ör. `prop_bench_01a`) ve hangi `.ymap` içinde durduğunu oku.", d: "Bu ad **archetype** adıdır. Haritaya o objeyi koyarken bu adı kullanırsın." },
    { in: "c", t: "Aynısını bir sokak lambası ve bir ağaç için yap. Üçünün adını not et." },
    { in: "c", t: "Sağ panelin [Selection] kısmında seçim türünü **Entity**'den **Collision**'a çevir ve bir binaya tıkla.", d: "Artık görünmez çarpışma modellerini seçiyorsun. Adları `.ybn` ile biter." },
    { in: "x", t: "Obje adlarını resimli görmek için [Pleb Masters: Forge](https://forge.plebmasters.de/) sitesini aç ve “bench” ara.", d: "Haritaya ne koyacağını seçerken çok işine yarayacak." }
  ],
  keys: [["{{W}} {{A}} {{S}} {{D}}", "Hareket"], ["Sol tık + sürükle", "Bakış"], ["Tekerlek", "Hız"], ["{{T}}", "Araç çubuğu"]],
  vids: [
    ["DpzOXsbFF2M", 0, "İngilizce. CodeWalker'a giriş."],
    ["BOTrVqbSIYM", 0, "Türkçe. CodeWalker temel kullanım."]
  ],
  done: ["CodeWalker'da rahat dolaşıyorum.", "3 objenin adını ve ymap'ini buldum.", "Collision seçim moduna geçmeyi biliyorum.", "Forge'da obje arayabiliyorum."]
},
{
  id: "2-2", ch: 2, title: "GTA modelini Blender'a al", time: "25 dk", lvl: 1,
  goal: "Oyundaki bir modeli dışa aktar, Blender'da aç ve yapısını incele.",
  out: "Blender'da dokularıyla açılmış bir GTA propu.",
  steps: [
    { in: "c", t: "CodeWalker'da bir propu seç (ör. bank) ve adını sağ panelden kopyala." },
    { in: "c", t: "[Tools] → [RPF Explorer]. Arama kutusuna adı yapıştır. Çıkan `.ydr` dosyasına sağ tık → [Export XML] → `export\\bank` klasörüne kaydet." },
    { in: "c", t: "Dosyaya çift tıkla. Açılan pencerede solda [Materials] sekmesi → [Save All Textures] → aynı klasör." },
    { in: "s", t: "Blender'da {{N}} → [Sollumz Tools] → [General] → [Import CodeWalker XML] → `.ydr.xml` dosyasını seç. Ayarlar varsayılan kalsın." },
    { in: "s", t: "Dokular pembe görünüyorsa: 3D görünümde {{V}} → [Find Missing Textures] → dokuları kaydettiğin klasör." },
    { in: "b", t: "Outliner'a bak: en üstte **Drawable**, altında modelin parçaları ve varsa **Bound Composite** (collision).", d: "Sollumz, GTA'nın dosya yapısını Blender'da böyle bir ağaçla gösterir. Kendi modellerin de böyle olacak." },
    { in: "b", t: "Mesh'i seç → Properties → [Material] → [Sollumz] kısmında hangi shader'ın ve hangi dokuların kullanıldığına bak." }
  ],
  vids: [
    ["fCQ5JlbWcSE", 0, "İngilizce. Tam olarak bu görev: dışa aktar, içe al, geri gönder."],
    ["PpsdK3A2Tfw", 0, "İngilizce. Bütün bir bölgeyi Blender'a almak. MLO'da lazım olacak."]
  ],
  stuck: [
    ["Import'ta hata aldım", "Doğru dosyayı mı seçtin? `.ydr.xml` olmalı. Sollumz güncel mi bak."],
    ["Dokular hâlâ pembe", "Dokular `.dds` olarak kaydedildi mi? Find Missing Textures'ta doğru klasörü seçtin mi?"]
  ],
  done: ["Bir GTA propunu XML olarak dışa aktardım.", "Blender'da dokularıyla birlikte açtım.", "Outliner'daki Drawable ağacını inceledim."]
},
{
  id: "2-3", ch: 2, title: "Değiştir ve geri gönder", time: "20 dk", lvl: 1,
  goal: "Modeli değiştir ve sonucu CodeWalker'da gör.",
  out: "CodeWalker'da senin değiştirdiğin bank.",
  steps: [
    { in: "b", t: "Bankın mesh'ini seç, {{Tab}} ile Edit Mode'a gir ve belirgin bir değişiklik yap (ör. oturma yerini {{S}} {{Z}} {{3}} ile kalınlaştır)." },
    { in: "s", t: "Drawable'ı seç → [Sollumz Tools] → [General] → [Export CodeWalker XML] → `export\\bank` klasörü." },
    { in: "c", t: "RPF Explorer'da `3dmods.rpf`'yi aç ve dışa aktardığın `.ydr.xml`'i içine sürükle.", d: "CodeWalker XML'i otomatik olarak oyun biçimine (`.ydr`) çevirir." },
    { in: "c", t: "CodeWalker'ı kapatıp aç ve bankın olduğu yere git. Değişikliğini gör." },
    { in: "c", t: "Deneme bitince bu dosyayı `3dmods.rpf`'den sil ki sonraki işlerine karışmasın.", warn: "<b>Bilgi:</b> bu değişiklik sadece CodeWalker'da görünür. Oyunda görmek için dosyayı bir resource ile **stream** etmen gerekir (Bölüm 4)." }
  ],
  vids: [["sgNiIce1JZg", 0, "İngilizce. GTA modelini değiştirip geri göndermek. Eski Sollumz arayüzü ama mantık aynı."]],
  done: ["Modeli değiştirip XML olarak dışa aktardım.", "`3dmods.rpf`'ye sürükleyip CodeWalker'da değişikliği gördüm."]
},

/* ---------------- BÖLÜM 3 ---------------- */
{
  id: "3-1", ch: 3, title: "Dokuyu hazırla (.dds)", time: "20 dk", lvl: 1,
  goal: "İnternetten bir doku indir ve GTA'nın istediği biçime çevir.",
  out: "`dokular` klasöründe 1024 × 1024 `.dds` renk ve normal dokusu.",
  concept: [
    "GTA dokuları `.dds` biçiminde ister ve kenarları **2'nin katı** olmalıdır: 256, 512, 1024, 2048.",
    "Bir yüzey genelde iki doku kullanır: **renk** (diffuse) ve **normal map** (yüzeye sahte girinti çıkıntı veren mor-mavi resim)."
  ],
  dg: ["texsize"],
  steps: [
    { in: "x", t: "[Poly Haven](https://polyhaven.com/textures) ya da [ambientCG](https://ambientcg.com/)'den bir ahşap doku seç.", d: "İkisi de ücretsiz ve CC0 lisanslı; ticari işlerde bile kullanabilirsin." },
    { in: "x", t: "Çözünürlük olarak **1K** ya da **2K** seç. **Diffuse** (Color) ve **Normal (DX)** haritalarını indir.", d: "GTA DirectX tipi normal map kullanır. GL değil **DX** olanı al." },
    { in: "d", t: "[Paint.NET](https://www.getpaint.net/)'i kur ve renk dokusunu aç. Boyutu 2'nin katı değilse [Image] → [Resize] ile 1024 × 1024 yap." },
    { in: "d", t: "[File] → [Save As] → dosya türü **DirectDraw Surface (DDS)** → `dokular\\ahsap_d.dds`." },
    { in: "d", t: "Açılan ayarda biçim olarak **BC1 (Linear, DXT1)** seç ve **Generate Mip Maps**'i işaretle.", d: "Dokuda şeffaflık (alfa) varsa **BC3 (Linear, DXT5)** seç." },
    { in: "d", t: "Normal map'i de aynı yolla `ahsap_n.dds` olarak kaydet. Normal map için **BC3 (Linear, DXT5)** güvenli seçim." },
    { in: "w", t: "İsimlendirme: `_d` renk, `_n` normal, `_s` parlaklık. Küçük harf, Türkçe karakter yok." }
  ],
  vids: [["lF1SJxm_FfE", 0, "İngilizce. NVIDIA aracıyla `.dds` dönüştürme."]],
  stuck: [
    ["Paint.NET'te DDS seçeneği yok", "Paint.NET'i güncelle; DDS desteği içinde gelir. Alternatif: GIMP → [File] → [Export As] → `.dds`."],
    ["Doku oyunda bulanık ya da titriyor", "Mipmap'leri oluşturmamış olabilirsin ya da doku çok küçük. 1024 dene ve Generate Mip Maps'i işaretle."]
  ],
  done: ["Renk ve normal dokusu 1024 × 1024 `.dds` olarak hazır.", "Mipmap'leri oluşturdum.", "Dosya adları küçük harf ve Türkçe karaktersiz."]
},
{
  id: "3-2", ch: 3, title: "Sollumz malzemesi kur", time: "25 dk", lvl: 2,
  goal: "Masana GTA'nın anladığı bir malzeme (shader) ver.",
  out: "Oyundaki gibi dokulu `masa_01`.",
  concept: [
    "Blender'ın kendi malzemeleri GTA'ya gitmez. Sollumz'un **shader**'larını kullanırsın. Shader malzemenin türüdür: sadece renk mi, renk + normal mi, parlaklık var mı, ışık yayıyor mu?"
  ],
  dg: ["shaders"],
  steps: [
    { in: "b", t: "`masa_01.blend`'i aç, masayı seç. UV'sini aç: {{Tab}} → {{A}} → {{U}} → [Smart UV Project] → {{Tab}}." },
    { in: "s", t: "{{N}} → [Sollumz Tools] → [Drawable] → [Shader Tools]. Listede {{Ctrl+F}} ile **normal** ara ve seç." },
    { in: "s", t: "[Create Shader Material]'e bas. Properties → [Material]'de yeni Sollumz malzemesi görünür." },
    { in: "s", t: "[Material] → [Sollumz] → [Texture Parameters]'ı aç. **DiffuseSampler** yanındaki klasör ikonuyla `ahsap_d.dds`'yi, **BumpSampler**'a `ahsap_n.dds`'yi seç." },
    { in: "s", t: "BumpSampler'ın Color Space ayarını **Non-Color** yap.", d: "Yapmazsan Blender'da yanlış görünür. Oyunu etkilemez ama doğru görmek için önemli." },
    { in: "s", t: "Dokuları modele göm: her dokuda **Embedded**'ı işaretle ya da [Set all Textures Embedded] de.", d: "Gömülü dokular ayrı bir `.ytd` dosyası istemez. Başlangıç için en kolayı." },
    { in: "b", t: "{{Z}} → [Material Preview] ile sonucu gör. Doku çok büyükse UV'yi büyüt (Görev 1.8)." }
  ],
  vids: [
    ["FOBlazpGIhA", 0, "İngilizce. Blender'da GTA asset'i oluşturmak: shader, doku, vertex color, export."],
    ["R_az2tpBhRw", 0, "İngilizce. Shader seçimi ve parametreleri."]
  ],
  done: ["Masada Sollumz `normal` shader'ı var.", "Renk ve normal dokuları atandı, Embedded işaretli.", "Material Preview'da doku düzgün görünüyor."]
},
{
  id: "3-3", ch: 3, title: "Vertex color ve UV adı", time: "10 dk", lvl: 1,
  goal: "Oyunun ışığı doğru hesaplaması için modele renk bilgisi ekle.",
  out: "`Color 1` adlı vertex color ve `UVMap 0` adlı UV.",
  concept: [
    "GTA modelin noktalarına boyanmış **vertex color** ile ışığı ayarlar. Bu yoksa obje gece simsiyah ya da gündüz yanlış parlak görünebilir."
  ],
  dg: ["vcolor"],
  steps: [
    { in: "b", t: "Masa seçiliyken Properties → [Data] (yeşil üçgen) → [Color Attributes]. Var olanı [−] ile sil." },
    { in: "b", t: "[+] ile yenisini ekle: Name `Color 1`, Domain **Face Corner**, Data Type **Byte Color**." },
    { in: "b", t: "Aynı pencerede rengi seç: **dış mekân** objesi için kırmızı (R = 1, G = 0, B = 0). **İç mekân** (MLO) için yeşil kanal.", d: "Sollumz'un MLO rehberi iç mekân yüzeylerinde G = 0.2, R ve B = 0 kullanıyor. Çok karanlık görünürse yeşili artır." },
    { in: "b", t: "Aynı Data sekmesinde [UV Maps] listesinde adın `UVMap 0` olduğundan emin ol. Değilse çift tıklayıp düzelt.", d: "Sollumz yanlış isimde uyarı verir." }
  ],
  vids: [["hBH1vZY8rWc", 0, "İngilizce. Vertex color neden gerekli, nasıl ayarlanır."]],
  done: ["`Color 1` vertex color'ı Face Corner ve Byte Color olarak ekledim.", "UV adı `UVMap 0`."]
},
{
  id: "3-4", ch: 3, title: "Drawable yap ve collision ekle", time: "25 dk", lvl: 2,
  goal: "Masayı GTA modeline çevir ve içinden geçilmesin diye çarpışma ekle.",
  out: "İçinde gömülü collision olan bir Drawable.",
  concept: [
    "Gördüğün model ile çarptığın model **ayrıdır**. Collision görünmez ve sade bir kopyadır. Masa için birkaç kutu yeter.",
    "Sollumz'da collision bir ağaç ister: **Bound Composite** → **Bound GeometryBVH** → çarpışma şekilleri."
  ],
  dg: ["collision"],
  steps: [
    { h: "Drawable" },
    { in: "s", t: "Masayı seç, 3D görünümde {{V}} → [Convert to Drawable]. Outliner'da masa artık bir **Drawable**'ın altında." },
    { h: "Collision ağacı" },
    { in: "s", t: "Drawable seçiliyken [Sollumz Tools] → [Collisions] → [Create Bounds] → [Create Bound]. Bir **Bound Composite** oluşur." },
    { in: "s", t: "Bound Composite'i seç, açılır listeden **Bound GeometryBVH**'yi seç ve tekrar [Create Bounds]'a bas." },
    { in: "s", t: "Bound GeometryBVH'yi seç → {{V}} → [Apply Flag Preset].", warn: "<b>En sık hata:</b> flag preset uygulanmazsa collision var görünür ama oyunda çalışmaz." },
    { h: "Şekiller" },
    { in: "b", t: "Tabla ve ayaklar için basit kutular yap. Masanın şeklini birebir kopyalama; sade olsun." },
    { in: "s", t: "Kutuları Outliner'da sürükleyip Bound GeometryBVH'nin üstüne bırak (altına girsinler)." },
    { in: "s", t: "Her kutuyu seç → Object Properties (turuncu kare) → [Sollumz] → [Sollumz Type]: **Bound Poly Box**. Serbest şekilli parçalar için **Bound Poly Mesh**." },
    { in: "s", t: "Her şekle bir **collision materyali** ver (ahşap için WOOD ile başlayanlardan biri).", d: "Ayak sesi, mermi izi ve sesi bu materyale göre çıkar." }
  ],
  vids: [
    ["UN7iaK5ADpk", 0, "İngilizce. Collision düzenleme ve oluşturma (resmi serinin 5. bölümü)."],
    ["9e9e9S3hMMU", 0, "İngilizce. Modele gömülü collision, 2 dakikada."],
    ["cP1f8h5RHtA", 0, "İngilizce. Collision temelleri, detaylı."]
  ],
  stuck: [
    ["Oyunda masanın içinden geçiyorum", "Flag preset uygulandı mı? Kutular GeometryBVH'nin altında mı? Export'ta kutular gizli (göz kapalı) değil mi?"],
    ["Collision kutuları kaymış", "Kutuların ölçeğini uygula ({{Ctrl+A}}). Composite ve BVH'nin konumu 0, 0, 0 olmalı."]
  ],
  done: ["Masa bir Drawable.", "Bound Composite → GeometryBVH → kutular ağacı hazır.", "Flag preset uygulandı, materyaller atandı."]
},
{
  id: "3-5", ch: 3, title: "Kimlik kartı (YTYP) ve export", time: "20 dk", lvl: 2,
  goal: "Masaya oyundaki adını ver ve GTA dosyalarını üret.",
  out: "`export` klasöründe `masa_01.ydr` ve `benim_proplar.ytyp`.",
  concept: [
    "**YTYP** objenin kimlik kartıdır: adı, hangi modeli kullandığı, ne kadar uzaktan görüneceği. Haritaya koyarken bu adı kullanacaksın."
  ],
  steps: [
    { in: "s", t: "[Sollumz Tools] → [Archetype Definition] → [+] ile yeni bir YTYP oluştur ve adını `benim_proplar` yap." },
    { in: "s", t: "Drawable'ı seç → [Auto-Create From Selected]. Listede `masa_01` adlı bir archetype oluşur." },
    { in: "s", t: "[Export YTYP] ile `export` klasörüne kaydet." },
    { in: "s", t: "Drawable'ı seç → {{V}} → [Export RAGE Assets]. Biçim **Native**, hedef **Gen8** → `export` klasörü.", d: "Native = doğrudan oyun dosyası (`.ydr`). Gen8 = klasik GTA V; FiveM sunucularının çoğu bunu kullanır. Gen9 GTA V Enhanced içindir." },
    { in: "c", t: "`masa_01.ydr` ve `benim_proplar.ytyp`'yi RPF Explorer'da `3dmods.rpf`'ye sürükle ve CodeWalker'ı yeniden başlat." },
    { in: "c", t: "RPF Explorer'da `masa_01.ydr`'ye çift tıkla: model dokularıyla açılmalı." }
  ],
  vids: [
    ["FOBlazpGIhA", 0, "İngilizce. YTYP oluşturma ve export kısmı."],
    ["BuhT0Y1CrAk", 0, "İngilizce. Baştan sona özel prop: modelden oyuna."]
  ],
  stuck: [
    ["Export hata veriyor", "Hata mesajını oku. En sık sebepler: Sollumz olmayan bir malzeme, `.dds` olmayan doku, yanlış UV adı, Drawable'a çevrilmemiş obje."],
    ["Dosya adı farklı çıktı", "Drawable'ın adı dosya adını belirler. Outliner'da Drawable'ı `masa_01` olarak adlandır."]
  ],
  done: ["`benim_proplar.ytyp` içinde `masa_01` var.", "`masa_01.ydr` export edildi.", "CodeWalker'da modeli dokularıyla gördüm."]
},

/* ---------------- BÖLÜM 4 ---------------- */
{
  id: "4-1", ch: 4, title: "İlk ymap", time: "25 dk", lvl: 2,
  goal: "Masanı GTA haritasında bir yere koy.",
  out: "`benim_map.ymap` ve `_manifest.ymf`.",
  dg: ["files"],
  steps: [
    { in: "c", t: "`CodeWalker.exe`'de masayı koymak istediğin yere git (ör. Legion Square)." },
    { in: "c", t: "Sol üstten proje penceresini aç. [File] → [New] → [Ymap File]." },
    { in: "c", t: "Yeni ymap seçiliyken üst menüden [Ymap] → [New Entity]. Kameranın önünde bir obje belirir." },
    { in: "c", t: "Entity'nin [Archetype] alanına `masa_01` yaz. Obje senin masana dönüşür." },
    { in: "c", t: "Gizmo ile taşı ve döndür. {{Shift}} basılıyken gizmoyu sürüklersen kopyasını alırsın.", d: "Masanın zemine gömülmediğinden ve havada durmadığından emin ol; kamerayı yaklaştırıp bak." },
    { in: "c", t: "Ymap'i seç ve [Calculate Extents] ile [Calculate All Flags]'e bas." },
    { in: "c", t: "Ymap'i `benim_map.ymap` olarak kaydet." },
    { in: "c", t: "Proje penceresinde [Tools] → [Manifest Generator] → [Generate] → `_manifest.ymf` olarak kaydet.", d: "Manifest oyuna “bu ymap yüklenince şu ytyp'yi de yükle” der. Unutursan model görünmeyebilir." }
  ],
  vids: [
    ["dVBO3_ZGL_Q", 0, "İngilizce. Yerleştirme ve basit map (resmi serinin 4. bölümü)."],
    ["z3QwE87YtDk", 0, "İngilizce. Kısa ve net ymap anlatımı (biraz eski)."]
  ],
  done: ["Masa haritada istediğim yerde.", "Extents ve flags hesaplandı, ymap kaydedildi.", "`_manifest.ymf` oluşturuldu."]
},
{
  id: "4-2", ch: 4, title: "Resource yap, oyunda gör", time: "20 dk", lvl: 2,
  goal: "Dosyalarını sunucuya ver ve masanın başına git.",
  out: "Oyunda üstüne çıkabildiğin masa.",
  dg: ["resource"],
  steps: [
    { in: "w", t: "Sunucunun `resources` klasöründe `benim_map` adında bir klasör aç, içine `stream` klasörü aç." },
    { in: "w", t: "`masa_01.ydr`, `benim_proplar.ytyp`, `benim_map.ymap` ve `_manifest.ymf`'yi `stream` içine kopyala." },
    { in: "w", t: "`benim_map` içine `fxmanifest.lua` adında bir dosya aç ve şunu yapıştır:", code: "fx_version 'cerulean'\ngame 'gta5'\nlua54 'yes'\nthis_is_a_map 'yes'" },
    { in: "w", t: "`server.cfg`'ye `ensure benim_map` satırını ekle.", d: "txAdmin'de [CFG Editor] sayfasından da düzenleyebilirsin." },
    { in: "f", t: "txAdmin [Live Console]'a önce `refresh` sonra `ensure benim_map` yaz." },
    { in: "f", t: "Oyuna gir. `/tx` → [Teleport] → [Coords] ile masanın koordinatına ışınlan.", d: "Koordinatı CodeWalker'da entity'yi seçince [Position] alanında görürsün." },
    { in: "f", t: "Masaya yürü, üstüne zıpla. İçinden geçiyorsan collision'ı kontrol et (Görev 3.4)." }
  ],
  vids: [["3iP_UVc_SVI", 0, "İngilizce. Bir map'i sunucuya kurmak; resource mantığı aynı."]],
  stuck: [
    ["Masa görünmüyor", "{{F8}} konsolunda kırmızı hata var mı? `ensure` yazdın mı? Dosyalar `stream` klasöründe mi? Ymap'teki ad ytyp'dekiyle aynı mı? `_manifest.ymf` var mı?"],
    ["Değiştirdim ama eskisi görünüyor", "`refresh` + `ensure benim_map`; olmazsa oyundan çıkıp tekrar bağlan."]
  ],
  done: ["`benim_map` çalışıyor (konsolda hata yok).", "Oyunda masayı gördüm ve üstüne çıktım."]
},
{
  id: "4-3", ch: 4, title: "Prop dizerek mekân kur", time: "40 dk", lvl: 2,
  goal: "Sadece GTA'nın hazır objeleriyle küçük bir alan tasarla.",
  out: "Oyunda gezilebilen küçük bir park ya da otopark.",
  concept: [
    "Mapping'in yarısı modelleme değil **yerleşim**dir. Hazır objelerle güzel bir alan kurmayı öğrenmek MLO'nun içini döşerken de işine yarar."
  ],
  steps: [
    { in: "c", t: "CodeWalker'da boş bir arsa bul. Ne yapacağını kafanda kur: oturma yeri, aydınlatma, çiçeklik, çöp kutusu…" },
    { in: "x", t: "[Forge](https://forge.plebmasters.de/)'da obje ara: “bench”, “lamp”, “planter”, “bin”, “barrier”. Adlarını not al." },
    { in: "c", t: "Yeni bir ymap aç (`park.ymap`) ve en az 10 entity ekle. Archetype adlarını Forge'dan aldıklarınla değiştir." },
    { in: "c", t: "Aynı objeyi dizerken önce birini yerleştir, sonra {{Shift}} + gizmo sürükle ile kopyala." },
    { in: "c", t: "[Calculate Extents], [Calculate All Flags], kaydet.", d: "Sadece oyunun kendi objelerini kullandığın için manifest gerekmez." },
    { in: "w", t: "`park.ymap`'i `benim_map\\stream` içine koy, `ensure benim_map`, oyunda gez." }
  ],
  vids: [["rm6QG6rLM3o", 0, "İngilizce. Ymap düzenleme ve oluşturma."]],
  done: ["En az 10 objeyle küçük bir alan kurdum.", "Oyunda gezdim; havada ya da gömülü obje yok."]
},

/* ---------------- BÖLÜM 5 ---------------- */
{
  id: "5-1", ch: 5, title: "MLO mantığı", time: "15 dk", lvl: 1,
  goal: "Oyunun iç mekânı nasıl çizdiğini anla. MLO hatalarının neredeyse hepsi buradan çıkar.",
  out: "Oda, portal ve limbo kafanda net.",
  concept: [
    "**MLO** içine girilebilen bina demektir. Oyun performans için iç mekânı **odalara** böler ve sadece görebildiğin odaları çizer.",
    "Odalar arasındaki geçişler **portal**dır: kapı boşlukları, pencereler. Oyun bir odadan diğerini sadece portaldan bakarak görür.",
    "**Limbo** dış dünyadır. Her MLO'da ilk oda olarak bulunmak zorundadır. Dışarı açılan her portal **odadan limboya** gider.",
    "İçerideki her eşya (**entity**) bir odaya atanır. Yanlış odadaki eşya, o odaya bakmadığında kaybolur."
  ],
  dg: ["mlo", "portal"],
  steps: [
    { in: "x", t: "Plandaki göze bak: kapıdan içeri bakarken sadece Portal 1'in gösterdiği alan çizilir." },
    { in: "x", t: "Pencerenin de portal olduğuna dikkat et. Pencereden dışarı bakılıyorsa orada da portal olmalı, yoksa camdan boşluk görünür." },
    { in: "x", t: "[Sözlük](#/sozluk)'te **portal**, **limbo**, **room** ve **entity** maddelerini oku." },
    { in: "x", t: "bazq'ın Türkçe MLO videosunun ilk 10 dakikasını, ook_3D'nin videosunu ise baştan sona bir kere izle. Henüz uygulama yok, sadece süreci gör." }
  ],
  vids: [
    ["OAVeWM9FPsw", 0, "Türkçe. Blender 5.1 ve Sollumz ile tek videoda bütün MLO süreci."],
    ["BwpWHqOrvnA", 0, "İngilizce. Çok odalı MLO, 25 dakika, bölüm işaretli. Sonraki görevlerde parça parça kullanacağız."]
  ],
  done: ["Oyunun neden sadece portaldan görüneni çizdiğini anladım.", "Limbo'nun ne olduğunu ve neden ilk oda olduğunu biliyorum.", "Pencerenin de portal gerektirdiğini biliyorum."]
},
{
  id: "5-2", ch: 5, title: "Bina seç, dosyaları çek", time: "25 dk", lvl: 2,
  goal: "MLO yapacağın binayı ve çevresini Blender'a hazırla.",
  out: "`export\\mlo_01` klasöründe binanın XML'leri ve dokuları.",
  steps: [
    { in: "c", t: "Küçük, tek katlı, etrafı sakin bir bina seç. İlk MLO'da 1–2 oda yeter.", d: "Sunucunda aynı bölgede başka bir MLO var mı kontrol et. Çakışma titreme yapar." },
    { in: "c", t: "Binayı seç ve adını kopyala. RPF Explorer'da bul → [Export XML] → `export\\mlo_01`. Önce açıp doğru dosya olduğuna bak." },
    { in: "c", t: "Dosyayı açıp [Materials] → [Save All Textures] ile dokularını aynı klasöre kaydet." },
    { in: "c", t: "Dosyaya sağ tık → [Open file location]: yanındaki zemin, decal ve objeleri de al (`.ydr .ybn .ytd .yft`)." },
    { in: "c", t: "Binanın collision'larını export et. **İkisini birden** al: `isim.ybn` ve `hi@isim.ybn`.", d: "Normal olan yürümek için, `hi@` olan mermiler içindir. Kapıyı ikisinde de açacaksın." },
    { in: "c", t: "Binanın bulunduğu `.ymap`'i export et. Adı sağdaki bilgi panelinde yazar; büyük binalarda birden fazla olabilir." }
  ],
  vids: [["BwpWHqOrvnA", 0, "0:00–1:50 arası: CodeWalker'dan dışa aktarma."]],
  done: ["Binanın ydr, iki ybn (normal + hi@) ve ymap XML'leri klasörde.", "Dokular kaydedildi."]
},
{
  id: "5-3", ch: 5, title: "Kabuğu (shell) modelle", time: "60 dk", lvl: 3,
  goal: "Binanın içine zemin, duvar ve tavandan oluşan iç kabuğu modelle.",
  out: "Bina ile hizalı, kapısı açılmış bir iç kabuk.",
  steps: [
    { h: "İçe aktar" },
    { in: "s", t: "Önce sadece `.ydr` ve `.ybn` XML'lerini import et. Ymap'i **en son** al.", d: "Ymap önce gelirse aynı objeleri iki kez görebilirsin." },
    { in: "b", t: "Binayı bul ve Numpad {{.}} ile odaklan." },
    { h: "Hizala" },
    { in: "b", t: "Binanın düz bir yüzeyini (ör. çatı) Edit Mode'da seç → Numpad {{7}} → {{Shift+S}} → [Cursor to Selected]." },
    { in: "b", t: "{{N}} → [View] sekmesinde [3D Cursor] dönüşünün X ve Y değerini 0 yap." },
    { in: "b", t: "Object Mode'da {{Shift+A}} → [Plane] ekle. Sol altta açılan [Adjust Last Operation] panelinde [Align] → **3D Cursor** seç. Plane bina ile aynı açıda durur." },
    { h: "Merkeze al" },
    { in: "b", t: "Binanın mesh'ini seç → {{Alt+D}} → sağ tık (yerinde kopya) → {{Alt+P}} → [Clear and Keep Transformation]. Kopyanın adını `konum` yap.", d: "Bu kopya binanın dünyadaki gerçek yerini hatırlar. Ymap aşamasında koordinatı buradan alacaksın." },
    { in: "b", t: "Binanın en üstteki Drawable'ını seç → {{Alt+G}} ve {{Alt+R}}: bina dünyanın merkezine gelir.", d: "Merkezde modellemek ölçü ve hizayı çok kolaylaştırır." },
    { h: "Modelle" },
    { in: "b", t: "Plane'den başlayarak zemini, duvarları ve tavanı modelle (Görev 1.7'deki yöntemler). İç duvarları dış duvarların **birkaç santim içinde** tut.", d: "İç ve dış yüzey aynı yerde olursa titreşir (z-fighting)." },
    { in: "b", t: "Kapı boşluğunu hem binanın modelinde hem iç kabukta aç." },
    { in: "b", t: "Tavan yüksekliği ve kapı ölçüleri için [Görev 1.4](#/gorev/1-4)'teki tabloya bak." }
  ],
  vids: [
    ["BwpWHqOrvnA", 174, "2:54–13:20 arası: kabuğu hizalama ve modelleme."],
    ["gMdb7OqbzLg", 0, "Türkçe. Shell modellemeye devam (uzun; takıldığın yere atla)."],
    ["vl4MBzkYkaE", 0, "İngilizce. Kabuktan başlayan MLO serisinin ilk bölümü."]
  ],
  done: ["Bina dünya merkezinde, `konum` kopyası gerçek yerinde.", "İç kabukta zemin, duvar ve tavan var.", "Kapı boşluğu hem binada hem kabukta açık.", "İçeriden bakınca kırmızı (ters) yüz yok."]
},
{
  id: "5-4", ch: 5, title: "Doku, vertex color, drawable", time: "30 dk", lvl: 2,
  goal: "Kabuğu dokula ve GTA modeline çevir.",
  out: "Dokulu, vertex color'lı, Drawable olmuş bir kabuk.",
  steps: [
    { in: "s", t: "Her yüzey türü için bir malzeme yap: zemin, duvar, tavan. Shader olarak **normal** yeter (Görev 3.2)." },
    { in: "b", t: "Edit Mode'da yüzleri seç, Material sekmesinde ilgili malzemeyi seç ve [Assign]'a bas." },
    { in: "b", t: "UV'leri aç ({{U}} → [Cube Projection]) ve doku ölçüsünü ayarla." },
    { in: "b", t: "Vertex color ekle: `Color 1`, Face Corner, Byte Color, iç mekân rengi (G = 0.2)." },
    { in: "s", t: "Kabuğun parçalarını seç → [Sollumz Tools] → [Drawable] → [Convert to Drawable]." },
    { in: "s", t: "Mesh özelliklerindeki [Sollumz LODs]'a bak: aktif mesh **High** olarak atanmış olmalı. Başlangıçta diğer LOD'lar gerekmez." },
    { in: "b", t: "Objelere anlamlı adlar ver: `mlo01_shell`, `mlo01_col` gibi. Drawable'ın adı dosya adı olur." }
  ],
  vids: [
    ["BwpWHqOrvnA", 743, "12:23–14:25 arası: doku, isimlendirme, drawable, vertex color."],
    ["rsUHIualZ9M", 0, "Türkçe. Doku ve dikişsiz (seamless) doku."]
  ],
  done: ["Zemin, duvar ve tavanın ayrı malzemeleri var.", "Vertex color eklendi.", "Kabuk bir Drawable ve adı düzgün."]
},
{
  id: "5-5", ch: 5, title: "Collision: kapıyı aç, içeriyi kapat", time: "30 dk", lvl: 2,
  goal: "Binaya girilebilsin, içerideki duvarlar sağlam olsun.",
  out: "Kapısı delinmiş bina collision'ı ve yeni bir iç collision.",
  dg: ["collision"],
  steps: [
    { h: "Binanın collision'ı" },
    { in: "b", t: "Binanın `isim.ybn` collision'ında kapının olduğu yeri sil ya da deliği aç. Aynısını `hi@isim.ybn` için de yap." },
    { in: "b", t: "Kamerayı içeri sok; yolu kesen eski collision parçası kalmasın." },
    { h: "İç collision" },
    { in: "b", t: "Kabuğu seç → {{Shift+D}} → sağ tık (yerinde kopya) → {{Alt+P}} ile Drawable'dan ayır." },
    { in: "s", t: "Kopya seçiliyken {{V}} → [Convert to Composite], ardından {{V}} → [Apply Flag Preset]." },
    { in: "s", t: "Yüzlere collision materyali ver (beton zemin, sıva duvar…). Her odanın zemini ayrı materyal olsun.", d: "Oda kimliği (room ID) materyal üzerinden bağlanır; ayrı odalar ayrı zemin materyali ister." },
    { in: "b", t: "Collision'ı sade tut: kapı kolu, süs, küçük çıkıntılar collision'a girmez." }
  ],
  vids: [
    ["BwpWHqOrvnA", 865, "14:25–16:05 arası: MLO collision kurulumu."],
    ["cP1f8h5RHtA", 0, "İngilizce. Collision temelleri."]
  ],
  done: ["Kapının yerinde iki ybn'de de delik var.", "İç collision Composite + flag preset ile hazır.", "Collision materyalleri atandı."]
},
{
  id: "5-6", ch: 5, title: "YTYP: odalar, portallar, entity", time: "45 dk", lvl: 3,
  goal: "MLO'nun beynini kur: odaları, portalları ve eşyaları tanımla.",
  out: "Limbo, odalar ve portalları tanımlı bir MLO archetype.",
  dg: ["portal"],
  steps: [
    { h: "Archetype" },
    { in: "s", t: "[Sollumz Tools] → [Archetype Definition] → [YTYPS] → [+] ile yeni bir YTYP." },
    { in: "s", t: "Kabuk Drawable'ını seç; tipi **base** olsun → [Auto-Create From Selected]." },
    { in: "s", t: "İç collision'ı seç; tipi **MLO** yap → [Auto-Create From Selected]. Artık bir MLO archetype'ın var." },
    { h: "Odalar" },
    { in: "s", t: "MLO seçiliyken [Rooms] sekmesi → **önce** [Create Limbo Room].", warn: "<b>Kural:</b> limbo her zaman ilk oda olur." },
    { in: "s", t: "Her oda için [+] ile yeni oda ekle (ör. `salon`, `ofis`)." },
    { in: "s", t: "Oda sınırı: collision'ı seç → Edit Mode → o odanın köşe noktalarını seç → listede odayı seç → [Set Bounds From Selection].", d: "Sınır kutusu odayı tamamen kapsamalı. Eksik kalırsa köşelerde duvarlar kaybolur." },
    { h: "Portallar" },
    { in: "s", t: "[Portals] sekmesi → kapı boşluğunun **4 köşesini** seç → portal oluştur." },
    { in: "s", t: "Portalın bağladığı odaları seç: iç oda → limbo (dışarı açılıyorsa). Yön **içeriden dışarıya**.", d: "Ok ters görünüyorsa [Flip Direction]. İç kapılarda (oda → oda) yön o kadar önemli değil." },
    { in: "s", t: "Pencereler ve dışarı bakan her açıklık için de portal ekle." },
    { h: "Entity" },
    { in: "s", t: "[Entities] sekmesi → kabuk Drawable'ını seç → [Add Object(s) as Entity] → entity'nin odasını seç." },
    { in: "s", t: "Flag ve timecycle gibi ayarlar şimdilik varsayılan kalsın." }
  ],
  vids: [
    ["BwpWHqOrvnA", 965, "16:05'ten sonrası: ytyp, odalar, portallar."],
    ["A8R7UW5YvDY", 0, "İngilizce. Çok odalı MLO'da ytyp ve portal, 38 dakika."]
  ],
  stuck: [
    ["Hangi noktaları seçeceğimi bilemedim", "Odanın zemin ve tavan köşelerini kapsayan noktaları seç. Sınır kutusu bu seçimin etrafına çizilir."],
    ["Portal yönünü anlayamadım", "Portalın oku odanın dışına (limboya) bakmalı. Ters ise [Flip Direction]."]
  ],
  done: ["Limbo ilk oda, diğer odalar eklendi.", "Oda sınırları odaları tamamen kapsıyor.", "Kapı ve pencerelerde portal var, yönleri içeriden dışarıya.", "Kabuk entity olarak doğru odada."]
},
{
  id: "5-7", ch: 5, title: "Export, ymap ve test", time: "30 dk", lvl: 2,
  goal: "MLO'yu dünyaya koy ve oyunda test et.",
  out: "Oyunda girip çıkabildiğin ilk MLO'n.",
  steps: [
    { h: "Export" },
    { in: "s", t: "Export edilecek her şeyi seç (gizli obje export edilmez) ve Sollumz panelinden export al.", d: "Native seçtiysen dosyalar hazır. XML seçtiysen RPF Explorer'a sürükleyip oyun biçimine çevir." },
    { h: "Ymap" },
    { in: "c", t: "CodeWalker'da üstteki [Open Folder] ile dosyaların olduğu klasörü proje olarak aç." },
    { in: "c", t: "Yeni ymap ekle → [New Entity] → archetype adını varsayılan `prop_alien_egg_01` yerine MLO'nun adıyla değiştir." },
    { in: "s", t: "Blender'da `konum` objesini seç → [Sollumz Tools] → [General] → [Object Location & Rotation Tools] → en soldaki butonla koordinatı kopyala." },
    { in: "c", t: "Koordinatı CodeWalker'da entity'nin konumuna yapıştır. [Calculate Extents], [Calculate All Flags], kaydet, manifest oluştur." },
    { h: "Resource" },
    { in: "w", t: "Kapısını açtığın binanın collision'larını (`.ybn`) ve düzenlediğin bina modelini de `stream`'e koy.", d: "Aynı isimli dosyayı stream etmek oyundaki orijinalinin yerine geçer." },
    { in: "w", t: "Hepsini yeni bir `mlo_01` resource'una koy (Görev 4.2 gibi) → `ensure mlo_01`." },
    { h: "Test listesi" },
    { in: "f", t: "Kapıdan içeri bak: boşluk (void) görünmemeli." },
    { in: "f", t: "İçeri gir, dön, çık: duvarlar ve eşyalar kaybolmamalı." },
    { in: "f", t: "Duvarlara ateş et: mermi içeri geçmemeli (`hi@` collision)." },
    { in: "f", t: "Yürü, zıpla: takılma olmamalı, ayak sesi zemine uymalı." }
  ],
  vids: [["NN-fjCbPO1Q", 0, "İngilizce. 1 saat 40 dakika: bütün süreç ve fxmanifest."]],
  stuck: [["Test listesinden biri geçmedi", "[Sorun çözücü](#/sorunlar) sayfasında belirtiyi bul; olası sebepler sırayla yazıyor."]],
  done: ["MLO oyunda doğru yerde.", "Kapıdan bakınca void yok, içeride kaybolma yok.", "Mermi ve yürüme testleri geçti."]
},
{
  id: "5-8", ch: 5, title: "İçini döşe", time: "45 dk", lvl: 2,
  goal: "MLO'nun içine eşya yerleştir ve doğru odalara ata.",
  out: "Eşyalı, yaşayan bir iç mekân.",
  steps: [
    { in: "x", t: "[Forge](https://forge.plebmasters.de/)'da iç mekân eşyası seç: masa, sandalye, dolap, lamba. Adlarını not al." },
    { in: "c", t: "Eşyanın modelini CodeWalker'dan XML olarak export et ve Blender'a import et (Görev 2.2). Objenin adı GTA'daki adıyla aynı kalsın." },
    { in: "b", t: "Eşyayı odada istediğin yere koy." },
    { in: "s", t: "MLO seçiliyken [Entities] → eşyayı seç → [Add Object(s) as Entity] → odasını seç.", d: "Entity'nin archetype adı GTA'daki adla birebir aynı olmalı (ör. `prop_off_chair_01`). Kontrol et." },
    { in: "s", t: "GTA'nın kendi eşyalarını **export etme**. Oyunda zaten varlar; ytyp'deki entity kaydı yeter." },
    { in: "s", t: "YTYP'yi yeniden export et, `stream`'deki eskisinin üstüne yaz, `ensure` ve test et." }
  ],
  vids: [["GS-oTzWPREA", 0, "İngilizce. Asset Library: hazır objeleri sürükle bırakla yerleştirmek (resmi serinin 9. bölümü)."]],
  done: ["En az 5 eşya doğru odalarda.", "Odaya bakmadığımda eşyalar kaybolmuyor."]
},

/* ---------------- BÖLÜM 6 ---------------- */
{
  id: "6-1", ch: 6, adv: true, title: "Işık ve atmosfer", time: "45 dk", lvl: 3,
  goal: "MLO'na lamba ışıkları ve oda atmosferi (timecycle) ekle.",
  out: "Gece de güzel görünen, ışıklı bir iç mekân.",
  concept: [
    "GTA'da iç mekân ışıkları modelin içinde tanımlanır (Sollumz'da light objeleri). Her odanın bir **timecycle**'ı vardır: renk tonu, sis, parlaklık."
  ],
  steps: [
    { in: "s", t: "Sollumz'da ışık oluşturmayı ve Drawable'a bağlamayı videoyla adım adım uygula." },
    { in: "b", t: "Lambaların yakınındaki yüzeylerde vertex color'ın yeşil kanalını artır." },
    { in: "s", t: "Odalara uygun timecycle ata (dükkân, garaj, ofis…). İstersen kendi timecycle'ını yap." }
  ],
  vids: [
    ["6MbS33jvYU0", 0, "İngilizce. MLO iç mekân ışıklandırma (Sollumz 2.4)."],
    ["nA2jKxaeCTc", 0, "İngilizce. Sadece Blender ve Sollumz ile iç mekân ışıkları, detaylı."],
    ["-wzqCxRrrUE", 0, "İngilizce. Kendi timecycle'ını yapmak."]
  ],
  done: ["MLO'mda en az bir çalışan lamba ışığı var.", "Odaların timecycle'ı ayarlı."]
},
{
  id: "6-2", ch: 6, adv: true, title: "Kapılar", time: "30 dk", lvl: 2,
  goal: "MLO'na açılıp kapanan kapı ekle.",
  out: "Portala bağlı, çalışan bir kapı.",
  steps: [
    { in: "x", t: "FiveM rehberinin [Part 8: Door Creation](https://docs.fivem.net/docs/assets-manual/beginner-series/part-8/) bölümünü videoyla birlikte aç." },
    { in: "s", t: "Hazır GTA kapılarıyla başla. Videoda menteşeli (`v_ilev_bl_door_l`), sürgülü (`prop_facgate_07b`) ve dikey açılan (`lr_prop_supermod_door_01`) örnekler var." },
    { in: "c", t: "Kapıyı portala bağlamak için ikinci videodaki CodeWalker yöntemini uygula." }
  ],
  vids: [
    ["ajqNHqB8mYw", 0, "İngilizce. Kapı yapımı (resmi serinin 8. bölümü)."],
    ["9F5dR2PNvZo", 0, "İngilizce. CodeWalker ile portallara kapı eklemek."]
  ],
  done: ["MLO'mda açılıp kapanan bir kapı var."]
},
{
  id: "6-3", ch: 6, adv: true, title: "LOD ve performans", time: "30 dk", lvl: 2,
  goal: "Haritan FPS düşürmesin.",
  out: "LOD'u olan, doku bütçesine uyan modeller.",
  concept: [
    "**LOD**, uzaktan bakınca kullanılan sade modeldir. Uzaktan görünen dış modellerde LOD yoksa oyun uzaktaki ayrıntıyı da çizer ve FPS düşer."
  ],
  steps: [
    { in: "s", t: "Sollumz'da mesh'e High dışında Medium ve Low LOD ata (videoda)." },
    { in: "x", t: "Doku bütçesi: çoğu doku 512–1024 olsun. 2048'i sadece büyük ve önemli yüzeylerde kullan. 4K kullanma." },
    { in: "x", t: "Aynı dokuyu birçok yerde tekrar kullan; her yüzey için yeni doku açma." },
    { in: "b", t: "Görünmeyen yüzleri (duvarın içinde kalan, yere gömülü) sil." },
    { in: "b", t: "Collision'ı her zaman görselden çok daha sade tut." }
  ],
  vids: [
    ["dVkvYm4eDeI", 0, "İngilizce. LOD (resmi serinin 6. bölümü)."],
    ["c8gAgKEFDtw", 0, "İngilizce. Gömülü LOD'lar."]
  ],
  done: ["Dış modellerimde LOD var.", "Doku boyutlarımı bütçeye göre ayarladım."]
},
{
  id: "6-4", ch: 6, adv: true, title: "Ses yalıtımı (audio occlusion)", time: "45 dk", lvl: 3,
  goal: "Dışarının sesi içeride kısılsın.",
  out: "Sesi doğru davranan bir MLO.",
  concept: [
    "Ses ayarı yapılmamış MLO'da dışarıdaki araba sesi içeride de aynı yükseklikte duyulur. **Audio occlusion** dosyası, odalara ve portallara göre sesi kısar."
  ],
  steps: [
    { in: "x", t: "[gtav-audio-occlusion](https://github.com/pedr0fontoura/gtav-audio-occlusion) aracını indir." },
    { in: "x", t: "Videodaki gibi MLO'n için ses dosyalarını üret." },
    { in: "w", t: "Üretilen dosyaları resource'a ekle ve `fxmanifest.lua`'ya videodaki `data_file 'AUDIO_GAMEDATA'` satırlarını yaz." }
  ],
  vids: [["yJha_aZXGYI", 0, "İngilizce. Özel MLO'lar için audio occlusion."]],
  done: ["Dışarının sesi içeride kısılıyor."]
},
{
  id: "6-5", ch: 6, adv: true, title: "Titreme ve çakışmalar", time: "20 dk", lvl: 2,
  goal: "Yanıp sönen duvar ve eşya sorunlarını çöz.",
  out: "Titremeyen, başka map'lerle çakışmayan bir MLO.",
  concept: [
    "Titreme genelde **iki şeyin aynı yerde olması**ndan çıkar: üst üste binen yüzeyler, aynı bölgedeki başka bir map ya da oyunun kendi **occlusion** (görünmezlik) verisi."
  ],
  steps: [
    { in: "b", t: "İç ve dış yüzeyler aynı düzlemde mi? Birkaç santim ayır." },
    { in: "f", t: "Aynı bölgede başka bir map resource'u var mı? Birini kapatıp dene." },
    { in: "c", t: "Bölgenin occlusion verisi binayı gizliyor olabilir; videodaki yöntemle düzenle." }
  ],
  vids: [
    ["gWvvGdzO8Ak", 0, "İngilizce. FiveM'de occlusion çakışmalarını ve titreyen MLO'ları düzeltmek."],
    ["QQb1utnKFUs", 0, "İngilizce. MLO'da collision ve occlusion."]
  ],
  done: ["Titreme sorununun sebebini bulup çözmeyi biliyorum."]
},
{
  id: "6-6", ch: 6, adv: true, title: "Büyük proje: tam bir dükkân", time: "1–2 hafta", lvl: 3,
  goal: "Öğrendiğin her şeyi tek bir projede birleştir.",
  out: "Satış alanı, depo ve ofisten oluşan; ışıklı, kapılı, eşyalı bir MLO.",
  steps: [
    { in: "x", t: "Kâğıda plan çiz: 3 oda, 2 iç kapı, 1 dış kapı, 2 pencere. Ölçüleri yaz." },
    { in: "b", t: "Kabuk → doku → collision → ytyp (limbo + 3 oda) → portallar → eşyalar → ışıklar sırasıyla ilerle. Her aşamadan sonra oyunda test et." },
    { in: "f", t: "Bir arkadaşına gezdir; kaybolan duvar, boşluk, ses sorunu var mı baktır." },
    { in: "x", t: "bazq'ın Türkçe Mapping Öğretici serisini yan sekmede aç: aynı süreci gerçek bir projede görürsün." }
  ],
  vids: [
    ["BIcPKqaG0xQ", 0, "Türkçe. Mapping Öğretici 1: sıfırdan detaylı."],
    ["L1E3EXUMICQ", 0, "Türkçe. Mapping Öğretici 3: shell bitiyor."],
    ["0rE-xKr9Muo", 0, "Türkçe. Mapping Öğretici 6: iç mekân."]
  ],
  done: ["3 odalı MLO oyunda sorunsuz çalışıyor.", "Işık, kapı ve eşya var.", "Başka biri gezip test etti."]
}
];
