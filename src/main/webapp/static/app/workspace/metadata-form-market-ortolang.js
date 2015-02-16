'use strict';

/**
 * @ngdoc function
 * @name ortolangMarketApp.controller:MetadataFormMarketOrtolangCtrl
 * @description
 * # MetadataFormMarketOrtolangCtrl
 * Controller of the ortolangMarketApp
 */
angular.module('ortolangMarketApp')
    .controller('MetadataFormMarketOrtolangCtrl', ['$scope', '$rootScope', '$modal', 'N3Serializer', 'ObjectResource', 'WorkspaceElementResource', function ($scope, $rootScope, $modal, N3Serializer, ObjectResource, WorkspaceElementResource) {
        $scope.selectTab = function(tabName) {
            $scope.selectedTab = tabName;
        };

        $scope.submitMetadata = function (form, md) {
            // $scope.$broadcast('show-errors-check-validity');

            if($scope.onlineTool===false) {
                delete md['http://www.ortolang.fr/ontology/toolHelp'];
                delete md['http://www.ortolang.fr/ontology/toolId'];
                delete md['http://www.ortolang.fr/ontology/toolUrl'];
            }

            if (form.$invalid) {
                console.debug('not ready');
                return;
            }

            var content = N3Serializer.toN3(md),
                contentType = 'text/n3';

            $rootScope.$broadcast('metadata-editor-create', content, contentType);
        };

        /*************
         * Listeners
         *************/
        var deregisterFolderSelectModal = $rootScope.$on('browserSelectedElements-folderSelectModal', function ($event, elements) {
            console.debug('metadata-form-market-ortolang caught event "browserSelectedElements-folderSelectModal" (selected elements: %o)', elements);
            if (!$scope.md) {
                $scope.md = {};
            }
            $scope.md['http://www.ortolang.fr/ontology/preview'] = elements[0].path;
            $scope.preview = elements[0];
            $scope.folderSelectModal.hide();
        });

        var deregisterFileImageSelectModal = $rootScope.$on('browserSelectedElements-fileImageSelectModal', function ($event, elements) {
            console.debug('metadata-form-market-ortolang caught event "browserSelectedElements-fileImageSelectModal" (selected elements: %o)', elements);
            if (!$scope.md) {
                $scope.md = {};
            }
            $scope.md['http://www.ortolang.fr/ontology/image'] = elements[0].path;
            $scope.image = elements[0];
            $scope.fileImageSelectModal.hide();
        });

        var deregisterFileLicenceSelectModal = $rootScope.$on('browserSelectedElements-fileLicenceSelectModal', function ($event, elements) {
            console.debug('metadata-form-market-ortolang caught event "browserSelectedElements-fileLicenceSelectModal" (selected elements: %o)', elements);
            if (!$scope.md) {
                $scope.md = {};
            }
            $scope.md['http://www.ortolang.fr/ontology/licence'] = elements[0].path;
            $scope.licence = elements[0];
            $scope.fileLicenceSelectModal.hide();
        });


        var deregistration = $rootScope.$on('metadata-form-submit', function () {
           $scope.submitMetadata($scope.metadataMarketform, $scope.md);
        });

        $scope.$on('$destroy', function () {
            deregistration();
            deregisterFolderSelectModal();
            deregisterFileImageSelectModal();
            deregisterFileLicenceSelectModal();
        });


        // *********************** //
        //          Resize         //
        // *********************** //

        function resizeAsideBody () {
            var topOffset = 53,
            bottomOffset = 51,
            toolbar = 55 + 20,
            blockquote = 70 + 20,
            hr = 1 + 20,
            height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        height = height - topOffset - bottomOffset - toolbar - blockquote - hr;
        if (height < 1) {
            height = 1;
        }
        if (height > topOffset) {
                $('#metadata-form-panels').css('height', height + 'px');
            }
        }


        function init() {
            $scope.tabs = [
                {id:'info', label:'Renseignements'},
                {id: 'rights', label: 'Droits'},
                {id:'contributor', label: 'Contribution'},
                {id:'application', label: 'Application'},
                {id:'corpora', label: 'Corpus'},
                {id:'annotation', label: 'Enrichissement'},
                {id:'tool', label: 'Outil'}
            ];
            $scope.selectedTab = 'info';

            $scope.sparqlCategories = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX otl: <http://www.ortolang.fr/2014/09/market#> SELECT DISTINCT ?label WHERE { ?class rdf:type rdfs:Class ; rdfs:subClassOf <http://www.ortolang.fr/2014/09/market#Product> ; rdfs:label ?label . FILTER langMatches( lang(?label), "fr" ) }';
            $scope.sparqlConditionsOfUse = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX otl: <http://www.ortolang.fr/2014/09/market#> SELECT DISTINCT ?label WHERE { ?class rdf:type rdfs:Class ; rdfs:subClassOf <http://www.ortolang.fr/2014/09/market#ConditionsOfUse> ; rdfs:label ?label . FILTER langMatches( lang(?label), "fr" ) }';

            $scope.sparqlSpartial = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?geographicRegion ?label WHERE { ?geographicRegion rdf:type <lvont:GeographicRegion> ; rdfs:label ?label .FILTER (langMatches( lang(?label), "fr") && regex(?label, "^$searchText", "i")) }';
            $scope.sparqlLanguage = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?label WHERE { ?lang rdf:type <lvont:Language> ; rdfs:label ?label .FILTER (langMatches( lang(?label), "fr") && regex(?label, "^$searchText", "i")) }';

            var folderSelectModalScope = $rootScope.$new(true);
            folderSelectModalScope.acceptMultiple = false;
            folderSelectModalScope.forceMimeTypes = 'ortolang/collection';
            folderSelectModalScope.forceWorkspace = $scope.wskey;
            folderSelectModalScope.forceHead = true;
            folderSelectModalScope.fileSelectId = 'folderSelectModal';
            $scope.folderSelectModal = $modal({scope: folderSelectModalScope, title: 'Folder select', template: 'common/directives/file-select-modal-template.html', show: false});

            var fileImageSelectModalScope = $rootScope.$new(true);
            fileImageSelectModalScope.acceptMultiple = false;
            fileImageSelectModalScope.forceMimeTypes = 'image';
            fileImageSelectModalScope.forceWorkspace = $scope.wskey;
            fileImageSelectModalScope.forceHead = true;
            fileImageSelectModalScope.fileSelectId = 'fileImageSelectModal';
            $scope.fileImageSelectModal = $modal({scope: fileImageSelectModalScope, title: 'File select', template: 'common/directives/file-select-modal-template.html', show: false});

            var fileLicenceSelectModalScope = $rootScope.$new(true);
            fileLicenceSelectModalScope.acceptMultiple = false;
            fileLicenceSelectModalScope.forceMimeTypes = 'text';
            fileLicenceSelectModalScope.forceWorkspace = $scope.wskey;
            fileLicenceSelectModalScope.forceHead = true;
            fileLicenceSelectModalScope.fileSelectId = 'fileLicenceSelectModal';
            $scope.fileLicenceSelectModal = $modal({scope: fileLicenceSelectModalScope, title: 'File select', template: 'common/directives/file-select-modal-template.html', show: false});

            if ($scope.selectedMetadataContent !== undefined) {
                var mdFromN3 = N3Serializer.fromN3($scope.selectedMetadataContent);
                mdFromN3.then(function (data) {
                    $scope.md = angular.copy(data);
                    WorkspaceElementResource.get({path: $scope.md['http://www.ortolang.fr/ontology/preview'], wskey: $scope.wskey, root: $scope.root}).$promise.then(function (data) {
                        $scope.preview = data;
                    });
                    WorkspaceElementResource.get({path: $scope.md['http://www.ortolang.fr/ontology/image'], wskey: $scope.wskey, root: $scope.root}).$promise.then(function (data) {
                        $scope.image = data;
                    });
                    WorkspaceElementResource.get({path: $scope.md['http://www.ortolang.fr/ontology/licence'], wskey: $scope.wskey, root: $scope.root}).$promise.then(function (data) {
                        $scope.licence = data;
                    });
                });
            }
        }

        init();
        resizeAsideBody();
    }]);
