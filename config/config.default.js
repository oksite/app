'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537944555668_5199';

  // add your config here
  config.middleware = [];

  //use nunjucks tpl
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  //api url path 
  config.path = {
    serverUrl: 'https://cnodejs.org/api/v1',
  }

  return config;
};
