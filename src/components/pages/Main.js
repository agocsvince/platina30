import React, { useEffect, useState } from 'react';
import '../../style.css';
import headset from "../images/headset.png"
import quality from "../images/quality.png";
import fast_delivery from "../images/fast-delivery.png";
import best_choice from "../images/best-choice.png";
import phoroterm from "../images/phoroterm.png";
import prokoncept from "../images/prokoncept.png";
import ytong from "../images/ytong.png";

const Main = props => {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const url = `https://api-eu-central-1.graphcms.com/v2/ckwq5z05y2e8n01xmgomm92ka/master?query=query%20MyQuery%20%7B%0A%20%20sliders%20%7B%0A%20%20%20%20pictures%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%09url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=MyQuery`;
        fetch(url)
        .then(res => res.json())
        .then(json => setSlider(json.data.sliders[0].pictures));
    }, []);
    
    return (  
            <main>
                <section id="house" className="grid pb-4 pl-3">
                        <div className="text ml-4 mt-4">
                            <h4 className="mb-05"><strong className="slash">\</strong> Garantáltan stressz mentesen</h4>
                            <h2 className="mb-2">Családi ház építés</h2>
                            <p>A kivitelező átvállalja az építkezés minden gondját. Ráadásul mindezt olyan áron, ami minden tekintetben megéri az építtetőnek, hiszen rengeteg kellemetlenségtől, stressztől, veszekedéstől kíméli meg a megrendelőt és egész családját, ráadásul a többi cég áraival is versenyképes!</p>
                            <div className="contact mt-4">
                                <a href="#contact" className="btn"><div className="btn-text">Beszéljünk <img className="ml-05" src={headset} alt=""/></div></a>
                            </div>
                        </div>
                        <div className="image"></div>
                </section>
                <section id="work" className="grid pt-4 px-3">
                    <div className="image ml-4"></div>
                    <div className="text mx-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Magas elvárás a dolgozók felé</h4>
                        <h2 className="mb-2">Munkavégzés magas<br/> színvonalon</h2>
                        <p>Gyakran előfordul, hogy a megrendelőknek csalódást okoz a kivitelező csapat viselkedése, hozzáállása. Hiába szimpatikus az árajánlat és maga a cégvezető is, ha a helyszínre érkező brigád már nem üti meg ezt a színvonalat. A Platina 3000 Kft. alkalmazottai felé folyamatosan elégséges elvárásokat támaszt, így a megrendelőnek nincs gondja , ezen kívül a munkavégzés során a dolgozók nem fogyasztanak alkoholt.</p>
                    </div>
                </section>
                <section id="key-ready" className="grid pt-6 px-3">
                    <div className="text mx-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Hatékony kivitelező csapat</h4>
                        <h2 className="mb-2">Gyors kulcsrakész családi ház</h2>
                        <p>Mindenki még mindig abban a tévhitben él, hogy egy építkezés évekig is eltart. Ezért nem mernek belevágni. Hiszen nem akarnak még éveket albérletben vagy a szülőknél eltölteni. Sőt olyan is előfordul, hogy a házépítés elhúzódása miatt a család szétesik a sok idegeskedéstől és a feszültségektől. Cégünk hatékony kivitelező csapatával ez nem fordulhat elő, az építkezés átlagosan 8-12 hónapot vesz igénybe. Célunk, hogy minden korosztály új ház építési  problémáját teljes rugalmassággal megoldja.</p>
                    </div>
                    <div className="image mr-4"></div>
                </section>
                <section id="general" className="grid mt-6 mb-6">
                    <div className="image ml-4"></div>
                    <div className="text mx-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Minden munkakör egy kézben</h4>
                        <h2 className="mb-2">Generálkivitelezés</h2>
                        <p>Mi is az a generálkivitelezés?<br/> A generálkivitelezés (general: általános) szó azt foglalja magában, hogy minden munkakört elvállalunk, legyen az nyílászáró, burkolás, festés, villanyszerelés, tetőfedés, fűtésszerelés. Nincs szükség az egyes részmunkákért más cégeket megbíznia, mert így egy kézben van minden.</p>
                    </div>
                </section>
                <section id="slider">
                    <div className="swiper mySwiper py-4">
                        <div className="swiper-wrapper">
                            {/* {slider.map(picture => (
                                <div className="swiper-slide" key={picture.id}><div style={{backgroundImage:"url(" + picture.url + ")"}}></div></div>
                            ))} */}
                          <div className="swiper-slide"><div className="pic-1"></div></div>
                          <div className="swiper-slide"><div className="pic-2"></div></div>
                          <div className="swiper-slide"><div className="pic-3"></div></div>
                          <div className="swiper-slide"><div className="pic-4"></div></div>
                          <div className="swiper-slide"><div className="pic-5"></div></div>
                          <div className="swiper-slide"><div className="pic-6"></div></div>
                          <div className="swiper-slide"><div className="pic-7"></div></div>
                          <div className="swiper-slide"><div className="pic-8"></div></div>
                          <div className="swiper-slide"><div className="pic-9"></div></div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                      </div>
                </section>
                <section id="build" className="pt-6 px-3">
                    <div className="ml-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Teljeskörű házépítés</h4>
                        <h2 className="mb-2">Családi házak és társasházak generál kivitelezése</h2>
                    </div>
                    <div className="grid">
                        <div className="text ml-4">
                            <p className="w-90">Az energiaárak kiszámíthatatlan emelkedésével új irányt vett az építőipar. Az elmúlt években a téglaházak iránti kereslet mellett megjelent a fokozott hőszigetelésű és polisztirol házak iránti érdeklődés. Ezen korszerű építőanyagok szakszerű beépítésével megszüntethetők az energiapazarlás legfőbb okozói, a hőhidak. A tartós minőségi színvonal érdekében cégünk az új technológiákhoz szükséges gépekkel, szerszámokkal és folyamatosan képzett szakemberekkel mindig az élen járt. 
                                <br/><br/>
                                Ezt korábbi megrendelőink elégedettsége, ajánlásai mellett az is bizonyítja, hogy a Wienerberger zRt. Porotherm Téglaházak Rendszerének kiemelt partnereként az általunk épített családi házak folyamatos minőség ellenőrzést követően megkapják a Mesterház Minőségi Igazolást. Emellett a ProKoncept termékek beépítője és a Xella Hungária zRt. Ytong ’Kész-Ház’ programjának tagjai is vagyunk.</p>
                        </div>
                        <div className="image mr-4"></div>
                    </div>
                    
                </section>
                <section id="build-2" className="pt-4 pb-4 px-7">
                    <p className="w-90 ml-4">A mai környezettudatos és energiatakarékos szemlélet egyre több megbízónkat ösztönöz alacsony energiafelhasználású és passzív házak építésére. Az alacsony hőátbocsátási tényezőnek (U≤0,2 W/m2k) köszönhetően hagyományos gázfűtés mellett napenergiával, talajhővel is hatékonyan üzemeltethetőek. Ehhez azonban már a tervezési fázisban kidolgozott műszaki koncepcióval kell rendelkezni, hogy az egyedi gépészeti megoldásokkal valóban komfortosan és költségkímélően működjön az épület. Cégünk a tervezést és kivitelezést is egy kézből kínálja, hogy kiszámítható határidővel minőségi otthonok születhessenek. </p>
                </section>
                <section id="build-3" className=" grid pb-4 px-7">
                    <div className="image ml-4 mr-4"></div>
                    <div className="text w-100">
                        <p className="w-90">A házépítéssel és vásárlással kapcsolatos minden terhet - tervezés, engedélyeztetés, közműszolgáltatói nyilatkozatok beszerzése, szakhatósági engedélyek, hitelügyintézés, generál kivitelezés - leveszünk az Ön válláról.
                            <br/><br/>
                            Amit biztosan nyújtani tudunk: <br/>
                            - Porotherm Mesterház Minősítés (Wienerberger minőség ellenőrzés) <br/>
                            - fix határidő fix árakkal <br/>
                            - korrekt szerződések <br/>
                            - weboldalunkon nyomon követhető fotó sorozat az építkezésről <br/>
                            - biztonságos és rugalmas fizetési feltételek <br/>
                            - előfinanszírozás hitelfelvétel esetén <br/>
                            - és több, mint 23 felépült ház referenciája <br/>
                            <br/>
                            Cégünk sikere abban rejlik, hogy mindig törekszünk az új és magas szintű technológiák elsajátítására, hogy megfeleljünk a kor követelményeinek. Figyelünk arra, hogy ügyfeleinkkel kölcsönös megelégedettségen alapuló hosszú távú, korrekt kapcsolatot tartsunk fenn. Így napjainkra már több, mint 45 felépült családi ház tekinthető meg referenciaként Pest megye területén. </p>
                    </div>
                </section>
                <section id="prices" className="my-6">
                    <div className="text mx-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Áraink</h4>
                        <h2 className="mb-2">Mennyibe kerül egy négyzetméter?</h2>
                        <p>Házépítés kapcsán általában kőművesek, villanyszerelők, burkolók és más szakiparosok munkájának szervezése jut eszünkbe. Pedig az anyagbeszerzés idő- és térbeli koordinálása, a szakhatósági engedélyek, az önkormányzati és APEH bejelentések, a közműszolgáltatók szerződései, a hitelfolyósító bankok rendelkezései, földhivatali papírok ügyintézése is kellenek ahhoz, hogy a felépült ház használatbavételi engedélyt kapjon. Ekkor van vége egy kulcsrakész építkezésnek.<br/><br/>
                            I.kategória: 445 000 ft / m2  5%-os áfát tartalmaz<br/>
                            II.kategória: 499 000 ft / m2  5%-os áfát tartalmaz<br/>
                            III.kategória 599 000 ft / m2  5%-os áfát tartalmaz<br/><br/>
                            A kategóriákat részletesen elküldjük önnek, hogy mit tartalmaz! <br/><br/>
                            Szerkezetkész állapot <br/>
                            I.kategória:  210 000 ft / m2  bruttó 5%-os áfát tartalmaz<br/>
                            II.kategória:  240 000 ft / m2  bruttó 5%-os áfát tartalmaz<br/>
                            III.kategória: 280 000 ft / m2  bruttó 5%-os áfát tartalmaz<br/><br/>
                            Terasz költsége:  115 000 ft /m2  bruttó ár 5% áfával<br/><br/>
                            A kivitelezési áraink sík területre épülő egyszintes családi ház mind szerkezetkész és mind kulcsrakész állapotba értendők. A tereprendezés, a közműcsatlakozások, valamint a kerítések és a teraszok külön költséget képeznek, mely megbeszélés alapján fixálható. A tetőtér és alagsor beépítése esetén is az árajánlatban szereplő árak a mérvadóak. Az ajánlatban szereplő áraink az Áfa-t tartalmazzák.<br/><br/>
                            A feltüntetett árak a 2007 évi CXXVII Áfa tv. alapján  lakótérre vonatkozólag 5% áfát tartalmazzák, garázs esetében 27% áfa számítandó!
                            <strong>Az áraink bruttó alapterületre</strong> - a homlokzat külső síkján mért terület -<strong> vonatkoznak. A hasznos alapterülethez képest kb. 30% többlettel kell kalkulálni, ami a falak által elfoglalt terület. Példa: 100 m2 hasznos lakótér kb 130 m2 bruttó alapterülettel valósítható meg.</strong>
                        </p>
                    </div>
                </section>
                <section id="planning" className="pt-6 pb-2">
                    <div className="text mx-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Tervezés menete</h4>
                        <h2 className="mb-2">Tervezés, engedélyezés</h2>
                        <p className="w-100 mx-1">Célunk a megrendelői igények teljes körű kielégítése mellett egységes építészeti koncepció megalkotása. A mindennapok praktikumának, építtető és építész együttműködése nyomán harmonikus, igazi otthon születhet. Az építőipar jelenlegi legnagyobb kihívása az energiatakarékos házak növekvő számú híveinek minőségi kiszolgálása. Ehhez ajánljuk fel az alacsony energia felhasználású és passzív házak tervezése és kivitelezése során szerzett gyakorlati tapasztalatainkat.</p>
                    </div>
                </section>
                <section id="planning-2" className="py-4">
                    <div className="container accordions-wrapper">
                        <div className="border">
                            <div className="accordion-wrapper">
                                <div className="accordion">Első egyezetető megbeszélés</div>
                                <div className="panel">
                                    <p>Megbízó adatainak felvétele, telek és az épület adottságai, elképzelések, ötletek
                                        megbeszélése</p>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="accordion-wrapper">
                                <div className="accordion">Árajánlat</div>
                                <div className="panel">
                                    <p>Fix árainknak köszönhetően, függetlenül az épület jellegétől ……………..- Ft/bruttó m2</p>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="accordion-wrapper">
                                <div className="accordion">Tervezési szerződés</div>
                                <div className="panel">
                                    <p>Szerződés megkötése. A munka határideje és a fizetési ütem meghatározása. </p>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="accordion-wrapper">
                                <div className="accordion">Vázlatterv (M=1:100)</div>
                                <div className="panel">
                                    <p>Alaprajzok, léptékhelyes tervek, homlokzatok bemutatása. Ennek elfogadásakor kerül
                                        leszámlázásra a teljes tervezési díj 50%-a</p>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="accordion-wrapper">
                                <div className="accordion">Hivatalos dokumentumok kiváltása</div>
                                <div className="panel">
                                    <p>Helyszínrajz, tulajdoni lap, kéményseprő eng., közműszolgáltatói nyilatkozatok kiváltása
                                        (ezek költségeit a megrendelő viseli)</p>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="accordion-wrapper">
                                <div className="accordion">Dokumentum beadása</div>
                                <div className="panel">
                                    <p>Megrendelő aláírásával jováhagyott, előírásoknak megfelelő tervdokumentáció beadása
                                        az építési hatósághoz, különbözet leszámlázása (fennmaradó 50 %)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-us" className="my-4">
                    <div className="text mx-4">
                        <h4 className="mb-05"><strong className="slash">\</strong> Rólunk</h4>
                        <h2 className="mb-1">Cégismertető</h2>
                        <p className="w-70 mx-1 mb-4">Cégünk 2000 óta tartó minőségpolitikájának és hosszú távú céljainak fő záloga a szakemberek kiválasztása, folyamatos képzése anyagi és erkölcsi megbecsülése. </p>
                    </div>
                    <div className="grid props mb-4">
                        <div className="prop">
                            <img src={quality} alt="quality"/>
                            <p className="w-100">Magas színvonalú minőség</p>
                        </div>
                        <div className="prop">
                            <img src={fast_delivery} alt="fast-delivery"/>
                            <p className="w-100">Határidők betartása</p>
                        </div>
                        <div className="prop">
                            <img src={best_choice} alt="best-choice"/>
                            <p className="w-100">Ügyfeleink bizalma</p>
                        </div>
                    </div>
                    <p className="mx-6 text-left">A kezdeti lakásfelújításokat napjainkra széles körű szolgáltatásokkal kiegészült építőipari tevékenység váltotta fel. Saját telephellyel, munkagépekkel, tervezőirodával és megbízható szakembergárdával állunk ügyfeleink rendelkezésére. 
                        Fontosnak tartjuk, hogy nemcsak az ügyfelek, de a társ -és partnerszervezetek felé is aktív a kommunikációnk. Ennek egyik legfőbb záloga, folyamatosan fejlesztett informatikai hátterünk, melynek keretei között létrehoztuk hetente frissülő fotógalériánkat, ahol minden építtetőnk nyomon követheti épülő házát weboldalunkon keresztül. Mindezen fejlesztések folyamatossága az ami garantálja, hogy a változó jogszabályi szigorításokkal és műszaki újításokkal lépést tudunk tartani. 
                        <br/><br/>
                        A minőséget nemcsak cégünk műszaki vezetői, hanem a beszállító partnerek szigorú licensz szerződései is garantálják ügyfeleink részére. Minden általunk épített házat folyamatosan ellenőriz a Wienerberger műszaki csoportja.
                        <br/><br/>
                        Továbbá partnerei vagyunk a Porotherm Téglaházak Rendszerének és az Ytong Kész Ház programjának.</p>
    
                    <div className="grid props my-8">
                        <div><a href="wienerberger.hu"><img src={phoroterm} alt=""/></a></div>
                        <div><a href="https://www.prokoncept.hu"><img src={prokoncept} alt=""/></a></div>
                        <div><a href="https://www.ytong.hu/"><img src={ytong} alt=""/></a></div>
                    </div>
                </section>
                <section id="contact" className="py-6">
                    <div className="text mx-4">
                        <h4 className="mb-05 text-center"><strong className="slash">\</strong> Kapcsolat</h4>
                        <h2 className="mb-1 text-center mb-4">Platina 3000 Kft.</h2>
                        <div className="grid mx-4 data">
                            <p>Cím: 2340 Kiskunlacháza, Bethlen G. u. 19. <br/> Cégjegyzékszám: 13-09-087534 <br/> Adószám: 12621297-2-13 <br/> Bankszla. szám: HU61 1040 2678 0002 3787 0000 0001   K&H Bank Ráckeve
                                <br/><br/>
                                <strong> Cégünk jogi képviselője:</strong> <br/> Bajnok és Virágh ügyvédi iroda <br/> Dr.Bajnok Zoltán ügyvéd <br/> 1055 Budapest, Szent István krt. 19.</p>
                            <p><strong>Cserhalmi Róbert</strong><br/>
                                Ügyvezető igazgató <br/><br/>
                                
                                Cím: 2340 Kiskunlacháza, Bethlen G. u. 19. <br/>
                                Tel: +36 70 940 9189 <br/>
                                Email: plutobalance@gmail.com
                                </p>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Main;