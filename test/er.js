"use strict";

const conjugar = require("../");

/**
 * VIVER
 * =====
 *
 * Testa os verbos regulares terminados em -er.
 */
describe("sufixo -er:", () => {
  it("deve conjugar o verbo 'viver'", () => {
    expect(conjugar("viver")).toEqual({
      "presente": [
        "vivo",
        "vives",
        "vive",
        "vivemos",
        "viveis",
        "vivem"
      ],
      "preteritoImperfeito": [
        "vivia",
        "vivias",
        "vivia",
        "vivíamos",
        "vivíeis",
        "viviam"
      ],
      "preteritoPerfeito": [
        "vivi",
        "viveste",
        "viveu",
        "vivemos",
        "vivestes",
        "viveram"
      ],
      "preteritoMaisQuePerfeito": [
        "vivera",
        "viveras",
        "vivera",
        "vivêramos",
        "vivêreis",
        "viveram"
      ],
      "futuroDoPresente": [
        "viverei",
        "viverás",
        "viverá",
        "viveremos",
        "vivereis",
        "viverão"
      ],
      "futuroDoPreterito": [
        "viveria",
        "viverias",
        "viveria",
        "viveríamos",
        "viveríeis",
        "viveriam"
      ]
    });
  });
});
