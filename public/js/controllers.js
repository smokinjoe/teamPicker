(function () {
  "use strict";

  angular.module('App.controllers', []);

  angular.module('App.controllers')
  .controller('AppCtrl', ['$scope', function ($scope) {
  }]);

  angular.module('App.controllers')
  .controller('TeamSelectCtrl', ['$scope', 'Team', function ($scope, Team) {
    $scope.players = [];
    $scope.teams = [];
    $scope.teamsFormed = false;

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

    $scope.resetTeams = function () {
      $scope.teamsFormed = false;
      $scope.teams = [];
    };

    $scope.formTeams = function () {
      Team.formTeams({ players: $scope.players }, function (data, status) {
        $scope.teams = data.teams;
        $scope.teamsFormed = $scope.teams.length > 0 ? true : false;
        Team.getNames({ num: $scope.teams.length }, function (data, status) {
          _.forEach($scope.teams, function (team, index) {
            team.name = data.team_names[index];
          });
        })
      });
    };

  }]);

}());