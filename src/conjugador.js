'use strict';

var irregulares = require('../irregulares.json');

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

        conjugacoes.forEach(function (conjugacao, index) {
            var pessoa = pessoas[index];
            conjugado[pessoa] = verbo.replace(reTerminacao, conjugacao);
        });
    }

    return conjugado;
}
