"use strict";

import test from "ava";
import conjugar from "../";

/**
 * PÔR
 * ===
 *
 * Testa os verbos irregulares terminados em -pôr.
 */
test("Verbos irregulares (pôr).", t => {
  t.deepEqual(conjugar("pôr"), {
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
