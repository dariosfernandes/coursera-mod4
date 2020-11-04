(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'items', 'categoryName'];
function ItemsController($stateParams, items, categoryName) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
  itemsCtrl.categoryName = categoryName;
}

})();