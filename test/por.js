'use strict';

const conjugar = require('../index');

/**
 * PÔR
 * ===
 *
 * Testa os verbos irregulares terminados em -pôr.
 */
describe('Sufixo -pôr:', () => {
  it('Deve conjugar o verbo "pôr"', () => {
    expect(conjugar('pôr')).toEqual({
      p: [
        'ponho',
        'pões',
        'põe',
        'pomos',
        'pondes',
        'põem'
      ],
      pi: [
        'punha',
        'punhas',
        'punha',
        'púnhamos',
        'púnheis',
        'punham'
      ],
      pp: [
        'pus',
        'puseste',
        'pôs',
        'pusemos',
        'pusestes',
        'puseram'
      ],
      pmqp: [
        'pusera',
        'puseras',
        'pusera',
        'puséramos',
        'puséreis',
        'puseram'
      ],
      fpte: [
        'porei',
        'porás',
        'porá',
        'poremos',
        'poreis',
        'porão'
      ],
      fpto: [
        'poria',
        'porias',
        'poria',
        'poríamos',
        'poríeis',
        'poriam'
      ]
    });
  });
});
