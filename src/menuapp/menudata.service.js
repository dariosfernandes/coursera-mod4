(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  var categoryShortToLong = {};
  service.getAllCategories = function () {
      var response = $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json"),
      });
      return response
          .then(function (response) {
              let categoriesList = [];
              for (const entry of response.data.entries())  {
                  categoriesList.push(
                      {
                          name: entry[1].name,
                          category_id: entry[1].short_name,
                      });
                  categoryShortToLong[entry[1].short_name] = entry[1].name;
              }
              return categoriesList;
          })
          .catch(function (error) {
              console.log(`Error: ${error}`);
          });
  }
  service.getItemsForCategory = function (shortName) {
      var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {category: shortName}
      });
      return response
          .then(function (response) {
              let itensList = [];
              for (const entry of response.data.menu_items.entries())  {
                  itensList.push(
                      {
                          name: entry[1].name,
                          short_name: entry[1].short_name,
                          description: entry[1].description
                      });

              }
              return itensList;
          })
          .catch(function (error) {
              console.log(`Error: ${error}`);
          });
  };
  service.getCategoryNameFromShortName = function (shortName) {
      return categoryShortToLong[shortName];
  };
}

})();
