"use strict";

/**
 * Obter todas as conjugações de um verbo terminado em -ir.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function ir(prefixo) {
  return {
    presente: [
      prefixo + "o",
      prefixo + "es",
      prefixo + "e",
      prefixo + "imos",
      prefixo + "is",
      prefixo + "em"
    ],
    preteritoImperfeito: [
      prefixo + "ia",
      prefixo + "ias",
      prefixo + "ia",
      prefixo + "íamos",
      prefixo + "íeis",
      prefixo + "iam"
    ],
    preteritoPerfeito: [
      prefixo + "i",
      prefixo + "iste",
      prefixo + "iu",
      prefixo + "imos",
      prefixo + "istes",
      prefixo + "iram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "ira",
      prefixo + "iras",
      prefixo + "ira",
      prefixo + "íramos",
      prefixo + "íreis",
      prefixo + "iram"
    ],
    futuroDoPresente: [
      prefixo + "irei",
      prefixo + "irás",
      prefixo + "irá",
      prefixo + "iremos",
      prefixo + "ireis",
      prefixo + "irão"
    ],
    futuroDoPreterito: [
      prefixo + "iria",
      prefixo + "irias",
      prefixo + "iria",
      prefixo + "iríamos",
      prefixo + "iríeis",
      prefixo + "iriam"
    ]
  };
}

module.exports = ir;
