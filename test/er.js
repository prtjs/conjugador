'use strict';

const conjugar = require('../index');

/**
 * VIVER
 * =====
 *
 * Testa os verbos regulares terminados em -er.
 */
describe('Sufixo -er:', () => {
  it('Deve conjugar o verbo "viver"', () => {
    expect(conjugar('viver')).toEqual({
      p: [
        'vivo',
        'vives',
        'vive',
        'vivemos',
        'viveis',
        'vivem'
      ],
      pi: [
        'vivia',
        'vivias',
        'vivia',
        'vivíamos',
        'vivíeis',
        'viviam'
      ],
      pp: [
        'vivi',
        'viveste',
        'viveu',
        'vivemos',
        'vivestes',
        'viveram'
      ],
      pmqp: [
        'vivera',
        'viveras',
        'vivera',
        'vivêramos',
        'vivêreis',
        'viveram'
      ],
      fpte: [
        'viverei',
        'viverás',
        'viverá',
        'viveremos',
        'vivereis',
        'viverão'
      ],
      fpto: [
        'viveria',
        'viverias',
        'viveria',
        'viveríamos',
        'viveríeis',
        'viveriam'
      ]
    });
  });
});
