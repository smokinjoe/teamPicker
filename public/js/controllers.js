(function () {
  "use strict";

  angular.module('App.controllers', []);

  angular.module('App.controllers')
  .controller('AppCtrl', ['$scope', function ($scope) {
  }]);

  angular.module('App.controllers')
  .controller('TeamSelectCtrl', ['$scope', 'Team', 'WHOLE_OFFICE', function ($scope, Team, WHOLE_OFFICE) {
    $scope.players = [];
    $scope.teams = [];
    $scope.teamsFormed = false;

    function shuffle(o){
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randChunkSplit (arr, min, max) {
      var arr = arr.slice();
      var arrs = [];
      var size = 1;
      var min = min || 1;
      var max = max || min || 1;

      while (arr.length > 0) {
        var index = getRandomArbitrary(0, arr.length - 1);
        size = Math.min(max, Math.floor((Math.random() * max) + min));
        arrs.push(arr.splice(index, size));
      }

      return arrs;
    }

    $scope.loadAll = function () {
      Team.getOffice({}, function (data, status) {
        $scope.players = data.players;
      });
    };

    $scope.addNewPlayer = function (newPlayerName) {
      if (!_.contains($scope.players, newPlayerName)) {
        $scope.players.push(newPlayerName);
        $scope.newPlayerName = '';
      }
    };

    $scope.removePlayer = function (playerName) {
      _.remove($scope.players, function (player) {
        return player === playerName;
      });
    };

    $scope.formTeams = function () {
      var numPlayers = $scope.players.length;
      var groupCount = Math.ceil($scope.players.length / 2);
      var playerList = shuffle(angular.copy($scope.players));

      $scope.teams = randChunkSplit(playerList, 2);
      $scope.teamsFormed = $scope.teams.length > 0 ? true : false;
    };

    $scope.resetTeams = function () {
      $scope.teamsFormed = false;
      $scope.teams = [];
    };

  }]);

}());