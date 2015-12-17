'use strict';

/**
 * @ngdoc function
 * @name ortolangMarketApp.controller:Lexicons
 * @description
 * # Lexicons
 * Controller of the ortolangMarketApp
 */
angular.module('ortolangMarketApp')
    .controller('LexiconsCtrl', ['$scope', 'FacetedFilterManager', 'FacetedFilter', 'OptionFacetedFilter', 'QueryBuilderFactory', 'SearchResource', 'Helper', '$q', function ($scope, FacetedFilterManager, FacetedFilter, OptionFacetedFilter, QueryBuilderFactory, SearchResource, Helper, $q) {

        function addAvailableFilters() {

            $scope.typeFilter = FacetedFilter.make({
                id: 'meta_ortolang-item-json.type',
                alias: 'type',
                label: 'MARKET.RESOURCE_TYPE',
                resetLabel: 'MARKET.ALL_RESOURCE',
                options: [
                    OptionFacetedFilter.make({
                        label: 'Corpus',
                        value: 'Corpus',
                        length: 1
                    }),
                    OptionFacetedFilter.make({
                        label: 'Lexique',
                        value: 'Lexique',
                        length: 1
                    }),
                    OptionFacetedFilter.make({
                        label: 'Outil',
                        value: 'Outil',
                        length: 1
                    }),
                    OptionFacetedFilter.make({
                        label: 'Projet intégré',
                        value: 'Application',
                        length: 1
                    })
                ],
                lockOptions: true,
                lock: true
            });
            $scope.filtersManager.addAvailableFilter($scope.typeFilter);

            addAvailableFilter({
                id: 'meta_ortolang-item-json.lexiconInputType',
                alias: 'lexiconInputType',
                label: 'MARKET.FACET.LEXICON_INPUT_TYPE',
                resetLabel: 'MARKET.FACET.ALL_LEXICON_INPUT_TYPE',
                priority: 'high',
                view: 'dropdown-faceted-filter'
            }, 'LexiconInputType');

            addAvailableFilter({
                id: 'meta_ortolang-item-json.lexiconDescriptionTypes',
                alias: 'lexiconDescriptionTypes',
                type: 'array',
                label: 'MARKET.FACET.LEXICON_DESCRIPTION_TYPE',
                resetLabel: 'MARKET.FACET.ALL_LEXICON_DESCRIPTION_TYPE',
                priority: 'high',
                view: 'dropdown-faceted-filter'
            }, 'LexiconDescriptionType');

            addAvailableFilter({
                id: 'meta_ortolang-item-json.statusOfUse',
                alias: 'statusOfUse',
                label: 'MARKET.FACET.STATUS_OF_USE',
                resetLabel: 'MARKET.FACET.ALL_STATUS_OF_USE',
                priority: 'high',
                view: 'dropdown-faceted-filter'
            }, 'StatusOfUse');

            addAvailableFilter({
                id: 'meta_ortolang-item-json.lexiconInputLanguages',
                alias: 'lexiconInputLanguages',
                type: 'array',
                label: 'MARKET.FACET.LEXICON_INPUT_LANGUAGE',
                resetLabel: 'MARKET.FACET.ALL_LANG'
            }, 'Language', 1);

            addAvailableFilter({
                id: 'meta_ortolang-item-json.lexiconDescriptionLanguages',
                alias: 'lexiconDescriptionLanguages',
                type: 'array',
                label: 'MARKET.FACET.LEXICON_DESCRIPTION_LANGUAGE',
                resetLabel: 'MARKET.FACET.ALL_LANG'
            }, 'Language', 1);

            addAvailableFilter({
                id: 'meta_ortolang-item-json.lexiconFormats',
                alias: 'lexiconFormats',
                type: 'array',
                label: 'MARKET.FACET.LEXICON_FORMAT',
                resetLabel: 'MARKET.FACET.ALL_LEXICON_FORMAT'
            }, 'LexiconFormat');

            addAvailableFilter({
                id: 'meta_ortolang-item-json.lexiconLanguageType',
                alias: 'lexiconLanguageType',
                label: 'MARKET.FACET.LEXICON_LANGUAGE_TYPE',
                resetLabel: 'MARKET.FACET.ALL_LEXICON_LANGUAGE_TYPE'
            }, 'LexiconLanguageType');
        }

        function addAvailableFilter(filterConfig, refType, rank) {
            var filter = FacetedFilter.make(filterConfig);
            listReferentialEntities(refType, rank).then(function (entities) {
                angular.forEach(entities, function(entity) {
                    filter.putOption(OptionFacetedFilter.make({
                        label: entity.label,
                        value: entity.id,
                        length: 1
                    }));
                });
            });
            $scope.filtersManager.addAvailableFilter(filter);
        }

        function listReferentialEntities(entityType, rank) {
            var deferred = $q.defer();

            var queryBuilder = QueryBuilderFactory.make({
                projection: '*',
                source: 'ReferentielEntity'
            });

            queryBuilder.addProjection('meta_ortolang-referentiel-json.labels', 'labels');

            queryBuilder.equals('meta_ortolang-referentiel-json.type', entityType);
            if(rank) {
                queryBuilder.addProjection('meta_ortolang-referentiel-json.rank', 'rank');
                queryBuilder.and().equals('meta_ortolang-referentiel-json.rank', rank);
            }

            var query = queryBuilder.toString();
            var allReferentialEntities = [];
            SearchResource.json({query: query}, function (jsonResults) {
                angular.forEach(jsonResults, function (result) {
                    var term = angular.fromJson(result);

                    if(term.labels) {
                        var entity = {id: term['@rid'], label: Helper.getMultilingualValue(term.labels)};
                        if(term.rank) {
                            entity.rank = term.rank;
                        }
                        allReferentialEntities.push(entity);
                    }
                });
                deferred.resolve(allReferentialEntities);
            }, function () {
                deferred.reject();
            });

            return deferred.promise;
        }

        function addCustomProjections() {
            $scope.filtersManager.addCustomProjection('meta_ortolang-item-json.lexiconInputType', 'lexiconInputType');
            $scope.filtersManager.addCustomProjection('meta_ortolang-item-json.lexiconDescriptionTypes', 'lexiconDescriptionTypes');
            $scope.filtersManager.addCustomProjection('meta_ortolang-item-json.lexiconInputLanguages', 'lexiconInputLanguages');
            $scope.filtersManager.addCustomProjection('meta_ortolang-item-json.lexiconDescriptionLanguages', 'lexiconDescriptionLanguages');
            $scope.filtersManager.addCustomProjection('meta_ortolang-item-json.lexiconFormats', 'lexiconFormats');
            $scope.filtersManager.addCustomProjection('meta_ortolang-item-json.lexiconLanguageType', 'lexiconLanguageType');
        }

        function init() {
            $scope.filtersManager = FacetedFilterManager.make();
            addAvailableFilters();
            addCustomProjections();
        }

        init();

    }]);
