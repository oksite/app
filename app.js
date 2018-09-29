/**
 * @access 自定义入口 涉及全局服务等
 * @author by oksite
 * @emits beforeStart 中不建议做太耗时的操作，框架会有启动的超时检测
 */

 // app.js
module.exports = app => {

  app.projectName = 'app'
  
  app.beforeStart(async () => {


    // 应用会等待这个函数执行完成才启动
    // app.cities = await app.curl('http://example.com/city.json', {
    //   method: 'GET',
    //   dataType: 'json',
    // });


    // 也可以通过以下方式来调用 Service
    // const ctx = app.createAnonymousContext();
    // app.cities = await ctx.service.cities.load();


    //Controller 调用直接this.ctx.app.cities

    console.log("==app beforeStart==");


  });

  app.ready(async () => {
      console.log("==app ready==");
  })

  app.beforeClose(async () => {
      console.log("==app beforeClose==");
  })



};



