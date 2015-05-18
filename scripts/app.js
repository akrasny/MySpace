'use strict';

angular.module('MySpace', []);

angular.module('MySpace').controller('TestCtrl', function($scope) {
    $scope.hello = 'Hello, Angular!';
    $scope.table1 = 'Hello, Table1!';
});

angular.module('MySpace').controller('TestSidebarCtrl', function ($scope) {
    $scope.sidebar = 'Hello, Sidebar!';
});

angular.module('MySpace').controller('TableCtrl', function ($scope) {
    $scope.table = 'Hello, Table!';
});