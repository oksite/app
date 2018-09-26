'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index (){
    var bufs = [];
    const ctx = this.ctx;
    const { serverUrl } = this.config.path;   
    const result = await ctx.curl(`${serverUrl}/topics??page=1&limit=5&mdrender=false&tab=share`);
    await ctx.render('home/index',{
      title: 'index page ',
      list:JSON.parse(result.data)
    });
  }
}

module.exports = HomeController;
