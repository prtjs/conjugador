'use strict';

var irregulares = require('./irregulares.json');

module.exports = function (verbo) {
    verbo = verbo.toLowerCase().trim();

    if (!/r$/.test(verbo)) {
        return new Error('Verbo inválido');
    }

    var conjugado = {};
    var pessoas = ['eu', 'tu', 'ele', 'nos', 'vos', 'eles'];

    if (irregulares[verbo]) {
        var conjugacao = irregulares[verbo];

        pessoas.forEach(function (pessoas, index) {
            conjugado[pessoas] = conjugacao[index];
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
            } if (adicionarCircunflexo && pessoa === 'eu') {
                conjugado[pessoa] = verbo.replace(/o(e|o)r$/, 'ôo');
            } else {
                conjugado[pessoa] = verbo.replace(reTerminacao, conjugacao);
            }
        });
    }

    return conjugado;
};
