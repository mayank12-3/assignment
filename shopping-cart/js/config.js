;(function() {
	"use strict";

	angular
    .module('app')
		.config(function(StorageProvider) {
  		StorageProvider.setSourceIdentifier('cart');
		});

})();