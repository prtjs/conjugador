"use strict";

const conjugar = require("../src");

/**
 * ESTAR
 * =====
 *
 * Testa os verbos irregulares.
 */
describe("verbo irregular:", () => {
  it("deve conjugar o verbo 'estar'", () => {
    expect(conjugar("estar")).toEqual({
      "presente": [
        "estou",
        "estás",
        "está",
        "estamos",
        "estais",
        "estão"
      ],
      "preteritoImperfeito": [
        "estava",
        "estavas",
        "estava",
        "estávamos",
        "estáveis",
        "estavam"
      ],
      "preteritoPerfeito": [
        "estive",
        "estiveste",
        "esteve",
        "estivemos",
        "estivestes",
        "estiveram"
      ],
      "preteritoMaisQuePerfeito": [
        "estivera",
        "estiveras",
        "estivera",
        "estivéramos",
        "estivéreis",
        "estiverem"
      ],
      "futuroDoPresente": [
        "estarei",
        "estarás",
        "estará",
        "estaremos",
        "estareis",
        "estarão"
      ],
      "futuroDoPreterito": [
        "estaria",
        "estarias",
        "estaria",
        "estaríamos",
        "estaríeis",
        "estariam"
      ]
    });
  });
});
