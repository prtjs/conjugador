"use strict";

/**
 * Obter o prefixo e o sufixo de um verbo.
 *
 * @param {String} verbo - Um verbo qualquer.
 * @returns {Object} Objeto com o prefixo e sufixo do Verbo.
 *
 * @example
 * analisar("amar");
 * // {
 * //   prefixo: "am",
 * //   sufixo: "ar"
 * // }
 */
function analisar(verbo) {
  var prefixo = verbo.replace(/(?:[aei]|pô)r$/i, "");
  var sufixo = verbo.replace(/^.*((?:[aei]|pô)r)$/i, "$1");

  return {
    prefixo: prefixo,
    sufixo: sufixo
  };
}

module.exports = analisar;
