(function($, jQuery) {
  "use strict";

  function LocalStorageService($window) {
    var key = 'todo-mvc-tasks';

    this.getAllTasks = function() {
      return JSON.parse($window.localStorage.getItem(key)) || [];
    };

    this.updateTask = function(task) {
      var allTasks = this.getAllTasks();
      var found = null;
      for (var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id === task.id) {
          found = allTasks[i];
        }
      }
      if (found != null) {
        found.isCompleted = task.isCompleted;
        found.title = task.title;
      }
      $window.localStorage.setItem(key, JSON.stringify(allTasks));
    };

    this.addTask = function(task) {
      var allTasks = this.getAllTasks();
      allTasks.push(task);
      $window.localStorage.setItem(key, JSON.stringify(allTasks));
    };
  }

  angular.module('todomvc').service('localStorageService', LocalStorageService);
})();
