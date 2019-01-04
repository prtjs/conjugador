
/**
 * Corrigir o prefixo para determinados tempos.
 *
 * @param {string} prefix Prefixo de um verbo qualquer.
 * @param {Array} options Opções de substituição do prefixo.
 */
module.exports = function normalizePrefix(prefix, options) {
  var option = options.find(function (opt) {
    return RegExp(opt.ifIs + '$').test(prefix);
  });

  if (!option) {
    return prefix
  }

  var regex = RegExp(option.ifIs + '$');
  var replacer = option.replaceBy;

  return prefix.replace(regex, replacer);
}
