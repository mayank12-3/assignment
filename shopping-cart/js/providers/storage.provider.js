;(function(){
  "use strict";

  angular
    .module('app')
    .provider('Storage', function() {
      var identifier;
      return {
        setSourceIdentifier: function(id) {
          identifier = id;
        },
        $get: ['$rootScope', '$window',
          function($rootScope, $window) {
            angular.element($window).on('storage', function(event) {
              if (event.key === identifier) {
                $rootScope.$broadcast('onStorageModify');
              }
            });
            return {
              save: function(data) {
                localStorage.setItem(identifier, JSON.stringify(data));
              },
              fetch: function() {
                return JSON.parse(localStorage.getItem(identifier));
              },
              remove: function() {
                localStorage.removeItem(identifier);
              }
            };
          }
        ]
      }
    });

})();
