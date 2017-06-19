"use strict";

var analisar = require("./analisar");

var ar = require("./terminacoes/ar");
var er = require("./terminacoes/er");
var ir = require("./terminacoes/ir");
var por = require("./terminacoes/por");

/**
 * Obter toda a conjugação de um verbo.
 *
 * Somente para verbos terminados em -ar, -er, ir, -pôr.
 *
 * @param {String} verbo - Um verbo.
 * @returns {Object} Toda a conjugação do verbo.
 */
function construir(verbo) {
  var analise = analisar(verbo);
  var conjugacao;

  switch (analise.sufixo) {
    case "ar":
      conjugacao = ar(analise.prefixo);
      break;
    case "er":
      conjugacao = er(analise.prefixo);
      break;
    case "ir":
      conjugacao = ir(analise.prefixo);
      break;
    case "pôr":
      conjugacao = por(analise.prefixo);
      break;
  }

  return conjugacao;
}

module.exports = construir;
