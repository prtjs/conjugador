"use strict";

const conjugar = require("../src");

/**
 * PÔR
 * ===
 *
 * Testa os verbos irregulares terminados em -pôr.
 */
describe("sufixo -pôr:", () => {
  it("deve conjugar o verbo 'pôr'", () => {
    expect(conjugar("pôr")).toEqual({
      "presente": [
        "ponho",
        "pões",
        "põe",
        "pomos",
        "pondes",
        "põem"
      ],
      "preteritoImperfeito": [
        "punha",
        "punhas",
        "punha",
        "púnhamos",
        "púnheis",
        "punham"
      ],
      "preteritoPerfeito": [
        "pus",
        "puseste",
        "pôs",
        "pusemos",
        "pusestes",
        "puseram"
      ],
      "preteritoMaisQuePerfeito": [
        "pusera",
        "puseras",
        "pusera",
        "puséramos",
        "puséreis",
        "puseram"
      ],
      "futuroDoPresente": [
        "porei",
        "porás",
        "porá",
        "poremos",
        "poreis",
        "porão"
      ],
      "futuroDoPreterito": [
        "poria",
        "porias",
        "poria",
        "poríamos",
        "poríeis",
        "poriam"
      ]
    });
  });
});
