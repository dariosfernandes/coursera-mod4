(function () {
'use strict';

angular
    .module('MenuApp', ['ui.router', 'Data'])
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
})();
