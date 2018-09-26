'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {

  async index (){
    const ctx = this.ctx;
    const data = { title: 'about page' };
    await ctx.render('about/index', data);
  }

}

module.exports = AboutController;
