(function($, jQuery) {
  "use strict";

  function AddTaskController(localStorageService) {
    var that = this;
    that.title = "";


    that.add = function() {
      var task = {
        id: (new Date()).getTime(),
        title: that.title
      };
      localStorageService.addTask(task);
      that.title = "";
    }
  }

  angular.module('todomvc').controller('addTaskController', AddTaskController);
})();
