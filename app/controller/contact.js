'use strict';

const Controller = require('egg').Controller;

class ContactController extends Controller {

  async index (){
    const ctx = this.ctx;
    const data = { title: 'contact page' };
    await ctx.render('contact/index', data);
  }

}

module.exports = ContactController;
