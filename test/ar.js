"use strict";

const conjugar = require("../");

/**
 * AMAR
 * ====
 *
 * Testa os verbos regulares terminados em -ar.
 */
describe("sufixo -ar:", () => {
  it("deve conjugar o verbo 'amar'", () => {
    expect(conjugar("amar")).toEqual({
      "presente": [
        "amo",
        "amas",
        "ama",
        "amamos",
        "amais",
        "amam"
      ],
      "preteritoImperfeito": [
        "amava",
        "amavas",
        "amava",
        "amávamos",
        "amáveis",
        "amavam"
      ],
      "preteritoPerfeito": [
        "amei",
        "amaste",
        "amou",
        "amamos",
        "amastes",
        "amaram"
      ],
      "preteritoMaisQuePerfeito": [
        "amara",
        "amaras",
        "amara",
        "amáramos",
        "amáreis",
        "amaram"
      ],
      "futuroDoPresente": [
        "amarei",
        "amarás",
        "amará",
        "amaremos",
        "amareis",
        "amarão"
      ],
      "futuroDoPreterito": [
        "amaria",
        "amarias",
        "amaria",
        "amaríamos",
        "amaríeis",
        "amariam"
      ]
    });
  });
});
