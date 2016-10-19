;(function(){
  "use strict";

    angular
      .module('app')
      .controller('ItemListController', ['$rootScope', '$scope', 'Cart', 'DummyData',
        function($rootScope, $scope, Cart, DummyData) {
          $scope.cart = Cart.getCart();
          $scope.products = DummyData;
          $scope.addProduct = function(index) {
            Cart.addItem($scope.products[index]);
          };
          $scope.removeProduct = function(index) {
            Cart.remove(index);
          };
          $scope.clear = function() {
            console.log("hi");
            Cart.clear();
            $scope.cart = Cart.getCart();
          };
        
          $rootScope.$on('onCartUpdate', function() {
            $scope.$apply(function() {
              $scope.cart = Cart.getCart();
            });
          });
        }
      ]);
    
})();
