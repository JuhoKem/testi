"use strict"; 

class Henkilo {
    constructor(etu,suku,nick,syntymavuosi) {
        this.m_etunimi = etu;
        this.m_sukunimi = suku;
        this.m_nick = nick;
        this.m_syntymavuosi = syntymavuosi;
    }


    get etunimi() {
        return this.m_etunimi;
    }
    set etunimi(value) {
        this.m_etunimi = value;
    }


    get sukunimi() {
        return this.m_sukunimi;
    }
    set sukunimi(value) {
        this.m_sukunimi = value;
    }


    get nickname() {
        return this.m_nick;
    }
    set nickname(value) {
        this.m_nick = value;
    }


    get syntymavuosi() {
        return this.m_syntymavuosi;
    }
    set syntymavuosi(value) {
        this.m_syntymavuosi = value;
    }

}

class Urheilija extends Henkilo {
    
    constructor (etu, suku, nick, year, paino, laji, saavutukset) {
        super(etu, suku, nick, year)

        this.m_omapaino = paino;
        this.m_laji = laji;
        this.m_saavutukset = saavutukset;
        this.linkki = "https://images.app.goo.gl/zY6mKc7Uh9TxdnMn6";

        console.log("Uusi urheilja luotu!", this);
    }

    get omapaino() {
        return this.m_omapaino;
    }

    set omapaino (value) {
        this.m_omapaino = value;
    }

    get laji() {
        return this.m_laji;
    }

    set laji (value) {
        this.m_laji = value;
    }

    get saavutukset() {
        return this.m_saavutukset;
    }

    set saavutukset (value) {
        this.m_saavutukset = value;
    }
}

let urhelija = new Urheilija("Aku", "Ankka", "Aku the Ankka", 1902, 95, "Tennis", "Taso1");

console.log("\n" + "Urheilija paino on: " + urhelija.omapaino + "\nLaji: " + urhelija.laji + "\nSaavutus: " + urhelija.m_saavutukset + "\nja linkki: " + urhelija.linkki + "\n");

let urhelija1 = new Urheilija("Iines", "Ankka", "Beauty queen", 1910, 55, "Juoksu", "Taso4");

console.log("\n" + "Urheilija paino on: " + urhelija.omapaino + "\nLaji: " + urhelija.laji + "\nSaavutus: " + urhelija.m_saavutukset + "\nja linkki: " + urhelija.linkki);