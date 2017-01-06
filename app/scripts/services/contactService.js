'use strict';

/**
 * @ngdoc function
 * @name honeybookApp.service:ContactService
 * @description
 * # ContactService
 * Service of the honeybookApp
 */
angular.module('honeybookApp')
.service('contact', function($http) {
    this.getContacts = () => {
        return $http.get('https://candidate-test.herokuapp.com/contacts');
    };
});