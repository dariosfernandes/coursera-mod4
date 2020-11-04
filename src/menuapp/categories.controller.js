(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// Version with resolving to 1 item based on $stateParams in route config
CategoriesController.$inject = ['$stateParams', 'categories'];
function CategoriesController($stateParams, categories) {
  var categoriesList = this;
  categoriesList.categories = categories;
}

})();