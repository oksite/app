/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();

(function(){
  var navigation = document.getElementById("navbar");
  var navigation_node_li = navigation.getElementsByTagName('li');
  var navigation_node_a = navigation.getElementsByTagName('a');
   var  index = 0;
   var  url = window.location.href.split('?')[0].split('/').pop(); 
    if(url){
       for (var i=navigation_node_a.length; i--;) {
           if(navigation_node_a[i].href.indexOf(url) !== -1){
               index = i;
               break;
           }
       }
   }
   navigation_node_li[index].className = 'active';
})();