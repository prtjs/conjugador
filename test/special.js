'use strict';

const conjugate = require('../index');

describe('Caso especial: Prefixo -ar: Pretérito perfeito', () => {
	it('-car', () => {
    expect(conjugate('ficar').pp[0]).toBe('fiquei');
  });
  it('-gar', () => {
    expect(conjugate('apagar').pp[0]).toBe('apaguei');
  });
  it('-çar', () => {
    expect(conjugate('começar').pp[0]).toBe('comecei');
  });
});

describe('Caso especial: Prefixo -er: Presente', () => {
  it('-cer', () => {
    expect(conjugate('conhecer').p[0]).toBe('conheço');
  });
});
