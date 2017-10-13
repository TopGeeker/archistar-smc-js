exports.roundtrip1 = function(test) {
  'use strict';
  test.expect(1);
  const t = require('./../dist/test.js');
  const fake_rng = require('./../src/fake_rng.js');
  const crypto = require('crypto');
  const krawczyk = new t.krawczyk_css.Configuration(10, 6, fake_rng.get_values_4);
  const text = crypto.randomBytes(4096);
  const encoded = krawczyk.encode(text);
  const decoded = krawczyk.decode(encoded);
  test.deepEqual(text, decoded);
  test.done();
};

exports.roundtrip1_realRNG = function(test) {
  'use strict';
  test.expect(1);
  const t = require('./../dist/test.js');
  const crypto = require('crypto');
  const krawczyk = new t.krawczyk_css.Configuration(10, 6);
  const text = crypto.randomBytes(4096);
  const encoded = krawczyk.encode(text);
  const decoded = krawczyk.decode(encoded);
  test.deepEqual(text, decoded);
  test.done();
};
