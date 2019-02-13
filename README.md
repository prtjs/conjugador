# Conjugador.js

> Um conjugador de verbos da língua portuguesa.

[![Status](https://travis-ci.org/theuves/conjugador.svg?branch=master)](https://travis-ci.org/theuves/conjugador.svg)
[![Doar](https://img.shields.io/badge/paypal-doar-179bd7.svg?logo=paypal&style=flat&logoColor=blue)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3WZ447WCJ54XG&source=url)

Um simple utilitário para conjugar verbos da língua portuguesa, regulares ou
irregulares, nos seis tempos do modo indicativo (presente, pretérito imperfeito,
pretérito perfeito, pretérito mais-que-perfeito, futuro do presente e futuro do
pretérito).

Não requer conexão com a internet.

## Instalação

Instale-o como quiser. Tente `npm` ou `yarn`.

Veja:

- npm: `npm install conjugador`
- yarn: `yarn add conjugador`

Você também pode baixá-lo e importá-lo em seu HTML.

## Uso

Importe-o com:

```js
var conjugar = require("conjugador");
```

### Sintaxe

```js
conjugar(verbo)
```

#### Parâmetros

- `verbo` - Um verbo qualquer (regular ou irregular) da língua portuguesa.

#### Retorno

Retorna um objeto com as conjugações do verbo no qual o valor de cada
propriedade é uma *array* com a conjugação em todas as pessoas do singular e do
plural.

As propriedades retornadas são:

* `p` - Presente.
* `pi` -  Pretérito Imperfeito.
* `pp` -  Pretérito Perfeito.
* `pmqp` - Pretérito Mais-que-perfeito.
* `fpte` - Futuro do Presente.
* `fpto` - Futuro do Pretérito.

## Exemplo

Um exemplo para obter a conjugação do verbo *amar* no presente.

```js
var conjugar = require("conjugador");

conjugar("amar").presente;
// [ "amo",
//   "amas",
//   "ama",
//   "amamos",
//   "amais",
//   "amam" ]
```

## Como Funciona?

Os verbos regulares são conjugados a partir de um algoritmo, enquanto os
irregulares com ajuda de uma lista pronta com mais de 163 verbos conhecidos.
Não é exigido que o verbo seja "oficial", bastando ser conjugável, portanto
também é possível conjugar verbos como *twittar*, *forkar*, *photoshopar*, etc.

Sinta-se livre para enviar um Pull Request com mais verbos irregulares!

## Doações

Gostou ou está usando esse ou outros projetos mantidos por mim?

Você pode me ajudar fazendo uma doação.

Qualquer valor é bem-vindo.

[![Link para doar](https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3WZ447WCJ54XG&source=url)

## Licença

MIT &copy; Matheus Alves
