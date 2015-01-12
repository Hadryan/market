'use strict';

/**
 * @ngdoc service
 * @name ortolangMarketApp.PluginsResource
 * @description
 * # PluginsResource
 * Factory in the ortolangMarketApp.
 */
angular.module('ortolangMarketApp')
    .factory('ToolsResource', [ '$resource', 'Url', function ($resource, Url) {
        return $resource('', {}, {
            getToolDesc: {
                url: ':url/description',
                method: 'GET',
                isArray: false
            },
            getConfig: {
                url: Url.urlBaseTool() + ':pKey/:pKey/execution-form',
                method: 'GET',
                isArray: true
            },
            postConfig: {
                url: Url.urlBaseTool() + ':pKey/:pKey/jobs',
                method: 'POST',
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            },
            createToolJob: {
                method: 'POST',
                transformRequest: function (data) {
                    return $.param(data);
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                url: Url.urlBaseTool() + ':pKey/:pKey/jobs'
            },
            toolJobs: {
                method: 'GET',
                url: Url.urlBaseTool() + ':pKey/:pKey/jobs/:jId'
            },
            getToolResult: {
                method: 'GET',
                url: Url.urlBaseTool() + ':pKey/:pKey/jobs/:jId/result',
                isArray: true
            }
        });
    }]);
