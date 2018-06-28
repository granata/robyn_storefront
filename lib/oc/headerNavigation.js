angular.module('OrderCloud-HeaderNavigation', []);
angular.module('OrderCloud-HeaderNavigation')
    .directive('headernavigation', headernavigation)
    .controller('HeaderNavigationCtrl', HeaderNavigationCtrl);

function headernavigation() {
    return {
        restrict: 'E',
        template: template
    };

    function template() {
        return [
            '<section class="header-navigation navbar-fixed-top">',
            '<div class="row">',
            '<div class="col-xs-12 col-sm-6 pull-right">',
            '<ul>',
            '<li ng-show="user.Type!=\'TempCustomer\'"><a href="admin">My Account</a></li>',
            '<li ng-show="user.Type!=\'TempCustomer\'">&nbsp;|&nbsp;</li>',
            '<li ng-show="user.Type!=\'TempCustomer\'"><a href="order">Orders</a></li>',
            '<li ng-show="user.Type!=\'TempCustomer\'">&nbsp;|&nbsp;</li>',
            '<li ng-if="user.Type == \'Customer\' && user.Permissions.contains(\'AdvancedReporting\')"><a href="reports">Reports</a></li>',
            '<li ng-if="user.Type == \'Customer\' && user.Permissions.contains(\'AdvancedReporting\')">&nbsp;|&nbsp;</li>',
            '<li><a href="cart">Cart&nbsp;',
            '<span ng-if="currentOrder.LineItems.length" ng-bind="cartCount" class="badge"></span>',
            '</a></li>',
            '<li>&nbsp;|&nbsp;</li>',
            
            '<li ng-show="user.Type==\'TempCustomer\'"><a class="admin" href="admin"><i class="fa fa-sign-in text-info"></i><span>{{\'Log In\' | r}}</span></a></li>',
            '<li ng-show="user.Type!=\'TempCustomer\'" class="logout"><a href="#" class="451_btn_logout" ng-click="Logout()"><i class="fa fa-sign-out text-info"></i><span class="ng-binding">Sign out</span></a></li>',    
           
            '</ul>',
            '</div>',
            '</div>',
            '</section>'
        ].join('');
    }
}

/*
 
  '<li class="logout" ng-if="user.Type ==\'Customer\'">',
            '<a href="#" class="451_btn_logout" ng-click="Logout()">',
            '<i class="fa fa-sign-out"></i>',
            '<span>{{\'Logout\' | r | xlat}}</span>',
            '</a>',
            '</li>',
                     
*/

HeaderNavigationCtrl.$inject = ['$scope','User'];
function HeaderNavigationCtrl($scope, User) {

    $scope.Logout = function(){
        User.logout();
        if ($scope.isAnon) {
            $location.path("/catalog");
            User.login(function(user) {
                $scope.user = user;
            });
        }
    };

}