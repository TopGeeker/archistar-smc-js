randomText = function(length) {
  'use strict';
  const crypto = require('crypto');
  return crypto.randomBytes(length);
};

engine = new (require('./../dist/test.js')).krawczyk_css.Configuration(4, 3);
noasm = new (require('./../dist/test.js')).krawczyk_css_noasm.Configuration(4, 3);

module.exports = {
  name: 'Krawczyk (4/3) - Encode',
  tests: [
    {
      name: '>    4KB   asm',
      setup: function() {const text = randomText(4096);},
      fn: function() {return engine.encode(text);}
    },
    {
      name: '>    4KB noasm',
      setup: function() {const text = randomText(4096);},
      fn: function() {return noasm.encode(text);}
    },
    {
      name: '>  128KB   asm',
      setup: function() {const text = randomText(131072);},
      fn: function() {return engine.encode(text);}
    },
    {
      name: '>  128KB noasm',
      setup: function() {const text = randomText(131072);},
      fn: function() {return noasm.encode(text);}
    },
    {
      name: '>  512KB   asm',
      setup: function() {const text = randomText(524288);},
      fn: function() {return engine.encode(text);}
    },
    {
      name: '>  512KB noasm',
      setup: function() {const text = randomText(524288);},
      fn: function() {return noasm.encode(text);}
    },
    {
      name: '> 4096KB   asm',
      setup: function() {const text = randomText(4194304);},
      fn: function() {return engine.encode(text);}
    },
    {
      name: '> 4096KB noasm',
      setup: function() {const text = randomText(4194304);},
      fn: function() {return noasm.encode(text);}
    }
  ]
};
