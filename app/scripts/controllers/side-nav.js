'use strict';

/**
 * @ngdoc function
 * @name ortolangMarketApp.controller:SideNavCtrl
 * @description
 * # SideNavCtrl
 * Controller of the ortolangMarketApp
 */
angular.module('ortolangMarketApp')
    .controller('SideNavCtrl', [ '$scope', '$route', function ($scope, $route) {
        $scope.navElements = [
            {
                path: '/products',
                description: 'Portail',
                iconCss: 'fa fa-home fa-2x',
                active: undefined
            },
            {
                path: '/myspace',
                description: 'Mon espace',
                iconCss: 'fa fa-desktop fa-2x',
                active: undefined
            },
            {
                path: '/settings',
                description: 'Settings',
                iconCss: 'fa fa-cog fa-2x',
                active: undefined
            }
        ];

        $scope.select = function ($event, element) {
            angular.element($event.target).parent().addClass('activated').on('mouseleave', function () {
                angular.element(this).removeClass('activated').off('mouseleave');
            });
            angular.forEach($scope.navElements, function (value) {
                value.active = value === element ? 'active' : undefined;
            });
        };

        // *********************** //
        //           Init          //
        // *********************** //

        function init() {
            var regExp;
            angular.forEach($scope.navElements, function (navElement) {
                regExp = new RegExp('^' + navElement.path);
                if ($route.current.originalPath.match(regExp)) {
                    navElement.active = 'active';
                }
            });
        }

        init();

    }]);