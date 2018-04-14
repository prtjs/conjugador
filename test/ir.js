"use strict";

const conjugar = require("../src");

/**
 * PARTIR
 * ======
 *
 * Testa os verbos regulares terminados em -ir.
 */
describe("sufixo -ir:", () => {
  it("deve conjugar o 'partir'", () => {
    expect(conjugar("partir")).toEqual({
      "presente": [
        "parto",
        "partes",
        "parte",
        "partimos",
        "partis",
        "partem"
      ],
      "preteritoImperfeito": [
        "partia",
        "partias",
        "partia",
        "partíamos",
        "partíeis",
        "partiam"
      ],
      "preteritoPerfeito": [
        "parti",
        "partiste",
        "partiu",
        "partimos",
        "partistes",
        "partiram"
      ],
      "preteritoMaisQuePerfeito": [
        "partira",
        "partiras",
        "partira",
        "partíramos",
        "partíreis",
        "partiram"
      ],
      "futuroDoPresente": [
        "partirei",
        "partirás",
        "partirá",
        "partiremos",
        "partireis",
        "partirão"
      ],
      "futuroDoPreterito": [
        "partiria",
        "partirias",
        "partiria",
        "partiríamos",
        "partiríeis",
        "partiriam"
      ]
    });
  });
});
