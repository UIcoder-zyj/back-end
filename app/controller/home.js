'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  };
  async login() {
    const { ctx } = this;
    ctx.logger.info('some request data: %j', ctx.request.body);
  //  this.logger.debug('this data is :');
    ctx.body = 'hi, egg';
  };
}

module.exports = HomeController;
