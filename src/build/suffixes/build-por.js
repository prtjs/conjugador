'use strict';

/**
 * Obter todas as conjugações de um verbo terminado em -pôr.
 *
 * @param {string} prefix Prefixo do verbo.
 * @returns {object} Verbo conjugado.
 */
module.exports = function buildPor(prefix) {
  return {
    p: [
      prefix + 'ponho',
      prefix + 'pões',
      prefix + 'põe',
      prefix + 'pomos',
      prefix + 'pondes',
      prefix + 'põem'
    ],
    pi: [
      prefix + 'punha',
      prefix + 'punhas',
      prefix + 'punha',
      prefix + 'púnhamos',
      prefix + 'púnheis',
      prefix + 'punham'
    ],
    pp: [
      prefix + 'pus',
      prefix + 'puseste',
      prefix + 'pôs',
      prefix + 'pusemos',
      prefix + 'pusestes',
      prefix + 'puseram'
    ],
    pmqp: [
      prefix + 'pusera',
      prefix + 'puseras',
      prefix + 'pusera',
      prefix + 'puséramos',
      prefix + 'puséreis',
      prefix + 'puseram'
    ],
    fpte: [
      prefix + 'porei',
      prefix + 'porás',
      prefix + 'porá',
      prefix + 'poremos',
      prefix + 'poreis',
      prefix + 'porão'
    ],
    fpto: [
      prefix + 'poria',
      prefix + 'porias',
      prefix + 'poria',
      prefix + 'poríamos',
      prefix + 'poríeis',
      prefix + 'poriam'
    ]
  };
}
