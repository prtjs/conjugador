'use strict';

const conjugar = require('../index');

/**
 * PARTIR
 * ======
 *
 * Testa os verbos regulares terminados em -ir.
 */
describe('Sufixo -ir:', () => {
  it('Deve conjugar o verbo "partir"', () => {
    expect(conjugar('partir')).toEqual({
      p: [
        'parto',
        'partes',
        'parte',
        'partimos',
        'partis',
        'partem'
      ],
      pi: [
        'partia',
        'partias',
        'partia',
        'partíamos',
        'partíeis',
        'partiam'
      ],
      pp: [
        'parti',
        'partiste',
        'partiu',
        'partimos',
        'partistes',
        'partiram'
      ],
      pmqp: [
        'partira',
        'partiras',
        'partira',
        'partíramos',
        'partíreis',
        'partiram'
      ],
      fpte: [
        'partirei',
        'partirás',
        'partirá',
        'partiremos',
        'partireis',
        'partirão'
      ],
      fpto: [
        'partiria',
        'partirias',
        'partiria',
        'partiríamos',
        'partiríeis',
        'partiriam'
      ]
    });
  });
});
