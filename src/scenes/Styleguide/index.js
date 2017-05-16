import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';
import '../style.css';
import logoImage from './images/ludotvor-logo.svg';

const Styleguide = () => (
    <div className="wrapper">
        <Grid className="page-content" fluid>
            <Row>
                <Col xs={12} className="block">

                    <h1 className="text block__headline block__headline_h1">Trošku o značke a štýle</h1>
                    <p className="text block__text">
                        Na tejto stránke si môžeš omrknúť minimanuál k značke Ľudotvor. Čo to je za nápad, 
                        prečo logo vyzerá ako vyzerá a tak. Sú tu ukázané aj jednotlivé komponenty aplikácie,
                        takže možno ide skôr ako kratučký <em>styleguide</em>. Žiadna veda.
                    </p>

                    <h2 className="text block__headline block__headline_h2">Prečo Ľudotvor?</h2>
                    <p className="text block__text">
                        Názov značky Ľudotvor v sebe skrýva viac významových rovín. Prvá rovina odkazuje na ľud, 
                        ľudovosť v zmysle folklórneho dedičstva. Spája sa so slovom “tvor”, čiže živá bytosť a 
                        zároveň základ slova tvoriť, tvorivý. Spojenie sa snaží ukázať, že každý človek môže 
                        byť kreatívny, a v duchu historických reálií vytvárať niečo pekné.
                        Druhý plán názvu značí výzvu alebo zvolanie: “Ľudo, tvor!” Použitím vlastného mena prináša 
                        osobný rozmer, odkazuje na personalizáciu, ktorú umožňuje generátor. Hoci bola kedysi 
                        typická pre ľudovú tvorbu anonymita, súčasná doba je dobou individualizmu. Názov tak 
                        zostáva niekde na pomedzí, snaží sa reagovať na aktuálne trendy, ale nechce sa vzdať 
                        tradície. Ideu názvoslovia najlepšie vystihujú dve krátke vety, ktoré predstavujú motto 
                        značky: „Ľudo, tvor! A ľud tvoril.“
                    </p>

                    <hr/>

                    <h2 className="text block__headline block__headline_h2">Logo</h2>
                    <p className="text block__text">
                        Logo je poskladané z písmen Ľudo. Pretože to aj je <strong>Ľudo</strong>. A ešte jeden mäkčeň navyše, pretože vždy
                        treba ešte kúštik navyše. Hej no a ešte to nie je celé komplet premakané dotiahnuté,
                        treba k logu manuál, akože detailný, ja viem. Ale myšlienka tu je. Ak si niečo kúpiš,
                        Ľudo je veselý. Ak si kúpiš za veľa dukátov, Ľudo čumí. Ak si nič nekúpiš, Ľudo je smutný.
                        <Image src={ logoImage } responsive></Image>
                    </p>

                    <hr/>

                    <h2 className="text block__headline block__headline_h2">Tlačidlá</h2>
                    <p className="text block__text">
                        <Button bsStyle="primary" className="button block__button">Dôležité tlačidlo</Button><br/>
                        <Button bsStyle="default" className="button block__button">Také bežné tlačidlo</Button><br/>
                        <a href="#" className="button block__button btn btn-secondary">Pomocné tlačidlo</a><br/>
                        <Button bsStyle="success" className="button block__button btn-success">Úspešné tlačidlo</Button><br/>
                    </p>

                    <hr/>

                    <h2 className="text block__headline block__headline_h2">Typografia</h2>
                    <p className="text block__text">
                        Toto je odstavec textu. Má svoju špecifickú šírku, používa písmo Georgia, ak nie je
                        dostupné tak Times New Roman alebo ak aj to nie je dostupné, tak nejaké systémové serifové písmo.
                        <br/><br/><span className="text block__headline block__headline_h1">Hlavný nadpis</span><br/><br/>
                        <span className="text block__headline block__headline_h2">Vedľajší nadpis</span><br/><br/>
                        Čo sa týka písma nadpisov a kontroliek, napríklad tlačidiel, používam Merriweather v rezoch
                        normal a bold.
                        <br/><br/>
                        <span className="text text-montserrat">
                            {`A​‌B​‌C​‌Ć​‌Č​‌D​‌Đ​‌E​‌F​‌G​‌H​‌I​‌J​‌K​‌L​‌M​‌N​‌O​‌P​‌Q​‌R​‌S​‌Š​‌T​‌U​‌V​‌W​‌X​‌Y​‌Z​‌Ž​‌a​‌b​‌c​‌č​‌ć​‌d​‌đ​‌e​‌f​‌g​‌h​‌i​‌j​‌k​‌l​‌m​‌n​‌o​‌p​‌q​‌r​‌s​‌š​‌t​‌u​‌v​‌w​‌x​‌y​‌z​‌ž​‌Ă​‌Â​‌Ê​‌Ô​‌Ơ​‌Ư​‌ă​‌â​‌ê​‌ô​‌ơ​‌ư​‌1​‌2​‌3​‌4​‌5​‌6​‌7​‌8​‌9​‌0​‌‘​‌?​‌’​‌“​‌!​‌”​‌(​‌%​‌)​‌[​‌#​‌]​‌{​‌@​‌}​‌/​‌&​‌<​‌-​‌+​‌÷​‌×​‌=​‌>​‌®​‌©​‌$​‌€​‌£​‌¥​‌¢​‌:​‌;​‌,​‌.​‌*`}
                        </span>
                        <br/><br/>
                        <span className="text text-montserrat text-montserrat-bold">
                            {`A​‌B​‌C​‌Ć​‌Č​‌D​‌Đ​‌E​‌F​‌G​‌H​‌I​‌J​‌K​‌L​‌M​‌N​‌O​‌P​‌Q​‌R​‌S​‌Š​‌T​‌U​‌V​‌W​‌X​‌Y​‌Z​‌Ž​‌a​‌b​‌c​‌č​‌ć​‌d​‌đ​‌e​‌f​‌g​‌h​‌i​‌j​‌k​‌l​‌m​‌n​‌o​‌p​‌q​‌r​‌s​‌š​‌t​‌u​‌v​‌w​‌x​‌y​‌z​‌ž​‌Ă​‌Â​‌Ê​‌Ô​‌Ơ​‌Ư​‌ă​‌â​‌ê​‌ô​‌ơ​‌ư​‌1​‌2​‌3​‌4​‌5​‌6​‌7​‌8​‌9​‌0​‌‘​‌?​‌’​‌“​‌!​‌”​‌(​‌%​‌)​‌[​‌#​‌]​‌{​‌@​‌}​‌/​‌&​‌<​‌-​‌+​‌÷​‌×​‌=​‌>​‌®​‌©​‌$​‌€​‌£​‌¥​‌¢​‌:​‌;​‌,​‌.​‌*`}
                        </span>
                    </p>
                    
                    <hr/>

                    <h2 className="text block__headline block__headline_h2">Hypertexty internety</h2>
                    <p className="text block__text">
                        Odkazy v texte vyzerajú ako tento <Link to="#">odkaz</Link>.
                    </p>

                    <hr/>
                    
                    <h2 className="text block__headline block__headline_h2">Ostatné</h2>
                    <p className="text block__text">
                        Používa sa aj zopár iných vecí, ale to už nie je podstatné. Keď sa hora rozvíjala, hojája, mamka dcéru zapletala, šuhája...
                    </p>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Styleguide;