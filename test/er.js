"use strict";

import test from "ava";
import conjugar from "../";

/**
 * VIVER
 * =====
 *
 * Testa os verbos regulares terminados em -er.
 */
test("Verbos regulares (viver).", t => {
  t.deepEqual(conjugar("viver"), {
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
