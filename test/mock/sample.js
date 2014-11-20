'use strict';

/**
 * @ngdoc service
 * @name ortolangMarketApp.param
 * @description
 * # param
 * Value in the ortolangMarketApp.
 */
angular.module('ortolangMarketApp')
    .value('sample', function () {
        var rootCollectionKey = 'k1',
            rootCollectionWithoutMetaKey = 'k4',
            rootCollectionWithOtherMetaKey = 'k6',
            collectionKey = 'k2',
            unknowMetadataObjectKey = 'k5',
            metadataObjectKey = 'k3',
            unknowObjectKey = 'k7',
            sampleCode = 'sample code',
            sampleN3 = {'http://www.ortolang.fr/ontology/preview':'k1'},
            workspaceElement = {format: 'market-ortolang-n3'};

        return {
            rootCollectionKey : rootCollectionKey,
            rootCollectionWithoutMetaKey : rootCollectionWithoutMetaKey,
            rootCollectionWithOtherMetaKey : rootCollectionWithOtherMetaKey,
            collectionKey : collectionKey,
            unknowMetadataObjectKey : unknowMetadataObjectKey,
            metadataObjectKey : metadataObjectKey,
            unknowObjectKey : unknowObjectKey,
            sampleCode : sampleCode,
            sampleN3 : sampleN3,
            workspaceElement: workspaceElement,
            oobjectSample : {object:{root:true, metadatas: [{key: metadataObjectKey}]}, type: 'collection'},
            oobjectWithoutMetaSample : {object:{root:true, metadatas: []}},
            oobjectWithOtherMetaSample : {object:{root:true, metadatas: [{key: unknowMetadataObjectKey}]}, type: 'collection'},
            oobjectNotRootSample : {object:{root:false, metadatas: [{key: metadataObjectKey}]}},
            metadataOobjectSample : {object: {key: metadataObjectKey},type: 'metadata'},
            fileUploadMock: {"0":{"webkitRelativePath":"","lastModified":1413295331000,"lastModifiedDate":"2014-10-14T14:02:11.000Z","name":"coverage","type":"foo/bar","size":170},"length":1},
            folderUploadMock: {"0":{"webkitRelativePath":"","lastModified":1413295331000,"lastModifiedDate":"2014-10-14T14:02:11.000Z","name":"coverage","type":"","size":170},"length":1},
            list: {entries: [rootCollectionKey, collectionKey, rootCollectionWithoutMetaKey, rootCollectionWithOtherMetaKey, unknowObjectKey]}
        };
    });