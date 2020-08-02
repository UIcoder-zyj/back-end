/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-29 23:16:39
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 13:02:12
 * @Description: egg service description
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596035781824_3405';

  // add your middleware config here
  config.middleware = ['jwt'];

  // add your user config here
  const userConfig = {

    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*'],
  };
  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowHeaders: 'Origin, X-Requested-With, Content-Type, Accept,Authorization',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.mongoose = {
    client: {
      url: 'mongodb://tjugv:tjugv234@127.0.0.1:20000',
      options: {
        dbName: 'ugvproject'
      },
    },
  };

  // config.mongoose = {
  //   url: 'mongodb://127.0.0.1:20000',
  //   options: {},
  // };
  return {
    ...config,
    ...userConfig,
  };
};
