// --- 1. VERİTABANI ---
const database = {
  "latin_phrases": [
    { "phrase": "Ab initio", "meaning": "Başlangıçtan itibaren" },
    { "phrase": "Abundat dulcibus vitiis", "meaning": "Tatlı kusurlarla doludur" },
    { "phrase": "Acta est fabula", "meaning": "Oyun bitti" },
    { "phrase": "Ad astra per aspera", "meaning": "Zorluklarla yıldızlara doğru" },
    { "phrase": "Ad hoc", "meaning": "Bu durum için, bu amaçla" },
    { "phrase": "Ad infinitum", "meaning": "Sonsuza kadar" },
    { "phrase": "Ad interim", "meaning": "Geçici olarak" },
    { "phrase": "Ad nauseam", "meaning": "Mide bulandırıcı şekilde" },
    { "phrase": "Alea iacta est", "meaning": "Zar atıldı" },
    { "phrase": "Alma mater", "meaning": "Besleyici anne" },
    { "phrase": "Alter ego", "meaning": "İkinci ben" },
    { "phrase": "Amor fati", "meaning": "Kader sevgisi" },
    { "phrase": "Anno Domini", "meaning": "Milattan sonra" },
    { "phrase": "Aqua vitae", "meaning": "Hayat suyu" },
    { "phrase": "Ars gratia artis", "meaning": "Sanat sanat içindir" },
    { "phrase": "Ab aeterno", "meaning": "Ebediyetten beri" },
    { "phrase": "Ab antiquo", "meaning": "Eski zamanlardan beri" },
    { "phrase": "Ab imo pectore", "meaning": "Kalbin en derininden" },
    { "phrase": "Ab incunabulis", "meaning": "Beşikten beri" },
    { "phrase": "Ab intra", "meaning": "İçeriden" },
    { "phrase": "Ab origine", "meaning": "Kökeninden" },
    { "phrase": "Ab ovo", "meaning": "Başından itibaren" },
    { "phrase": "Abusus non tollit usum", "meaning": "Kötü kullanım kullanımı ortadan kaldırmaz" },
    { "phrase": "Acta non verba", "meaning": "Eylemler sözden daha önemlidir" },
    { "phrase": "Ad captandum vulgus", "meaning": "Halkı etkilemeye yönelik" },
    { "phrase": "Ad finem", "meaning": "Sona doğru" },
    { "phrase": "Ad hoc ergo propter hoc", "meaning": "Bu nedenle bu nedenle" },
    { "phrase": "Ad libitum", "meaning": "İstediğiniz gibi" },
    { "phrase": "Ad rem", "meaning": "Konuyla ilgili" },
    { "phrase": "Adsum", "meaning": "Buradayım" },
    { "phrase": "Amor vincit omnia", "meaning": "Aşk her şeyi yener" },
    { "phrase": "Ante bellum", "meaning": "Savaş öncesi" },
    { "phrase": "Ars longa, vita brevis", "meaning": "Sanat uzun, hayat kısa" },
    { "phrase": "Audaces fortuna iuvat", "meaning": "Cesur olanlara şans yardım eder" },
    { "phrase": "Aut Caesar, aut nihil", "meaning": "Ya Sezar, ya hiçbir şey" },
    { "phrase": "Aut dedere aut judicare", "meaning": "Teslim et ya da yargıla" },
    { "phrase": "Aut inveniam viam aut faciam", "meaning": "Bir yol bulacağım ya da bir yol yapacağım" },
    { "phrase": "Ave Caesar, morituri te salutant", "meaning": "Merhaba Sezar, ölecek olanlar sana selam söylüyor" },
    { "phrase": "Baculum in mano viri boni", "meaning": "İyi bir adamın elinde değnek" },
    { "phrase": "Beati pauperes spiritu", "meaning": "Ruhça zengin olanlar mutludur" },
    { "phrase": "Beatus ille qui procul negotiis", "meaning": "Ne işlerden uzak olan kişi ne de siyasetle uğraşan" },
    { "phrase": "Bellum omnium contra omnes", "meaning": "Herkesin herkese karşı savaşı" },
    { "phrase": "Bene qui latuit bene vixit", "meaning": "İyi saklanan iyi yaşar" },
    { "phrase": "Bis dat qui cito dat", "meaning": "Çabuk veren iki kez verir" },
    { "phrase": "Bonum commune communitatis", "meaning": "Toplumun ortak iyiliği" },
    { "phrase": "Brevis ipsa vita est sed malis fit longior", "meaning": "Hayat kısa ama kötülüklerle daha uzun hale gelir" },
    { "phrase": "Brevior saltare cum deformibus viris est vita", "meaning": "Çirkindir, çünkü kısa süren bir hayatla dans etmek" },
    { "phrase": "Bella gerant alii, tu felix Austria nube", "meaning": "Diğerleri savaşsın, sen mutlu ol Avusturya gelini" },
    { "phrase": "Bene qui sedulo agit", "meaning": "İyi bir şekilde çalışan" },
    { "phrase": "Bis repetita placent", "meaning": "İkinci kez tekrarlanan hoşa gider" },
    { "phrase": "Bonum commune hominis", "meaning": "İnsanın ortak iyiliği" },
    { "phrase": "Bonum in omni re quaerendum est", "meaning": "Her şeyde iyilik aranmalıdır" },
    { "phrase": "Brevis oratio penetrat coelos", "meaning": "Kısa dua göğe ulaşır" },
    { "phrase": "Brevitas est eloquentiae soror", "meaning": "Kısalık, güzel konuşmanın kız kardeşidir" },
    { "phrase": "Brevitas et claritas", "meaning": "Kısalık ve açıklık" },
    { "phrase": "Breviter et efficaciter", "meaning": "Kısaca ve etkili bir şekilde" },
    { "phrase": "Beneficium accipere libertatem est vendere", "meaning": "Yardım almak özgürlüğü satmaktır" },
    { "phrase": "Bellum se ipsum alet", "meaning": "Savaş kendini besler" },
    { "phrase": "Bene placitum laudari a laudato viro", "meaning": "İyi bir fikir, iyi bir adam tarafından övülmektedir" },
    { "phrase": "Bonus vir semper tiro", "meaning": "İyi bir adam her zaman öğrencidir" },
    { "phrase": "Bonum est fugienda aspicere in alieno malo", "meaning": "Başkalarının kötüsünü görmek kaçınılması gereken bir iyiliktir" },
    { "phrase": "Brevi manu", "meaning": "Kısa bir el ile" },
    { "phrase": "Brevior saltare cum deformibus virginibus est vita", "meaning": "Çirkin kızlarla dans etmek kısa bir hayattır" },
    { "phrase": "Bruma nivis et frigoris", "meaning": "Kışın kar ve soğuğu" },
    { "phrase": "Bona fide", "meaning": "İyi niyetle" },
    { "phrase": "Bis vincit qui se vincit in victoria", "meaning": "İçinde zafer kazanan iki kez kazanır" },
    { "phrase": "Bis peccare in bello non licet", "meaning": "Savaşta iki kez hata yapmak mümkün değildir" },
    { "phrase": "Bona valetudo melior est quam maximae divitiae", "meaning": "İyi bir sağlık, en büyük zenginlikten daha iyidir" },
    { "phrase": "Boni pastoris est tondere pecus, non deglubere", "meaning": "İyi bir çobanın hayvanları tımar etmesi, yüzmekten çok tımar etmesidir" },
    { "phrase": "Brevi tempore multa fit", "meaning": "Kısa zamanda birçok şey olur" },
    { "phrase": "Brevis est totus fructus", "meaning": "Tüm meyve kısadır" },
    { "phrase": "Brevis est via, longa est vita", "meaning": "Yol kısa, yaşam uzun" },
    { "phrase": "Bonis nocet, quisquis pepercerit malis", "meaning": "İyi insanlar, kötülüğe göz yumanlar zarar görür" },
    { "phrase": "Bonus animus in mala re dimidium est mali", "meaning": "Kötü bir durumda iyi bir zihin, kötülüğün yarısıdır" },
    { "phrase": "Barba non facit philosophum", "meaning": "Sakal filozof yapmaz" },
    { "phrase": "Bene diagnoscitur, bene curatur", "meaning": "İyi teşhis edilen, iyi tedavi edilir" },
    { "phrase": "Bonum ex integra causa, malum ex quocumque defectu", "meaning": "İyi, tam bir nedenle gelir, kötü ise herhangi bir eksiklikten kaynaklanır" },
    { "phrase": "Bonum super omne nomen", "meaning": "İyi her isimden üstündür" },
    { "phrase": "Bonum vinum laetificat cor hominis", "meaning": "İyi şarap insanın kalbini sevindirir" },
    { "phrase": "Beatus qui prodest, quibus potest", "meaning": "Kendi çıkarına hizmet edebilen mutludur" },
    { "phrase": "Bonum est munus ex more honoris", "meaning": "Görev onurdan kaynaklanan bir iyiliktir" },
    { "phrase": "Boni judicis est ampliare justitiam", "meaning": "İyi bir hakimin adaleti genişletmektir" },
    { "phrase": "Bona mens omnium rerum dominatrix est", "meaning": "İyi bir zihin her şeyin hükümdarıdır" },
    { "phrase": "Cacoethes loquendi", "meaning": "Konuşma ihtiyacı" },
    { "phrase": "Caput mortuum", "meaning": "Ölü baş" },
    { "phrase": "Caritas vincit omnia", "meaning": "Sevgi her şeyi yener" },
    { "phrase": "Cave canem", "meaning": "Köpekten kaçının" },
    { "phrase": "Ceteris paribus", "meaning": "Diğer şeyler sabit olduğunda" },
    { "phrase": "Cogito, ergo sum", "meaning": "Düşünüyorum, öyleyse varım" },
    { "phrase": "Compos mentis", "meaning": "Akıllı, zihinsel olarak sağlıklı" },
    { "phrase": "Concordia res parvae crescunt", "meaning": "Uyum, küçük şeyleri büyütür" },
    { "phrase": "Consuetudo est altera natura", "meaning": "Alışkanlık ikinci doğadır" },
    { "phrase": "Corpus delicti", "meaning": "Suç unsuru" },
    { "phrase": "Cui bono?", "meaning": "Kime yarar?" },
    { "phrase": "Cum grano salis", "meaning": "Biraz tuzla birlikte" },
    { "phrase": "Curriculum vitae", "meaning": "Yaşam öyküsü" },
    { "phrase": "Cacoethes scribendi", "meaning": "Yazma tutkusu" },
    { "phrase": "Caput mortuum philosophicum", "meaning": "Felsefi ölü kafa" },
    { "phrase": "Caritas et amor", "meaning": "Sevgi ve aşk" },
    { "phrase": "Causa sine qua non", "meaning": "Şart olan sebep" },
    { "phrase": "Cave ne cadas", "meaning": "Düşmemeye dikkat et" },
    { "phrase": "Citius, altius, fortius", "meaning": "Daha hızlı, daha yüksek, daha güçlü" },
    { "phrase": "Communis opinio", "meaning": "Genel kanı" },
    { "phrase": "Credere et agere", "meaning": "İnanmak ve harekete geçmek" },
    { "phrase": "Cui prodest?", "meaning": "Kimin işine yarar?" },
    { "phrase": "Cuique suum", "meaning": "Herkese kendi" },
    { "phrase": "Cum laude", "meaning": "Yüksek onurla" },
    { "phrase": "Contra legem", "meaning": "Kanuna aykırı" },
    { "phrase": "Cura animarum", "meaning": "Ruhların kurtuluşu" },
    { "phrase": "Coram Deo", "meaning": "Tanrı'nın huzurunda" },
    { "phrase": "Corpus iuris civilis", "meaning": "Roma hukuk kanunları" },
    { "phrase": "Condicio sine qua non", "meaning": "Olmazsa olmaz koşul" },
    { "phrase": "Causa mortis", "meaning": "Ölüm nedeni" },
    { "phrase": "Contra principia negantem non est disputandum", "meaning": "İlkelerine karşı çıkanlarla tartışma yapılmaz" },
    { "phrase": "Consuetudo est altera lex", "meaning": "Alışkanlık ikinci bir yasadır" },
    { "phrase": "Coram populo", "meaning": "Halkın önünde" },
    { "phrase": "Certum est quod certum reddi potest", "meaning": "Kesin olan, kesin olarak kanıtlanabilir" },
    { "phrase": "Casus belli", "meaning": "Savaş sebebi" },
    { "phrase": "Cogito, ergo sumus", "meaning": "Düşünüyorum, öyleyse biz varız" },
    { "phrase": "Crescit eundo", "meaning": "Yürüdükçe büyür" },
    { "phrase": "Consuetudo pro lege servatur", "meaning": "Gelenek yasa yerine geçer" },
    { "phrase": "Cura posterior", "meaning": "Sonra gelir" },
    { "phrase": "Cuiusvis hominis est errare", "meaning": "Her insanın yanılabileceği" },
    { "phrase": "Cura ut valeas", "meaning": "İyi olmanı dilerim" },
    { "phrase": "Cum suis", "meaning": "Kendi insanlarıyla birlikte" },
    { "phrase": "Cogito, ergo laboro", "meaning": "Düşünüyorum, öyleyse çalışıyorum" },
    { "phrase": "Cogito, ergo sto", "meaning": "Düşünüyorum, öyleyse varım duruyorum" },
    { "phrase": "Confer (conf.)", "meaning": "Karşılaştır" },
    { "phrase": "Caveat emptor", "meaning": "Alıcı saklasın" },
    { "phrase": "Cogito, ergo doleo", "meaning": "Düşünüyorum, öyleyse acı çekiyorum" },
    { "phrase": "Cura te ipsum", "meaning": "Kendi kendine tedavi et" },
    { "phrase": "Carpe noctem", "meaning": "Geceyi yakala" },
    { "phrase": "Cum tempore", "meaning": "Zamana uygun olarak" },
    { "phrase": "Contra vim mortis non est medicamen in hortis", "meaning": "Ölüm gücüne karşı bahçede ilaç yoktur" },
    { "phrase": "Contra bonos mores", "meaning": "İyi ahlaka karşı" },
    { "phrase": "Credo quia absurdum est", "meaning": "Çünkü saçma olduğu için inanıyorum" },
    { "phrase": "De facto", "meaning": "Fiili olarak" },
    { "phrase": "De gustibus non est disputandum", "meaning": "Tadımız tartışılmaz" },
    { "phrase": "De jure", "meaning": "Hukuken" },
    { "phrase": "De minimis non curat lex", "meaning": "Yasalar önemli olmayan konularla ilgilenmez" },
    { "phrase": "De mortuis nil nisi bonum", "meaning": "Ölüler hakkında sadece iyi şeyler söylenir" },
    { "phrase": "De novo", "meaning": "Yeniden" },
    { "phrase": "De profundis", "meaning": "Derinliklerden" },
    { "phrase": "Delirium tremens", "meaning": "Titreme nöbetleri" },
    { "phrase": "Desideratum", "meaning": "Arzu edilen şey" },
    { "phrase": "Deus ex machina", "meaning": "Makinadan gelen tanrı" },
    { "phrase": "Dies irae", "meaning": "Öfkenin günü" },
    { "phrase": "Dominus vobiscum", "meaning": "Rabbin sizinle olsun" },
    { "phrase": "Dum spiro spero", "meaning": "Nefes aldığım sürece umut ederim" },
    { "phrase": "Dulce et decorum est pro patria mori", "meaning": "Vatan için ölmek tatlı ve onurludur" },
    { "phrase": "Durum et locum mutat, non animus", "meaning": "Yer ve durum değişir, karakter değişmez" },
    { "phrase": "Dura lex, sed lex", "meaning": "Sert yasa, ama yasa" },
    { "phrase": "De iure", "meaning": "Hukuki olarak" },
    { "phrase": "De minimis non curat praetor", "meaning": "Savcı önemsiz konularla ilgilenmez" },
    { "phrase": "De te fabula narratur", "meaning": "Senin hakkında bir hikaye anlatılıyor" },
    { "phrase": "Deo gratias", "meaning": "Tanrı'ya şükürler olsun" },
    { "phrase": "Divide et impera", "meaning": "Böl ve yönet" },
    { "phrase": "Dolce far niente", "meaning": "Hiçbir şey yapmanın tatlılığı" },
    { "phrase": "Domine, dirige nos", "meaning": "Efendimiz, bizi yönlendir" },
    { "phrase": "Dona nobis pacem", "meaning": "Bize barış ver" },
    { "phrase": "Dulce et decorum est", "meaning": "Tatlı ve onurlu" },
    { "phrase": "Durum necessitatem non habet legem", "meaning": "Durum kaideyi gerektirir" },
    { "phrase": "Dux femina facti", "meaning": "Kadın lider eylemin başıdır" },
    { "phrase": "Dux bellorum", "meaning": "Savaşların lideri" },
    { "phrase": "E contrario", "meaning": "Tersine" },
    { "phrase": "E pluribus unum", "meaning": "Birçoktan bir" },
    { "phrase": "Ecce homo", "meaning": "İşte insan" },
    { "phrase": "Errare humanum est", "meaning": "Hata yapmak insana özgüdür" },
    { "phrase": "Et alia", "meaning": "Ve diğerleri" },
    { "phrase": "Et cetera", "meaning": "Ve diğerleri, ve benzeri" },
    { "phrase": "Et tu, Brute?", "meaning": "Sen de mi, Brütüs?" },
    { "phrase": "Ex animo", "meaning": "Kalpten" },
    { "phrase": "Ex cathedra", "meaning": "Kürsüden" },
    { "phrase": "Ex libris", "meaning": "Kitaplardan" },
    { "phrase": "Ex nihilo nihil fit", "meaning": "Hiçlikten hiçbir şey olmaz" },
    { "phrase": "Ex officio", "meaning": "Görevli olarak" },
    { "phrase": "Errare est humanum, perseverare diabolicum", "meaning": "Yanılmak insana özgüdür, ısrar etmek ise şeytani" },
    { "phrase": "Eheu fugaces labuntur anni", "meaning": "Ey kaçan yıllar, ne çabuk geçiyorsunuz" },
    { "phrase": "Etiam si omnes, ego non", "meaning": "Herkes yaparsa bile, ben yapmam" },
    { "phrase": "Ex falso sequitur quodlibet", "meaning": "Yanlışla başlayan her şeyi kanıtlamak mümkündür" },
    { "phrase": "Ex tenebris lux", "meaning": "Karanlıktan aydınlık doğar" },
    { "phrase": "Ego te absolvo", "meaning": "Seni affediyorum" },
    { "phrase": "Et in Arcadia ego", "meaning": "Ben de Arcadia'dayım" },
    { "phrase": "Ex malis eligere minima", "meaning": "En az kötüyü seçmek" },
    { "phrase": "Est modus in rebus", "meaning": "Her şeyde bir ölçü vardır" },
    { "phrase": "Esse quam videri", "meaning": "Görünmek değil, olmak" },
    { "phrase": "Ex tunc", "meaning": "O zamandan itibaren" },
    { "phrase": "Eunt anni more fluentis aquae", "meaning": "Yıllar akıp gider gibi" },
    { "phrase": "Experientia est optima magistra", "meaning": "Deneyim en iyi öğretmendir" },
    { "phrase": "Ex turpi causa non oritur actio", "meaning": "Ahlaka aykırı sebeplerden kaynaklanan bir eylemden hak talep edilemez" },
    { "phrase": "Ense petit placidam sub libertate quietem", "meaning": "Kılıçla huzurlu bir özgürlüğü arar" },
    { "phrase": "Ex mero motu", "meaning": "Kendi isteğiyle" },
    { "phrase": "Et lux in tenebris lucet", "meaning": "Ve ışık karanlıkta parlar" },
    { "phrase": "Ex delicto", "meaning": "Suçluluktan dolayı" },
    { "phrase": "Extra ecclesiam nulla salus", "meaning": "Kilise dışında kurtuluş yok" },
    { "phrase": "Ego te provoco", "meaning": "Seni meydan okuyorum" },
    { "phrase": "Exempli gratia", "meaning": "Örnek olarak" },
    { "phrase": "Edimus, ut vivamus", "meaning": "Yaşamak için yiyoruz" },
    { "phrase": "Effugio periculum", "meaning": "Tehlikeden kaçmak" },
    { "phrase": "Ego sum qui sum", "meaning": "Ben, benim" },
    { "phrase": "Ex post facto", "meaning": "Geriye dönük olarak" },
    { "phrase": "Experientia docet", "meaning": "Deneyim öğretir" },
    { "phrase": "Expressis verbis", "meaning": "Açıkça ifade ederek" },
    { "phrase": "Extraordinary claims require extraordinary evidence", "meaning": "Olağanüstü iddialar olağanüstü kanıtlar gerektirir" },
    { "phrase": "Exemplum est argumentum in historia", "meaning": "Tarih, örnekleme için bir argümandır" },
    { "phrase": "Exercitatio optimus est magister", "meaning": "Egzersiz en iyi öğretmendir" },
    { "phrase": "Experientia docet stultos", "meaning": "Deneyim aptalları eğitir" },
    { "phrase": "Et alii", "meaning": "Ve diğerleri" },
    { "phrase": "Et sic de ceteris", "meaning": "Ve diğerlerine gelince" },
    { "phrase": "Faber est suae quisque fortunae", "meaning": "Herkes kendi şansının kuyumcusudur" },
    { "phrase": "Facilis descensus Averno", "meaning": "Cehenneme inmek kolaydır" },
    { "phrase": "Facilis est inventis addere", "meaning": "Keşfedilene eklemek kolaydır" },
    { "phrase": "Factum fieri infectum non potest", "meaning": "Yapılan, yapılamaz hale getirilemez" },
    { "phrase": "Fama, malum qua non aliud velocius ullum", "meaning": "Dedikodu, hiçbir şeyden daha hızlı yayılan bir kötülüktür" },
    { "phrase": "Fas est et ab hoste doceri", "meaning": "Düşmandan bile öğrenmek mümkündür" },
    { "phrase": "Felix qui potuit rerum cognoscere causas", "meaning": "İşlerin nedenlerini anlayabilen kişi mutludur" },
    { "phrase": "Festinatio tarda est", "meaning": "Acele etmek yavaştır" },
    { "phrase": "Finis malorum est", "meaning": "Kötülüklerin sonu vardır" },
    { "phrase": "Finis non est ultimus", "meaning": "Son, sonuncu değildir" },
    { "phrase": "Flagrante delicto", "meaning": "Suç işlenirken, suç işlenirken yakalanırken" },
    { "phrase": "Forsan et haec olim meminisse iuvabit", "meaning": "Belki de bunları bir gün hatırlamak iyi gelecek" },
    { "phrase": "Fortes fortuna juvat", "meaning": "Cesurların şansı yardım eder" },
    { "phrase": "Fortitudine vincimus", "meaning": "Cesaretimizle galip geliyoruz" },
    { "phrase": "Fructus belli", "meaning": "Savaşın meyveleri" },
    { "phrase": "Fugit hora, nunc est bibendum", "meaning": "Saat geçiyor, şimdi içmeye başlama zamanı" },
    { "phrase": "Fugit inreparabile tempus", "meaning": "Geri dönüşü olmayan zaman kaçar" },
    { "phrase": "Fulmen brutum", "meaning": "Sesi çıkmayan yıldırım" },
    { "phrase": "Fundamentum inconcussum", "meaning": "Sarsılmaz temel" },
    { "phrase": "Furorem poenae tempus habet", "meaning": "Ceza öfkenin zamanını bekler" },
    { "phrase": "Futurum est", "meaning": "Gelecek vardır" },
    { "phrase": "Futuri temporis exitum", "meaning": "Geleceğin sonu" },
    { "phrase": "Fidei defensor", "meaning": "İnancın savunucusu" },
    { "phrase": "Fortiori sequitur potentiori", "meaning": "Daha güçlü olan daha güçlüyü takip eder" },
    { "phrase": "Fumus boni iuris", "meaning": "İyi bir davaya dayalı duman" },
    { "phrase": "Festina lente", "meaning": "Acele et, yavaş davran" },
    { "phrase": "Fide et amore", "meaning": "Güven ve sevgiyle" },
    { "phrase": "Fortes fortuna adiuvat", "meaning": "Cesurların şansı yardım eder" },
    { "phrase": "Finis coronat opus", "meaning": "Sonuç işi taçlandırır" },
    { "phrase": "Fiat justitia, pereat mundus", "meaning": "Adalet yerine gelsin, dünya da batsın" },
    { "phrase": "Fama volat", "meaning": "Dedikodu yayılır" },
    { "phrase": "Fervet opus", "meaning": "İşte aşkla yanar" },
    { "phrase": "Fac et spera", "meaning": "Yap ve umut et" },
    { "phrase": "Fides quaerens intellectum", "meaning": "Anlam arayan inanç" },
    { "phrase": "Facta, non verba", "meaning": "Eylemler, sözlerden önemlidir" },
    { "phrase": "Fere libenter homines id quod volunt credunt", "meaning": "İnsanlar, istediklerine inanmaktan hoşlanırlar" },
    { "phrase": "Fortis fortuna adiuvat", "meaning": "Cesur şansı sever" },
    { "phrase": "Fidelis ad mortem", "meaning": "Ölüme kadar sadık" },
    { "phrase": "Falsus in uno, falsus in omnibus", "meaning": "Bir konuda yanılgıya düşen, her konuda yanılgıya düşer" },
    { "phrase": "Fama crescit eundo", "meaning": "Ünü yolculukla artar" },
    { "phrase": "Fides servanda est", "meaning": "Söz tutulmalıdır" },
    { "phrase": "Fortuna caeca est", "meaning": "Şans kör bir kadındır" },
    { "phrase": "Fortis et liber", "meaning": "Güçlü ve özgür" },
    { "phrase": "Fidelis et audax", "meaning": "Sadık ve cesur" },
    { "phrase": "Finis origine pendet", "meaning": "Son, başlangıca bağlıdır" },
    { "phrase": "Fugit hora", "meaning": "Saat geçiyor" },
    { "phrase": "Factum est", "meaning": "İşte oldu" },
    { "phrase": "Grata superveniet quae non sperabitur hora", "meaning": "Umut edilmeyen bir saatte mutluluk gelir" },
    { "phrase": "Gloria in excelsis Deo", "meaning": "Tanrı'ya yücelik olsun" },
    { "phrase": "Gaudium in veritate", "meaning": "Gerçekte sevinç" },
    { "phrase": "Guttatim", "meaning": "Damlalar halinde" },
    { "phrase": "Generis virtus nobilitas", "meaning": "Soylu, asil nitelikler soyadı verir" },
    { "phrase": "Gratia plena", "meaning": "Lütuf dolu" },
    { "phrase": "Gradatim ferociter", "meaning": "Adım adım, yavaşça ama hırslı bir şekilde" },
    { "phrase": "Gesta non verba", "meaning": "Eylemler, sözlerden daha önemlidir" },
    { "phrase": "Genius loci", "meaning": "Yerin ruhu, mekanın özü" },
    { "phrase": "Gravitas", "meaning": "Ciddiyet, ağırlık" },
    { "phrase": "Gloria in altissimis Deo", "meaning": "Tanrı'ya en yüksek yerlerde yücelik olsun" },
    { "phrase": "Gens una sumus", "meaning": "Bir milletiz" },
    { "phrase": "Graviter commotus", "meaning": "Şiddetle harekete geçmiş" },
    { "phrase": "Geminae dracones", "meaning": "İkiz ejderhalar" },
    { "phrase": "Gratias tibi ago", "meaning": "Sana teşekkür ederim" },
    { "phrase": "Grosso modo", "meaning": "Büyük çizgilerle, genel hatlarıyla" },
    { "phrase": "Gloria Patri", "meaning": "Oğula yücelik olsun" },
    { "phrase": "Graviora manent", "meaning": "Daha ciddi şeyler bekliyor" },
    { "phrase": "Gaudium certaminis", "meaning": "Mücadeledeki sevinç" },
    { "phrase": "Gratia Dei", "meaning": "Tanrı'nın lütfu" },
    { "phrase": "Gressus aeternitatis", "meaning": "Sonsuzluğun adımları" },
    { "phrase": "Gratum est quod ratio pulchrum est", "meaning": "Mantıklı olan güzeldir" },
    { "phrase": "Gratia artis", "meaning": "Sanatın lütfu" },
    { "phrase": "Genus irritabile vatum", "meaning": "Sinirli şairler topluluğu" },
    { "phrase": "Gaudeamus igitur", "meaning": "Hadi sevinelim" },
    { "phrase": "Gloria mundi", "meaning": "Dünyanın şanı" },
    { "phrase": "Gradus ad Parnassum", "meaning": "Parnassus'a çıkış adımları" },
    { "phrase": "Gratia placenti", "meaning": "Beğenilen için lütuf" },
    { "phrase": "Gratum sequitur", "meaning": "Zevk takip eder" },
    { "phrase": "Genus et differentia", "meaning": "Tür ve farklılık" },
    { "phrase": "Gloria in perpetuum", "meaning": "Sonsuza kadar yücelik" },
    { "phrase": "Gaudium vitae", "meaning": "Hayatın sevinci" },
    { "phrase": "Generis humani ornamentum", "meaning": "İnsanlığın süsü" },
    { "phrase": "Gloria mundi transit", "meaning": "Dünya şanı geçer" },
    { "phrase": "Gravis aeger", "meaning": "Hasta birinin ağırlığı" },
    { "phrase": "Gaudium certum est", "meaning": "Sevinç kesindir" },
    { "phrase": "Grata fidelitas", "meaning": "Minnettar sadakat" },
    { "phrase": "Gloria Patri et Filio et Spiritui Sancto", "meaning": "Baba, Oğul ve Kutsal Ruh'a şan olsun" },
    { "phrase": "Gratum animum fortuna sequitur", "meaning": "İyi ruh, şansı takip eder" },
    { "phrase": "Gratia suavitateque", "meaning": "Lütuf ve zarafetle" },
    { "phrase": "Genius locorum", "meaning": "Yerlerin ruhu" },
    { "phrase": "Genus et species", "meaning": "Tür ve tür" },
    { "phrase": "Gratus animus est una virtus", "meaning": "Minnettar bir zihin, tek bir erdemdir" },
    { "phrase": "Generis humani decus", "meaning": "İnsanlık onuru" },
    { "phrase": "Gratia et honore", "meaning": "Lütuf ve onurla" },
    { "phrase": "Gloria et honore", "meaning": "Şan ve onurla" },
    { "phrase": "Gravis et crepitans", "meaning": "Ağır ve çatırdayan" },
    { "phrase": "Habeas corpus", "meaning": "Vücudu getir" },
    { "phrase": "Homo homini lupus est", "meaning": "İnsan, insana kurdur" },
    { "phrase": "Honores mutant mores", "meaning": "Onurlar, alışkanlıkları değiştirir" },
    { "phrase": "Honoris causa", "meaning": "Şeref için" },
    { "phrase": "Hic et nunc", "meaning": "İşte burada ve şimdi" },
    { "phrase": "Homo sum, humani nihil a me alienum puto", "meaning": "İnsanım, insan olan her şey bana yabancı değildir" },
    { "phrase": "Hoc est corpus meum", "meaning": "Bu benim bedenimdir" },
    { "phrase": "Homo faber fortunae suae", "meaning": "İnsan, kendi kaderinin ustasıdır" },
    { "phrase": "Hoc volo, sic iubeo", "meaning": "Bunu istiyorum, böyle emrediyorum" },
    { "phrase": "Homo sapiens", "meaning": "Bilge insan" },
    { "phrase": "Hic sunt leones", "meaning": "Burada aslanlar vardır" },
    { "phrase": "Hodie mihi, cras tibi", "meaning": "Bugün bana, yarın sana" },
    { "phrase": "Hora fugit", "meaning": "Zaman kaçar" },
    { "phrase": "Hora somni", "meaning": "Uyku saati" },
    { "phrase": "Hora ultima", "meaning": "Son saat" },
    { "phrase": "Hora est", "meaning": "Saat geldi" },
    { "phrase": "Homo homini Deus est", "meaning": "İnsan, insana bir tanrıdır" },
    { "phrase": "Homo viator", "meaning": "Gezgin insan" },
    { "phrase": "Homo bulla est", "meaning": "İnsan bir kabarcıktır" },
    { "phrase": "Historia vitae magistra", "meaning": "Hayat öğretmenin hikayesidir" },
    { "phrase": "Honos habet onus", "meaning": "Onur bir yük getirir" },
    { "phrase": "Honor virtutis praemium", "meaning": "Erdemin ödülü onurdur" },
    { "phrase": "Homo bonus, omnia bona", "meaning": "İyi insan, her şeyin iyisidir" },
    { "phrase": "Humani nihil a me alienum puto", "meaning": "İnsanlık benden yabancı değildir" },
    { "phrase": "Haec olim meminisse iuvabit", "meaning": "Bir gün bunları hatırlamak hoş olacak" },
    { "phrase": "Habetis bona deum", "meaning": "İyi bir tanrınız var" },
    { "phrase": "Habetis pecuniam", "meaning": "Parayı alın" },
    { "phrase": "Habeo vos in aquis", "meaning": "Sizi suya sahip ediyorum" },
    { "phrase": "Habemus papam", "meaning": "Bir papamız var" },
    { "phrase": "Habemus vis", "meaning": "Gücümüz var" },
    { "phrase": "Habetis fidem", "meaning": "İnancınızı koruyun" },
    { "phrase": "Habent sua fata libelli", "meaning": "Kitapların da kaderleri vardır" },
    { "phrase": "Hominem te esse memento", "meaning": "İnsan olduğunu hatırla" },
    { "phrase": "Homo ex machina", "meaning": "Makinadan çıkan insan" },
    { "phrase": "Ignorantia legis neminem excusat", "meaning": "Yasa bilmezlik hiç kimseyi bağışlamaz" },
    { "phrase": "Ignorantia non est argumentum", "meaning": "Bilgisizlik bir savunma değildir" },
    { "phrase": "In dubio pro reo", "meaning": "Şüphede lehine sanık" },
    { "phrase": "In medias res", "meaning": "Olayın tam ortasında" },
    { "phrase": "In vino veritas", "meaning": "Şarapta gerçeklik vardır" },
    { "phrase": "In situ", "meaning": "Yerinde, orijinal konumunda" },
    { "phrase": "Inter nos", "meaning": "Aramızda" },
    { "phrase": "In nomine Domini", "meaning": "Rabbin adıyla" },
    { "phrase": "In principio erat verbum", "meaning": "Başlangıçta söz vardı" },
    { "phrase": "In silico", "meaning": "Bilgisayar ortamında, sanal olarak" },
    { "phrase": "In statu quo", "meaning": "Mevcut durumda" },
    { "phrase": "In flagrante delicto", "meaning": "Suçüstü halinde" },
    { "phrase": "In memoriam", "meaning": "Anısına" },
    { "phrase": "In vitro", "meaning": "Cam kap içinde, deney tüpü ortamında" },
    { "phrase": "Inter arma silent leges", "meaning": "Silahlar konuşurken yasalar susar" },
    { "phrase": "In limine", "meaning": "Başlangıçta, eşiğinde" },
    { "phrase": "In omnia paratus", "meaning": "Her şeye hazır" },
    { "phrase": "In corpore sano", "meaning": "Sağlam bir bedende" },
    { "phrase": "In saecula saeculorum", "meaning": "Sonsuzlara dek" },
    { "phrase": "In cauda venenum", "meaning": "Kuyruğunda zehir" },
    { "phrase": "In transit", "meaning": "Geçiş halinde" },
    { "phrase": "In vivo", "meaning": "Canlı organizmada" },
    { "phrase": "Iunctim", "meaning": "Birleşik olarak" },
    { "phrase": "Ius cogens", "meaning": "Zorunlu hukuk" },
    { "phrase": "Ius gentium", "meaning": "Milletler hukuku" },
    { "phrase": "Ius sanguinis", "meaning": "Kan bağına dayalı vatandaşlık" },
    { "phrase": "Ius soli", "meaning": "Doğum yeri esasına dayalı vatandaşlık" },
    { "phrase": "Iusta causa", "meaning": "Haklı sebep" },
    { "phrase": "Iustitia omnibus", "meaning": "Adalet herkese" },
    { "phrase": "Iustus ex injuria non oritur", "meaning": "Haksızlıktan doğru çıkmaz" },
    { "phrase": "Ignis fatuus", "meaning": "Kıvılcım" },
    { "phrase": "Imperium in imperio", "meaning": "Devlette devlet" },
    { "phrase": "Impetus", "meaning": "Hücum, saldırı" },
    { "phrase": "In commendam", "meaning": "Geçici olarak emanet etme" },
    { "phrase": "In dubiis, pars tutior sequenda est", "meaning": "Şüpheli durumlarda daha güvenilir taraf izlenmelidir" },
    { "phrase": "In facto quod se habet ad bonum et malum", "meaning": "İyi ve kötüye dair duruma göre" },
    { "phrase": "In flagranti", "meaning": "Suçüstü" },
    { "phrase": "In fraude legis", "meaning": "Kanunu kandırmak" },
    { "phrase": "In medio virtus", "meaning": "Erdem ortada durur" },
    { "phrase": "In medio stat virtus", "meaning": "Erdem ortada durur" },
    { "phrase": "In modum", "meaning": "Şekilde" },
    { "phrase": "In nuce", "meaning": "Ceviz kabuğunda" },
    { "phrase": "In pari delicto", "meaning": "Eşit derecede suçlu" },
    { "phrase": "In propria persona", "meaning": "Kendi kişiliğiyle" },
    { "phrase": "In re", "meaning": "Mülkiyet konusu olan" },
    { "phrase": "In toto", "meaning": "Tamamen" },
    { "phrase": "In utero", "meaning": "Rahim içinde" },
    { "phrase": "In vacuo", "meaning": "Boşlukta" },
    { "phrase": "Incipit", "meaning": "Başlar" },
    { "phrase": "Indignatio", "meaning": "Öfke" },
    { "phrase": "Infra", "meaning": "Altında" },
    { "phrase": "Infra dig", "meaning": "Haddi aşan" },
    { "phrase": "Infra legem", "meaning": "Yasadan daha altta" },
    { "phrase": "Ingratum si dixeris, omnia dixeris", "meaning": "İlgisiz birine her şeyi söylediğini söylemiş olursun" },
    { "phrase": "Inhumanum est", "meaning": "İnsanlık dışıdır" },
    { "phrase": "Inimicus inimico amicus", "meaning": "Düşmanın düşmanı dosttur" },
    { "phrase": "Iniquum", "meaning": "Adaletsiz" },
    { "phrase": "Iniquum est", "meaning": "Adaletsizdir" },
    { "phrase": "Injuste", "meaning": "Haksız yere" },
    { "phrase": "Injuria", "meaning": "Haksızlık, zulüm" },
    { "phrase": "Injuria non excusat injuriam", "meaning": "Bir haksızlık, başka bir haksızlığı mazur görmez" },
    { "phrase": "Injuria sine damno", "meaning": "Zararsız haksızlık" },
    { "phrase": "Inopinatum", "meaning": "Beklenmedik" },
    { "phrase": "Inops", "meaning": "Yoksul" },
    { "phrase": "Intellectus agens", "meaning": "Eyleyen akıl" },
    { "phrase": "Intellige ut credas", "meaning": "İnanman için anla" },
    { "phrase": "Inter alia", "meaning": "Diğer şeyler arasında" },
    { "phrase": "Inter se", "meaning": "Kendi aralarında" },
    { "phrase": "Inter vivos", "meaning": "Yaşayanlar arasında" },
    { "phrase": "Intra muros", "meaning": "Şehir sınırları içinde" },
    { "phrase": "Intra vires", "meaning": "Yetki sınırları içinde" },
    { "phrase": "Ipsa scientia potestas est", "meaning": "Bilgi kendisi güçtür" },
    { "phrase": "Ipsa verba", "meaning": "Kendi kelimeleri" },
    { "phrase": "Ipsissima verba", "meaning": "En doğru kelimeler" },
    { "phrase": "Ipso facto", "meaning": "Kendi gerçeğiyle" },
    { "phrase": "Ipso jure", "meaning": "Yasal olarak" },
    { "phrase": "Iterum", "meaning": "Tekrar" },
    { "phrase": "Iterum iterumque", "meaning": "Tekrar tekrar" },
    { "phrase": "Itinera electronica", "meaning": "Elektronik yollar" },
    { "phrase": "Iucunditas", "meaning": "Zevk, keyif" },
    { "phrase": "Iudex non calculat", "meaning": "Hakim hesap yapmaz" },
    { "phrase": "Iudex suspectus", "meaning": "Şüpheli hakim" },
    { "phrase": "Iudex uninominalis", "meaning": "Tek adaylı hakim" },
    { "phrase": "Iudicium parium", "meaning": "Yargıçların kararı" },
    { "phrase": "Iure sanguinis", "meaning": "Kan bağıyla" },
    { "phrase": "Iure uxoris", "meaning": "Karısının hakkıyla" },
    { "phrase": "Iustitia distributiva", "meaning": "Dağıtıcı adalet" },
    { "phrase": "Iustitia est fundamentum regnorum", "meaning": "Adalet krallıkların temelidir" },
    { "phrase": "Iustitia omnibus et singulis praestanda est", "meaning": "Adalet herkese ve her birine sağlanmalıdır" },
    { "phrase": "Iustitia suum cuique tribuere", "meaning": "Adalet herkese hakkını verir" },
    { "phrase": "Iustitia vigilat", "meaning": "Adalet uyanıktır" },
    { "phrase": "Iustum matrimonium", "meaning": "Meşru evlilik" },
    { "phrase": "Iustum pretium", "meaning": "Adil fiyat" },
    { "phrase": "Iuvat vivere", "meaning": "Yaşamak hoştur" },
    { "phrase": "Iuvo", "meaning": "Yardım etmek" },
    { "phrase": "Iuvo me", "meaning": "Bana yardım et" },
    { "phrase": "Iuxta", "meaning": "Yakın, yanında" },
    { "phrase": "Iuxta propria principia", "meaning": "Kendi prensiplerine göre" },
    { "phrase": "Iuxta se", "meaning": "Kendi içinde" },
    { "phrase": "Iuxta tempora", "meaning": "Zaman içinde" },
    { "phrase": "Iuxta testatum", "meaning": "Şahitlik edildiği gibi" },
    { "phrase": "Iuventus stultorum magister", "meaning": "Gençlik aptalların öğretmenidir" },
    { "phrase": "Iuventus triumphans", "meaning": "Zafer kazanan gençlik" },
    { "phrase": "Iuventus vitae", "meaning": "Gençlik yılları" },
    { "phrase": "Iuvo te", "meaning": "Sana yardım edeyim" },
    { "phrase": "Incessanter", "meaning": "Durmadan" },
    { "phrase": "Infinitum", "meaning": "Sonsuz" },
    { "phrase": "Ingens", "meaning": "Büyük, devasa" },
    { "phrase": "Ingravescente aetate", "meaning": "Yaşlandıkça" },
    { "phrase": "Inhospita", "meaning": "Konuksever olmayan" },
    { "phrase": "Inhorrescere", "meaning": "Ürkütmek" },
    { "phrase": "Inimicus inimico amicus est", "meaning": "Düşmanımın düşmanı dostumdur" },
    { "phrase": "Injuriae absque iniuria", "meaning": "Haksızlık haksızlık olmadan" },
    { "phrase": "Innocentia", "meaning": "Masumiyet" },
    { "phrase": "Inprovisus", "meaning": "Beklenmedik" },
    { "phrase": "Inscientia", "meaning": "Bilgisizlik, cehalet" },
    { "phrase": "Inserviendo consumor", "meaning": "Hizmet ederek tükenirim" },
    { "phrase": "Insidiae", "meaning": "Tuzak, hile" },
    { "phrase": "Insita naturae lex", "meaning": "Doğanın içinde olan bir kanundur" },
    { "phrase": "Institutum", "meaning": "Kuruluş, kurum" },
    { "phrase": "Integer vitae", "meaning": "Dürüst yaşam" },
    { "phrase": "Intemerata fides", "meaning": "Leke bulunmamış sadakat" },
    { "phrase": "Inter absentes", "meaning": "Uzaklarda, ayrı yerlerde" },
    { "phrase": "Inter clarissimos auctores", "meaning": "En ünlü yazarlar arasında" },
    { "phrase": "Inter caecos regnat strabus", "meaning": "Körler arasında şaşkın hüküm sürer" },
    { "phrase": "Interdum", "meaning": "Bazen, ara sıra" },
    { "phrase": "Interfice errorem, ama dilige errantem", "meaning": "Yanlışı yok et, ama yanılanı sev" },
    { "phrase": "Interfector", "meaning": "Katil, öldüren" },
    { "phrase": "Intra", "meaning": "İçinde, içerisinde" },
    { "phrase": "Intrare", "meaning": "Girmek" },
    { "phrase": "Intransigens", "meaning": "Uzlaşmaz, taviz vermeyen" },
    { "phrase": "Invicta", "meaning": "Yenilmez" },
    { "phrase": "Invidia", "meaning": "Kıskançlık, haset" },
    { "phrase": "Invisibilis", "meaning": "Görünmez" },
    { "phrase": "Invita Minerva", "meaning": "Minerva'ya rağmen, karşı gelerek" },
    { "phrase": "Invito beneficium non datur", "meaning": "İsteksizlikle yapılan iyilik kabul edilemez" },
    { "phrase": "Invidia est ultio stupri", "meaning": "Kıskançlık tecavüzün intikamıdır" },
    { "phrase": "Invidia gloriae comes", "meaning": "Kıskançlık şanın eşlikçisidir" },
    { "phrase": "Invidia triumphalis", "meaning": "Zaferin kıskançlığı" },
    { "phrase": "Invisibilia non decipiunt", "meaning": "Görünmez şeyler aldatmaz" },
    { "phrase": "Ipsa loquitur", "meaning": "Kendi kendine konuşur" },
    { "phrase": "Iratus leo non erat ferocior", "meaning": "Öfkeli bir aslan daha vahşi olmaz" },
    { "phrase": "Irrita causa", "meaning": "Geçersiz sebep" },
    { "phrase": "Irritamentum", "meaning": "Uyarıcı, teşvik edici" },
    { "phrase": "Irrumpere", "meaning": "Saldırmak, hücum etmek" },
    { "phrase": "Iter ad astra", "meaning": "Yıldızlara doğru yolculuk" },
    { "phrase": "Iter est opus", "meaning": "Yol çalışmadır" },
    { "phrase": "Iucundum", "meaning": "Hoş, zevkli" },
    { "phrase": "Iuncta juvant", "meaning": "Birleşik olanlar yardımcı olur" },
    { "phrase": "Iuris praecepta sunt haec", "meaning": "Hukuk kuralları şunlardır" },
    { "phrase": "Iustitia", "meaning": "Adalet" },
    { "phrase": "Iustitiam moniti", "meaning": "Adaleti hatırlatanlar" },
    { "phrase": "Ignis purgatorius", "meaning": "Arındırıcı ateş" },
    { "phrase": "Ignoscas aliis, multa tibi ignoscant", "meaning": "Başkalarına affet, birçokları sana affetsin" },
    { "phrase": "Ille etiam viam faciam inveniam aut faciam", "meaning": "O yolu yaparım, bulurum veya yaparım" },
    { "phrase": "Illuminare necesse est", "meaning": "Aydınlatmak gerekir" },
    { "phrase": "Imago mundi", "meaning": "Dünya imgesi" },
    { "phrase": "Imago vivens", "meaning": "Canlı imge" },
    { "phrase": "Immemor", "meaning": "Unutkan, hatırlamaz" },
    { "phrase": "Immortalis", "meaning": "Ölümsüz" },
    { "phrase": "Impius", "meaning": "Tanrıtanımaz, dinsiz" },
    { "phrase": "Imponere", "meaning": "Yüklemek, dayatmak" },
    { "phrase": "Improbitas", "meaning": "Ahlaksızlık, düşmanlık" },
    { "phrase": "Incendium amoris", "meaning": "Aşk ateşi" },
    { "phrase": "Incertus", "meaning": "Belirsiz, şüpheli" },
    { "phrase": "Inclusio unius est exclusio alterius", "meaning": "Birini içermek diğerini dışlamaktır" },
    { "phrase": "Indeclinabilis", "meaning": "Çekimsiz" },
    { "phrase": "Indocti discant et ament meminisse periti", "meaning": "Bilgisizler öğrenirken delirir, bilgeler hatırlar" },
    { "phrase": "Infamia", "meaning": "Kötü şöhret, utanç" },
    { "phrase": "Infans", "meaning": "Bebek, çocuk" },
    { "phrase": "Infirmus", "meaning": "Zayıf, güçsüz" },
    { "phrase": "Ingratus", "meaning": "Nankör, vefasız" },
    { "phrase": "Inimicus", "meaning": "Düşman, hasım" },
    { "phrase": "Iniquitas", "meaning": "Adaletsizlik, haksızlık" },
    { "phrase": "Insania", "meaning": "Delilik, akıl hastalığı" },
    { "phrase": "Insanus", "meaning": "Deli, çılgın" },
    { "phrase": "Instar omnium", "meaning": "Herkesin yerine" },
    { "phrase": "Integritas", "meaning": "Bütünlük, dürüstlük" },
    { "phrase": "Interitus", "meaning": "Yok oluş, ölüm" },
    { "phrase": "Interpres", "meaning": "Tercüman, çevirmen" },
    { "phrase": "Inveniam viam aut faciam", "meaning": "Bir yol bulurum ya da yaparım" },
    { "phrase": "Invictus", "meaning": "Yenilmez, galip" },
    { "phrase": "Iratus leo rugit", "meaning": "Kızgın aslan kükremektedir" },
    { "phrase": "Iunctura", "meaning": "Birleşme, birleşik" },
    { "phrase": "Iustus", "meaning": "Adil, doğru" },
    { "phrase": "Jovis ira, fulminis ara", "meaning": "Jüpiter'in öfkesi, yıldırımın hedefi" },
    { "phrase": "Jucundum mori", "meaning": "Ölüm hoştur" },
    { "phrase": "Jurare in verba magistri", "meaning": "Öğretmenin sözlerine yemin etmek" },
    { "phrase": "Jus civile", "meaning": "Medeni hukuk" },
    { "phrase": "Jus in bello", "meaning": "Savaş hukuku" },
    { "phrase": "Jus naturale", "meaning": "Doğal hukuk" },
    { "phrase": "Juvenis", "meaning": "Genç" },
    { "phrase": "Juventa", "meaning": "Gençlik" },
    { "phrase": "Jocoseria", "meaning": "Şaka, espri" },
    { "phrase": "Jocularis", "meaning": "Şakacı, espri yapan" },
    { "phrase": "Jugulum", "meaning": "Boğaz" },
    { "phrase": "Junctim", "meaning": "Bir araya, birleşik" },
    { "phrase": "Jumentum", "meaning": "Yük hayvanı" },
    { "phrase": "Jus canonicum", "meaning": "Kanon hukuku" },
    { "phrase": "Jus primae noctis", "meaning": "İlk gece hakkı" },
    { "phrase": "Jus trium liberorum", "meaning": "Üç çocuk hakkı" },
    { "phrase": "Jus ubique", "meaning": "Her yerde geçerli hukuk" },
    { "phrase": "Juvenescentia", "meaning": "Gençleşme" },
    { "phrase": "Justitia fundamentum regnorum", "meaning": "Adalet devletlerin temelidir" },
    { "phrase": "Juvat", "meaning": "Yardımcı olmak" },
    { "phrase": "Juvencus", "meaning": "Genç öküz" },
    { "phrase": "Judex", "meaning": "Hakim, yargıç" },
    { "phrase": "Judicium", "meaning": "Yargılama, mahkeme" },
    { "phrase": "Judico", "meaning": "Yargılamak, hüküm vermek" },
    { "phrase": "Judocus", "meaning": "Yargılayıcı" },
    { "phrase": "Jussu", "meaning": "Emirle, buyrukla" },
    { "phrase": "Justus dominus", "meaning": "Adaletli efendi" },
    { "phrase": "Justus et tenax propositi", "meaning": "Kararlı ve azimli" },
    { "phrase": "Jacta alia est", "meaning": "Başka bir şans" },
    { "phrase": "Jumentum et vehiculum", "meaning": "Yük hayvanı ve araç" },
    { "phrase": "Jus ad bellum", "meaning": "Savaşa izin hakkı" },
    { "phrase": "Juramentum", "meaning": "Yemin" },
    { "phrase": "Jurisconsultus", "meaning": "Hukuk danışmanı" },
    { "phrase": "Jus suum cuique tribuere", "meaning": "Herkese hakkını vermek" },
    { "phrase": "Jucunda es", "meaning": "Mutlu ol" },
    { "phrase": "Jus et lex", "meaning": "Hak ve yasa" },
    { "phrase": "Jugum ferre", "meaning": "Boyun eğmek" },
    { "phrase": "Jugulum tenere", "meaning": "Boğazı sıkmak" },
    { "phrase": "Jus et fraus numquam cohabitant", "meaning": "Hukuk ve hile bir arada olmaz" },
    { "phrase": "Jus imperiumque", "meaning": "Hukuk ve egemenlik" },
    { "phrase": "Jus in rem", "meaning": "Şey üzerindeki hak" },
    { "phrase": "Jus in personam", "meaning": "Kişi üzerindeki hak" },
    { "phrase": "Jus legitimum", "meaning": "Yasal hak" },
    { "phrase": "Jus publicum", "meaning": "Kamu hukuku" },
    { "phrase": "Jus privatum", "meaning": "Özel hukuk" },
    { "phrase": "Jus dispositivum", "meaning": "Tarafların düzenleyebildiği hukuk" },
    { "phrase": "Jus tertii", "meaning": "Üçüncü kişinin hakkı" },
    { "phrase": "Jus utendi", "meaning": "Kullanma hakkı" },
    { "phrase": "Jus vendendi", "meaning": "Satma hakkı" },
    { "phrase": "Jus vitae necisque", "meaning": "Yaşam ve ölüm hakkı" },
    { "phrase": "Jusjurandum", "meaning": "Yemin" },
    { "phrase": "Justum et tenacem propositi virum", "meaning": "Adil ve kararlı bir kişi" },
    { "phrase": "Juvenis vita, senex philosophia", "meaning": "Gençlik hayatı, yaşlılık felsefesi" },
    { "phrase": "Kālenda Mārtiī", "meaning": "Mart ayının ilk günü" },
    { "phrase": "Kālenda Iānuāriī", "meaning": "Ocak ayının ilk günü" },
    { "phrase": "Kārpe dīem", "meaning": "Günü yakala" },
    { "phrase": "Kāsūs bellī", "meaning": "Savaş durumu" },
    { "phrase": "Kōnservō prīncipem", "meaning": "Hükümdarı koru" },
    { "phrase": "Kōntra spem spēs", "meaning": "Ümit, umutsuzluktan doğar" },
    { "phrase": "Kōntra vim mortis nōn est medicāmen in hortis", "meaning": "Ölümün gücüne karşı bahçelerde bir ilaç yoktur" },
    { "phrase": "Krēscente lūnā", "meaning": "Ay arttıkça" },
    { "phrase": "Krīstus nātus est", "meaning": "Mesih doğdu" },
    { "phrase": "Kūstōs vīrgilis", "meaning": "Virgil'in bekçisi" },
    { "phrase": "Kīlum cumminī", "meaning": "Maydanoz kadar önemsiz" },
    { "phrase": "Kīlum salīs", "meaning": "Tuzu olmayan" },
    { "phrase": "Kīlum salīs ex ōvō", "meaning": "Tuzsuz yumurta" },
    { "phrase": "Kōgitō ergō sum", "meaning": "Düşünüyorum, öyleyse varım" },
    { "phrase": "Kōgnōscē tē ipsum", "meaning": "Kendini tanı" },
    { "phrase": "Kōnstat et probātur", "meaning": "Kanıtlanmış ve doğrulanmış" },
    { "phrase": "Kōnstantīa victōria", "meaning": "Sabit zafer" },
    { "phrase": "Kōrpus dēlīctī", "meaning": "Suçların toplamı" },
    { "phrase": "Kōsa pōsta", "meaning": "Sonradan bilgi" },
    { "phrase": "Krēscentēs opēs", "meaning": "Artan servetler" },
    { "phrase": "Lapsus linguae", "meaning": "Dil kayması" },
    { "phrase": "Lapsus memoriae", "meaning": "Bellek hatası" },
    { "phrase": "Lex talionis", "meaning": "Göz zaferi (Kısasa kısas)" },
    { "phrase": "Lex posterior derogat priori", "meaning": "Daha sonraki yasa daha önceki yasayı yürürlükten kaldırır" },
    { "phrase": "Locus classicus", "meaning": "Klasik yer" },
    { "phrase": "Locus sigilli", "meaning": "Mühür yer" },
    { "phrase": "Lux in tenebris", "meaning": "Karanlıkta ışık" },
    { "phrase": "Lux et veritas", "meaning": "Işık ve gerçek" },
    { "phrase": "Lux ex oriente", "meaning": "Doğudan gelen ışık" },
    { "phrase": "Lusus naturae", "meaning": "Doğanın oyunu" },
    { "phrase": "Lusus loci", "meaning": "Yer oyunu" },
    { "phrase": "Līberī vīridisque fēlīcēs", "meaning": "Özgür ve mutlu yeşil çocuklar" },
    { "phrase": "Līberī et ingenuī", "meaning": "Özgür ve soylu kişiler" },
    { "phrase": "Līberī sine patre", "meaning": "Babasız çocuklar" },
    { "phrase": "Līberum veto", "meaning": "Özgür veto" },
    { "phrase": "Lectori salutem", "meaning": "Okuyucuya selam" },
    { "phrase": "Lex retro non agit", "meaning": "Geriye dönük yasa işlemez" },
    { "phrase": "Lex terrae", "meaning": "Toprak yasası" },
    { "phrase": "Liber et liber", "meaning": "Kitap ve özgürlük" },
    { "phrase": "Liberum arbitrium", "meaning": "Özgür irade" },
    { "phrase": "Locus in quo", "meaning": "Durum" },
    { "phrase": "Locus poenitentiae", "meaning": "Pişmanlık yeri" },
    { "phrase": "Locus standi", "meaning": "Duruşma yerine katılma hakkı" },
    { "phrase": "Lucus a non lucendo", "meaning": "Işık saçmaması nedeniyle yanıltıcı" },
    { "phrase": "Lux perpetua", "meaning": "Sonsuz ışık" },
    { "phrase": "Lux vera", "meaning": "Gerçek ışık" },
    { "phrase": "Luxuria non est bona consiliatrix", "meaning": "Şehvet iyi bir danışman değildir" },
    { "phrase": "Luxus cum damno", "meaning": "Zararlı lüks" },
    { "phrase": "Luxus meretricius", "meaning": "Fahişe lüksü" },
    { "phrase": "Laudator temporis acti", "meaning": "Geçmiş zamanları över" },
    { "phrase": "Locus communis", "meaning": "Genel mekan" },
    { "phrase": "Lex scripta", "meaning": "Yazılı kanun" },
    { "phrase": "Lex non scripta", "meaning": "Yazılı olmayan kanun" },
    { "phrase": "Lex mala, lex nulla", "meaning": "Kötü kanun, kanun değildir" },
    { "phrase": "Lex est ratio summa", "meaning": "Kanun, en yüce akıldır" },
    { "phrase": "Lapsus calami", "meaning": "Kalem hatası" },
    { "phrase": "Latine loqui", "meaning": "Latince konuşmak" },
    { "phrase": "Lex retro agit", "meaning": "Yasa geriye doğru işler" },
    { "phrase": "Lex fori", "meaning": "Yerel kanun" },
    { "phrase": "Lex divina", "meaning": "İlahi kanun" },
    { "phrase": "Laus Deo", "meaning": "Allah'a şükür" },
    { "phrase": "Lex prior", "meaning": "Önceki kanun" },
    { "phrase": "Lex naturalis", "meaning": "Doğal kanun" },
    { "phrase": "Lex ferenda", "meaning": "Gelecekte çıkarılması düşünülen kanun" },
    { "phrase": "Latus clavus", "meaning": "Geniş omuz" },
    { "phrase": "Lex dubia non obligat", "meaning": "Şüpheli kanun bağlamaz" },
    { "phrase": "Lux mundi", "meaning": "Dünyanın ışığı" },
    { "phrase": "Lex facit regem", "meaning": "Kanun kral yapar" },
    { "phrase": "Lex publica", "meaning": "Kamu hukuku" },
    { "phrase": "Lex privata", "meaning": "Özel hukuk" },
    { "phrase": "Lex rei sitae", "meaning": "Taşınmaz hukuku" },
    { "phrase": "Lex universalis", "meaning": "Evrensel kanun" },
    { "phrase": "Lex contractus", "meaning": "Sözleşme hukuku" },
    { "phrase": "Lex loci", "meaning": "Yerel kanun" },
    { "phrase": "Locus regit actum", "meaning": "Eylem yeri belirler" },
    { "phrase": "Magnum opus", "meaning": "Büyük eser" },
    { "phrase": "Mens sana in corpore sano", "meaning": "Sağlam bir bedende sağlam bir zihin" },
    { "phrase": "Modus operandi", "meaning": "İşleyiş tarzı" },
    { "phrase": "Memento mori", "meaning": "Ölümü hatırla" },
    { "phrase": "Modus vivendi", "meaning": "Yaşam tarzı" },
    { "phrase": "Mea culpa", "meaning": "Kendi hatam" },
    { "phrase": "Mala fide", "meaning": "Kötü niyetli" },
    { "phrase": "Mater familias", "meaning": "Aile reisi" },
    { "phrase": "Magister dixit", "meaning": "Öğretmen dedi" },
    { "phrase": "Medius manibus", "meaning": "Orta parmak" },
    { "phrase": "Mens rea", "meaning": "Kötü niyet" },
    { "phrase": "Morituri te salutant", "meaning": "Ölecek olanlar sana selam gönderiyor" },
    { "phrase": "Modus tollens", "meaning": "Çıkarımın reddi" },
    { "phrase": "Mutatis mutandis", "meaning": "Değiştirilmesi gerekenler değiştirildiğinde" },
    { "phrase": "Manus manum lavat", "meaning": "Bir el diğerini yıkar" },
    { "phrase": "Magister artium", "meaning": "Sanatların ustası" },
    { "phrase": "Memento vivere", "meaning": "Yaşamı hatırla" },
    { "phrase": "Medicus curat, natura sanat", "meaning": "Doktor tedavi eder, doğa iyileştirir" },
    { "phrase": "Multum in parvo", "meaning": "Azda çok" },
    { "phrase": "Mors ultima linea rerum est", "meaning": "Ölüm her şeyin son çizgisidir" },
    { "phrase": "Medicinae doctor", "meaning": "Tıp doktoru" },
    { "phrase": "Magna cum laude", "meaning": "Büyük bir övgüyle" },
    { "phrase": "Malum prohibitum", "meaning": "Yasaklanmış olan şey" },
    { "phrase": "Magister militum", "meaning": "Askerî lider" },
    { "phrase": "Magister officiorum", "meaning": "Görevlerin ustası" },
    { "phrase": "Magnum bonum", "meaning": "Büyük iyilik" },
    { "phrase": "Malum in se", "meaning": "Kendiliğinden kötü olan" },
    { "phrase": "Mens sibi conscia recti", "meaning": "Kendi vicdanının doğruluğuna güvenen" },
    { "phrase": "Meum et tuum", "meaning": "Benim ve senin olan" },
    { "phrase": "Modus ponens", "meaning": "İkili önermenin doğruluk değerlendirmesi" },
    { "phrase": "Mortui vivos docent", "meaning": "Ölüler, dirileri eğitir" },
    { "phrase": "Mutatio rerum", "meaning": "Şeylerin değişimi" },
    { "phrase": "Mutuum pecuniae", "meaning": "Borç para" },
    { "phrase": "Magistra vitae", "meaning": "Hayatın öğretmeni" },
    { "phrase": "Medius fidius", "meaning": "Şeytan bilemez" },
    { "phrase": "Mente et malleo", "meaning": "Zeka ve çekiçle" },
    { "phrase": "Metus hostilis", "meaning": "Düşman korkusu" },
    { "phrase": "Morbus gallicus", "meaning": "Fransız hastalığı" },
    { "phrase": "Mortui non mordent", "meaning": "Ölüler ısırmaz" },
    { "phrase": "Mundus vult decipi", "meaning": "Dünya aldatılmak istiyor" },
    { "phrase": "Musa sapientum fixa est in aure", "meaning": "Bilginin mührü kulakta" },
    { "phrase": "Magna est vis consuetudinis", "meaning": "Alışkanlığın büyük gücü vardır" },
    { "phrase": "Materiam superabat opus", "meaning": "İş malzemeyi aşar" },
    { "phrase": "Medicus sanat, natura curat", "meaning": "Doktor tedavi eder, doğa iyileştirir" },
    { "phrase": "Mens regnum bona possidet", "meaning": "Akıl, iyi şeylerin hükümdarıdır" },
    { "phrase": "Mille passus", "meaning": "Bin adım" },
    { "phrase": "Miserere", "meaning": "Merhamet et" },
    { "phrase": "Malum necessarium", "meaning": "Gerekli olan kötülük" },
    { "phrase": "Malum necessitatis", "meaning": "Zorunlu olan kötülük" },
    { "phrase": "Memento audere semper", "meaning": "Her zaman cesaretli olmayı hatırla" },
    { "phrase": "Melius abundare quam deficere", "meaning": "Eksik kalmaktansa fazla olmayı tercih et" },
    { "phrase": "Multa paucis", "meaning": "Az çoktur" },
    { "phrase": "Mala tempora currunt", "meaning": "Kötü zamanlar geliyor" },
    { "phrase": "Medio tutissimus ibis", "meaning": "Orta yolu tut, en güvenli olursun" },
    { "phrase": "Noli me tangere", "meaning": "Beni dokunma" },
    { "phrase": "Non sequitur", "meaning": "Sonuç çıkmaz" },
    { "phrase": "Nunc aut nunquam", "meaning": "Şimdi ya da hiç" },
    { "phrase": "Nihil novi sub sole", "meaning": "Güneş altında yeni bir şey yok" },
    { "phrase": "Ne bis in idem", "meaning": "İki defa aynı şey üzerinde yargılanamaz" },
    { "phrase": "Nunc est bibendum", "meaning": "Şimdi içme zamanı" },
    { "phrase": "Numquam retrosum", "meaning": "Asla geriye dönme" },
    { "phrase": "Natura non facit saltus", "meaning": "Doğa sıçramalar yapmaz" },
    { "phrase": "Nomen est omen", "meaning": "İsim alamettir" },
    { "phrase": "Nota bene", "meaning": "İyi not et" },
    { "phrase": "Natura abhorret vacuum", "meaning": "Doğa boşluğu sevmez" },
    { "phrase": "Noli turbare circulos meos", "meaning": "Dairelerimi karıştırma" },
    { "phrase": "Non est ad astra mollis e terris via", "meaning": "Dünya üzerinde yıldızlara giden yol kolay değildir" },
    { "phrase": "Nunc dimittis", "meaning": "Şimdi ayrılabilirsin" },
    { "phrase": "Nunc scio quid sit amor", "meaning": "Şimdi aşkın ne olduğunu biliyorum" },
    { "phrase": "Nulla dies sine linea", "meaning": "Bir gün bile çizgi olmadan geçmesin" },
    { "phrase": "Non omnis moriar", "meaning": "Tamamen ölmez ruhum" },
    { "phrase": "Nihil est sine ratione", "meaning": "Hiçbir şey sebepsiz değildir" },
    { "phrase": "Non est vivere, sed valere vita est", "meaning": "Yaşamak değil, sağlıklı olmak önemlidir" },
    { "phrase": "Nemo propheta in patria", "meaning": "Hiç kimse kendi ülkesinde peygamber olmaz" },
    { "phrase": "Nemo tenetur se ipsum accusare", "meaning": "Hiç kimse kendini suçlamak zorunda değildir" },
    { "phrase": "Nihil est in intellectu quod non prius fuerit in sensu", "meaning": "Duyulmadan önce anlaşılamaz" },
    { "phrase": "Non scholae, sed vitae discimus", "meaning": "Okula değil, hayata öğreniriz" },
    { "phrase": "Non sum qualis eram", "meaning": "Eskisi gibi değilim" },
    { "phrase": "Nunc fluens, nunc stans", "meaning": "Şimdi akıp giden, şimdi duran" },
    { "phrase": "Non progredi est regredi", "meaning": "İlerlememek gerilemek demektir" },
    { "phrase": "Nullum crimen, nulla poena sine lege", "meaning": "Kanunsuz suç, kanunsuz ceza olmaz" },
    { "phrase": "Nulla poena sine lege", "meaning": "Kanunsuz ceza olmaz" },
    { "phrase": "Nullum magnum ingenium sine mixtura dementiae fuit", "meaning": "Büyük bir dahi, az bir delilikle karışık olmaz" },
    { "phrase": "Non multa, sed multum", "meaning": "Çok şey değil, ama önemli olan" },
    { "phrase": "Nemo ante mortem beatus", "meaning": "Ölmeden önce kimse mutlu değildir" },
    { "phrase": "Nulla regula sine exceptione", "meaning": "İstisnasız her kural için bir istisna vardır" },
    { "phrase": "Nulla poena sine culpa", "meaning": "Suçsuzlukta ceza olmaz" },
    { "phrase": "Nihil difficile amanti", "meaning": "Seven için hiçbir şey zor değildir" },
    { "phrase": "Nemo me impune lacessit", "meaning": "Beni cezasız provoke edemezsin" },
    { "phrase": "Nihil sine magno labore", "meaning": "Büyük bir çaba olmadan hiçbir şey yok" },
    { "phrase": "Non ducor, duco", "meaning": "Yönetilmem, yönetirim" },
    { "phrase": "Nunc est tempus", "meaning": "Şimdi zamanıdır" },
    { "phrase": "Nihil de nobis, sine nobis", "meaning": "Bize danışmadan bize ait hiçbir şey" },
    { "phrase": "Nihil curo de ista tua stulta superstitione", "meaning": "Bu saçma hurafelerini umursamıyorum" },
    { "phrase": "Noli me vocare, ego te vocabo", "meaning": "Beni çağırmayı bırak, ben seni çağıracağım" },
    { "phrase": "Non vi, sed arte", "meaning": "Güç değil, yetenekle" },
    { "phrase": "Navigare necesse est", "meaning": "Yelken açmak zorunludur" },
    { "phrase": "O tempora, o mores!", "meaning": "O günler, o ahlak!" },
    { "phrase": "Omnia vincit amor", "meaning": "Aşk her şeyi yener" },
    { "phrase": "Ora et labora", "meaning": "Dua et ve çalış" },
    { "phrase": "Ordo ab chao", "meaning": "Kargaşadan düzen doğar" },
    { "phrase": "Odi et amo", "meaning": "Seviyorum ve nefret ediyorum" },
    { "phrase": "Oculi omnium in te sperant, Domine", "meaning": "Tüm gözler sana umut bağlıyor, Rabbim" },
    { "phrase": "Ora pro nobis", "meaning": "Bizi destekle" },
    { "phrase": "Oderint, dum metuant", "meaning": "Nefret etsinler, korksunlar yeter" },
    { "phrase": "Omnia mea mecum porto", "meaning": "Tüm eşyalarımı yanımda taşıyorum" },
    { "phrase": "O quam cito transit gloria mundi", "meaning": "Ah, dünyevi şan ne kadar çabuk geçiyor" },
    { "phrase": "Omnia mutantur, nihil interit", "meaning": "Her şey değişir, hiçbir şey yok olmaz" },
    { "phrase": "Obsta principiis", "meaning": "İlk adımlara engel ol" },
    { "phrase": "Ora pro vita", "meaning": "Hayat için dua et" },
    { "phrase": "Ora et labora et lege", "meaning": "Dua et, çalış ve oku" },
    { "phrase": "Omnes vulnerant, ultima necat", "meaning": "Tüm yaralar acıtır, sonuncusu öldürür" },
    { "phrase": "Omnia vincit veritas", "meaning": "Gerçek her şeyi yener" },
    { "phrase": "Omnia causa fiunt", "meaning": "Her şey bir sebep için olur" },
    { "phrase": "Omnes una manet nox", "meaning": "Hepimizi bir gece bekliyor" },
    { "phrase": "Ora et labora et lege, Deus adest sine mora", "meaning": "Dua et, çalış, oku, Tanrı hemen burada" },
    { "phrase": "Optimum medicamentum quies est", "meaning": "En iyi ilaç dinlenmedir" },
    { "phrase": "Omnia fidelia mundum creant", "meaning": "İnandığımız her şey dünyayı yaratır" },
    { "phrase": "Opus citatum", "meaning": "Yukarıda bahsedilen eser" },
    { "phrase": "Omnia vincit labor", "meaning": "Çalışma her şeyi yener" },
    { "phrase": "Omnia munda mundis", "meaning": "Saf olanlar için her şey saf olur" },
    { "phrase": "Otium post negotium", "meaning": "İşten sonra boş zaman" },
    { "phrase": "O fortunatos nimium sua si bona norint", "meaning": "Ne kadar mutlu olduklarını iyi bilseler" },
    { "phrase": "Omne vivum ex ovo", "meaning": "Her canlı yumurtadan gelir" },
    { "phrase": "Odi et amo, quare id faciam fortasse requiris", "meaning": "Seviyorum ve nefret ediyorum, bunu niye yaptığımı belki sorarsın" },
    { "phrase": "Oportet vivere", "meaning": "Yaşamak zorunludur" },
    { "phrase": "Obiter dictum", "meaning": "Yanlışlıkla söylenmiş bir şey" },
    { "phrase": "Omne initium difficile est", "meaning": "Her başlangıç zordur" },
    { "phrase": "Omne trium perfectum", "meaning": "Her şeyin üçte biri tamamlanmıştır" },
    { "phrase": "Oculi plus vident quam oculus", "meaning": "İki gözden daha fazla görür" },
    { "phrase": "Odium theologicum", "meaning": "İlahiyat düşmanlığı" },
    { "phrase": "Ordo ad chaos", "meaning": "Düzenin kaosa dönüşmesi" },
    { "phrase": "Ordo naturalis", "meaning": "Doğal düzen" },
    { "phrase": "Oratio pro domo", "meaning": "Kendi hakkında konuşma" },
    { "phrase": "Ora et labora, Deus adest, spera et ama", "meaning": "Dua et, çalış, Tanrı orada, umut et ve sev" },
    { "phrase": "Omne ignotum pro magnifico", "meaning": "Bilinmeyen her şey büyüktür" },
    { "phrase": "Omne vivum ex vivo", "meaning": "Canlılar canlılardan gelir" },
    { "phrase": "Otium cum dignitate", "meaning": "Saygın bir şekilde boş zaman" },
    { "phrase": "Oblectamentum et doctrina", "meaning": "Eğlence ve öğretim" },
    { "phrase": "Oculus non vidit, nisi iudex sit aequus", "meaning": "Adaletli bir hakim görmek zorundadır" },
    { "phrase": "Omnia mutantur, nos et mutamur in illis", "meaning": "Her şey değişir, biz de onlarla birlikte değişiriz" },
    { "phrase": "Omnia vincit amor, et nos cedamus amori", "meaning": "Aşk her şeyi yener, biz de aşka boyun eğelim" },
    { "phrase": "Pecunia non olet", "meaning": "Para kokmaz" },
    { "phrase": "Per aspera ad astra", "meaning": "Sıkıntılı yollardan yıldızlara" },
    { "phrase": "Per capita", "meaning": "Kişi başına" },
    { "phrase": "Persona non grata", "meaning": "İstenmeyen kişi" },
    { "phrase": "Post hoc, ergo propter hoc", "meaning": "Bundan sonra, bundan dolayı" },
    { "phrase": "Pro bono", "meaning": "Ücretsiz olarak" },
    { "phrase": "Pro forma", "meaning": "Biçimsel olarak" },
    { "phrase": "Pro tempore", "meaning": "Geçici olarak" },
    { "phrase": "Primum non nocere", "meaning": "İlk olarak zarar verme" },
    { "phrase": "Pro rata", "meaning": "Orantılı olarak" },
    { "phrase": "Prima facie", "meaning": "İlk bakışta" },
    { "phrase": "Per se", "meaning": "Kendiliğinden" },
    { "phrase": "Per diem", "meaning": "Günlük olarak" },
    { "phrase": "Persona grata", "meaning": "İstenen kişi" },
    { "phrase": "Per annum", "meaning": "Yıllık olarak" },
    { "phrase": "Prima donna", "meaning": "Başrol kadın sanatçı" },
    { "phrase": "Post mortem", "meaning": "Ölüm sonrası" },
    { "phrase": "Pro et contra", "meaning": "Karşı ve lehine" },
    { "phrase": "Per angusta ad augusta", "meaning": "Zorluklarla yükselişe" },
    { "phrase": "Post scriptum (P.S.)", "meaning": "Sonrasında yazılan" },
    { "phrase": "Panem et circenses", "meaning": "Ekmek ve sirkler" },
    { "phrase": "Per secula seculorum", "meaning": "Sonsuzlukların sonsuzluğuna" },
    { "phrase": "Post meridiem (P.M.)", "meaning": "Öğleden sonra" },
    { "phrase": "Pater familias", "meaning": "Aile babası" },
    { "phrase": "Pax vobiscum", "meaning": "Huzur sizinle olsun" },
    { "phrase": "Per ardua ad alta", "meaning": "Güçlüklerden yüksekliklere" },
    { "phrase": "Per crucem ad lucem", "meaning": "Çarmıhtan ışığa" },
    { "phrase": "Per omnia saecula saeculorum", "meaning": "Sonsuz çağlar boyunca" },
    { "phrase": "Per varios casus", "meaning": "Çeşitli olaylarla" },
    { "phrase": "Per mare, per terras", "meaning": "Denizlerden, kara parçalarından" },
    { "phrase": "Prima luce", "meaning": "İlk ışıkta" },
    { "phrase": "Pro patria", "meaning": "Vatan için" },
    { "phrase": "Primum vivere, deinde philosophari", "meaning": "Önce yaşamak, sonra düşünmek" },
    { "phrase": "Periculum in mora", "meaning": "Tehlike gecikmede" },
    { "phrase": "Parva leves capiunt animas", "meaning": "Küçük şeyler hafif ruhları ele geçirir" },
    { "phrase": "Persona muta", "meaning": "Dilsiz karakter" },
    { "phrase": "Pax in terra", "meaning": "Yeryüzünde barış" },
    { "phrase": "Primus inter pares", "meaning": "Eşler arasında birinci" },
    { "phrase": "Post tenebras lux", "meaning": "Karanlıktan sonra ışık" },
    { "phrase": "Per fas et nefas", "meaning": "İyilik ve kötülük yoluyla" },
    { "phrase": "Prima inter arma", "meaning": "Silahlar arasında birinci" },
    { "phrase": "Per vias rectas", "meaning": "Doğru yollarla" },
    { "phrase": "Per multos annos", "meaning": "Nice yıllara" },
    { "phrase": "Per aspera ad meliora", "meaning": "Sıkıntılarla daha iyiye" },
    { "phrase": "Pecuniae obediunt omnia", "meaning": "Para her şeye hükmeder" },
    { "phrase": "Patria potestas", "meaning": "Baba hakkı" },
    { "phrase": "Pro bono publico", "meaning": "Genel halk yararına" },
    { "phrase": "Primum movens", "meaning": "İlk hareket eden" },
    { "phrase": "Plus ultra", "meaning": "Daha ileri" },
    { "phrase": "Pari passu", "meaning": "Aynı adımlarla" },
    { "phrase": "Perpetuum mobile", "meaning": "Sürekli hareket" },
    { "phrase": "Pro rata parte", "meaning": "Orantılı olarak" },
    { "phrase": "Pacta sunt servanda", "meaning": "Anlaşmaların uygulanması gerekir" },
    { "phrase": "Per inania regna", "meaning": "Boş hayallere" },
    { "phrase": "Proximo mense", "meaning": "Gelecek ay" },
    { "phrase": "Primus motor", "meaning": "İlki hareket eden" },
    { "phrase": "Post prandium", "meaning": "Yemekten sonra" },
    { "phrase": "Pulvis et umbra sumus", "meaning": "Toz ve gölgeyiz" },
    { "phrase": "Rara avis", "meaning": "Nadir kuş" },
    { "phrase": "Res publica", "meaning": "Devlet" },
    { "phrase": "Res gestae", "meaning": "Yapılan işler" },
    { "phrase": "Requiescat in pace (R.I.P.)", "meaning": "Huzur içinde uyusun" },
    { "phrase": "Ratio decidendi", "meaning": "Kararın sebebi" },
    { "phrase": "Repetitio est mater studiorum", "meaning": "Tekrar, çalışmanın annesidir" },
    { "phrase": "Rebus sic stantibus", "meaning": "Durum böyle dururken" },
    { "phrase": "Reprobo", "meaning": "Reddediyorum" },
    { "phrase": "Repetita iuvant", "meaning": "Tekrarlar yardımcı olur" },
    { "phrase": "Reductio ad absurdum", "meaning": "Saçma sonuçlara ulaşma" },
    { "phrase": "Roma locuta, causa finita", "meaning": "Roma konuştu, dava sona erdi" },
    { "phrase": "Res ipsa loquitur", "meaning": "Durum kendisi konuşur" },
    { "phrase": "Rident stolidi verba Latina", "meaning": "Cahiller Latinceyi güler" },
    { "phrase": "Rara in bello pacem, in pace bellum habent", "meaning": "Savaşta barış, barışta savaş olur" },
    { "phrase": "Rege, lege, grege", "meaning": "Kral, kanun, halk" },
    { "phrase": "Rex regnat sed non gubernat", "meaning": "Kral hüküm sürer, ancak yönetmez" },
    { "phrase": "Repellit aras, stultitia monstrat viam", "meaning": "Arı kovar, aptallık yol gösterir" },
    { "phrase": "Regnat populus", "meaning": "Halk hüküm sürer" },
    { "phrase": "Re vera", "meaning": "Gerçekten" },
    { "phrase": "Radix malorum est cupiditas", "meaning": "Kötülüklerin kökü hırsdır" },
    { "phrase": "Requiem aeternam dona eis", "meaning": "Onlara sonsuz huzur ver" },
    { "phrase": "Ratio et consilium propriae ducis artes", "meaning": "Akıl ve danışmanlık liderin özel yetenekleridir" },
    { "phrase": "Resurrectio mortuorum", "meaning": "Ölülerin dirilişi" },
    { "phrase": "Requiem aeternam", "meaning": "Sonsuz huzur" },
    { "phrase": "Risum teneatis, amici?", "meaning": "Gülebiliyor musunuz, dostlar?" },
    { "phrase": "Raptus regaliter", "meaning": "Kral gibi kaçırıldı" },
    { "phrase": "Risus abundat in ore stultorum", "meaning": "Aptalların ağzında bolca gülüş vardır" },
    { "phrase": "Rex non potest peccare", "meaning": "Kral hata yapamaz" },
    { "phrase": "Res severa est verum gaudium", "meaning": "Gerçek mutluluk ciddi bir iştir" },
    { "phrase": "Regina in regno suo est imperatrix", "meaning": "Kendi krallığında kraliçe imparator gibidir" },
    { "phrase": "Rex est lex", "meaning": "Kral kanundur" },
    { "phrase": "Res est sacra miser", "meaning": "Acı, kutsal bir şeydir" },
    { "phrase": "Res est dubia", "meaning": "Durum belirsiz" },
    { "phrase": "Reditus ad integrum", "meaning": "Tamamen iyileşmek" },
    { "phrase": "Resurgam", "meaning": "Dirileceğim" },
    { "phrase": "Roma aeterna", "meaning": "Ebedi Roma" },
    { "phrase": "Reditus ad infinitum", "meaning": "Sonsuzluğa dönüş" },
    { "phrase": "Rerum cognoscere causas", "meaning": "Şeylerin nedenlerini bilmek" },
    { "phrase": "Rex noster est dominus", "meaning": "Kral bizim efendimizdir" },
    { "phrase": "Rursus", "meaning": "Yine, tekrar" },
    { "phrase": "Recessus mentis", "meaning": "Zihnin geri çekilmesi" },
    { "phrase": "Reprobatio legis", "meaning": "Kanunu reddetme" },
    { "phrase": "Reditus ad originem", "meaning": "Kökene geri dönüş" },
    { "phrase": "Ratione temporis", "meaning": "Zaman açısından" },
    { "phrase": "Salus populi suprema lex esto", "meaning": "Halkın refahı en yüce kanun olsun" },
    { "phrase": "Scientia potentia est", "meaning": "Bilgi güçtür" },
    { "phrase": "Si vis pacem, para bellum", "meaning": "Barış istiyorsan, savaşa hazırlan" },
    { "phrase": "Sine qua non", "meaning": "Olmazsa olmaz" },
    { "phrase": "Status quo", "meaning": "Mevcut durum" },
    { "phrase": "Summum bonum", "meaning": "En yüksek iyilik" },
    { "phrase": "Sic transit gloria mundi", "meaning": "Dünyadaki zafer böyle geçer" },
    { "phrase": "Sub rosa", "meaning": "Gizlice" },
    { "phrase": "Sui generis", "meaning": "Kendine özgü" },
    { "phrase": "Sine die", "meaning": "Belirsiz bir tarihe kadar" },
    { "phrase": "Salus aegroti suprema lex esto", "meaning": "Hastanın iyiliği en yüce kanun olsun" },
    { "phrase": "Semper fidelis", "meaning": "Daima sadık" },
    { "phrase": "Sub judice", "meaning": "Yargı sürecinde" },
    { "phrase": "Sine ira et studio", "meaning": "Öfke ve eğilim olmadan" },
    { "phrase": "Sic transit gloria", "meaning": "Zafer böyle geçer" },
    { "phrase": "Status quo ante", "meaning": "Önceki durum" },
    { "phrase": "Scio me nihil scire", "meaning": "Bilmediğimi biliyorum" },
    { "phrase": "Sui juris", "meaning": "Kendi kendine hükmeden" },
    { "phrase": "Sub poena", "meaning": "Cezai yaptırıma tabi olarak" },
    { "phrase": "Semper paratus", "meaning": "Her zaman hazır" },
    { "phrase": "Solutio indebiti", "meaning": "Haksız ödeme" },
    { "phrase": "Sic semper tyrannis", "meaning": "Tyrannoslara her zaman böyle olur" },
    { "phrase": "Satis superque", "meaning": "Yeterince fazla" },
    { "phrase": "Secundum naturam", "meaning": "Doğaya uygun olarak" },
    { "phrase": "Sua sponte", "meaning": "Kendiliğinden" },
    { "phrase": "Terra sancta", "meaning": "Kutsal topraklar" },
    { "phrase": "Tempus fugit, tempus labitur", "meaning": "Zaman geçer, zaman akar" },
    { "phrase": "Tertium millennium", "meaning": "Üçüncü bin yıl" },
    { "phrase": "Terra australis incognita", "meaning": "Bilinmeyen güney toprakları" },
    { "phrase": "Tempus fugit, mors venit", "meaning": "Zaman geçer, ölüm gelir" },
    { "phrase": "Tabula geographica", "meaning": "Coğrafi harita" },
    { "phrase": "Terra firma", "meaning": "Sağlam toprak" },
    { "phrase": "Tertium datur", "meaning": "Üçüncü seçenek vardır" },
    { "phrase": "Tabula rasa", "meaning": "Temiz tahta" },
    { "phrase": "Tempus edax rerum", "meaning": "Zaman her şeyi yiyendir" },
    { "phrase": "Turris eburnea", "meaning": "Fildişinden kule" },
    { "phrase": "Tabula gratulatoria", "meaning": "Tebrik masası" },
    { "phrase": "Tempus brevis est", "meaning": "Zaman kısadır" },
    { "phrase": "Tantum quantum", "meaning": "Sadece o kadar" },
    { "phrase": "Tempus omnia revelat", "meaning": "Zaman her şeyi ortaya çıkarır" },
    { "phrase": "Terra nova", "meaning": "Yeni dünya" },
    { "phrase": "Totus tuus", "meaning": "Tamamen seninim" },
    { "phrase": "Tempus fugit, amor manet", "meaning": "Zaman geçer, aşk kalır" },
    { "phrase": "Tant pis", "meaning": "Ne yazık ki" },
    { "phrase": "Tempus rerum imperator", "meaning": "Zaman her şeyin hükümdarıdır" },
    { "phrase": "Tertium quid", "meaning": "Üçüncü bir şey" },
    { "phrase": "Tanto monta", "meaning": "Aynı değerdedir" },
    { "phrase": "Tempus est iocundum", "meaning": "Zaman eğlencelidir" },
    { "phrase": "Terra ignota", "meaning": "Bilinmeyen topraklar" },
    { "phrase": "Tabula picta", "meaning": "Resimli levha" },
    { "phrase": "Tantum ergo", "meaning": "Sadece bu kadar" },
    { "phrase": "Tempus fugit, memento mori", "meaning": "Zaman geçer, ölümü hatırla" },
    { "phrase": "Tu quoque", "meaning": "Sen de" },
    { "phrase": "Tabula scripta", "meaning": "Yazılı levha" },
    { "phrase": "Tempus fugit, carpe diem", "meaning": "Zaman geçer, anı yaşa" },
    { "phrase": "Tertium genus", "meaning": "Üçüncü tür" },
    { "phrase": "Tant pis pour eux", "meaning": "Onlar için ne yazık ki" },
    { "phrase": "Tempus fugit, tempus irrevocabilis", "meaning": "Zaman geçer, geri alınamaz" },
    { "phrase": "Terra marique", "meaning": "Karada ve denizde" },
    { "phrase": "Tempus fugit, hora volant", "meaning": "Zaman geçer, saatler uçar" },
    { "phrase": "Tabula in naufragio", "meaning": "Gemide kurtulanlar listesi" },
    { "phrase": "Tantum cibo quantum libitum est", "meaning": "İstediğin kadar yemek" },
    { "phrase": "Tempus fugit, spectaculum manet", "meaning": "Zaman geçer, gösteri kalır" },
    { "phrase": "Tertium comparationis", "meaning": "Karşılaştırmanın üçüncü unsuru" },
    { "phrase": "Tant qu'il y aura des hommes", "meaning": "İnsanlar olduğu sürece" },
    { "phrase": "Tempus fugit, amor vincit omnia", "meaning": "Zaman geçer, aşk her şeyi yenip geçer" },
    { "phrase": "Terra promissionis", "meaning": "Vaadedilen toprak" },
    { "phrase": "Ubi concordia, ibi victoria", "meaning": "Uyum olduğu yerde zafer vardır" },
    { "phrase": "Ubi dubium, ibi libertas", "meaning": "Şüphe olduğu yerde özgürlük vardır" },
    { "phrase": "Ubi amor, ibi oculus", "meaning": "Aşk olduğu yerde göz vardır" },
    { "phrase": "Ubi bene, ibi patria", "meaning": "İyi olduğu yerde vatan vardır" },
    { "phrase": "Ubi caritas, ibi Deus est", "meaning": "Sevgi olduğu yerde Tanrı vardır" },
    { "phrase": "Ubi tu Gaius, ibi ego Gaia", "meaning": "Sen nerede Gaius, orada ben Gaia" },
    { "phrase": "Ultima ratio", "meaning": "Son çare" },
    { "phrase": "Ubi sunt", "meaning": "Nerede?" },
    { "phrase": "Ultima Thule", "meaning": "Ulaşılamaz yer" },
    { "phrase": "Urbi et Orbi", "meaning": "Şehre ve dünyaya" },
    { "phrase": "Usus est tyrannus", "meaning": "Alışkanlık bir tirandır" },
    { "phrase": "Utile dulci", "meaning": "Faydalı ve zevkli" },
    { "phrase": "Ubi mel, ibi apes", "meaning": "Nerede bal, orada arılar" },
    { "phrase": "Usus est magister optimus", "meaning": "Tecrübe en iyi öğretmendir" },
    { "phrase": "Ut incepit fidelis, sic permanet", "meaning": "Sadık başladığı gibi devam eder" },
    { "phrase": "Usque ad finem", "meaning": "Sonuna kadar" },
    { "phrase": "Ut sementem feceris, ita metes", "meaning": "Ne ekersen onu biçersin" },
    { "phrase": "Ut desint vires, tamen est laudanda voluntas", "meaning": "Eksik güç olsa da niyet takdir edilmelidir" },
    { "phrase": "Ut ameris, amabilis esto", "meaning": "Sevilmen için sevimli ol" },
    { "phrase": "Ubi amici, ibi opes", "meaning": "Nerede arkadaşlar, orada zenginlikler" },
    { "phrase": "Vox clamantis in deserto", "meaning": "Çölde çığlık atan bir ses" },
    { "phrase": "Veni, vidi, fugi", "meaning": "Geldim, gördüm, kaçtım" },
    { "phrase": "Vade in pace", "meaning": "Huzur içinde git" },
    { "phrase": "Verba docent, exempla trahunt", "meaning": "Sözler öğretir, örnekler çeker" },
    { "phrase": "Vox et praeterea nihil", "meaning": "Sadece bir ses" },
    { "phrase": "Venenum in auro bibitur", "meaning": "Zehir altında içilir" },
    { "phrase": "Vires acquirit eundo", "meaning": "Giderken güç kazanır" },
    { "phrase": "Verbum non amplius addam", "meaning": "Başka bir şey eklemeyeceğim" },
    { "phrase": "Vade mecum", "meaning": "Benimle gel" },
    { "phrase": "Vade retro", "meaning": "Geri git" },
    { "phrase": "Veritas odium parit", "meaning": "Doğruluk nefret doğurur" },
    { "phrase": "Verbum sat sapienti est", "meaning": "Bilge için söz yeterlidir" },
    { "phrase": "Vis major", "meaning": "Mücbir sebep" },
    { "phrase": "Vita brevis, ars longa", "meaning": "Hayat kısa, sanat uzun" },
    { "phrase": "Vivere est cogitare", "meaning": "Yaşamak düşünmektir" },
    { "phrase": "Venire contra factum proprium", "meaning": "Kendi eylemlerine aykırı davranmak" },
    { "phrase": "Volenti non fit injuria", "meaning": "İsteyene haksızlık yapılmaz" },
    { "phrase": "Vultus est index animi", "meaning": "Yüz, ruhun bir göstergesidir" },
    { "phrase": "Verba volant, scripta manent", "meaning": "Sözler uçar, yazılı metinler kalır" },
    { "phrase": "Veni, vidi, vici", "meaning": "Geldim, gördüm, yendim" },
    { "phrase": "Vox populi, vox Dei", "meaning": "Halkın sesi, Tanrı'nın sesidir" },
    { "phrase": "Vivere est vincere", "meaning": "Yaşamak zaferdir" },
    { "phrase": "YOLO (You Only Live Once)", "meaning": "Bir kere yaşıyorsun" },
    { "phrase": "Yenesis", "meaning": "Başlangıç" },
    { "phrase": "Yenesis, interitus, perseverantia", "meaning": "Başlangıç, yok oluş, süreklilik" },
    { "phrase": "Yenesis, victoria, perpetuitas", "meaning": "Başlangıç, zafer, süreklilik" },
    { "phrase": "Yenesis, victoria, virtus", "meaning": "Başlangıç, zafer, erdem" },
    { "phrase": "Yenesis, vis, perpetuitas", "meaning": "Başlangıç, güç, süreklilik" },
    { "phrase": "Yenesis, vis, victoria", "meaning": "Başlangıç, güç, zafer" },
    { "phrase": "Yenesis, vis, virtus", "meaning": "Başlangıç, güç, erdem" },
    { "phrase": "Yenesis, virtus, perpetuitas", "meaning": "Başlangıç, erdem, süreklilik" },
    { "phrase": "Yenesis, virtus, victoria", "meaning": "Başlangıç, erdem, zafer" },
    { "phrase": "Zona incerta", "meaning": "Belirsiz bölge" },
    { "phrase": "Zelus est clavis sapientiae", "meaning": "Kıskançlık, bilgeliğin anahtarıdır" },
    { "phrase": "Zelus gaudet matrem suam", "meaning": "Kıskançlık, kendi annesine sevinir" },
    { "phrase": "Zelus virtutem custodit", "meaning": "Kıskançlık erdemi korur" },
    { "phrase": "Zoon politikon", "meaning": "Siyasi hayvan" },
    { "phrase": "Zenith", "meaning": "Zirve" },
    { "phrase": "Zodiacus", "meaning": "Zodyak" },
    { "phrase": "Zelotypia", "meaning": "Kıskançlık" },
    { "phrase": "Zephyrus", "meaning": "Batı rüzgarı" },
    { "phrase": "Zeta", "meaning": "Yunan alfabesinin altıncı harfi" },
    { "phrase": "Zeugma", "meaning": "Bir sözcüğün iki farklı anlamda kullanılması" },
    { "phrase": "Zen", "meaning": "Zihin ve bedenin uyumlu olduğu huzur halini ifade eden bir kavram" }
  ]
};
// --- OTOMATİK KATEGORİ BELİRLEME FONKSİYONU ---
function autoAssignCategory(phrase, meaning) {
    const text = (phrase + " " + meaning).toLowerCase();

    const hukukKeywords = ["yasa", "kanun", "suç", "hakim", "mahkeme", "hukuk", "sanık", "ceza", "dava", "sözleşme", "mülkiyet", "ab initio", "kısas"];
    const felsefeKeywords = ["düşünce", "felsefe", "akıl", "ruh", "erdem", "varlık", "bilgi", "gerçek", "mantık", "cogito", "anlam", "yaşam"];
    const tarihKeywords = ["sezar", "roma", "savaş", "imparator", "kral", "tarih", "m.ö.", "m.s.", "zafer", "asker", "alea iacta est", "oyun bitti"];

    if (hukukKeywords.some(keyword => text.includes(keyword))) {
        return "hukuk";
    } else if (felsefeKeywords.some(keyword => text.includes(keyword))) {
        return "felsefe";
    } else if (tarihKeywords.some(keyword => text.includes(keyword))) {
        return "tarih";
    } else {
        return "genel";
    }
}

// Veritabanını formatlıyoruz (Doğru diziye ulaşıyoruz ve otomatik kategori atıyoruz)
const data = database.latin_phrases.map(item => ({
    ...item,
    category: autoAssignCategory(item.phrase, item.meaning)
}));

// --- 2. GLOBAL DEĞİŞKENLER & DOM ELEMENTLERİ ---
let favorites = JSON.parse(localStorage.getItem('latin_favorites')) || [];
let currentCategory = 'all';
let searchQuery = '';

const phraseList = document.getElementById('phraseList');
const searchInput = document.getElementById('searchInput');
const countDisplay = document.getElementById('countDisplay');
const themeToggle = document.getElementById('themeToggle');
const filterBtns = document.querySelectorAll('.filter-btn');

// --- 3. GECE / GÜNDÜZ MODU (THEME) İŞLEMLERİ ---
function initTheme() {
    const savedTheme = localStorage.getItem('latin_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('latin_theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        icon.style.color = '#f1c40f';
    } else {
        icon.className = 'fas fa-moon';
        icon.style.color = '#fff';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// --- 4. FAVORİ İŞLEMLERİ ---
function toggleFavorite(phrase, btnElement) {
    const index = favorites.indexOf(phrase);
    
    if (index === -1) {
        favorites.push(phrase);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('latin_favorites', JSON.stringify(favorites));

    if (currentCategory === 'favorites') {
        applyFilters();
    } else {
        const icon = btnElement.querySelector('i');
        if (favorites.includes(phrase)) {
            btnElement.classList.add('active');
            icon.className = 'fas fa-heart';
        } else {
            btnElement.classList.remove('active');
            icon.className = 'far fa-heart';
        }
    }
}

// --- 5. KARTLARI EKRANA ÇİZME ---
function renderPhrases(phrases) {
    if (!phraseList) return;
    phraseList.innerHTML = '';
    if (countDisplay) countDisplay.textContent = phrases.length;

    if (phrases.length === 0) {
        phraseList.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--text-light); font-size: 1.2rem; padding: 2rem;">Aradığınız kriterlere uygun deyim bulunamadı.</p>';
        return;
    }

    phrases.forEach(item => {
        const isFav = favorites.includes(item.phrase);
        const favIconClass = isFav ? 'fas fa-heart' : 'far fa-heart';
        const favBtnClass = isFav ? 'fav-btn active' : 'fav-btn';
        
        const displayCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        
        const card = document.createElement('div');
        card.className = 'phrase-card';
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <button class="${favBtnClass}" data-phrase="${item.phrase}" title="Favorilere Ekle/Çıkar">
                        <i class="${favIconClass}"></i>
                    </button>
                    ${item.category !== 'genel' ? `<span class="category-tag">${displayCategory}</span>` : ''}
                    <div class="latin-text">${item.phrase}</div>
                    <div class="hint-text">Anlamını görmek için dokun</div>
                </div>
                
                <div class="card-back">
                    <button class="${favBtnClass}" data-phrase="${item.phrase}" title="Favorilere Ekle/Çıkar">
                        <i class="${favIconClass}"></i>
                    </button>
                    
                    <!-- Sağ üst köşedeki araçlar grubu (Kopyala ve Paylaş) -->
                    <div class="card-actions">
                        <button class="copy-card-btn" title="Kopyala">
                            <i class="fas fa-copy"></i>
                        </button>
                        <button class="share-card-btn" title="Paylaş">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>

                    <div class="turkish-text">${item.meaning}</div>
                    ${item.historyNote ? `
                        <div class="history-note">
                            <i class="fas fa-info-circle"></i> ${item.historyNote}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.fav-btn') || e.target.closest('.copy-card-btn') || e.target.closest('.share-card-btn')) return;
            card.classList.toggle('flipped');
        });

        // Favori Butonları İşlevselliği
        const favBtns = card.querySelectorAll('.fav-btn');
        favBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(item.phrase, btn);
                
                favBtns.forEach(b => {
                    const i = b.querySelector('i');
                    if (favorites.includes(item.phrase)) {
                        b.classList.add('active');
                        i.className = 'fas fa-heart';
                    } else {
                        b.classList.remove('active');
                        i.className = 'far fa-heart';
                    }
                });
            });
        });

        // Kopyalama Butonu İşlevselliği
        const copyBtn = card.querySelector('.copy-card-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const textToCopy = `"${item.phrase}" — ${item.meaning}`;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const icon = copyBtn.querySelector('i');
                    icon.className = 'fas fa-check';
                    copyBtn.title = 'Kopyalandı!';
                    
                    setTimeout(() => {
                        icon.className = 'fas fa-copy';
                        copyBtn.title = 'Kopyala';
                    }, 2000);
                });
            });
        }

        // Paylaşım Butonu İşlevselliği
        const shareBtn = card.querySelector('.share-card-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const shareText = `"${item.phrase}" — ${item.meaning} #Latince #Deyimler`;
                
                if (navigator.share) {
                    navigator.share({
                        title: 'Latince Deyim',
                        text: shareText,
                    }).catch(() => {});
                } else {
                    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
                    window.open(whatsappUrl, '_blank');
                }
            });
        }

        phraseList.appendChild(card);
    });
}

// --- 6. FİLTRELEME VE ARAMA ---
function applyFilters() {
    let filteredData = data;

    if (currentCategory === 'favorites') {
        filteredData = filteredData.filter(item => favorites.includes(item.phrase));
    } else if (currentCategory !== 'all') {
        filteredData = filteredData.filter(item => item.category === currentCategory);
    }

    if (searchQuery) {
        filteredData = filteredData.filter(item => 
            item.phrase.toLowerCase().includes(searchQuery) || 
            item.meaning.toLowerCase().includes(searchQuery)
        );
    }

    renderPhrases(filteredData);
}

// --- QUIZ / TEST MODU DEĞİŞKENLERİ ---
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quizContainer');
const currentQuestionNum = document.getElementById('currentQuestionNum');
const quizScore = document.getElementById('quizScore');
const quizQuestionText = document.getElementById('quizQuestionText');
const quizOptions = document.getElementById('quizOptions');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');

// --- Sonraki Soruya Geç Butonu Dinleyicisi ---
if (nextQuestionBtn) {
    const newBtn = nextQuestionBtn.cloneNode(true);
    nextQuestionBtn.parentNode.replaceChild(newBtn, nextQuestionBtn);
    
    const activeNextBtn = document.getElementById('nextQuestionBtn');
    
    activeNextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });
}

// Quizi Başlat
function startQuiz() {
    if (phraseList) phraseList.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    
    quizQuestions = [...data].sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    quizScore.textContent = score;
    
    loadQuestion();
}

// --- GÜNÜN DEYİMİ (PHRASE OF THE DAY) İŞLEMLERİ ---
function initWordOfTheDay() {
    const wotdContainer = document.getElementById('wordOfTheDay');
    if (!wotdContainer || !data || data.length === 0) return;

    const today = new Date().toISOString().split('T')[0];
    let savedWotd = JSON.parse(localStorage.getItem('latin_wotd'));

    let selectedPhrase;

    if (savedWotd && savedWotd.date === today) {
        selectedPhrase = data.find(item => item.phrase === savedWotd.phrase) || data[0];
    } else {
        const randomIndex = Math.floor(Math.random() * data.length);
        selectedPhrase = data[randomIndex];

        localStorage.setItem('latin_wotd', JSON.stringify({
            date: today,
            phrase: selectedPhrase.phrase
        }));
    }

    document.getElementById('wotdLatin').textContent = selectedPhrase.phrase;
    document.getElementById('wotdMeaning').textContent = selectedPhrase.meaning;
    
    const categoryEl = document.getElementById('wotdCategory');
    if (selectedPhrase.category && selectedPhrase.category !== 'genel') {
        categoryEl.textContent = selectedPhrase.category.charAt(0).toUpperCase() + selectedPhrase.category.slice(1);
        categoryEl.style.display = 'inline-block';
    } else {
        categoryEl.style.display = 'none';
    }

    const noteEl = document.getElementById('wotdNote');
    if (selectedPhrase.historyNote) {
        noteEl.innerHTML = `<i class="fas fa-info-circle"></i> ${selectedPhrase.historyNote}`;
        noteEl.style.display = 'block';
    } else {
        noteEl.style.display = 'none';
    }
}

// Soruyu Yükle
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    nextQuestionBtn.style.display = 'none';
    const currentQ = quizQuestions[currentQuestionIndex];
    currentQuestionNum.textContent = currentQuestionIndex + 1;
    quizQuestionText.textContent = `"${currentQ.phrase}" deyiminin anlamı nedir?`;

    let options = [currentQ.meaning];
    while (options.length < 4) {
        const randomItem = data[Math.floor(Math.random() * data.length)];
        if (!options.includes(randomItem.meaning)) {
            options.push(randomItem.meaning);
        }
    }
    options.sort(() => 0.5 - Math.random());

    quizOptions.innerHTML = '';
    options.forEach(optionText => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optionText;
        btn.addEventListener('click', () => selectOption(btn, optionText, currentQ.meaning));
        quizOptions.appendChild(btn);
    });
}

// Şık Seçildiğinde
function selectOption(selectedBtn, selectedText, correctText) {
    const allButtons = quizOptions.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedText === correctText) {
        selectedBtn.classList.add('correct');
        score += 10;
        quizScore.textContent = score;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if (btn.textContent === correctText) {
                btn.classList.add('correct');
            }
        });
    }

    nextQuestionBtn.style.display = 'block';
}

// Quiz Sonucu
function showQuizResult() {
    quizOptions.innerHTML = '';
    quizQuestionText.textContent = `Tebrikler! Quiz bitti. Toplam Puanınız: ${score} / 100`;
    currentQuestionNum.textContent = "10";
    nextQuestionBtn.style.display = 'none';
    
    const restartBtn = document.createElement('button');
    restartBtn.className = 'filter-btn active';
    restartBtn.textContent = 'Yeniden Başla';
    restartBtn.style.marginTop = '20px';
    restartBtn.addEventListener('click', startQuiz);
    quizOptions.appendChild(restartBtn);
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilters();
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentCategory = btn.getAttribute('data-filter');
        
        if (currentCategory === 'quiz') {
            startQuiz();
        } else {
            if (quizContainer) quizContainer.style.display = 'none';
            if (phraseList) phraseList.style.display = 'grid';
            applyFilters();
        }
    });
});

// --- 7. BAŞLATMA ---
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initWordOfTheDay();
    applyFilters();
});