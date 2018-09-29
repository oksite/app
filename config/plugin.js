'use strict';

// had enabled by egg
exports.static = true;

// set view 
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

//allow cors
exports.cors = {
  enable: true,
  package: 'egg-cors',
}
