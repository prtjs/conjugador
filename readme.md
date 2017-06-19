#  Conjugador.js

[![Build Status](https://travis-ci.org/theuves/conjugador.svg?branch=master)](https://travis-ci.org/theuves/conjugador)
[![Downloads](https://img.shields.io/npm/dm/conjugador.svg)](https://github.com/theuves/conjugador/releases)
[![npm version](https://badge.fury.io/js/conjugador.svg)](https://badge.fury.io/js/conjugador)

> Conjugue verbos da língua portuguesa no presente do indicativo.

Esta é uma biblioteca que lhe permite conjugar qualquer verbo existente ou inexistente (que tenha uma conjugação válida) da língua portuguesa no presente do modo indicativo.

Verbos irregulares são conjugados com a ajuda de uma lista (incompleta) com a conjugação pronta de alguns verbos mais conhecidos (mais de 170), já os verbos regulares são conjugados a partir de um algoritmo.

## Instalação

Instale-o com `npm i -s conjugador` ou `bower i -s conjugador`.

Após instalar, importe-o com:

* `var conjugar = require('conjugador')` ― Para usá-lo com Node.js.
* `<script src="bower_components/conjugador/dist/conjugador.js"></script>` ― Para usá-lo em um navegador.

## Uso

Após a instalação e configuração, você terá a função `conjugar` pronta para uso. Essa função recebe um único parâmetro, que deve ser um verbo, e retorna um objeto com toda a sua conjugação. Veja dois exemplos abaixo com um verbo regular e outro irregular:

```js
conjugar('amar'); // {"eu":"amo","tu":"amas","ele":"ama","nos":"amamos","vos":"amais","eles":"amam"}
conjugar('pôr'); // {"eu":"ponho","tu":"pões","ele":"põe","nos":"pomos","vos":"pondes","eles":"põem"}
```

Também é possível conjugar verbos não existentes oficialmente na língua portuguesa (que sejam regulares), exemplos:

```js
conjugar('twittar'); // {"eu":"twitto","tu":"twittas","ele":"twitta","nos":"twittamos","vos":"twittais","eles":"twittam"}
conjugar('photoshopar'); // {"eu":"photoshopo","tu":"photoshopas","ele":"photoshopa","nos":"photoshopamos","vos":"photoshopais","eles":"photoshopam"}
conjugar('forkar'); // {"eu":"forko","tu":"forkas","ele":"forka","nos":"forkamos","vos":"forkais","eles":"forkam"}
```

***

Desenvolvido por [Matheus Alves](https://github.com/theuves) e licenciado sob a licença MIT.

[![GitHub followers](https://img.shields.io/github/followers/theuves.svg?style=social&label=Follow)](https://github.com/theuves)
[![Twitter Follow](https://img.shields.io/twitter/follow/theuves.svg?style=social&label=Follow)](https://twitter.com/theuves)
