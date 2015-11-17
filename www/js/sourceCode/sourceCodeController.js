(function($, jQuery) {
  "use strict";

  function SourceCodeController($window) {
    var that = this;

    that.gotoRepo = function() {
      $window.open("https://github.com/ThorstenHans/ionic-todo-mvc", "_system");
    };
  }
  angular.module('todomvc').controller('sourceCodeController', SourceCodeController);
})();
