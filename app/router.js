/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-29 23:16:39
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 10:54:39
 * @Description: egg service description
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login', controller.userController.login);
  router.post('/api/register',controller.userController.register);

  //router.post('/api/map/build',controller.mapController.build)
};
