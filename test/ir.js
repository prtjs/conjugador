"use strict";

import test from "ava";
import conjugar from "../";

/**
 * PARTIR
 * ======
 *
 * Testa os verbos regulares terminados em -ir.
 */
test("Verbos regulares (partir).", t => {
  t.deepEqual(conjugar("partir"), {
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
