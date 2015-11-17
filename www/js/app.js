angular.module('todomvc', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.all-tasks', {
        url: '/all-tasks',
        views: {
          'tab-all-tasks': {
            templateUrl: 'js/allTasks/allTasks.html',
            controller: 'allTasksController as allTasks'
          }
        }
      })
      .state('tab.add-task', {
        url: '/add-task',
        views: {
          'tab-add-task': {
            templateUrl: 'js/addTask/addTask.html',
            controller: 'addTaskController as addTask'
          }
        }
      })
      .state('tab.source-code', {
        url: '/source-code',
        views: {
          'tab-source-code': {
            templateUrl: 'js/sourceCode/sourceCode.html',
            controller: 'sourceCodeController as sourceCode'
          }
        }
      });
    $urlRouterProvider.otherwise('/tab/all-tasks');
  });
