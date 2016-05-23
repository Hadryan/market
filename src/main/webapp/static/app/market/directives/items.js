'use strict';

/**
 * @ngdoc directive
 * @name ortolangMarketApp.directive:items
 * @description
 * # items
 * Directive of the ortolangMarketApp
 */
angular.module('ortolangMarketApp')
    .directive('items', ['$location', 'SearchProvider', 'OptionFacetedFilter', 'Settings', 'Helper', function ($location, SearchProvider, OptionFacetedFilter, Settings, Helper) {
        return {
            restrict: 'A',
            scope: {
                title: '=',
                params: '=',
                search: '=',
                inline: '='
            },
            templateUrl: 'market/directives/items.html',
            link: function (scope) {

                scope.$on('$destroy', function () {
                    scope.search.clearResults();
                });

                scope.seeMore = function () {
                    if (scope.params) {
                        var searchParams = {};
                        var copyParams = angular.fromJson(scope.params);
                        if (copyParams.viewMode) {
                            searchParams.viewMode = copyParams.viewMode;
                            delete copyParams.viewMode;
                        }
                        if (copyParams.orderProp) {
                            searchParams.orderProp = copyParams.orderProp;
                            delete copyParams.orderProp;
                        }
                        if (copyParams.orderDir) {
                            searchParams.orderDir = copyParams.orderDir;
                            delete copyParams.orderDir;
                        }
                        if (copyParams.content) {
                            searchParams.content = copyParams.content;
                            delete copyParams.content;
                        }
                        if (copyParams.limit) {
                            delete copyParams.limit;
                        }
                        searchParams.filters = angular.toJson(copyParams);

                        $location.url('/market/search/corpora').search(searchParams);
                    }
                };

                function load() {
                    var param = angular.fromJson(scope.newParams);
                    scope.search.search(param).$promise.then(function (results) {
                        scope.search.pack();

                        angular.forEach(results, function (result) {
                            if (result['meta_ortolang-workspace-json'] && result['meta_ortolang-workspace-json'].wskey) {
                                var title = result['meta_ortolang-item-json'].title;
                                result.effectiveTitle = Helper.getMultilingualValue(title);

                                var publicationDate = result['meta_ortolang-item-json'].publicationDate;
                                result.publicationDate = publicationDate;
                            }
                        });

                        scope.search.endProcessing();
                    });
                }

                scope.$watch('params', function () {
                    if (scope.params !== undefined && scope.params !== scope.newParams) {
                        scope.newParams = scope.params;
                        load();
                    }
                });

                // Scope variables
                function initScopeVariables() {
                    scope.newContent = undefined;
                    scope.newParams = undefined;
                    if (!scope.search) {
                        scope.search = SearchProvider.make();
                    }
                }
                initScopeVariables();
            }
        };
    }]);
