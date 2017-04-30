import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Lorem from 'react-lorem-component';

import '../style.css';

class LegalTemplate extends Component {
    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content">
                    <Row>
                        <Col xs={12} className="block">
                            <h1 className="text block__headline block__headline_h1">{this.props.headline}</h1>
                            {this.props.children ? this.props.children : <Lorem className="text block__text"/>}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const Conditions = () => (
    <LegalTemplate headline="Obchodné podmienky">
        <h2 className="text block__headline block__headline_h2">Prevádzkovateľ internetového portálu</h2>
        <p className="text block__text">
            Názov spoločnosti: Ľudotvor, s.r.o.<br />
            Ulica a číslo: Ulica priateľov mieru 22<br />
            Mesto a PSČ: Horné Výčapy<br />
            Štát: Slovensko<br />
            IČ: 1234567890<br />
            DIČ: 1234567890
        </p>
        <h2 className="text block__headline block__headline_h2">Zodpovedná osoba a kontakt</h2>
        <p className="text block__text">
            Izidor Straka, 0915456789<br/>
            Pracovná doba: 8.00 &mdash; 16.30
        </p>
        <h2 className="text block__headline block__headline_h2">Prijatie a vybavenie objednávky, kúpna zmluva</h2>
        <p className="text block__text">
            Objednávka kupujúceho je návrhom kúpnej zmluvy a samotná kúpna zmluva je uzatvorená momentom doručenia záväzného súhlasu kupujúceho i predávajúceho s týmto návrhom (záväzným potvrdením objednávky zo strany predávajúceho). Od tohto momentu medzi kupujúcim a predávajúcim vznikajú vzájomné práva a povinnosti.
            Uzatvorením kúpnej zmluvy kupujúci potvrdzuje, že sa zoznámil s týmito obchodnými podmienkami, vrátane reklamačných podmienok, a že s nimi súhlasí. Na tieto obchodné podmienky a reklamačný poriadok je kupujúci dostatočným spôsobom samotným uskutočnením objednávky upozornený a má možnosť sa s nimi zoznámiť.
        </p>
        <p className="text block__text">
        Predávajúci si vyhradzuje právo zrušiť objednávku alebo jej časť pred uzavretím kúpnej zmluvy v týchto prípadoch: tovar sa už nevyrába alebo nedodáva alebo sa výrazným spôsobom zmenila cena dodávaného tovaru. V prípade, že táto situácia nastane, predávajúci bude okamžite kontaktovať kupujúceho za účelom dohody o ďalšom postupe. V prípade, že Kupujúci zaplatil už časť alebo celú sumu kúpnej ceny, bude mu táto čiastka prevedená späť na jeho účet, k uzavretiu Kúpnej zmluvy nedôjde.
        Všetky objednávky prijaté týmto obchodom sú záväzné. Objednávku možno zrušiť pred jej expedíciou. V prípade, že nebude objednávka zrušená do doby pred expedíciou, a bude expedovaná, môže byť po objednávateľovi požaduje náhrada nákladov spojená s expedíciou tovaru. O prijatí objednávky ste automaticky informovaný elektronickou poštou - e-mailom. V detaile každého výrobku aj v potvrdení objednávky je predpokladaná dodacia lehota tovaru, ktorý nebol skladom. Pri každej položke je zobrazené, či je tovar na sklade alebo nie. Pokiaľ tovar nie je na sklade, alebo sklade dodávateľa, budeme Vás bezodkladne informovať o ďalšom termíne dodania.
        </p>
        <h2 className="text block__headline block__headline_h2">Storno objednávky</h2>
        <p className="text block__text">
            Ak urobíte storno objednávky do 12 hodín, považujeme objednávku za zrušenú. Storno môžete poslať e-mailom prípadne vykonať telefonicky. Pri zrušení objednávky je nutné uviesť Vaše meno, e-mail a číslo objednávky.
        </p>
        <h2 className="text block__headline block__headline_h2">Záruka</h2>
        <p className="text block__text">
            V balíku vždy nájdete daňový doklad. Záručná lehota začína plynúť dátumom uvedeným na doklade. Záručná lehota je uvedená u každého výrobku v detaile tovaru. V sporných prípadoch môže byť záručná lehota predĺžená o 5 (slovom päť) dní ako náhrada za čas dopravy.
        </p>
        <h2 className="text block__headline block__headline_h2">Rozpor s kúpnou zmluvou - všeobecné informácie</h2>
        <p className="text block__text">
            V prípade, že vec pri prevzatí kupujúcim nie je v zhode s kúpnou zmluvou (ďalej len "rozpor s kúpnou zmluvou"), má kupujúci právo na to, aby predávajúci bezplatne a bez zbytočného odkladu vec uviedol do stavu odpovedajúceho kúpnej zmluve, a to podľa požiadavky kupujúceho buď výmenou veci, alebo jej opravou; ak nie je takýto postup možný, môže kupujúci požadovať primeranú zľavu z ceny veci alebo od zmluvy odstúpiť. To neplatí, ak kupujúci pred prevzatím veci o rozpore s kúpnou zmluvou vedel alebo rozpor s kúpnou zmluvou sám spôsobil. Rozpor s kúpnou zmluvou, ktorý sa prejaví v priebehu šiestich mesiacov odo dňa prevzatia veci, sa považuje za rozpor existujúci už pri jeho prevzatí, ak to neodporuje povahe veci alebo pokiaľ sa nepreukáže opak.
            Na tovar poskytujeme záručnú dobu danú zákonom.
        </p>
        <h2 className="text block__headline block__headline_h2">Právo Spotrebiteľa odstúpiť od zmluvy</h2>
        <p className="text block__text">
            Ak je kúpna zmluva uzatvorená pomocou prostriedkov komunikácie na diaľku (v internetovom obchode), má spotrebiteľ právo odstúpiť od zmluvy do 14 dní od prevzatia tovaru. V takom prípade spotrebiteľ kontaktuje predávajúceho a najlepšie písomne uvedie, že odstupuje od zmluvy s uvedením čísla objednávky, dátumu nákupu a čísla účtu pre vrátenie peňazí. Peniaze je možné vrátiť tiež v hotovosti v sídle spoločnosti. Odstúpenie od zmluvy musí byť doručené najneskôr posledný deň 14 dňovej lehoty. V osobitných prípadoch môže byť s prihliadnutím na okolnosti predĺžená lehota vrátenia, nie však dlhšie ako 30 dní od doručenia.
            Toto ustanovenie zákona však nemožno chápať ako možnosť bezplatného zapožičania tovaru. Spotrebiteľ v prípade využitia práva na odstúpenie od zmluvy do 14 dní od prevzatia plnenia, musí dodávateľovi vydať všetko, čo na základe kúpnej zmluvy získal. Ak to už nie je dobre možné (napr. v medziobdobí bol tovar zničený alebo spotrebovaný), musí spotrebiteľ poskytnúť peňažnú náhradu ako protihodnotu toho, čo už nemôže byť vydané. Ak je vrátený tovar poškodený iba čiastočne, môže predávajúci uplatniť na spotrebiteľovi právo na náhradu škody a započítať svoj nárok na vrátenú kúpnu cenu. Predávajúci je v takom prípade povinný vzniknutú škodu preukázať. Predávajúci spotrebiteľovi v takom prípade vracia iba takto zníženú kúpnu cenu.
            Na kúpnu cenu, ktorá má byť kupujúcemu vrátená, môže predávajúci naviac započítať svoje skutočne vynaložené náklady spojené s vrátením tovaru (náklady na prepravu a pod).
        </p>
        <h2 className="text block__headline block__headline_h2">Právo na odstúpenie od zmluvy spotrebiteľ nemá, v prípade zmlúv:</h2>
        <ul className="text block__text">
            <li>na poskytovanie Služieb, ak s ich plnením bolo s jeho súhlasom začaté pred uplynutím lehoty 14 dní od prevzatia plnenia,</li>
            <li>na dodávku tovaru alebo služieb, ktorých cena závisí na výchylkách finančného trhu nezávisle na vôli predávajúceho, </li>
            <li>na dodávku tovaru upraveného podľa priania kupujúceho alebo pre jeho osobu, ako aj tovar, ktorý podlieha rýchlej skaze, opotrebovaniu alebo zastaraniu, </li>
            <li>na dodávku audio a video nahrávok a počítačových programov, ak poruší kupujúci ich originálny obal, </li>
            <li>na dodávku novín, periodík a časopisov, spočívajúcich v hre alebo lotérii.</li>
        </ul>
        <p className="text block__text">
            <br/>
            <br/>
            Váš Ľudotvor.
        </p>
        <p className="text <block__text></block__text>">
            Obchodné podmienky sú platné od 1. 4. 2017 do odvolania. 
            Informácie pre kupujúcich: v prípade zmeny obchodných podmienok sú platné obchodné podmienky, ktoré boli v platnosti k dátumu nákupu.
        </p>
    </LegalTemplate>
);

const Return = () => (
    <LegalTemplate headline="Reklamačný poriadok">
        <p className="text block__text">
            Výrobky, na ktoré sa vzťahuje právo uplatnenia reklamácie musia byť odovzdané na posúdenie ihneď po zistení závady, musia byť čisté a s náležitými dokladmi a popisom závady, prípadne označeným miestom závady.
        </p>
        <h2 className="text block__headline block__headline_h2">Ako postupovať</h2>
        <p className="text block__text">
            V prípade reklamácie môžete zvoliť dve možnosti, postupujte podľa popisu nižšie: Zašlite výrobok na adresu &mdash; "kontaktná adresa". 
            Preprava je hradená stranou predávajúceho. Akonáhle budete vedieť kedy a kde zásielku budeme môcť vyzdvihnúť, kontaktujte nás. 
            Zásielka musí byť kompletná (vrátane príslušenstva a všetkej dokumentácie) a v stave, v akom ste ju prevzali pri dodávke. K tovaru
            priložte doklad o kúpe. Vždy prosím použite baliaci papier či kartón, tak aby nemohlo počas prepravy dôjsť k polepenie, popísanie či
            inému znehodnoteniu pôvodných obalov. Neposielajte tovar na dobierku, v takom prípade nebude tovar prevzatý. Odporúčame Vám tovar poistiť.
        </p>
        <p className="text block__text">
            Ihneď po obdržaní tovaru obdržíte reklamačný protokol. Tovar musí byť pre prepravu riadne zabalený, tak aby nedošlo k jeho ďalšiemu prípadnému poškodeniu.
            Chybný alebo poškodený tovar bude vymenený alebo bude vrátená kúpna cena. K tovaru musia byť priložené všetky listiny, ktoré nakupujúci s tovarom obdržal,
            teda napríklad paragón, záručný list a iné. Predávajúci nepreberá zodpovednosť za škody vyplývajúci z prevádzky produktov, funkčných vlastností a škôd z
            neodborného používania produktov, rovnako ako škôd spôsobených vonkajšími udalosťami a chybnou manipuláciou. Na vady tohto pôvodu sa nevzťahuje ani poskytnutá záruka. Tovar je z hygienických dôvodov na reklamáciu prijatý len riadne vyčistený. Ak výrobca poskytuje záruku dlhšiu, je uvedená pri tovare v katalógu. U zamietnutých reklamácií môžu byť účtované náklady na reklamačné konanie a manipulačné poplatky. O vybavení reklamácie budete informovaní e-mailom, prípadne SMS. Rovnako ako pri dodaní objednávky budete informovaní o expedícii balíka a termíne doručenia. Ďakujeme Vám za čas, ktorý ste strávili prečítaním obchodných podmienok.
        </p> 
    </LegalTemplate>
);

const Privacy = () => (
    <LegalTemplate headline="Ochrana osobných údajov">
        <p className="text block__text">
            Vyhlasujeme, že dáta slúžia len pre účely identifikácie pri nákupe vo firme "názov firmy" a nebudú poskytnuté tretím osobám ani inak zneužité. Potvrdením registrácie súhlasím so zasielaním ponukových e-mailov z internetového obchodu firmy "Vaša firma".
            Ponukové e-maily budú zasielané maximálne dvakrát do mesiaca a veľkosť jednotlivých e-mailových správ neprekročí 50kB. Službu zasielania noviniek e-mailom môžete kedykoľvek zrušiť na e-mailovej adrese: "vasemail@mail.sk", alebo na uvedenej pevnej adrese.
            Objednávky je možné uskutočniť i bez registrácie.
        </p>
    </LegalTemplate>
);

const Shop = () => (
    <LegalTemplate headline="Ako nakupovať">
        <p className="text block__text">
            Šak to je jednoduché. Naklikáš, vygeneruješ, pridáš do košíka a necháš si poslať domov. A potom na dobierku zaplatíš. Nuž a nezabudni hrdo nosiť tieto vecičky!
            Ale pre istotu to môžeme zhrnúť do pár bodov:
        </p>
        <ul className="text block__text">
            <li>Klikni na tlačidlo "Tvoriť".</li>
            <li>Vyber si produkt, ktorý chceš kúpiť po tom, čo si vygeneruješ svoj osobitý vzor.</li>
            <li>Vyber si aké rozmiestnenie vzoru chceš. Čiže ako budú jednotlivé malé vzory usporiadané do veľkého celku.</li>
            <li>Zvoľ si zo vzorov. Pre každé rozmiestnenie je obmedzený počet vzorov, ktoré sa dajú vybrať.</li>
            <li>Ľudo tvorí. Teda, generuje sa vzor. Môžeš pomeniť nejaké vlastnosti, prípadne sa vráťiť a povyberať si iné vzory alebo tak. Keď si spokojný, klikaj "Hotovo, ďalej".</li>
            <li>V poslednom kroku si pridaj vec do košíka tlačidlom. Zvoľ si samozrejme veľkosť a počet kusov, prípadne sa vráť na začiatok a pridaj si aj iné vecičky a potlače. Ak si so všetkým spokojný, prihlás sa, zadaj adresu a klikaj "Objednať".</li>
            <li>Hotovo. Už len počkaj pár dní, pokým balík príde.</li>
        </ul>
    </LegalTemplate>
);

const Payment = () => (
    <LegalTemplate headline="Možnosti platby">
        <p className="text block__text">
            Všetky spôsoby úhrady, možno vybrať pred výberom dopravy. Všetky spôsoby platby sú zahrnuté v cene dopravy. 
            platba dopredu &mdash; pri výbere tejto možnosti obdržíte zálohový list so všetkými údajmi k platbe. Tovar budeme expedovať po obdržaní platby na bankový účet 
            dobierka &mdash; objednaný tovar Vám zašleme poštou a pri prevzatí tento tovar uhradíte v hotovosti. 
            osobný odber &mdash; platí v hotovosti pri osobnom odbere. 
            platobná karta
        </p>
    </LegalTemplate>
);

const Shipping = () => (
    <LegalTemplate headline="Doprava">
        <h2 className="text block__headline block__headline_h2">Osobný odber</h2>
        <p className="text block__text">
            Objednávku je možné vyzdvihnúť v ten istý deň, za predpokladu, že objednaný tovar je na sklade. V ostatných prípadoch vás budeme informovať. Objednávky je možné vyzdvihovať "pracovný čas", mimo túto dobu po dohode.
            Tovar doručovaný prepravnou balíkovou firmou xxx. 
            Poštovné, ak nebude uvedené inak, je účtované vo výške xx, &mdash; Sk. 
            Cena prepravy zahŕňa možnosť večerného doručenia (voliteľne) a telefonické kontaktovanie zákazníka, pre prípadnú zmenu doby či miesta doručenia. 
            U niektorých obzvlášť neskladných, ťažkých alebo inak zle prepravovateľných výrobkov môže byť cena prepravy zvýšená. Cena za prepravu sa zobrazuje ihneď po výbere spôsoby dopravy. 
            Reklamácia zásielky je možná do 3 dní od doručenia, za predpokladu, že poškodenie nebolo zjavné pri odovzdaní!

        </p>
        <h2 className="text block__headline block__headline_h2">Tovar doručovaný Slovenskou poštou &mdash; Obchodný balík</h2>
        <p className="text block__text">
            Poštovné, ak nebude uvedené inak, je účtované vo výške xx, &mdash; Sk.
            Cena nezahŕňa žiadne ďalšie služby, pretože ich Slovenská pošta neponúka. Pokiaľ nebude objednávajúci zastihnutý, dostane do schránky oznámenie o doručení zásielky. Zásielku si môže vyzdvihnúť na uvedenej pošte alebo požiadať o opätovné doručenie. U týchto zásielok nie je možná akákoľvek komunikácia s dopravcom a nemáme žiadnu možnosť zásielku ovplyvňovať či podrobne sledovať. Maximálna hmotnosť jedného balíka je xx kg.
            U niektorých obzvlášť neskladných, ťažkých alebo inak zle prepravovateľných výrobkov môže byť cena prepravy zvýšená. Cena za prepravu sa zobrazuje ihneď po výbere spôsoby dopravy. Reklamácia zásielky je možná iba pri prevzatí!
            POZOR! Pokiaľ je balík viditeľne poškodený, alebo ak je porušená ochranná páska, uplatnite reklamáciu priamo u prepravcu. Za škody vzniknuté pri preprave nenesie dodávateľ zodpovednosť.
            Zásielka je zvyčajne doručená do druhého dňa od odoslania. O odoslaní je zákazník informovaný e-mailom.

        </p>
    </LegalTemplate>
);


const Legal = {
    Conditions: Conditions,
    Return: Return,
    Privacy: Privacy,
    Shop: Shop,
    Payment: Payment,
    Shipping: Shipping,
}

export default Legal;