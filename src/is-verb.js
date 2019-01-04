'use strict';

/**
 * Verifica se um verbo é valido.
 *
 * @param {String} verb Verbo que será verificado.
 * @returns {Boolean}
 *
 * @example
 * isVerb('amar'); // true
 * isVerb('heloisa'); // false
 */
module.exports = function isVerb(verb) {
  return /(?:[aei]|pô)r$/i.test(verb);
};
