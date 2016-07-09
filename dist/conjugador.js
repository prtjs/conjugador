(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.conjugar = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Conjugador.js | Versão 0.0.2
// Copyright (c) 2016 Matheus Alves

var irregulares = require('./irregulares.json');

module.exports = function (verbo) {
    verbo = verbo.toLowerCase().trim();

    if (!/r$/.test(verbo)) {
        return new Error('Verbo inválido');
    }

    if (/[uo]r/.test(verbo)) {
        return new Error('Não existem verbos terminados em -or ou -ur');
    }

    var conjugado = {};
    var pessoas = ['eu', 'tu', 'ele', 'nos', 'vos', 'eles'];

    if (/.p[oô]r$/.test(verbo)) {
        var conjugacao = irregulares['pôr'];
        verbo = verbo.replace(/p[oô]r$/, '');

        pessoas.forEach(function (pessoa, index) {
            conjugado[pessoa] = verbo + conjugacao[index];
        });
    } else if (irregulares[verbo]) {
        var conjugacao = irregulares[verbo];

        pessoas.forEach(function (pessoa, index) {
            conjugado[pessoa] = conjugacao[index];
        });
    } else {
        var terminacao = verbo.replace(/^.*([aei]r)$/, '$1');
        var conjugacoes;

        if (terminacao === 'ar') {
            conjugacoes = ['o', 'as', 'a', 'amos', 'ais', 'am'];
        } else if (terminacao === 'er') {
            conjugacoes = ['o', 'es', 'e', 'emos', 'eis', 'em'];
        } else if (terminacao === 'ir') {
            conjugacoes = ['o', 'es', 'e', 'imos', 'is', 'em'];
        }

        var reTerminacao = new RegExp(terminacao + '$');
        var comI = /(ui|ue)r$/.test(verbo);
        var adicionarCircunflexo = /(oe|oa)r$/.test(verbo);
        var comIeTil = /oer$/.test(verbo);
        var terminaEmAir = /air$/.test(verbo);
        var terminaEmGir = /gir$/.test(verbo);
        var terminaEmCer = /cer$/.test(verbo);

        conjugacoes.forEach(function (conjugacao, index) {
            var pessoa = pessoas[index];

            if (comI && /^(tu|ele|vos)$/.test(pessoa)) {
                if (pessoa === 'tu') {
                    conjugado[pessoa] = verbo.replace(reTerminacao, 'is');
                } else if (pessoa === 'ele') {
                    conjugado[pessoa] = verbo.replace(reTerminacao, 'i');
                } else if (pessoa === 'vos') {
                    conjugado[pessoa] = verbo.replace(reTerminacao, 'ís');
                }
            } else if (adicionarCircunflexo && pessoa === 'eu') {
                conjugado[pessoa] = verbo.replace(/o(e|a)r$/, 'ôo');
            } else if (comIeTil && /^(tu|ele)$/.test(pessoa)) {
                if (pessoa === 'tu') {
                    conjugado[pessoa] = verbo.replace(/oer$/, 'óis');
                } else if (pessoa === 'ele') {
                    conjugado[pessoa] = verbo.replace(/oer$/, 'ói');
                }
            } else if (terminaEmAir && /^(eu|tu|ele|vos)$/.test(pessoa)) {
                if (pessoa === 'eu') {
                    conjugado[pessoa] = verbo.replace(/air$/, 'aio');
                } else if (pessoa === 'tu') {
                    conjugado[pessoa] = verbo.replace(/air$/, 'ais')
                } else if (pessoa === 'ele') {
                    conjugado[pessoa] = verbo.replace(/air$/, 'ai')
                } else if (pessoa === 'vos') {
                    conjugado[pessoa] = verbo.replace(/air$/, 'aís')
                }
            } else if (terminaEmGir && pessoa === 'eu') {
                conjugado[pessoa] = verbo.replace(/gir$/, 'jo');
            } else if (terminaEmCer && pessoa === 'eu') {
                conjugado[pessoa] = verbo.replace(/cer$/, 'ço');
            } else {
                conjugado[pessoa] = verbo.replace(reTerminacao, conjugacao);
            }
        });
    }

    return conjugado;
};

},{"./irregulares.json":2}],2:[function(require,module,exports){
module.exports={
    "abaular": [
        "abaúlo",
        "abaúlas",
        "abaúla",
        "abaulamos",
        "abaulais",
        "abaúlam"
    ],
    "abolir": [
        "abulo",
        "aboles",
        "abole",
        "abolimos",
        "abolis",
        "abolem"
    ],
    "abster": [
        "abstenho",
        "absténs",
        "abstém",
        "abstemos",
        "abstendes",
        "abstêm"
    ],
    "acudir": [
        "acudo",
        "acodes",
        "acode",
        "acudimos",
        "acudis",
        "acodem"
    ],
    "adequar": [
        "adequo",
        "adequas",
        "adequa",
        "adequamos",
        "adequais",
        "adequam"
    ],
    "advertir": [
        "advirto",
        "advertes",
        "adverte",
        "advertimos",
        "advertis",
        "advertem"
    ],
    "advir": [
        "advenho",
        "advéns",
        "advém",
        "advimos",
        "advindes",
        "advêm"
    ],
    "agredir": [
        "agrido",
        "agrides",
        "agride",
        "agredimos",
        "agredis",
        "agridem"
    ],
    "aguar": [
        "aguo",
        "aguas",
        "agua",
        "aguamos",
        "aguais",
        "aguam"
    ],
    "ajuizar": [
        "ajuízo",
        "ajuízas",
        "ajuíza",
        "ajuizamos",
        "ajuizais",
        "ajuízam"
    ],
    "amiudar": [
        "amiúdo",
        "amiúdas",
        "amiúda",
        "amiudamos",
        "amiudais",
        "amiúdam"
    ],
    "ansiar": [
        "anseio",
        "anseias",
        "anseia",
        "ansiamos",
        "ansiais",
        "anseiam"
    ],
    "antever": [
        "antevejo",
        "antevês",
        "antevê",
        "antevemos",
        "anteveis",
        "antevêem"
    ],
    "antiquar": [
        "antiquo",
        "antiquas",
        "antiqua",
        "antiquamos",
        "antiquais",
        "antiquam"
    ],
    "apaniguar": [
        "apaniguo",
        "apaniguas",
        "apanigua",
        "apaniguamos",
        "apaniguais",
        "apaniguam"
    ],
    "apaziguar": [
        "apaziguo",
        "apaziguas",
        "apazigua",
        "apaziguamos",
        "apaziguais",
        "apaziguam"
    ],
    "aprazer": [
        "aprazo",
        "aprazes",
        "apraz",
        "aprazemos",
        "aprazeis",
        "aprazem"
    ],
    "arguir": [
        "arguo",
        "argúis",
        "argúi",
        "arguimos",
        "arguis",
        "argúem"
    ],
    "arruinar": [
        "arruíno",
        "arruínas",
        "arruína",
        "arruinamos",
        "arruinais",
        "arruínam"
    ],
    "assentir": [
        "assinto",
        "assentes",
        "assente",
        "assentimos",
        "assentis",
        "assentem"
    ],
    "augir": [
        "augia",
        "augias",
        "augia",
        "augíamos",
        "augíeis",
        "augiam"
    ],
    "averiguar": [
        "averiguo",
        "averiguas",
        "averigua",
        "averiguamos",
        "averiguais",
        "averiguam"
    ],
    "avir": [
        "avenho",
        "avéns",
        "avém",
        "avimos",
        "avindes",
        "avêm"
    ],
    "boiar": [
        "bóio",
        "bóias",
        "bóia",
        "boiamos",
        "boiais",
        "bóiam"
    ],
    "bulir": [
        "bulo",
        "boles",
        "bole",
        "bulimos",
        "bulis",
        "bolem"
    ],
    "caber": [
        "caibo",
        "cabes",
        "cabe",
        "cabemos",
        "cabeis",
        "cabem"
    ],
    "cerzir": [
        "cirzo",
        "cirzes",
        "cirze",
        "cerzimos",
        "cerzis",
        "cirzem"
    ],
    "cobrir": [
        "cubro",
        "cobres",
        "cobre",
        "cobrimos",
        "cobris",
        "cobrem"
    ],
    "coibir": [
        "coíbo",
        "coíbes",
        "coíbe",
        "coibimos",
        "coibis",
        "coíbem"
    ],
    "colorir": [
        "coloro",
        "colores",
        "colore",
        "colorimos",
        "coloris",
        "colorem"
    ],
    "comedir": [
        "começo",
        "comedes",
        "comede",
        "comedimos",
        "comedis",
        "comedem"
    ],
    "comerciar": [
        "comercio",
        "comercias",
        "comercia",
        "comerciamos",
        "comerciais",
        "comerceiam"
    ],
    "compelir": [
        "compilo",
        "compeles",
        "compele",
        "compelimos",
        "compelis",
        "compelem"
    ],
    "competir": [
        "compito",
        "competes",
        "compete",
        "competimos",
        "competis",
        "competem"
    ],
    "comprazer": [
        "comprazo",
        "comprazes",
        "compraz",
        "comprazemos",
        "comprazeis",
        "comprazem"
    ],
    "concernir": [
        "concirno",
        "concernes",
        "concerne",
        "concernimos",
        "concernis",
        "concernem"
    ],
    "conseguir": [
        "consigo",
        "consegues",
        "consegue",
        "conseguimos",
        "conseguis",
        "conseguem"
    ],
    "consentir": [
        "consinto",
        "consentes",
        "consente",
        "consentimos",
        "consentis",
        "consentem"
    ],
    "construir": [
        "construo",
        "constróis",
        "constrói",
        "construímos",
        "construís",
        "constroem"
    ],
    "consumir": [
        "consumo",
        "consomes",
        "consome",
        "consumimos",
        "consumis",
        "consomem"
    ],
    "conter": [
        "contenho",
        "contens",
        "contém",
        "contemos",
        "contendes",
        "contêm"
    ],
    "contiguar": [
        "contiguo",
        "contiguas",
        "contigua",
        "contiguamos",
        "contiguais",
        "contiguam"
    ],
    "contravir": [
        "contravenho",
        "contravens",
        "contravem",
        "contravimos",
        "contravindes",
        "contravêm"
    ],
    "convir": [
        "convenho",
        "convéns",
        "convém",
        "convimos",
        "convindes",
        "convêm"
    ],
    "corroer": [
        "corrôo",
        "corróis",
        "corrói",
        "corroemos",
        "corroeis",
        "corroem"
    ],
    "crer": [
        "creio",
        "crês",
        "crê",
        "cremos",
        "credes",
        "crêem"
    ],
    "cuspir": [
        "cuspo",
        "cospes",
        "cospe",
        "cuspimos",
        "cuspis",
        "cospem"
    ],
    "dar": [
        "dou",
        "dás",
        "dá",
        "damos",
        "dais",
        "dão"
    ],
    "deflectir": [
        "deflicto",
        "deflectes",
        "deflecte",
        "deflectimos",
        "deflectis",
        "deflectem"
    ],
    "demolir": [
        "demulo",
        "demoles",
        "demole",
        "demolimos",
        "demolis",
        "demolem"
    ],
    "denegrir": [
        "denigro",
        "denigres",
        "denigre",
        "denegrimos",
        "denegris",
        "denigrem"
    ],
    "desaguar": [
        "desaguo",
        "desaguas",
        "desagua",
        "desaguamos",
        "desaguais",
        "desaguam"
    ],
    "desavir": [
        "desavenho",
        "desavéns",
        "desavém",
        "desavimos",
        "desavindes",
        "desavêm"
    ],
    "descaber": [
        "descaibo",
        "descabes",
        "descabe",
        "descabemos",
        "descabeis",
        "descabem"
    ],
    "descobrir": [
        "descubro",
        "descobres",
        "descobre",
        "descobrimos",
        "descobris",
        "descobrem"
    ],
    "desimpedir": [
        "desimpeço",
        "desimpedes",
        "desimpede",
        "desimpedimos",
        "desimpedis",
        "desimpedem"
    ],
    "desmentir": [
        "desminto",
        "desmentes",
        "desmente",
        "desmentimos",
        "desmentis",
        "desmentem"
    ],
    "desmiudar": [
        "desmiúdo",
        "desmiúdas",
        "desmiúda",
        "desmiudamos",
        "desmiudais",
        "desmiúdam"
    ],
    "despedir": [
        "despeço",
        "despedes",
        "despede",
        "despedimos",
        "despedis",
        "despedem"
    ],
    "despir": [
        "dispo",
        "despes",
        "despe",
        "despimos",
        "despis",
        "despem"
    ],
    "desprazer": [
        "desprazo",
        "desprazes",
        "despraz",
        "desprazemos",
        "desprazeis",
        "desprazem"
    ],
    "destruir": [
        "destruo",
        "destróis",
        "destrói",
        "destruímos",
        "destruís",
        "destroem"
    ],
    "deter": [
        "detenho",
        "detens",
        "detém",
        "detemos",
        "detendes",
        "detêm"
    ],
    "devir": [
        "devenho",
        "devéns",
        "devém",
        "devimos",
        "devindes",
        "devêm"
    ],
    "discernir": [
        "discirno",
        "discernes",
        "discerne",
        "discernimos",
        "discernis",
        "discernem"
    ],
    "divergir": [
        "divirjo",
        "diverges",
        "diverge",
        "divergimos",
        "divergis",
        "divergem"
    ],
    "divertir": [
        "divirto",
        "divertes",
        "diverte",
        "divertimos",
        "divertis",
        "divertem"
    ],
    "doer": [
        "dôo",
        "dóis",
        "dói",
        "doemos",
        "doeis",
        "doem"
    ],
    "dormir": [
        "durmo",
        "dormes",
        "dorme",
        "dormimos",
        "dormis",
        "dormem"
    ],
    "eclodir": [
        "ecludo",
        "eclodes",
        "eclode",
        "eclodimos",
        "eclodis",
        "eclodem"
    ],
    "empedernir": [
        "empedirno",
        "empedernes",
        "empederne",
        "empedernimos",
        "empedernis",
        "empedernem"
    ],
    "encobrir": [
        "encubro",
        "encobres",
        "encobre",
        "encobrimos",
        "encobris",
        "encobrem"
    ],
    "engolir": [
        "engulo",
        "engoles",
        "engole",
        "engolimos",
        "engolis",
        "engolem"
    ],
    "enraizar": [
        "enraízo",
        "enraízas",
        "enraíza",
        "enraizamos",
        "enraizais",
        "enraízam"
    ],
    "entreter": [
        "entretenho",
        "entretens",
        "entretém",
        "entretemos",
        "entretendes",
        "entretêm"
    ],
    "entupir": [
        "entupo",
        "entopes",
        "entope",
        "entupimos",
        "entupis",
        "entopem"
    ],
    "enviuvar": [
        "enviúvo",
        "enviúvas",
        "enviúva",
        "enviuvamos",
        "enviuvais",
        "enviúvam"
    ],
    "equivaler": [
        "equivalho",
        "equivales",
        "equivale",
        "equivalemos",
        "equivaleis",
        "equivalem"
    ],
    "esmiuçar": [
        "esmiúço",
        "esmiúças",
        "esmiúça",
        "esmiuçamos",
        "esmiuçais",
        "esmiúçam"
    ],
    "espavorir": [
        "espavuro",
        "espavores",
        "espavore",
        "espavorimos",
        "espavoris",
        "espavorem"
    ],
    "estar": [
        "estou",
        "estás",
        "está",
        "estamos",
        "estais",
        "estão"
    ],
    "europeizar": [
        "europeízo",
        "europeízas",
        "europeíza",
        "europeizamos",
        "europeizais",
        "europeízam"
    ],
    "expedir": [
        "expeço",
        "expedes",
        "expede",
        "expedimos",
        "expedis",
        "expedem"
    ],
    "expelir": [
        "expilo",
        "expeles",
        "expele",
        "expelimos",
        "expelis",
        "expelem"
    ],
    "explodir": [
        "expludo",
        "explodes",
        "explode",
        "explodimos",
        "explodis",
        "explodem"
    ],
    "flectir": [
        "flicto",
        "flectes",
        "flecte",
        "flectimos",
        "flectis",
        "flectem"
    ],
    "fremir": [
        "frimo",
        "fremes",
        "freme",
        "fremimos",
        "fremis",
        "fremem"
    ],
    "fugir": [
        "fujo",
        "foges",
        "foge",
        "fugimos",
        "fugis",
        "fogem"
    ],
    "haver": [
        "hei",
        "hás",
        "há",
        "havemos",
        "haveis",
        "hão"
    ],
    "hebraizar": [
        "hebraízo",
        "hebraízas",
        "hebraíza",
        "hebraizamos",
        "hebraizais",
        "hebraízam"
    ],
    "homogeneizar": [
        "homogeneízo",
        "homogeneízas",
        "homogeneíza",
        "homogeneizamos",
        "homogeneizais",
        "homogeneízam"
    ],
    "impedir": [
        "impeço",
        "impedes",
        "impede",
        "impedimos",
        "impedis",
        "impedem"
    ],
    "impelir": [
        "impilo",
        "impeles",
        "impele",
        "impelimos",
        "impelis",
        "impelem"
    ],
    "incendiar": [
        "incendeio",
        "incendeias",
        "incendeia",
        "incendiamos",
        "incendiais",
        "incendeiam"
    ],
    "inflectir": [
        "inflicto",
        "inflectes",
        "inflecte",
        "inflectimos",
        "inflectis",
        "inflectem"
    ],
    "instruir": [
        "instruo",
        "instrues",
        "instrue",
        "instruímos",
        "instruís",
        "instruem"
    ],
    "intermediar": [
        "intermedeio",
        "intermedeias",
        "intermedeia",
        "intermediamos",
        "intermediais",
        "intermedeiam"
    ],
    "intervir": [
        "intervenho",
        "intervéns",
        "intervém",
        "intervimos",
        "intervindes",
        "intervêm"
    ],
    "investir": [
        "invisto",
        "investes",
        "investe",
        "investimos",
        "investis",
        "investem"
    ],
    "ir": [
        "vou",
        "vais",
        "vai",
        "vamos",
        "ides",
        "vão"
    ],
    "jazer": [
        "jazo",
        "jazes",
        "jaz",
        "jazemos",
        "jazeis",
        "jazem"
    ],
    "judaizar": [
        "judaízo",
        "judaízas",
        "judaíza",
        "judaizamos",
        "judaizais",
        "judaízam"
    ],
    "ler": [
        "leio",
        "lês",
        "lê",
        "lemos",
        "ledes",
        "lêem"
    ],
    "licenciar": [
        "licencio",
        "licencias",
        "licencia",
        "licenciamos",
        "licenciais",
        "licenciam"
    ],
    "malquerer": [
        "malquero",
        "malqueres",
        "malquer",
        "malqueremos",
        "malquereis",
        "malquerem"
    ],
    "manter": [
        "mantenho",
        "mantens",
        "mantém",
        "mantemos",
        "mantendes",
        "mantêm"
    ],
    "mediar": [
        "medeio",
        "medeias",
        "medeia",
        "mediamos",
        "mediais",
        "medeiam"
    ],
    "medir": [
        "meço",
        "medes",
        "mede",
        "medimos",
        "medis",
        "medem"
    ],
    "mentir": [
        "minto",
        "mentes",
        "mente",
        "mentimos",
        "mentis",
        "mentem"
    ],
    "minguar": [
        "minguo",
        "minguas",
        "mingua",
        "minguamos",
        "minguais",
        "minguam"
    ],
    "moer": [
        "môo",
        "móis",
        "mói",
        "moemos",
        "moeis",
        "moem"
    ],
    "mugir": [
        "mujo",
        "muges",
        "muge",
        "mugimos",
        "mugis",
        "mugem"
    ],
    "multicolorir": [
        "multicoluro",
        "multicolores",
        "multicolore",
        "multicolorimos",
        "multicoloris",
        "multicolorem"
    ],
    "negociar": [
        "negocio",
        "negocias",
        "negocia",
        "negociamos",
        "negociais",
        "negociam"
    ],
    "obliquar": [
        "obliquo",
        "obliquas",
        "obliqua",
        "obliquamos",
        "obliquais",
        "obliquam"
    ],
    "obsequiar": [
        "obsequeio",
        "obsequeias",
        "obsequeia",
        "obsequiamos",
        "obsequiais",
        "obsequeiam"
    ],
    "obstruir": [
        "obstruo",
        "obstrues",
        "obstrue",
        "obstruímos",
        "obstruís",
        "obstruem"
    ],
    "obter": [
        "obtenho",
        "obtens",
        "obtém",
        "obtemos",
        "obtendes",
        "obtêm"
    ],
    "odiar": [
        "odeio",
        "odeias",
        "odeia",
        "odiamos",
        "odiais",
        "odeiam"
    ],
    "ouvir": [
        "ouço",
        "ouves",
        "ouve",
        "ouvimos",
        "ouvis",
        "ouvem"
    ],
    "parar": [
        "paro",
        "paras",
        "pára",
        "paramos",
        "parais",
        "param"
    ],
    "parir": [
        "paro",
        "pares",
        "pare",
        "parimos",
        "paris",
        "parem"
    ],
    "pedir": [
        "peço",
        "pedes",
        "pede",
        "pedimos",
        "pedis",
        "pedem"
    ],
    "perder": [
        "perco",
        "perdes",
        "perde",
        "perdemos",
        "perdeis",
        "perdem"
    ],
    "perseguir": [
        "persigo",
        "persegues",
        "persegue",
        "perseguimos",
        "perseguis",
        "perseguem"
    ],
    "plebeizar": [
        "plebeízo",
        "plebeízas",
        "plebeíza",
        "plebeizamos",
        "plebeizais",
        "plebeízam"
    ],
    "poder": [
        "posso",
        "podes",
        "pode",
        "podemos",
        "podeis",
        "podem"
    ],
    "polir": [
        "pulo",
        "pules",
        "pule",
        "polimos",
        "polis",
        "pulem"
    ],
    "pôr": [
        "ponho",
        "pões",
        "põe",
        "pomos",
        "pondes",
        "põem"
    ],
    "premiar": [
        "premeio",
        "premeias",
        "premeia",
        "premiamos",
        "premiais",
        "premeiam"
    ],
    "premir": [
        "primo",
        "primes",
        "prime",
        "premimos",
        "premis",
        "primem"
    ],
    "pressentir": [
        "pressinto",
        "pressentes",
        "pressente",
        "pressentimos",
        "pressentis",
        "pressentem"
    ],
    "prevenir": [
        "previno",
        "prevines",
        "previne",
        "prevenimos",
        "prevenis",
        "previnem"
    ],
    "prever": [
        "prevejo",
        "prevês",
        "prevê",
        "prevemos",
        "preveis",
        "prevêem"
    ],
    "progredir": [
        "progrido",
        "progrides",
        "progride",
        "progredimos",
        "progredis",
        "progridem"
    ],
    "proibir": [
        "proíbo",
        "proíbes",
        "proíbe",
        "proibimos",
        "proibis",
        "proíbem"
    ],
    "prosseguir": [
        "prossigo",
        "prossegues",
        "prossegue",
        "prosseguimos",
        "prosseguis",
        "prosseguem"
    ],
    "prover": [
        "provejo",
        "provês",
        "provê",
        "provemos",
        "proveis",
        "provêem"
    ],
    "provir": [
        "provenho",
        "provéns",
        "provém",
        "provimos",
        "provindes",
        "provêm"
    ],
    "querer": [
        "quero",
        "queres",
        "quer",
        "queremos",
        "quereis",
        "querem"
    ],
    "rebolir": [
        "rebulo",
        "reboles",
        "rebole",
        "rebolimos",
        "rebolis",
        "rebolem"
    ],
    "reflectir": [
        "reflicto",
        "reflectes",
        "reflecte",
        "reflectimos",
        "reflectis",
        "reflectem"
    ],
    "regredir": [
        "regrido",
        "regrides",
        "regride",
        "regredimos",
        "regredis",
        "regridem"
    ],
    "remir": [
        "redimo",
        "redimes",
        "redime",
        "remimos",
        "remis",
        "redimem"
    ],
    "remoer": [
        "remôo",
        "remóis",
        "remói",
        "remoemos",
        "remoeis",
        "remoem"
    ],
    "repelir": [
        "repilo",
        "repeles",
        "repele",
        "repelimos",
        "repelis",
        "repelem"
    ],
    "repetir": [
        "repito",
        "repetes",
        "repete",
        "repetimos",
        "repetis",
        "repetem"
    ],
    "requerer": [
        "requeiro",
        "requeres",
        "requer",
        "requeremos",
        "requereis",
        "requerem"
    ],
    "ressentir": [
        "ressinto",
        "ressentes",
        "ressente",
        "ressentimos",
        "ressentis",
        "ressentem"
    ],
    "reter": [
        "retenho",
        "retens",
        "retém",
        "retemos",
        "retendes",
        "retêm"
    ],
    "reunir": [
        "reúno",
        "reúnes",
        "reúne",
        "reunimos",
        "reunis",
        "reúnem"
    ],
    "rever": [
        "revejo",
        "revês",
        "revê",
        "revemos",
        "reveis",
        "revêem"
    ],
    "revestir": [
        "revisto",
        "revestes",
        "reveste",
        "revestimos",
        "revestis",
        "revestem"
    ],
    "revir": [
        "revenho",
        "revéns",
        "revém",
        "revimos",
        "revindes",
        "revêm"
    ],
    "rir": [
        "rio",
        "ris",
        "ri",
        "rimos",
        "rides",
        "riem"
    ],
    "roer": [
        "rôo",
        "róis",
        "rói",
        "roemos",
        "roeis",
        "roem"
    ],
    "rugir": [
        "rujo",
        "ruges",
        "ruge",
        "rugimos",
        "rugis",
        "rugem"
    ],
    "saber": [
        "sei",
        "sabes",
        "sabe",
        "sabemos",
        "sabeis",
        "sabem"
    ],
    "sacudir": [
        "sacudo",
        "sacodes",
        "sacode",
        "sacudimos",
        "sacudis",
        "sacodem"
    ],
    "saudar": [
        "saúdo",
        "saúdas",
        "saúda",
        "saudamos",
        "saudais",
        "saúdam"
    ],
    "seguir": [
        "sigo",
        "segues",
        "segue",
        "seguimos",
        "seguis",
        "seguem"
    ],
    "sentir": [
        "sinto",
        "sentes",
        "sente",
        "sentimos",
        "sentis",
        "sentem"
    ],
    "ser": [
        "sou",
        "és",
        "é",
        "somos",
        "sois",
        "são"
    ],
    "servir": [
        "sirvo",
        "serves",
        "serve",
        "servimos",
        "servis",
        "servem"
    ],
    "sorrir": [
        "sorrio",
        "sorris",
        "sorri",
        "sorrimos",
        "sorrides",
        "sorriem"
    ],
    "sortir": [
        "surto",
        "surtes",
        "surte",
        "sortimos",
        "sortis",
        "surtem"
    ],
    "subir": [
        "subo",
        "sobes",
        "sobe",
        "subimos",
        "subis",
        "sobem"
    ],
    "sumir": [
        "sumo",
        "somes",
        "some",
        "sumimos",
        "sumis",
        "somem"
    ],
    "suster": [
        "sustenho",
        "sustens",
        "sustém",
        "sustemos",
        "sustendes",
        "sustêm"
    ],
    "ter": [
        "tenho",
        "tens",
        "tem",
        "temos",
        "tendes",
        "têm"
    ],
    "tossir": [
        "tusso",
        "tosses",
        "tosse",
        "tossimos",
        "tossis",
        "tossem"
    ],
    "transgredir": [
        "transgrido",
        "transgrides",
        "transgride",
        "transgredimos",
        "transgredis",
        "transgridem"
    ],
    "trazer": [
        "trago",
        "trazes",
        "traz",
        "trazemos",
        "trazeis",
        "trazem"
    ],
    "tugir": [
        "tugia",
        "tugias",
        "tugia",
        "tugíamos",
        "tugíeis",
        "tugiam"
    ],
    "valer": [
        "valho",
        "vales",
        "vale",
        "valemos",
        "valeis",
        "valem"
    ],
    "ver": [
        "vejo",
        "vês",
        "vê",
        "vemos",
        "veis",
        "vêem"
    ],
    "vestir": [
        "visto",
        "vestes",
        "veste",
        "vestimos",
        "vestis",
        "vestem"
    ],
    "vir": [
        "venho",
        "vens",
        "vem",
        "vimos",
        "vindes",
        "vêm"
    ],
    "viuvar": [
        "viúvo",
        "viúvas",
        "viúva",
        "viuvamos",
        "viuvais",
        "viúvam"
    ]
}

},{}]},{},[1])(1)
});