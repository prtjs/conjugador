"use strict";

/**
 * Obter todas as conjugações de um verbo terminado em -ar.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function ar(prefixo) {
  var ehCar = prefixo.substr(-1) === "c";

  console.log(prefixo.substr(-1));

  return {
    presente: [
      prefixo + "o",
      prefixo + "as",
      prefixo + "a",
      prefixo + "amos",
      prefixo + "ais",
      prefixo + "am"
    ],
    preteritoImperfeito: [
      prefixo + "ava",
      prefixo + "avas",
      prefixo + "ava",
      prefixo + "ávamos",
      prefixo + "áveis",
      prefixo + "avam"
    ],
    preteritoPerfeito: [
      (ehCar ? prefixo.replace(/.$/, "qu") : prefixo) + "ei",
      prefixo + "aste",
      prefixo + "ou",
      prefixo + "amos",
      prefixo + "astes",
      prefixo + "aram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "ara",
      prefixo + "aras",
      prefixo + "ara",
      prefixo + "áramos",
      prefixo + "áreis",
      prefixo + "aram"
    ],
    futuroDoPresente: [
      prefixo + "arei",
      prefixo + "arás",
      prefixo + "ará",
      prefixo + "aremos",
      prefixo + "areis",
      prefixo + "arão"
    ],
    futuroDoPreterito: [
      prefixo + "aria",
      prefixo + "arias",
      prefixo + "aria",
      prefixo + "aríamos",
      prefixo + "aríeis",
      prefixo + "ariam"
    ]
  };
}

module.exports = ar;
