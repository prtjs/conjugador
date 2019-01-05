'use strict';

const conjugar = require('../index');

/**
 * ESTAR
 * =====
 *
 * Testa os verbos irregulares.
 */
describe('Verbo irregular:', () => {
  it('Deve conjugar o verbo "estar"', () => {
    expect(conjugar('estar')).toEqual({
      p: [
        'estou',
        'estás',
        'está',
        'estamos',
        'estais',
        'estão'
      ],
      pi: [
        'estava',
        'estavas',
        'estava',
        'estávamos',
        'estáveis',
        'estavam'
      ],
      pp: [
        'estive',
        'estiveste',
        'esteve',
        'estivemos',
        'estivestes',
        'estiveram'
      ],
      pmqp: [
        'estivera',
        'estiveras',
        'estivera',
        'estivéramos',
        'estivéreis',
        'estiverem'
      ],
      fpte: [
        'estarei',
        'estarás',
        'estará',
        'estaremos',
        'estareis',
        'estarão'
      ],
      fpto: [
        'estaria',
        'estarias',
        'estaria',
        'estaríamos',
        'estaríeis',
        'estariam'
      ]
    });
  });
});
