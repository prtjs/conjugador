#  conjugador.js [![Build Status](https://travis-ci.org/theuves/conjugador.svg?branch=master)](https://travis-ci.org/theuves/conjugador)

> Um conjugador de verbos da língua portuguesa.

**Instalação**: `npm install --save  conjugador`.

```js
var conjugar = require('conjugador');

conjugar('amar'); // {eu: 'amo', tu: 'amas', ele: 'ama', ...}
conjugar('pôr'); // {eu: 'ponho', tu: 'pões', ele: 'põe', ...}
```
