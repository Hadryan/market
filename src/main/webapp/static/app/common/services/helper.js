'use strict';

/**
 * @ngdoc service
 * @name ortolangMarketApp.Helper
 * @description
 * # Helper
 * Service in the ortolangMarketApp.
 */
angular.module('ortolangMarketApp')
    .service('Helper', ['$rootScope', '$translate', '$alert', '$modal', '$aside', '$window', '$q', 'ProfileResource', 'ReferentialResource', 'ortolangType',
        function ($rootScope, $translate, $alert, $modal, $aside, $window, $q, ProfileResource, ReferentialResource, ortolangType) {

            var modalScope, modal, asideMobileNav, Helper = this;

            this.profileCards = {};

            this.getCard = function (username) {
                if (username) {
                    if (this.profileCards[username] === undefined) {
                        this.profileCards[username] = null;
                        return ProfileResource.getCard({key: username}, function (data) {
                            Helper.profileCards[username] = data;
                        }).$promise;
                    } else {
                        var deferred = $q.defer();
                        deferred.resolve(Helper.profileCards[username]);
                        return deferred.promise;
                    }
                }
            };

            this.prefix = {
                workspace: 'ortolang-workspace-json.',
                metaLatestSnapshot: 'ortolang-workspace-json.latestSnapshot.',
                metaItem: 'ortolang-workspace-json.latestSnapshot.meta_ortolang-item-json.',
                metaWorkspace: 'ortolang-workspace-json.latestSnapshot.meta_ortolang-workspace-json.',
                metaRating: 'ortolang-workspace-json.latestSnapshot.meta_system-rating-json.'
            };

            this.getFieldsParam = function (fields) {
                var param = [];
                angular.forEach(fields, function (value, key) {
                    angular.forEach(value.split(','), function (property) {
                        param.push(Helper.prefix[key] + property);
                    });
                });
                return param.toString();
            };

            this.getMultilingualValue = function (multilingualProperty, language) {
                if (multilingualProperty) {
                    var i;
                    language = language || $translate.use();
                    for (i = 0; i < multilingualProperty.length; i++) {
                        if (multilingualProperty[i].lang === language) {
                            return multilingualProperty[i].value;
                        }
                    }
                    return multilingualProperty.length > 0 ? multilingualProperty[0].value : undefined;
                }
            };

            this.findObjectOfArray = function (arr, propertyName, propertyValue, defaultValue) {
                if (arr) {
                    var iObject;
                    for (iObject = 0; iObject < arr.length; iObject++) {
                        if (arr[iObject][propertyName] === propertyValue) {
                            return arr[iObject];
                        }
                    }
                }
                if (defaultValue) {
                    return defaultValue;
                }
                return null;
            };


            this.loadContributors = function (contributors) {
                var loadedContributors = [];

                if (contributors) {
                    angular.forEach(contributors, function (contributor) {
                        var loadedContributor = {};
                        if (Helper.startsWith(contributor.entity, '$')) {
                            // From Workspace preview with contributor inside the referential
                            ReferentialResource.get({name: Helper.extractNameFromReferentialId(contributor.entity)}, function (entity) {
                                loadedContributor.entity = angular.fromJson(entity.content);
                            });

                            if (contributor.roles && contributor.roles.length > 0) {
                                loadedContributor.roles = [];
                                angular.forEach(contributor.roles, function (role) {
                                    ReferentialResource.get({name: Helper.extractNameFromReferentialId(role)}, function (entity) {
                                        var contentRole = angular.fromJson(entity.content);
                                        loadedContributor.roles.push(Helper.getMultilingualValue(contentRole.labels));
                                    });
                                });
                            }

                            if (contributor.organization) {
                                ReferentialResource.get({name: Helper.extractNameFromReferentialId(contributor.organization)}, function (entity) {
                                    loadedContributor.organization = angular.fromJson(entity.content);
                                });
                            }

                            loadedContributors.push(loadedContributor);

                        } else if (angular.isDefined(contributor.entity['meta_ortolang-referential-json'])) {
                            // From Market with contributor from referential
                            loadedContributor.entity = contributor.entity['meta_ortolang-referential-json'];
                            if (angular.isDefined(contributor.organization)) {
                                loadedContributor.organization = contributor.organization['meta_ortolang-referential-json'];
                            }
                            loadedContributor.roles = [];
                            angular.forEach(contributor.roles, function (role) {
                                loadedContributor.roles.push(Helper.getMultilingualValue(role['meta_ortolang-referential-json'].labels));
                            });

                            loadedContributors.push(loadedContributor);
                        } else {
                            // From Workspace (Contributor that needs to be checked) and Market with contributor outside the referential
                            loadedContributor.entity = contributor.entity;

                            if (contributor.organization) {
                                if (Helper.startsWith(contributor.organization, '$')) {
                                    ReferentialResource.get({name: Helper.extractNameFromReferentialId(contributor.organization)}, function (entity) {
                                        loadedContributor.organization = angular.fromJson(entity.content);
                                    });
                                } else {
                                    loadedContributor.organization = contributor.organization['meta_ortolang-referential-json'];
                                }
                            }

                            if (contributor.roles && contributor.roles.length > 0) {

                                loadedContributor.roles = [];
                                angular.forEach(contributor.roles, function (role) {
                                    if (Helper.startsWith(role, '$')) {
                                        ReferentialResource.get({name: Helper.extractNameFromReferentialId(role)}, function (entity) {
                                            var contentRole = angular.fromJson(entity.content);
                                            loadedContributor.roles.push(Helper.getMultilingualValue(contentRole.labels));
                                        });
                                    } else {
                                        loadedContributor.roles.push(Helper.getMultilingualValue(role['meta_ortolang-referential-json'].labels));
                                    }
                                });
                            }
                            loadedContributors.push(loadedContributor);
                        }
                    });
                }
                return loadedContributors;
            };


            this.extractKeyFromReferentialId = function (key) {
                // Pattern : ${key}
                var exec = /^\$\{(.*)}/.exec(key);
                return exec ? exec[1] : exec;
            };

            this.createKeyFromReferentialId = function (id) {
                // Pattern : ${key}
                return '${' + id + '}';
            };

            this.createKeyFromReferentialName = function (name) {
                // Pattern : ${key}
                return '${referential:' + name + '}';
            };

            this.extractNameFromReferentialId = function (id) {
                // Pattern : ${referential:name}
                var exec = /^\$\{referential:(.*)}/.exec(id);
                return exec ? exec[1] : exec;
            };

            this.startsWith = function (actual, expected) {
                if (!angular.isString(actual)) {
                    return false;
                }
                var lowerStr = (actual + '').toLowerCase();
                return lowerStr.indexOf(expected.toLowerCase()) === 0;
            };

            this.endsWith = function (str, suffix) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            };

            this.normalizePath = function (path) {
                return path.replace(/\/\//g, '/');
            };

            this.pack = function (list) {
                var register = {};
                var results = [];
                for (var i = list.length - 1; i >= 0; i--) {

                    if (list[i].wskey) {
                        var wskey = list[i].wskey;
                        if (angular.isUndefined(register[wskey])) {
                            register[wskey] = list[i];
                            results.push(list[i]);
                        } else {
                            if (register[wskey].lastModificationDate < list[i].lastModificationDate) {
                                var index = results.indexOf(register[wskey]);
                                results.splice(index, 1, list[i]);
                                register[wskey] = list[i];
                            }
                        }
                    }
                }
                return results;
            };

            $rootScope.$on('modal.show', function (event, _modal_) {
                modal = _modal_;
            });

            this.createModalScope = function (isolate, autofocus) {
                modalScope = $rootScope.$new(isolate);
                modalScope.$on('modal.hide', function () {
                    modalScope.$destroy();
                    modal = undefined;
                });
                if (autofocus) {
                    modalScope.$on('modal.show', function () {
                        angular.element('.modal').find('[autofocus]:first').focus();
                    });
                }
                modalScope.models = {};
                return modalScope;
            };

            this.isModalOpened = function (id) {
                if (id) {
                    return angular.isDefined(modal) && modal.$options.id === id;
                }
                return angular.isDefined(modal);
            };

            this.hideModal = function () {
                if (modal && modal.hide) {
                    modal.hide();
                }
            };

            this.showUnexpectedErrorAlert = function (container, placement, type) {
                var config = {
                    placement: placement || 'top-right',
                    title: $translate.instant('UNEXPECTED_ERROR_ALERT.TITLE'),
                    content: $translate.instant('UNEXPECTED_ERROR_ALERT.CONTENT'),
                    type: type || 'danger'
                };
                if (container) {
                    config.container = container;
                }
                $alert(config);
            };

            this.showNotificationMessage = function (message, container, placement) {
                var config = {
                    id: 'notification',
                    title: message.title,
                    content: message.body,
                    show: true,
                    templateUrl: 'common/templates/notification-modal.html',
                };
                if (container) {
                    config.container = container;
                }
                if (placement) {
                    config.placement = placement;
                }
                $modal(config);
            };

            this.showErrorModal = function (error, container, placement) {
                if (this.isModalOpened('error')) {
                    var scope = this.createModalScope(true);
                    scope.error = error;
                    var config = {
                        id: 'error',
                        title: 'ERROR_MODAL_' + error.code + '.TITLE',
                        content: 'ERROR_MODAL_' + error.code + '.BODY',
                        show: true,
                        templateUrl: 'common/templates/error-modal.html',
                        scope: scope
                    };
                    if (container) {
                        config.container = container;
                    }
                    if (placement) {
                        config.placement = placement;
                    }
                    $modal(config);
                    return scope;
                }
            };

            this.hideAsideMobileNav = function () {
                if (asideMobileNav) {
                    asideMobileNav.hide();
                }
            };

            this.showAsideMobileNav = function () {
                if (asideMobileNav) {
                    asideMobileNav.show();
                } else {
                    asideMobileNav = $aside({
                        templateUrl: 'common/nav/mobile-nav.html',
                        placement: 'left',
                        animation: 'am-slide-left',
                        container: 'body'
                    });
                }
            };

            this.isMobile = function () {
                return $window.navigator.userAgent.indexOf('Mobi') !== -1;
            };

            this.isMac = function () {
                return $window.navigator.appVersion.indexOf('Mac') !== -1;
            };

            this.isUUID = function (input) {
                return /[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/.test(input);
            };

            this.isObject = function (element) {
                return element.type === ortolangType.object;
            };

            this.isLink = function (element) {
                return element.type === ortolangType.link;
            };

            this.isCollection = function (element) {
                return element.type === ortolangType.collection;
            };

            this.cleanResourceResponse = function (data) {
                if (data.$promise) {
                    delete data.$promise;
                }
                if (data.$resolved) {
                    delete data.$resolved;
                }
                return data;
            };

            return this;
        }]);
