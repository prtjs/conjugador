"use strict";

import test from "ava";
import conjugar from "../";

/**
 * AMAR
 * ====
 *
 * Testa os verbos regulares terminados em -ar.
 */
test("Verbos regulares (amar).", t => {
  t.deepEqual(conjugar("amar"), {
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
