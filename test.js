'use strict';

var test = require('ava');
var conjugar = require('./');

test('conjugador', function (t) {

    // verbo regular
    t.is(JSON.stringify(conjugar('amar')), '{"eu":"amo","tu":"amas","ele":"ama'
        + '","nos":"amamos","vos":"amais","eles":"amam"}');

    // verbo irregular
    t.is(JSON.stringify(conjugar('pôr')), '{"eu":"ponho","tu":"pões","ele":"põ'
        + 'e","nos":"pomos","vos":"pondes","eles":"põem"}');
});
