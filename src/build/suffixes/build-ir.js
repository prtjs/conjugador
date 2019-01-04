'use strict';

/**
 * Obter todas as conjugações de um verbo terminado em -ir.
 *
 * @param {string} prefix Prefixo do verbo.
 * @returns {object} Verbo conjugado.
 */
module.exports = function buildIr(prefix) {
  return {
    p: [
      prefix + 'o',
      prefix + 'es',
      prefix + 'e',
      prefix + 'imos',
      prefix + 'is',
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
      prefix + 'iste',
      prefix + 'iu',
      prefix + 'imos',
      prefix + 'istes',
      prefix + 'iram'
    ],
    pmqp: [
      prefix + 'ira',
      prefix + 'iras',
      prefix + 'ira',
      prefix + 'íramos',
      prefix + 'íreis',
      prefix + 'iram'
    ],
    fpte: [
      prefix + 'irei',
      prefix + 'irás',
      prefix + 'irá',
      prefix + 'iremos',
      prefix + 'ireis',
      prefix + 'irão'
    ],
    fpto: [
      prefix + 'iria',
      prefix + 'irias',
      prefix + 'iria',
      prefix + 'iríamos',
      prefix + 'iríeis',
      prefix + 'iriam'
    ]
  };
}
