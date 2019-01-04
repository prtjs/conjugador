'use strict';

var normalizePrefix = require('../normalize-prefix');

/**
 * Obter todas as conjugações de um verbo terminado em -er.
 *
 * @param {string} prefix Prefixo do verbo.
 * @returns {object} Verbo conjugado.
 */
module.exports = function buildEr(prefix) {
  return {
    p: [
      normalizePrefix(prefix, [
        {
          ifIs: 'c',
          replaceBy: 'ç'
        }
      ]) + 'o',
      prefix + 'es',
      prefix + 'e',
      prefix + 'emos',
      prefix + 'eis',
      prefix + 'em'
    ],
    pi: [
      prefix + 'ia',
      prefix + 'ias',
      prefix + 'ia',
      prefix + 'íamos',
      prefix + 'íeis',
      prefix + 'iam'
    ],
    pp: [
      prefix + 'i',
      prefix + 'este',
      prefix + 'eu',
      prefix + 'emos',
      prefix + 'estes',
      prefix + 'eram'
    ],
    pmqp: [
      prefix + 'era',
      prefix + 'eras',
      prefix + 'era',
      prefix + 'êramos',
      prefix + 'êreis',
      prefix + 'eram'
    ],
    fpte: [
      prefix + 'erei',
      prefix + 'erás',
      prefix + 'erá',
      prefix + 'eremos',
      prefix + 'ereis',
      prefix + 'erão'
    ],
    fpto: [
      prefix + 'eria',
      prefix + 'erias',
      prefix + 'eria',
      prefix + 'eríamos',
      prefix + 'eríeis',
      prefix + 'eriam'
    ]
  };
}
