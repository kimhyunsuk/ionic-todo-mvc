(function($, jQuery) {
  "use strict";

  function AllTasksController($scope, $ionicListDelegate, localStorageService) {
    var that = this;

    that.toggleTask = function(task) {
      task.isCompleted = !task.isCompleted;
      localStorageService.updateTask(task);
      $ionicListDelegate.closeOptionButtons();
    }

    $scope.$on('$ionicView.beforeEnter', function() {
      that.tasks = localStorageService.getAllTasks();
    });
  }

  angular.module('todomvc').controller('allTasksController', AllTasksController);
})();
