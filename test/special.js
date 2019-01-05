'use strict';

const conjugar = require('../index');

describe('Caso especial: Prefixo -ar: Pretérito perfeito', () => {
	it('-car', () => {
    expect(conjugar('ficar').pp[0]).toBe('fiquei');
  });
  it('-gar', () => {
    expect(conjugar('apagar').pp[0]).toBe('apaguei');
  });
  it('-çar', () => {
    expect(conjugar('começar').pp[0]).toBe('comecei');
  });
});

describe('Caso especial: Prefixo -er: Presente', () => {
  it('-cer', () => {
    expect(conjugar('conhecer').p[0]).toBe('conheço');
  });
});
