"use strict";

/**
 * Obter todas as conjugações de um verbo terminado em -pôr.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function por(prefixo) {
  return {
    presente: [
      prefixo + "ponho",
      prefixo + "pões",
      prefixo + "põe",
      prefixo + "pomos",
      prefixo + "pondes",
      prefixo + "põem"
    ],
    preteritoImperfeito: [
      prefixo + "punha",
      prefixo + "punhas",
      prefixo + "punha",
      prefixo + "púnhamos",
      prefixo + "púnheis",
      prefixo + "punham"
    ],
    preteritoPerfeito: [
      prefixo + "pus",
      prefixo + "puseste",
      prefixo + "pôs",
      prefixo + "pusemos",
      prefixo + "pusestes",
      prefixo + "puseram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "pusera",
      prefixo + "puseras",
      prefixo + "pusera",
      prefixo + "puséramos",
      prefixo + "puséreis",
      prefixo + "puseram"
    ],
    futuroDoPresente: [
      prefixo + "porei",
      prefixo + "porás",
      prefixo + "porá",
      prefixo + "poremos",
      prefixo + "poreis",
      prefixo + "porão"
    ],
    futuroDoPreterito: [
      prefixo + "poria",
      prefixo + "porias",
      prefixo + "poria",
      prefixo + "poríamos",
      prefixo + "poríeis",
      prefixo + "poriam"
    ]
  };
}

module.exports = por;
