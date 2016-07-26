'use strict';

// Conjugador.js | Versão 0.0.3
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
