'use strict';

var normalizePrefix = require('../normalize-prefix');

/**
 * Obter todas as conjugações de um verbo terminado em -ar.
 *
 * @param {string} prefix Prefixo do verbo.
 * @returns {object} Verbo conjugado.
 */
module.exports = function buildAr(prefix) {
  return {
    p: [
      prefix + 'o',
      prefix + 'as',
      prefix + 'a',
      prefix + 'amos',
      prefix + 'ais',
      prefix + 'am'
    ],
    pi: [
      prefix + 'ava',
      prefix + 'avas',
      prefix + 'ava',
      prefix + 'ávamos',
      prefix + 'áveis',
      prefix + 'avam'
    ],
    pp: [
      normalizePrefix(prefix, [
        {
          ifIs: 'ç',
          replaceBy: 'c'
        },
        {
          ifIs: 'c',
          replaceBy: 'qu'
        },
        {
          ifIs: 'g',
          replaceBy: 'gu'
        },
      ]) + 'ei',
      prefix + 'aste',
      prefix + 'ou',
      prefix + 'amos',
      prefix + 'astes',
      prefix + 'aram'
    ],
    pmqp: [
      prefix + 'ara',
      prefix + 'aras',
      prefix + 'ara',
      prefix + 'áramos',
      prefix + 'áreis',
      prefix + 'aram'
    ],
    fpte: [
      prefix + 'arei',
      prefix + 'arás',
      prefix + 'ará',
      prefix + 'aremos',
      prefix + 'areis',
      prefix + 'arão'
    ],
    fpto: [
      prefix + 'aria',
      prefix + 'arias',
      prefix + 'aria',
      prefix + 'aríamos',
      prefix + 'aríeis',
      prefix + 'ariam'
    ]
  };
}
