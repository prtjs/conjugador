"use strict";

/**
 * Obter todas as conjugações de um verbo terminado em -er.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function er(prefixo) {
  const ehCer = prefixo.substr(-1) === "c";

  return {
    presente: [
      (ehCer ? prefixo.replace(/.$/, "ç") : prefixo) + "o",
      prefixo + "es",
      prefixo + "e",
      prefixo + "emos",
      prefixo + "eis",
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
      prefixo + "este",
      prefixo + "eu",
      prefixo + "emos",
      prefixo + "estes",
      prefixo + "eram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "era",
      prefixo + "eras",
      prefixo + "era",
      prefixo + "êramos",
      prefixo + "êreis",
      prefixo + "eram"
    ],
    futuroDoPresente: [
      prefixo + "erei",
      prefixo + "erás",
      prefixo + "erá",
      prefixo + "eremos",
      prefixo + "ereis",
      prefixo + "erão"
    ],
    futuroDoPreterito: [
      prefixo + "eria",
      prefixo + "erias",
      prefixo + "eria",
      prefixo + "eríamos",
      prefixo + "eríeis",
      prefixo + "eriam"
    ]
  };
}

module.exports = er;
