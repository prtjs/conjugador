'use strict';

const conjugate = require('../index');

/**
 * AMAR
 * ====
 *
 * Testa os verbos regulares terminados em -ar.
 */
describe('Sufixo -ar:', () => {
  it('Deve conjugar o verbo "amar"', () => {
    expect(conjugate('amar')).toEqual({
      p: [
        'amo',
        'amas',
        'ama',
        'amamos',
        'amais',
        'amam'
      ],
      pi: [
        'amava',
        'amavas',
        'amava',
        'amávamos',
        'amáveis',
        'amavam'
      ],
      pp: [
        'amei',
        'amaste',
        'amou',
        'amamos',
        'amastes',
        'amaram'
      ],
      pmqp: [
        'amara',
        'amaras',
        'amara',
        'amáramos',
        'amáreis',
        'amaram'
      ],
      fpte: [
        'amarei',
        'amarás',
        'amará',
        'amaremos',
        'amareis',
        'amarão'
      ],
      fpto: [
        'amaria',
        'amarias',
        'amaria',
        'amaríamos',
        'amaríeis',
        'amariam'
      ]
    });
  });
});
