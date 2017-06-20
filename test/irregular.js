"use strict";

import test from "ava";
import conjugar from "../";

/**
 * ESTAR
 * =====
 *
 * Testa os verbos irregulares.
 */
test("Verbos irregulares (estar).", t => {
  t.deepEqual(conjugar("estar"), {
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
