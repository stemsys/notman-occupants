/**
 * occupants Module
 * All of the JavaScript specific to the notman-occupants is contained inside
 * this angular module.  The only external dependencies are:
 * - AngularUI Bootstrap
 * - cormorant (reelyActive)
 */
angular.module('occupants', [ 'ui.bootstrap' ])


/**
 * InteractionCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('InteractionCtrl', function($scope) {
  $scope.organizations = organizations;
  $scope.organization = 'Select Organization';
  $scope.people = people;
  $scope.person = 'Select Person';
});
