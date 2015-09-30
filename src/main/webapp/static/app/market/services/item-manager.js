'use strict';

/**
 * @ngdoc service
 * @name ortolangMarketApp.ItemManager
 * @description
 * # ItemManager
 * Service in the ortolangMarketApp.
 */
angular.module('ortolangMarketApp')
    .factory('ItemManager', function () {

        // Constructor
        function ItemManager() {
            this.items = [];
        }

        // Methods
        ItemManager.prototype = {

            getItems: function () {
                return this.items.slice();
            },

            addItem : function (item) {
                return this.items.push(item);
            },

            getItem: function (wskey) {
                var i = 0;
                for (i; i < this.items.length; i++) {
                    if (this.items[i].wskey && this.items[i].wskey === wskey) {
                        return this.items[i];
                    }
                }
                return undefined;
            },

            exists: function (item) {
                var i = 0;
                for (i; i < this.items.length; i++) {
                    if (this.items[i].wskey && item.wskey && this.items[i].wskey === item.wskey) {
                        return true;
                    }
                }
                return false;
            },

            setItem: function (item, newItem) {
                var i = 0;
                for (i; i < this.items.length; i++) {
                    if (this.items[i] === item) {
                        this.items[i] = newItem;
                    }
                }
            },

            size: function () {
                return this.items.length;
            },

            isEmpty: function () {
                return this.items.length === 0;
            },

            clear: function () {
                this.items = [];
            }
        };

        return {
            make: function () {
                return new ItemManager();
            }
        };
    });
