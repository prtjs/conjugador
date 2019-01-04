'use strict';

/**
 * Obter o prefixo e o sufixo de um verbo.
 *
 * @param {string} verb Um verbo qualquer.
 * @returns {object} Objeto com o prefixo e sufixo do Verbo.
 * @example
 * parseVerb('amar');
 * // {
 * //   prefix: 'am',
 * //   suffix: 'ar'
 * // }
 */
module.exports = function parseVerb(verb) {
  var prefix = verb.replace(/(?:[aei]|pô)r$/i, '');
  var suffix = verb.replace(/^.*((?:[aei]|pô)r)$/i, '$1');

  return {
    prefix: prefix,
    suffix: suffix
  };
}

