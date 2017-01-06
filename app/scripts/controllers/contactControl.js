'use strict';

/**
 * @ngdoc function
 * @name honeybookApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the honeybookApp
 */
angular.module('honeybookApp')
  .controller('ContactCtrl', function ($scope, contact) {
     contact.getContacts()
        .then(response => {
            $scope.contactList = response.data;
        });
  });